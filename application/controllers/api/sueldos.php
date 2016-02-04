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

class sueldos extends REST_Controller
{
	function __construct()
    {
        // Construct our parent class
        parent::__construct();
        $this->load->model('sueldo','',TRUE);
    }

    function sueldo_get()
    {
        $sueldo = $this->sueldo->getAll()->result();
        if($sueldo)
        {
            $this->response($sueldo, 200);
        }
        else
        {
            $this->response(array('error' => 'no se encontro el sueldo'), 404);
        }
    }

    function sueldo_put()
  {
    try 
    {
       $id_sueldo=$this->get('id_sueldo');
       $input_values = $this->put();
       $item = $this->sueldo->modifica($id_sueldo, $input_values);
       $this->response($item, 200);
       //$this->response(array('id'=>$id_sueldo), 200);
    }
    catch (Exception $e) 
    {
     $this->response(array("error" => $e->getMessage()), 404);
    }
  }
    function sueldo_post()
    {
        $input=(array)json_decode(file_get_contents("php://input"));
        $product=$this->sueldo->save($input);
        $this->response($product, 200);
    }

    function sueldo_delete()
    {
        $id = $this->get('id_sueldo');
        $this->sueldo->delete($id);
        $this->response(array('param'=>$id), 200);
    }
	function send_post()
	{
	var_dump($this->request->body);
	}	
}
