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

class vacacions extends REST_Controller
{
	function __construct()
    {
        // Construct our parent class
        parent::__construct();
        $this->load->model('vacacion','',TRUE);
    }

    function vacacion_get()
    {
        $vacacion = $this->vacacion->getAll()->result();
        if($vacacion)
        {
            $this->response($vacacion, 200);
        }
        else
        {
            $this->response(array('error' => 'no se encontro el vacacion'), 404);
        }
    }

    function vacacion_put()
  {
    try 
    {
       $id_vacacion=$this->get('id_vacacion');
       $input_values = $this->put();
       $item = $this->vacacion->modifica($id_vacacion, $input_values);
       $this->response($item, 200);
       //$this->response(array('id'=>$id_vacacion), 200);
    }
    catch (Exception $e) 
    {
     $this->response(array("error" => $e->getMessage()), 404);
    }
  }
    function vacacion_post()
    {
        $input=(array)json_decode(file_get_contents("php://input"));
        $product=$this->vacacion->save($input);
        $this->response($product, 200);
    }

    function vacacion_delete()
    {
        $id = $this->get('id_vacacion');
        $this->vacacion->delete($id);
        $this->response(array('param'=>$id), 200);
    }
	function send_post()
	{
	var_dump($this->request->body);
	}	
}
