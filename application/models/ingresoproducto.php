<?php

class ingresoproducto extends CI_Model {
	  // table name
  private $tbl_ingresoproducto= 'tbl_ingreso_producto';

  function ingresoproducto(){
    //parent::Model();
    parent::__construct();
  }

  // get ingresoproducto with paging
  function getAll(){
    
    return $this->db->get($this->tbl_ingresoproducto);
  }
  // add new ingresoproducto
  function save($ingresoproducto){
    $this->db->insert($this->tbl_ingresoproducto, $ingresoproducto);
    return (array)$this->get_by_id($this->db->insert_id())->row();
  }
  // update ingresoproducto by id
  function modifica($id_ingresoproducto, $ingresoproducto){
    $this->db->where('id_ingresoproducto', $id_ingresoproducto);
    $this->db->update($this->tbl_ingresoproducto, $ingresoproducto);
    return $this->get_by_id($id_ingresoproducto);
  }
  // delete ingresoproducto by id
  function delete($id){
    $this->db->where('id_ingresoproducto', $id);
    $this->db->delete($this->tbl_ingresoproducto);
  }
  function get_by_id($id_ingresoproducto){
    $this->db->where('id_ingresoproducto', $id_ingresoproducto);
    return $this->db->get($this->tbl_ingresoproducto);
  }
}