<?php defined('BASEPATH') OR exit('No direct script access allowed');

/**
 * Example
 *
 * This is an example of a few basic product interaction methods you could use
 * all done with a hardcoded array.
 *
 * @package		CodeIgniter
 * @subpackage	Rest Server
 * @category	Controller
 * @author		Phil Sturgeon
 * @link		http://philsturgeon.co.uk/code/
*/

// This can be removed if you use __autoload() in config.php OR use Modular Extensions
require APPPATH.'/libraries/REST_Controller.php';

class liquidacions extends REST_Controller
{
	function __construct()
    {
        // Construct our parent class
        parent::__construct();
        $this->load->model('liquidacion','',TRUE);
    }

    function liquidacion_get()
    {
        $liquidacion = $this->liquidacion->getAll()->result();
        if($liquidacion)
        {
            $this->response($liquidacion, 200);
        }
        else
        {
            $this->response(array('error' => 'no se encontro el liquidacion'), 404);
        }
    }

    function liquidacion_put()
  {
    try 
    {
       $id_liquidacion=$this->get('id_liquidacion');
       $input_values = $this->put();
       $item = $this->liquidacion->modifica($id_liquidacion, $input_values);
       $this->response($item, 200);
       //$this->response(array('id'=>$id_liquidacion), 200);
    }
    catch (Exception $e) 
    {
     $this->response(array("error" => $e->getMessage()), 404);
    }
  }
    function liquidacion_post()
    {
        $input=(array)json_decode(file_get_contents("php://input"));
        $product=$this->liquidacion->save($input);
        $this->response($product, 200);
    }

    function liquidacion_delete()
    {
        $id = $this->get('id_liquidacion');
        $this->liquidacion->delete($id);
        $this->response(array('param'=>$id), 200);
    }
	function send_post()
	{
	var_dump($this->request->body);
	}	
}
