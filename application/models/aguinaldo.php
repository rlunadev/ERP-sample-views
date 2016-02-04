<?php

class aguinaldo extends CI_Model {
	  // table name
  private $tbl_aguinaldo= 'tbl_aguinaldo';

  function aguinaldo(){
    //parent::Model();
    parent::__construct();
  }

  // get aguinaldo with paging
  function getAll(){
    
    return $this->db->get($this->tbl_aguinaldo);
  }
  // add new aguinaldo
  function save($aguinaldo){
    $this->db->insert($this->tbl_aguinaldo, $aguinaldo);
    return (array)$this->get_by_id($this->db->insert_id())->row();
  }
  // update aguinaldo by id
  function modifica($id_aguinaldo, $aguinaldo){
    $this->db->where('id_aguinaldo', $id_aguinaldo);
    $this->db->update($this->tbl_aguinaldo, $aguinaldo);
    return $this->get_by_id($id_aguinaldo);
  }
  // delete aguinaldo by id
  function delete($id){
    $this->db->where('id_aguinaldo', $id);
    $this->db->delete($this->tbl_aguinaldo);
  }
  function get_by_id($id_aguinaldo){
    $this->db->where('id_aguinaldo', $id_aguinaldo);
    return $this->db->get($this->tbl_aguinaldo);
  }
}