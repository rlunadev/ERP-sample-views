<?php

class departamento extends CI_Model {
	  // table name
  private $tbl_departamento= 'tbl_departamento';

  function departamento(){
    //parent::Model();
    parent::__construct();
  }

  // get departamento with paging
  function getAll(){
    
    return $this->db->get($this->tbl_departamento);
  }
  // add new departamento
  function save($departamento){
    $this->db->insert($this->tbl_departamento, $departamento);
    return (array)$this->get_by_id($this->db->insert_id())->row();
  }
  // update departamento by id
  function modifica($id_departamento, $departamento){
    $this->db->where('id_departamento', $id_departamento);
    $this->db->update($this->tbl_departamento, $departamento);
    return $this->get_by_id($id_departamento);
  }
  // delete departamento by id
  function delete($id){
    $this->db->where('id_departamento', $id);
    $this->db->delete($this->tbl_departamento);
  }
  function get_by_id($id_departamento){
    $this->db->where('id_departamento', $id_departamento);
    return $this->db->get($this->tbl_departamento);
  }
}