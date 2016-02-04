<?php

class anticipo extends CI_Model {
	  // table name
  private $tbl_anticipo= 'tbl_anticipo';

  function anticipo(){
    //parent::Model();
    parent::__construct();
  }

  // get anticipo with paging
  function getAll(){
    
    return $this->db->get($this->tbl_anticipo);
  }
  // add new anticipo
  function save($anticipo){
    $this->db->insert($this->tbl_anticipo, $anticipo);
    return (array)$this->get_by_id($this->db->insert_id())->row();
  }
  // update anticipo by id
  function modifica($id_anticipo, $anticipo){
    $this->db->where('id_anticipo', $id_anticipo);
    $this->db->update($this->tbl_anticipo, $anticipo);
    return $this->get_by_id($id_anticipo);
  }
  // delete anticipo by id
  function delete($id){
    $this->db->where('id_anticipo', $id);
    $this->db->delete($this->tbl_anticipo);
  }
  function get_by_id($id_anticipo){
    $this->db->where('id_anticipo', $id_anticipo);
    return $this->db->get($this->tbl_anticipo);
  }
}