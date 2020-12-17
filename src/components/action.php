<?php
    const DB_HOST = 'localhost';
    const DB_USER = 'extraver_taxiairport';
    const DB_PASS = '-vV-yU6z57';
    const DB_NAME = 'extraver_taxiairport';

    $connect = new PDO("mysql:host='DB_HOST'; dbname='DB_NAME'; 'DB_USER', 'DB_PASS' ");

    $recieved_data = json_decode(file_get_contents("php://input"));

    $data = array();

    if($recieved_data->action == 'fetchall'){
        $query = " ";
        $statment = $connect->prepare($query);
        $statment->execute();
        while($row = $statment->fetch(PDO::FETCH_ASSOC)){
            $data[] = $row;
        }
        echo json_encode($data);
    }

    $connection = mysqli_connect(DB_HOST, DB_USER, DB_PASS, DB_NAME);
	$connection->set_charset("utf8");
?>