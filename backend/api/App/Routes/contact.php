<?php

use App\Controller\ControllerPlans;
use App\Middlewares\ErrorHandling\errorInsert;
use function src\settings;


$app = new \Slim\App(settings());


$app->group('/api', function () use ($app) {

    $app->get('/plans', ControllerPlans::class . ':getPlans');
    $app->get('/plans/{id}', ControllerPlans::class . ':getPlansId');
    
    $app->post('/plans', ControllerPlans::class . ':createPlans')
    ->add(new errorInsert());

    $app->put('/plans/{id}', ControllerPlans::class . ':updatePlans')
    ->add(new errorInsert());

    $app->delete('/plans/{id}', ControllerPlans::class . ':deletePlans');
    $app->post('/plans/search', ControllerPlans::class . ':');

});


//testes

$app->run();



?>