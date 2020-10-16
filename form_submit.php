<?php
$connection = mysqli_connect("localhost", "root", "", "ebulten");


$email= $_POST['email'];
//Insert query
$query = mysqli_query($connection, "insert into email(email) values ('$email')");

mysqli_close($connection); // Connection Closed
?>