<?php

if (isset($_POST['submit'])) {
   $name = $_POST['name'];
   $subject = $_POST['subject'];
   $mailFrom = $_POST['mail'];
   $message = $_POST['message'];

   $mailTo = "starlottemusic@outlook.com"
   $headers = "COMMISSION: ".$mailFrom
   $txt = "You have recieved a commission from ".$name.".\n\n".$message;

   mail($mailTo, $subject, $headers);
   header("Location: index.php?sendmessage");

}
?>
