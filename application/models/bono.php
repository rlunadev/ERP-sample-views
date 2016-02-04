<?php

class bono extends CI_Model {
	  // table name
  private $tbl_bono= 'tbl_bono';

  function bono(){
    //parent::Model();
    parent::__construct();
  }

  // get bono with paging
  function getAll(){
    
    return $this->db->get($this->tbl_bono);
  }
  // add new bono
  function save($bono){
    $this->db->insert($this->tbl_bono, $bono);
    return (array)$this->get_by_id($this->db->insert_id())->row();
  }
  // update bono by id
  function modifica($id_bono, $bono){
    $this->db->where('id_bono', $id_bono);
    $this->db->update($this->tbl_bono, $bono);
    return $this->get_by_id($id_bono);
  }
  // delete bono by id
  function delete($id){
    $this->db->where('id_bono', $id);
    $this->db->delete($this->tbl_bono);
  }
  function get_by_id($id_bono){
    $this->db->where('id_bono', $id_bono);
    return $this->db->get($this->tbl_bono);
  }
}