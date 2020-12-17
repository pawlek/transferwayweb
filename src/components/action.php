<?php
    $DBHOST = 'extraver.mysql.tools';
    $DBUSER = 'extraver_taxiairport';
    $DBPASS = '-vV-yU6z57';
    $DBNAME = 'extraver_taxiairport';

    
    try {
        $connect = new PDO("mysql:host=$DBHOST; dbname=$DBNAME;", $DBUSER, $DBPASS);
    } catch (PDOException $e) {
        echo 'Подключение не удалось: ' . $e->getMessage();
    }

    $received_data = json_decode(file_get_contents("php://input"));
    $data = array();
    if($received_data->action == 'fetchall'){
        $query = "
            SELECT * FROM rides
        ";
        $statement = $connect->prepare($query);
        $statement->execute();
        while($row = $statement->fetch(PDO::FETCH_ASSOC)){
            $data[] = $row;
        }
        echo json_encode($data);
    }

    // $connection = mysqli_connect(DB_HOST, DB_USER, DB_PASS, DB_NAME);
	// $connection->set_charset("utf8");
?>