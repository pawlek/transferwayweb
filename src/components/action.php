<?php
    $host = 'extraver.mysql.tools';
    $user = 'extraver_taxiairport';
    $password = '-vV-yU6z57';
    $dbname = 'extraver_taxiairport';

    $con = mysqli_connect($host, $user, $password,$dbname);

    $method = $_SERVER['REQUEST_METHOD'];
    $request = explode('/', trim($_SERVER['PATH_INFO'],'/'));
    //$input = json_decode(file_get_contents('php://input'),true);


    if (!$con) {
        die("Connection failed: " . mysqli_connect_error());
    }


    $sql = "select * from rides"; 

    // run SQL statement
    $result = mysqli_query($con,$sql);

    // die if SQL statement failed
    if (!$result) {
        http_response_code(404);
        die(mysqli_error($con));
    }

    echo json_encode(mysqli_fetch_object($result));

    $con->close();
?>