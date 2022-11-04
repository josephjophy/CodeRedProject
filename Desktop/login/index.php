
<!DOCTYPE html>
<html lang = "en">
    <head>
    <meta charset = "UTF-8">
    <meta name = "viewport" content = "width=device-width, initial-scale=1.0">
    <link rel = "stylesheet" type = "text/css" href = "style.css">
</head>

<body>

<div>Please Login </div>

<form action = "index.php" method = "post" >

<input type = "text" name = "Username" class = "username" placeholder = "Username" required> <br>
<input type = "text" name = "Password" placeholder = "Password" required>  <br>
<input type = "submit" name = "login" value = "login">


</form>


<?php
$conn = mysqli_connect('team6awsdb.cethcqcyjpsc.us-east-1.rds.amazonaws.com', 'admin', 'team6database', 'README_RECOVER_DATABASES2');
if ($conn -> connect_errno) {
    echo "Failed to connect to MySQL: " . $mysqli -> connect_error;
    exit();
  }

  if (isset($_POST['login'])){
    $un = $_POST['Username'];
    $pw = $_POST['Password'];
    $query = "SELECT Zoousername, Userpassword FROM README_RECOVER_DATABASES2.USER WHERE Zoousername = '$un' AND Userpassword = '$pw'";
    $sql = mysqli_query($conn, $query);
    $row = mysqli_num_rows($sql);
    if ($row == 1){
            header("location:landing.php");
            exit();
    }
    else{
        echo 'Invalid username or password';
    }
  }

?>

</body>
<html>