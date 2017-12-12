<?php
   include_once('connection.php');
   $username = mysqli_real_escape_string($link, $_POST["username"] );
   $password = mysqli_real_escape_string($link, md5($_POST["password"]) );
   $fname = mysqli_real_escape_string($link, $_POST["fname"] );
   $lname = mysqli_real_escape_string($link, $_POST["lname"] );
   $pnumber = mysqli_real_escape_string($link, $_POST["pnumber"] );
   $myemail = mysqli_real_escape_string($link, $_POST["myemail"] );

   if( empty($username) || empty($password) )
   {
       echo "Username And Password Are Mandatory";
       exit();
   }


     $sql = "INSERT INTO user_pizza VALUES('$username','$password','$fname','$lname','$pnumber','$myemail')";
       if(mysqli_query($link, $sql))
          echo "Registered Successfully";
       else
          echo "Registration Failed";

?>
