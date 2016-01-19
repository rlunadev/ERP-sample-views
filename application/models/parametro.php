<?php

class parametro extends CI_Model {
	  // table name
  private $tbl_parametro= 'tbl_parametros';

  function parametro(){
    //parent::Model();
    parent::__construct();
  }

  // get parametro with paging
  function getAll(){
    
    return $this->db->get($this->tbl_parametro);
  }
  // add new parametro
  function save($parametro){
    $this->db->insert($this->tbl_parametro, $parametro);
    return (array)$this->get_by_id($this->db->insert_id())->row();
  }
  // update parametro by id
  function modifica($id_parametro, $parametro){
    $this->db->where('id_parametro', $id_parametro);
    $this->db->update($this->tbl_parametro, $parametro);
    return $this->get_by_id($id_parametro);
  }
  // delete parametro by id
  function delete($id){
    $this->db->where('id_parametro', $id);
    $this->db->delete($this->tbl_parametro);
  }
  function get_by_id($id_parametro){
    $this->db->where('id_parametro', $id_parametro);
    return $this->db->get($this->tbl_parametro);
  }
}