<?php

header("Access-Control-Allow-Methods POST, GET, OPTIONS, DELETE, PUT, PATCH");
header("Access-Control-Allow-Origin: *");
header("X-Requested-With, Content-Type, Accept, Origin, Authorization");
header("Access-Control-Max-Age: 1000");


require_once 'vendor/autoload.php';
require_once 'env.php';
require_once './src/settings.php';
require_once './App/Routes/contact.php';