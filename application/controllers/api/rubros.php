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

class rubros extends REST_Controller
{
	function __construct()
    {
        // Construct our parent class
        parent::__construct();
        $this->load->model('rubro','',TRUE);
    }

    function rubro_get()
    {
        $rubro = $this->rubro->getAll()->result();
        if($rubro)
        {
            $this->response($rubro, 200);
        }
        else
        {
            $this->response(array('error' => 'no se encontro el rubro'), 404);
        }
    }

    function rubro_put()
  {
    try 
    {
       $id_rubro=$this->get('id_rubro');
       $input_values = $this->put();
       $item = $this->rubro->modifica($id_rubro, $input_values);
       $this->response($item, 200);
       //$this->response(array('id'=>$id_rubro), 200);
    }
    catch (Exception $e) 
    {
     $this->response(array("error" => $e->getMessage()), 404);
    }
  }
    function rubro_post()
    {
        $input=(array)json_decode(file_get_contents("php://input"));
        $product=$this->rubro->save($input);
        $this->response($product, 200);
    }

    function rubro_delete()
    {
        $id = $this->get('id_rubro');
        $this->rubro->delete($id);
        $this->response(array('param'=>$id), 200);
    }
	function send_post()
	{
	var_dump($this->request->body);
	}	
}
