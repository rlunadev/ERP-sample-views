<?php

class sueldo extends CI_Model {
	  // table name
  private $tbl_sueldo= 'tbl_sueldo';

  function sueldo(){
    //parent::Model();
    parent::__construct();
  }

  // get sueldo with paging
  function getAll(){
    
    return $this->db->get($this->tbl_sueldo);
  }
  // add new sueldo
  function save($sueldo){
    $this->db->insert($this->tbl_sueldo, $sueldo);
    return (array)$this->get_by_id($this->db->insert_id())->row();
  }
  // update sueldo by id
  function modifica($id_sueldo, $sueldo){
    $this->db->where('id_sueldo', $id_sueldo);
    $this->db->update($this->tbl_sueldo, $sueldo);
    return $this->get_by_id($id_sueldo);
  }
  // delete sueldo by id
  function delete($id){
    $this->db->where('id_sueldo', $id);
    $this->db->delete($this->tbl_sueldo);
  }
  function get_by_id($id_sueldo){
    $this->db->where('id_sueldo', $id_sueldo);
    return $this->db->get($this->tbl_sueldo);
  }
}