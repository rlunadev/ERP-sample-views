<?php

class tc extends CI_Model {
	  // table name
  private $tbl_tc= 'tbl_tc';

  function tc(){
    //parent::Model();
    parent::__construct();
  }

  // get tc with paging
  function getAll(){
    
    return $this->db->get($this->tbl_tc);
  }
  // add new tc
  function save($tc){
    $this->db->insert($this->tbl_tc, $tc);
    return (array)$this->get_by_id($this->db->insert_id())->row();
  }
  // update tc by id
  function modifica($id_tc, $tc){
    $this->db->where('id_tc', $id_tc);
    $this->db->update($this->tbl_tc, $tc);
    return $this->get_by_id($id_tc);
  }
  // delete tc by id
  function delete($id){
    $this->db->where('id_tc', $id);
    $this->db->delete($this->tbl_tc);
  }
  function get_by_id($id_tc){
    $this->db->where('id_tc', $id_tc);
    return $this->db->get($this->tbl_tc);
  }
}