<?php

namespace App\Models\BD;

use App\Database\Database;
use PDOException;

class ModelBD extends Database
{

  public function __construct()
  {
    parent::__construct();
  }


  public function getPlansBD()
  {
    $res = $this->pdo->query("SELECT * FROM plans;")->fetchAll(\PDO::FETCH_ASSOC);

    if (count($res) === 0)
      return null;

    return $res;

  }

  public function getPlans_IdBD($id)
  {
    $res = $this->pdo->prepare("SELECT * FROM plans WHERE idPlans= :id;");
    $retplans = $res->execute([
      'id' => $id
    ]);

    $retplans = $res->fetchAll(\PDO::FETCH_ASSOC);
    if (count($retplans) === 0)
      return null;

    return $retplans;

  }



  public function createPlansBD($newplans)
  {
   
    try{

    $statement = $this->pdo
      ->prepare("INSERT INTO plans (title, descriptions, dates, participants, locations)
      value (:title, :descriptions, :dates, :participants, :locations);");

    $statement->execute([
      'title' => $newplans['title'],
      'descriptions' => $newplans['descriptions'],
      'dates' => $newplans['dates'],
      'participants' => $newplans['participants'],
      'locations'=>$newplans['locations']
    ]);
 

      return ['res'=> true];

    }catch(PDOException $pDOException){
      $res = ['res'=> false, 'msg'=>$pDOException->getMessage()];
      return $res;

    }
    
  }

  public function updatePlansBD($id, $newplans)
  {

    try {

      $statement = $this->pdo
        ->prepare("UPDATE plans SET title =:title, descriptions= :descriptions, dates= :dates, participants= :participants, locations= :locations  WHERE idPlans= $id;");

      $statement->execute([
        'title' => $newplans['title'],
        'descriptions' => $newplans['descriptions'],
        'dates' => $newplans['dates'],
        'participants' => $newplans['participants'],
        'locations' => $newplans['locations']
      ]);


      return ['res' => true];

    } catch (PDOException $pDOException) {
      $res = ['res' => false, 'msg' => $pDOException->getMessage()];
      return $res;

    }
  }


  public function deletePlans($id)
  {
    $res = $this->pdo->prepare("DELETE FROM plans WHERE idPLans=:id;");
    $res->execute([
      'id' => $id
    ]);

    return true;
  }


}





?>