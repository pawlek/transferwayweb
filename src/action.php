<?php
    $host = 'extraver.mysql.ukraine.com.ua';
    $user = 'extraver_taxiairport';
    $password = '-vV-yU6z57';
    $dbname = 'extraver_taxiairport';

    // create connection
    $conn = new mysqli($host, $user, $password, $dbname);

    // check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }
    echo "Connected successfully";
?>