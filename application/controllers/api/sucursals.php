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

class sucursals extends REST_Controller
{
	function __construct()
    {
        // Construct our parent class
        parent::__construct();
        $this->load->model('sucursal','',TRUE);
    }

    function sucursal_get()
    {
        $sucursal = $this->sucursal->getAll()->result();
        if($sucursal)
        {
            $this->response($sucursal, 200);
        }
        else
        {
            $this->response(array('error' => 'no se encontro el sucursal'), 404);
        }
    }

    function sucursal_put()
  {
    try 
    {
       $id_sucursal=$this->get('id_sucursal');
       $input_values = $this->put();
       $item = $this->sucursal->modifica($id_sucursal, $input_values);
       $this->response($item, 200);
       //$this->response(array('id'=>$id_sucursal), 200);
    }
    catch (Exception $e) 
    {
     $this->response(array("error" => $e->getMessage()), 404);
    }
  }
    function sucursal_post()
    {
        $input=(array)json_decode(file_get_contents("php://input"));
        $product=$this->sucursal->save($input);
        $this->response($product, 200);
    }

    function sucursal_delete()
    {
        $id = $this->get('id_sucursal');
        $this->sucursal->delete($id);
        $this->response(array('param'=>$id), 200);
    }
	function send_post()
	{
	var_dump($this->request->body);
	}	
}
