<?php

class actividadEconomica extends CI_Model {
	  // table name
  private $tbl_actividadEconomica= 'tbl_actividadEconomica';

  function actividadEconomica(){
    //parent::Model();
    parent::__construct();
  }

  // get actividadEconomica with paging
  function getAll(){
    
    return $this->db->get($this->tbl_actividadEconomica);
  }
  // add new actividadEconomica
  function save($actividadEconomica){
    $this->db->insert($this->tbl_actividadEconomica, $actividadEconomica);
    return (array)$this->get_by_id($this->db->insert_id())->row();
  }
  // update actividadEconomica by id
  function modifica($id_actividadEconomica, $actividadEconomica){
    $this->db->where('id_actividadEconomica', $id_actividadEconomica);
    $this->db->update($this->tbl_actividadEconomica, $actividadEconomica);
    return $this->get_by_id($id_actividadEconomica);
  }
  // delete actividadEconomica by id
  function delete($id){
    $this->db->where('id_actividadEconomica', $id);
    $this->db->delete($this->tbl_actividadEconomica);
  }
  function get_by_id($id_actividadEconomica){
    $this->db->where('id_actividadEconomica', $id_actividadEconomica);
    return $this->db->get($this->tbl_actividadEconomica);
  }
}