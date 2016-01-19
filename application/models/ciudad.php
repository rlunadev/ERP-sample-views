<?php

class ciudad extends CI_Model {
	  // table name
  private $tbl_ciudad= 'tbl_ciudad';

  function ciudad(){
    //parent::Model();
    parent::__construct();
  }

  // get ciudad with paging
  function getAll(){
    
    return $this->db->get($this->tbl_ciudad);
  }
  // add new ciudad
  function save($ciudad){
    $this->db->insert($this->tbl_ciudad, $ciudad);
    return (array)$this->get_by_id($this->db->insert_id())->row();
  }
  // update ciudad by id
  function modifica($id_ciudad, $ciudad){
    $this->db->where('id_ciudad', $id_ciudad);
    $this->db->update($this->tbl_ciudad, $ciudad);
    return $this->get_by_id($id_ciudad);
  }
  // delete ciudad by id
  function delete($id){
    $this->db->where('id_ciudad', $id);
    $this->db->delete($this->tbl_ciudad);
  }
  function get_by_id($id_ciudad){
    $this->db->where('id_ciudad', $id_ciudad);
    return $this->db->get($this->tbl_ciudad);
  }
}