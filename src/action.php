<?php
    // $host = 'extraver.mysql.tools';
    // $user = 'extraver_taxiairport';
    // $password = '-vV-yU6z57';
    // $dbname = 'extraver_taxiairport';

    $host = '212.44.113.12';
    $user = 'intaxi16_transferway';
    $password = '*OMCqHk{[%kH';
    $dbname = 'intaxi16_transferway';

    $connect = new PDO("mysql:host=$host;dbname=$dbname", "$user", "$password");
    $received_data = json_decode(file_get_contents("php://input"));
    $data = array();
    if($received_data->action == 'fetchall'){
        $query = "
        SELECT * FROM orders 
        ";
        $statement = $connect->prepare($query);
        $statement->execute();

        while($row = $statement->fetch(PDO::FETCH_ASSOC)){
            $data[] = $row;
        }
        echo json_encode($data);
    }
?>