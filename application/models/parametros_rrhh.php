<?php

class parametros_rrhh extends CI_Model {
	  // table name
  private $tbl_parametros_rrhh= 'tbl_parametros_rrhhs';

  function parametros_rrhh(){
    //parent::Model();
    parent::__construct();
  }

  // get parametros_rrhh with paging
  function getAll(){
    
    return $this->db->get($this->tbl_parametros_rrhh);
  }
  // add new parametros_rrhh
  function save($parametros_rrhh){
    $this->db->insert($this->tbl_parametros_rrhh, $parametros_rrhh);
    return (array)$this->get_by_id($this->db->insert_id())->row();
  }
  // update parametros_rrhh by id
  function modifica($id_parametros_rrhh, $parametros_rrhh){
    $this->db->where('id_parametros_rrhh', $id_parametros_rrhh);
    $this->db->update($this->tbl_parametros_rrhh, $parametros_rrhh);
    return $this->get_by_id($id_parametros_rrhh);
  }
  // delete parametros_rrhh by id
  function delete($id){
    $this->db->where('id_parametros_rrhh', $id);
    $this->db->delete($this->tbl_parametros_rrhh);
  }
  function get_by_id($id_parametros_rrhh){
    $this->db->where('id_parametros_rrhh', $id_parametros_rrhh);
    return $this->db->get($this->tbl_parametros_rrhh);
  }
}