<?php
    $DBHOST = 'extraver.mysql.tools';
    $DBUSER = 'extraver_taxiairport';
    $DBPASS = '-vV-yU6z57';
    $DBNAME = 'extraver_taxiairport';

    
    try {
        $connect = new PDO("mysql:host=$DBHOST; dbname=$DBNAME;", $DBUSER, $DBPASS);
        echo 'Подключение active';
    } catch (PDOException $e) {
        echo 'Подключение не удалось: ' . $e->getMessage();
    }

    

    // $connection = mysqli_connect(DB_HOST, DB_USER, DB_PASS, DB_NAME);
	// $connection->set_charset("utf8");
?>