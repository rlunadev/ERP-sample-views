<?php

class trabajador extends CI_Model {
	  // table name
  private $tbl_trabajador= 'tbl_trabajador';

  function trabajador(){
    //parent::Model();
    parent::__construct();
  }

  // get trabajador with paging
  function getAll(){
    
    return $this->db->get($this->tbl_trabajador);
  }
  // add new trabajador
  function save($trabajador){
    $this->db->insert($this->tbl_trabajador, $trabajador);
    return (array)$this->get_by_id($this->db->insert_id())->row();
  }
  // update trabajador by id
  function modifica($id_trabajador, $trabajador){
    $this->db->where('id_trabajador', $id_trabajador);
    $this->db->update($this->tbl_trabajador, $trabajador);
    return $this->get_by_id($id_trabajador);
  }
  // delete trabajador by id
  function delete($id){
    $this->db->where('id_trabajador', $id);
    $this->db->delete($this->tbl_trabajador);
  }
  function get_by_id($id_trabajador){
    $this->db->where('id_trabajador', $id_trabajador);
    return $this->db->get($this->tbl_trabajador);
  }
}