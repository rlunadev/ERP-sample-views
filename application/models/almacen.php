<?php

class almacen extends CI_Model {
	  // table name
  private $tbl_almacen= 'tbl_almacen';

  function almacen(){
    //parent::Model();
    parent::__construct();
  }

  // get almacen with paging
  function getAll(){
    
    return $this->db->get($this->tbl_almacen);
  }
  // add new almacen
  function save($almacen){
    $this->db->insert($this->tbl_almacen, $almacen);
    return (array)$this->get_by_id($this->db->insert_id())->row();
  }
  // update almacen by id
  function modifica($id_almacen, $almacen){
    $this->db->where('id_almacen', $id_almacen);
    $this->db->update($this->tbl_almacen, $almacen);
    return $this->get_by_id($id_almacen);
  }
  // delete almacen by id
  function delete($id){
    $this->db->where('id_almacen', $id);
    $this->db->delete($this->tbl_almacen);
  }
  function get_by_id($id_almacen){
    $this->db->where('id_almacen', $id_almacen);
    return $this->db->get($this->tbl_almacen);
  }
}