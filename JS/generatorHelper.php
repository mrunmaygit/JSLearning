<?php
$language = $_GET["language"];
$jsondata;

$data = [
	"java" => [
				"struts","spring","hibernate","j2EE","freemarker"
			],
	"php" => [
				"laravel","magento","cakephp","codeigniter","wordpress"
			],
	"python" => [
				"django","odoo"
			]
];

foreach ($data as $key => $value) {
	if($language == $key){
		$jsondata = json_encode(["framework" => $value]);
		break;
	}
}


echo($jsondata);