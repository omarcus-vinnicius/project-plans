<?php

namespace App\Middlewares\ErrorHandling;

use Psr\Http\Message\ServerRequestInterface as Request;
use Slim\Http\Response as Response;

final class errorInsert
{

    public function __invoke(Request $request, Response $response, callable $next): Response
    {

        $newuser = $request->getParsedBody();


        if (
            !isset($newuser['title']) || empty($newuser['title']) ||
            !isset($newuser['dates']) || empty($newuser['dates']) ||
            !isset($newuser['locations']) || empty($newuser['locations'])
        ) {

            try {
                throw new \Exception("Fill in all fields to proceed with the request");
            } catch (\Exception | \Throwable $ex) {
                return $response->withJson([
                    'error' => \Exception::class,
                    'status' => 422,
                    'code' => "001",
                    'userMessage' => 'Empty or non-existent fields',
                    'developerMessage' => $ex->getMessage()
                ], 422);
            }

        }

        $response = $next($request, $response);
        return $response;
    }
}

