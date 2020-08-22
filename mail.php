<?php $firstname = $_POST['name'];

$email = $_POST['email'];
$message = $_POST['message'];
$formcontent=$_POST['content'];
$recipient = "parvathyv@gmail.com";
$subject = $_POST['subject'];
$mailheader = "From: $email \r\n";
mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");
echo "Thank You!";
?>