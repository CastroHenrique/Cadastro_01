<?php

$dados =  file_get_contents('php://input');
//print_r($dados);
$data = json_decode($dados, true);
print_r($data);
        
 

$f = fopen('data.csv', 'a');
   foreach($data as $linhas){
       fputcsv($f, $linhas);
    }
    fclose($f);
    

  

?>