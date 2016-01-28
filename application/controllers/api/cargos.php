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

class cargos extends REST_Controller
{
	function __construct()
    {
        // Construct our parent class
        parent::__construct();
        $this->load->model('cargo','',TRUE);
    }

    function cargo_get()
    {
        $cargo = $this->cargo->getAll()->result();
        if($cargo)
        {
            $this->response($cargo, 200);
        }
        else
        {
            $this->response(array('error' => 'no se encontro el cargo'), 404);
        }
    }

    function cargo_put()
  {
    try 
    {
       $id_cargo=$this->get('id_cargo');
       $input_values = $this->put();
       $item = $this->cargo->modifica($id_cargo, $input_values);
       $this->response($item, 200);
       //$this->response(array('id'=>$id_cargo), 200);
    }
    catch (Exception $e) 
    {
     $this->response(array("error" => $e->getMessage()), 404);
    }
  }
    function cargo_post()
    {
        $input=(array)json_decode(file_get_contents("php://input"));
        $product=$this->cargo->save($input);
        $this->response($product, 200);
    }

    function cargo_delete()
    {
        $id = $this->get('id_cargo');
        $this->cargo->delete($id);
        $this->response(array('param'=>$id), 200);
    }
	function send_post()
	{
	var_dump($this->request->body);
	}	
}
