<?php

class usuario extends CI_Model {
	  // table name
  private $tbl_usuario= 'tbl_usuario';

  function usuario(){
    //parent::Model();
    parent::__construct();
  }

  // get usuario with paging
  function getAll(){
    
    return $this->db->get($this->tbl_usuario);
  }
  // add new usuario
  function save($usuario){
    $this->db->insert($this->tbl_usuario, $usuario);
    return (array)$this->get_by_id($this->db->insert_id())->row();
  }
  // update usuario by id
  function modifica($id_usuario, $usuario){
    $this->db->where('id_usuario', $id_usuario);
    $this->db->update($this->tbl_usuario, $usuario);
    return $this->get_by_id($id_usuario);
  }
  // delete usuario by id
  function delete($id){
    $this->db->where('id_usuario', $id);
    $this->db->delete($this->tbl_usuario);
  }
  function get_by_id($id_usuario){
    $this->db->where('id_usuario', $id_usuario);
    return $this->db->get($this->tbl_usuario);
  }
}