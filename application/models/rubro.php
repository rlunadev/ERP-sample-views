<?php

class rubro extends CI_Model {
	  // table name
  private $tbl_rubro= 'tbl_rubro';

  function rubro(){
    //parent::Model();
    parent::__construct();
  }

  // get rubro with paging
  function getAll(){
    
    return $this->db->get($this->tbl_rubro);
  }
  // add new rubro
  function save($rubro){
    $this->db->insert($this->tbl_rubro, $rubro);
    return (array)$this->get_by_id($this->db->insert_id())->row();
  }
  // update rubro by id
  function modifica($id_rubro, $rubro){
    $this->db->where('id_rubro', $id_rubro);
    $this->db->update($this->tbl_rubro, $rubro);
    return $this->get_by_id($id_rubro);
  }
  // delete rubro by id
  function delete($id){
    $this->db->where('id_rubro', $id);
    $this->db->delete($this->tbl_rubro);
  }
  function get_by_id($id_rubro){
    $this->db->where('id_rubro', $id_rubro);
    return $this->db->get($this->tbl_rubro);
  }
}