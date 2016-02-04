<?php

class bajamedica extends CI_Model {
	  // table name
  private $tbl_bajamedica= 'tbl_baja_medica';

  function bajamedica(){
    //parent::Model();
    parent::__construct();
  }

  // get bajamedica with paging
  function getAll(){
    
    return $this->db->get($this->tbl_bajamedica);
  }
  // add new bajamedica
  function save($bajamedica){
    $this->db->insert($this->tbl_bajamedica, $bajamedica);
    return (array)$this->get_by_id($this->db->insert_id())->row();
  }
  // update bajamedica by id
  function modifica($id_bajamedica, $bajamedica){
    $this->db->where('id_bajamedica', $id_bajamedica);
    $this->db->update($this->tbl_bajamedica, $bajamedica);
    return $this->get_by_id($id_bajamedica);
  }
  // delete bajamedica by id
  function delete($id){
    $this->db->where('id_bajamedica', $id);
    $this->db->delete($this->tbl_bajamedica);
  }
  function get_by_id($id_bajamedica){
    $this->db->where('id_bajamedica', $id_bajamedica);
    return $this->db->get($this->tbl_bajamedica);
  }
}