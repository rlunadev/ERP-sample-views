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

class parametros_rrhhs extends REST_Controller
{
	function __construct()
    {
        // Construct our parent class
        parent::__construct();
        $this->load->model('parametros_rrhh','',TRUE);
    }

    function parametros_rrhh_get()
    {
        $parametros_rrhh = $this->parametros_rrhh->getAll()->result();
        if($parametros_rrhh)
        {
            $this->response($parametros_rrhh, 200);
        }
        else
        {
            $this->response(array('error' => 'no se encontro el parametros_rrhh'), 404);
        }
    }

    function parametros_rrhh_put()
  {
    try 
    {
       $id_parametros_rrhh=$this->get('id_parametros_rrhh');
       $input_values = $this->put();
       $item = $this->parametros_rrhh->modifica($id_parametros_rrhh, $input_values);
       $this->response($item, 200);
       //$this->response(array('id'=>$id_parametros_rrhh), 200);
    }
    catch (Exception $e) 
    {
     $this->response(array("error" => $e->getMessage()), 404);
    }
  }
    function parametros_rrhh_post()
    {
        $input=(array)json_decode(file_get_contents("php://input"));
        $product=$this->parametros_rrhh->save($input);
        $this->response($product, 200);
    }

    function parametros_rrhh_delete()
    {
        $id = $this->get('id_parametros_rrhh');
        $this->parametros_rrhh->delete($id);
        $this->response(array('param'=>$id), 200);
    }
	function send_post()
	{
	var_dump($this->request->body);
	}	
}
