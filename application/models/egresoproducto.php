<?php

class egresoproducto extends CI_Model {
	  // table name
  private $tbl_egresoproducto= 'tbl_egreso_producto';

  function egresoproducto(){
    //parent::Model();
    parent::__construct();
  }

  // get egresoproducto with paging
  function getAll(){
    
    return $this->db->get($this->tbl_egresoproducto);
  }
  // add new egresoproducto
  function save($egresoproducto){
    $this->db->insert($this->tbl_egresoproducto, $egresoproducto);
    return (array)$this->get_by_id($this->db->insert_id())->row();
  }
  // update egresoproducto by id
  function modifica($id_egresoproducto, $egresoproducto){
    $this->db->where('id_egresoproducto', $id_egresoproducto);
    $this->db->update($this->tbl_egresoproducto, $egresoproducto);
    return $this->get_by_id($id_egresoproducto);
  }
  // delete egresoproducto by id
  function delete($id){
    $this->db->where('id_egresoproducto', $id);
    $this->db->delete($this->tbl_egresoproducto);
  }
  function get_by_id($id_egresoproducto){
    $this->db->where('id_egresoproducto', $id_egresoproducto);
    return $this->db->get($this->tbl_egresoproducto);
  }
}