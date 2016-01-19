<?php

class sucursal extends CI_Model {
	  // table name
  private $tbl_sucursal= 'tbl_sucursal';

  function sucursal(){
    //parent::Model();
    parent::__construct();
  }

  // get sucursal with paging
  function getAll(){
    
    return $this->db->get($this->tbl_sucursal);
  }
  // add new sucursal
  function save($sucursal){
    $this->db->insert($this->tbl_sucursal, $sucursal);
    return (array)$this->get_by_id($this->db->insert_id())->row();
  }
  // update sucursal by id
  function modifica($id_sucursal, $sucursal){
    $this->db->where('id_sucursal', $id_sucursal);
    $this->db->update($this->tbl_sucursal, $sucursal);
    return $this->get_by_id($id_sucursal);
  }
  // delete sucursal by id
  function delete($id){
    $this->db->where('id_sucursal', $id);
    $this->db->delete($this->tbl_sucursal);
  }
  function get_by_id($id_sucursal){
    $this->db->where('id_sucursal', $id_sucursal);
    return $this->db->get($this->tbl_sucursal);
  }
}