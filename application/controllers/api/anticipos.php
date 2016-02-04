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

class anticipos extends REST_Controller
{
	function __construct()
    {
        // Construct our parent class
        parent::__construct();
        $this->load->model('anticipo','',TRUE);
    }

    function anticipo_get()
    {
        $anticipo = $this->anticipo->getAll()->result();
        if($anticipo)
        {
            $this->response($anticipo, 200);
        }
        else
        {
            $this->response(array('error' => 'no se encontro el anticipo'), 404);
        }
    }

    function anticipo_put()
  {
    try 
    {
       $id_anticipo=$this->get('id_anticipo');
       $input_values = $this->put();
       $item = $this->anticipo->modifica($id_anticipo, $input_values);
       $this->response($item, 200);
       //$this->response(array('id'=>$id_anticipo), 200);
    }
    catch (Exception $e) 
    {
     $this->response(array("error" => $e->getMessage()), 404);
    }
  }
    function anticipo_post()
    {
        $input=(array)json_decode(file_get_contents("php://input"));
        $product=$this->anticipo->save($input);
        $this->response($product, 200);
    }

    function anticipo_delete()
    {
        $id = $this->get('id_anticipo');
        $this->anticipo->delete($id);
        $this->response(array('param'=>$id), 200);
    }
	function send_post()
	{
	var_dump($this->request->body);
	}	
}
