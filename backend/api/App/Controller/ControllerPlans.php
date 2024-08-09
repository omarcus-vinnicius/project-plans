<?php

namespace App\Controller;

use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use App\Models\BD\ModelBD;

final class ControllerPlans
{

    public function getPlans(Request $request, Response $response, array $args)
    {
        $resplans = new ModelBD();
        $response = $response->withJson($resplans->getPlansBD())->withStatus(202);
        return $response;
    }
    public function getPlansId(Request $request, Response $response, array $args)
    {
        $id = $args['id'];
        $resplans = new ModelBD();
        $response = $response->withJson($resplans->getPlans_IdBD($id))->withStatus(202);
        return $response;
    }
    public function createPlans(Request $request, Response $response, array $args)
    {

        $newplans = $request->getParsedBody();
        $createplansnew = new ModelBD();
        $rescreate = $createplansnew->createPlansBD($newplans);

        if($rescreate['res'] == true){
            return $response->withJson([
                'res' => 'sucess',
                'status' => 200,
                'userMessage' => 'successfully created plans'
            ]);

        }elseif($rescreate['res'] == false){
            return $response->withJson(['res' => 'error', 'status' => 400, 'erroMsg' => $rescreate['msg']]);
        }
       
    }
    public function updatePlans(Request $request, Response $response, array $args)
    {
        $id = $args['id'];
        if(!isset($id) || empty($id) || !is_numeric($id)) return $response->withJson(['res' => 'error', 'status' => 400, 'erroMsg' =>'id not found']);
        $newplans = $request->getParsedBody();
        $updateplansnew = new ModelBD();
        $rescreate = $updateplansnew->updatePlansBD($id,$newplans);

        if ($rescreate['res'] == true) {
            return $response->withJson([
                'res' => 'sucess',
                'status' => 200,
                'userMessage' => 'successfully updat plans'
            ]);

        } elseif ($rescreate['res'] == false) {
            return $response->withJson(['res' => 'error', 'status' => 400, 'erroMsg' => $rescreate['msg']]);
        }
        return $response;
    }
    public function deletePlans(Request $request, Response $response, array $args)
    {
        $id = $args['id'];
        $resplans = new ModelBD();
        $ret = $resplans->deletePlans($id);

        if($ret){
           return $response->withJson([
                'res' => 'sucess',
                'status' => 200,
                'userMessage' => 'delete successfully'
            ]);
        }else{
           return $response->withJson(['res' => 'error', 'status' => 400,]);
        }

    }

}




?>