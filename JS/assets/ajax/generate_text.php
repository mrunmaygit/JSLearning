<?php 
$data = [
		"Date"=>"30-11-2017"
		"Day" =>"Thursday"
		"Month" => "November"
		];

#Encode data in JSON
$encodedData = json_encode($data);
print_r($encodedData);
return $encodedData;