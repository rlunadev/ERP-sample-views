<?php

class descuento extends CI_Model {
	  // table name
  private $tbl_descuento= 'tbl_descuento';

  function descuento(){
    //parent::Model();
    parent::__construct();
  }

  // get descuento with paging
  function getAll(){
    
    return $this->db->get($this->tbl_descuento);
  }
  // add new descuento
  function save($descuento){
    $this->db->insert($this->tbl_descuento, $descuento);
    return (array)$this->get_by_id($this->db->insert_id())->row();
  }
  // update descuento by id
  function modifica($id_descuento, $descuento){
    $this->db->where('id_descuento', $id_descuento);
    $this->db->update($this->tbl_descuento, $descuento);
    return $this->get_by_id($id_descuento);
  }
  // delete descuento by id
  function delete($id){
    $this->db->where('id_descuento', $id);
    $this->db->delete($this->tbl_descuento);
  }
  function get_by_id($id_descuento){
    $this->db->where('id_descuento', $id_descuento);
    return $this->db->get($this->tbl_descuento);
  }
}