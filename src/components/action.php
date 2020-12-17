<?php
    $host = 'extraver.mysql.tools';
    $user = 'extraver_taxiairport';
    $password = '-vV-yU6z57';
    $dbname = 'extraver_taxiairport';

    $con = mysqli_connect($host, $user, $password,$dbname);
    // Check connection
    if (!$con) {
        die("Connection failed: " . mysqli_connect_error());
    }

    // $condition = "1";
    // if(isset($_GET['userid'])){
    //     $condition = " id=".$_GET['userid'];
    // }
    $userData = mysqli_query($con,"select * from users WHERE ");

    $response = array();

    while($row = mysqli_fetch_assoc($userData)){
        $response[] = $row;
    }

    echo json_encode($response);
    exit;

?>