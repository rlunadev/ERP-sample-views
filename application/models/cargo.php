<?php

class cargo extends CI_Model {
	  // table name
  private $tbl_cargo= 'tbl_cargo';

  function cargo(){
    //parent::Model();
    parent::__construct();
  }

  // get cargo with paging
  function getAll(){
    
    return $this->db->get($this->tbl_cargo);
  }
  // add new cargo
  function save($cargo){
    $this->db->insert($this->tbl_cargo, $cargo);
    return (array)$this->get_by_id($this->db->insert_id())->row();
  }
  // update cargo by id
  function modifica($id_cargo, $cargo){
    $this->db->where('id_cargo', $id_cargo);
    $this->db->update($this->tbl_cargo, $cargo);
    return $this->get_by_id($id_cargo);
  }
  // delete cargo by id
  function delete($id){
    $this->db->where('id_cargo', $id);
    $this->db->delete($this->tbl_cargo);
  }
  function get_by_id($id_cargo){
    $this->db->where('id_cargo', $id_cargo);
    return $this->db->get($this->tbl_cargo);
  }
}