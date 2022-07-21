<?php


require "../vanjske_biblioteke/sesija.class.php";
require "../vanjske_biblioteke/baza.class.php";

require "../vanjske_biblioteke/smarty-4.0.0/libs/Smarty.class.php";
require "../vanjske_biblioteke/FirePHPCore/fb.php";


global $smarty;
$smarty = new Smarty();

$smarty->setTemplateDir("../templates");
$smarty->setCompileDir("../templates_c");

if (empty($_SERVER['HTTPS']) || $_SERVER['HTTPS'] === "off") {
    $location = 'https://' . $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI'];
    //header('HTTP/1.1 301 Moved Permanently');
    header('Location: ' . $location);
    exit;
}

if (isset($_COOKIE["zapamti_me"]) && !empty($_COOKIE["zapamti_me"])) {
    //$smarty->assign('zapamti_me', $_COOKIE["zapamti_me"]);
    //echo "imamo cookie!!! yeeeee";
}

Sesija::kreirajSesiju();
if(!isset($_SESSION["uloga"])){
    $_SESSION["uloga"]=4;
}