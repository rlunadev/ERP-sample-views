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

class usuarios extends REST_Controller
{
	function __construct()
    {
        // Construct our parent class
        parent::__construct();
        $this->load->model('usuario','',TRUE);
    }

    function usuario_get()
    {
        $usuario = $this->usuario->getAll()->result();
        if($usuario)
        {
            $this->response($usuario, 200);
        }
        else
        {
            $this->response(array('error' => 'no se encontro el usuario'), 404);
        }
    }

    function usuario_put()
  {
    try 
    {
       $id_usuario=$this->get('id_usuario');
       $input_values = $this->put();
       $item = $this->usuario->modifica($id_usuario, $input_values);
       $this->response($item, 200);
       //$this->response(array('id'=>$id_usuario), 200);
    }
    catch (Exception $e) 
    {
     $this->response(array("error" => $e->getMessage()), 404);
    }
  }
    function usuario_post()
    {
        $input=(array)json_decode(file_get_contents("php://input"));
        $product=$this->usuario->save($input);
        $this->response($product, 200);
    }

    function usuario_delete()
    {
        $id = $this->get('id_usuario');
        $this->usuario->delete($id);
        $this->response(array('param'=>$id), 200);
    }
	function send_post()
	{
	var_dump($this->request->body);
	}	
}
