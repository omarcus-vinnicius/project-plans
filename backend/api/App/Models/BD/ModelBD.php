<?php

namespace App\Models\BD;

use App\Database\Database;

class ModelBD extends Database
{

  public function __construct()
  {
    parent::__construct();
  }


  public function getPlans()
  {
    $res = $this->pdo->query("SELECT * FROM plans;")->fetchAll(\PDO::FETCH_ASSOC);

    if (count($res) === 0)
      return null;

    return $res;

  }

  public function getPlans_Id($id)
  {
    $res = $this->pdo->query("SELECT * FROM plans WHERE idPlans= :id;")->fetchAll(\PDO::FETCH_ASSOC);

    if (count($res) === 0)
      return null;

    return $res;

  }



  public function createPlans()
  {

  }

  public function updatePlans()
  {

  }


  public function deletePlans()
  {
    $res = $this->pdo->query("DELETE FROM plans WHERE idPLans=:id;")->fetchAll(\PDO::FETCH_ASSOC);

    if (count($res) === 0)
      return null;

    return $res;
  }


}





?>