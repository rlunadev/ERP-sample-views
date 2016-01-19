<?php

class plandecuenta extends CI_Model {
	  // table name
  private $tbl_plandecuenta= 'tbl_plandecuentas';

  function plandecuenta(){
    //parent::Model();
    parent::__construct();
  }

  // get plandecuenta with paging
  function getAll(){
    
    return $this->db->get($this->tbl_plandecuenta);
  }
  // add new plandecuenta
  function save($plandecuenta){
    $this->db->insert($this->tbl_plandecuenta, $plandecuenta);
    return (array)$this->get_by_id($this->db->insert_id())->row();
  }
  // update plandecuenta by id
  function modifica($id_plandecuenta, $plandecuenta){
    $this->db->where('id_plandecuenta', $id_plandecuenta);
    $this->db->update($this->tbl_plandecuenta, $plandecuenta);
    return $this->get_by_id($id_plandecuenta);
  }
  // delete plandecuenta by id
  function delete($id){
    $this->db->where('id_plandecuenta', $id);
    $this->db->delete($this->tbl_plandecuenta);
  }
  function get_by_id($id_plandecuenta){
    $this->db->where('id_plandecuenta', $id_plandecuenta);
    return $this->db->get($this->tbl_plandecuenta);
  }
}