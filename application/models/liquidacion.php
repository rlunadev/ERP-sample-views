<?php

class liquidacion extends CI_Model {
	  // table name
  private $tbl_liquidacion= 'tbl_liquidacion';

  function liquidacion(){
    //parent::Model();
    parent::__construct();
  }

  // get liquidacion with paging
  function getAll(){
    
    return $this->db->get($this->tbl_liquidacion);
  }
  // add new liquidacion
  function save($liquidacion){
    $this->db->insert($this->tbl_liquidacion, $liquidacion);
    return (array)$this->get_by_id($this->db->insert_id())->row();
  }
  // update liquidacion by id
  function modifica($id_liquidacion, $liquidacion){
    $this->db->where('id_liquidacion', $id_liquidacion);
    $this->db->update($this->tbl_liquidacion, $liquidacion);
    return $this->get_by_id($id_liquidacion);
  }
  // delete liquidacion by id
  function delete($id){
    $this->db->where('id_liquidacion', $id);
    $this->db->delete($this->tbl_liquidacion);
  }
  function get_by_id($id_liquidacion){
    $this->db->where('id_liquidacion', $id_liquidacion);
    return $this->db->get($this->tbl_liquidacion);
  }
}