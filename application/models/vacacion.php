<?php

class vacacion extends CI_Model {
	  // table name
  private $tbl_vacacion= 'tbl_vacacion';

  function vacacion(){
    //parent::Model();
    parent::__construct();
  }

  // get vacacion with paging
  function getAll(){
    
    return $this->db->get($this->tbl_vacacion);
  }
  // add new vacacion
  function save($vacacion){
    $this->db->insert($this->tbl_vacacion, $vacacion);
    return (array)$this->get_by_id($this->db->insert_id())->row();
  }
  // update vacacion by id
  function modifica($id_vacacion, $vacacion){
    $this->db->where('id_vacacion', $id_vacacion);
    $this->db->update($this->tbl_vacacion, $vacacion);
    return $this->get_by_id($id_vacacion);
  }
  // delete vacacion by id
  function delete($id){
    $this->db->where('id_vacacion', $id);
    $this->db->delete($this->tbl_vacacion);
  }
  function get_by_id($id_vacacion){
    $this->db->where('id_vacacion', $id_vacacion);
    return $this->db->get($this->tbl_vacacion);
  }
}