<?php

class falta extends CI_Model {
	  // table name
  private $tbl_falta= 'tbl_falta';

  function falta(){
    //parent::Model();
    parent::__construct();
  }

  // get falta with paging
  function getAll(){
    
    return $this->db->get($this->tbl_falta);
  }
  // add new falta
  function save($falta){
    $this->db->insert($this->tbl_falta, $falta);
    return (array)$this->get_by_id($this->db->insert_id())->row();
  }
  // update falta by id
  function modifica($id_falta, $falta){
    $this->db->where('id_falta', $id_falta);
    $this->db->update($this->tbl_falta, $falta);
    return $this->get_by_id($id_falta);
  }
  // delete falta by id
  function delete($id){
    $this->db->where('id_falta', $id);
    $this->db->delete($this->tbl_falta);
  }
  function get_by_id($id_falta){
    $this->db->where('id_falta', $id_falta);
    return $this->db->get($this->tbl_falta);
  }
}