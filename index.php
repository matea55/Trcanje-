<?php

$pristup=4;
require "zaglavlje.php";

$smarty = new Smarty();


$smarty->display("index.tpl");
$smarty->display("podnozje.tpl");