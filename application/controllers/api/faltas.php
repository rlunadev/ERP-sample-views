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

class faltas extends REST_Controller
{
	function __construct()
    {
        // Construct our parent class
        parent::__construct();
        $this->load->model('falta','',TRUE);
    }

    function falta_get()
    {
        $falta = $this->falta->getAll()->result();
        if($falta)
        {
            $this->response($falta, 200);
        }
        else
        {
            $this->response(array('error' => 'no se encontro el falta'), 404);
        }
    }

    function falta_put()
  {
    try 
    {
       $id_falta=$this->get('id_falta');
       $input_values = $this->put();
       $item = $this->falta->modifica($id_falta, $input_values);
       $this->response($item, 200);
       //$this->response(array('id'=>$id_falta), 200);
    }
    catch (Exception $e) 
    {
     $this->response(array("error" => $e->getMessage()), 404);
    }
  }
    function falta_post()
    {
        $input=(array)json_decode(file_get_contents("php://input"));
        $product=$this->falta->save($input);
        $this->response($product, 200);
    }

    function falta_delete()
    {
        $id = $this->get('id_falta');
        $this->falta->delete($id);
        $this->response(array('param'=>$id), 200);
    }
	function send_post()
	{
	var_dump($this->request->body);
	}	
}
