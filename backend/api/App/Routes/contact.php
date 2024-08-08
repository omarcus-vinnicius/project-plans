<?php

use App\Controller\ControllerPlans;
use function src\settings;


$app = new \Slim\App(settings());


$app->group('/api', function () use ($app) {

    $app->get('/plans', ControllerPlans::class . ':getPlans');
    $app->get('/plans/{id}', ControllerPlans::class . ':');
    $app->post('/plans', ControllerPlans::class . ':');
    $app->post('/plans/search', ControllerPlans::class . ':');
    $app->put('/plans/{id}', ControllerPlans::class . ':');
    $app->delete('/plans/{id}', ControllerPlans::class . ':');

});


//testes

$app->run();



?>