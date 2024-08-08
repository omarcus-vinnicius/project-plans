<?php

namespace App\Controller;

use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use App\Models\BD\ModelBD;

final class ControllerPlans
{

    public function getPlans(Request $request, Response $response, array $args)
    {
        $resUsers = new ModelBD();
        $response = $response->withJson($resUsers->getPlans())->withStatus(202);
        return $response;
    }
    public function getPlansId(Request $request, Response $response, array $args)
    {
        // $id = $args['id'];
        // $response->getBody()->write("get " . $id);
        return $response;
    }
    public function createPlans(Request $request, Response $response, array $args)
    {

        $response->getBody()->write("create");
        return $response;
    }
    public function updatePlans(Request $request, Response $response, array $args)
    {
        $id = $args['id'];
        $response->getBody()->write("Put " . $id);
        return $response;
    }
    public function deletePlans(Request $request, Response $response, array $args)
    {
        $id = $args['id'];
        $response->getBody()->write("Delete " . $id);
        return $response;
    }

}




?>