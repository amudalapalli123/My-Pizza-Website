<?php
   include_once('connection.php');
   $username = mysqli_real_escape_string($link, $_POST["username"] );
   $password = mysqli_real_escape_string($link, md5($_POST["password"]) );
    if(empty("$username") || empty("$password"))
       echo "Username And Password Mandotory";
    else {
        $sql = "SELECT count(*) FROM user_pizza WHERE ( username='$username' AND password='$password')";
        $res = mysqli_query($link, $sql);
        $row = mysqli_fetch_array( $res);
        if( $row[0] > 0 )
           echo "Login Successfully";
        else
           echo "Login Failed";
       }
?>
