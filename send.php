<?php
$post = (!empty($_POST)) ? true : false;
if($post)
{
$email = trim($_POST['email']);
$name = htmlspecialchars($_POST['name']);
$email = htmlspecialchars($_POST['email']);
$formtext = htmlspecialchars($_POST['formtext']);

$error = '';

if(!$name)
{
$error .= 'Podaj imię<br />';
}

if(!$email)
{
$error .= "Wpisz swój e-mail<br />";
}

if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $error .= "Wpisz poprawny e-mail<br />";
}

if(!$error)

if(!$formtext || strlen($formtext) < 1)
{
$error .= "Wpisz tekst<br />";
}

if(!$error)
{

$name_tema = "=?utf-8?b?". base64_encode($name) ."?=";

$subject ="Zamówienie ze strony internetowej";
$subject1 = "=?utf-8?b?". base64_encode($subject) ."?=";
	
$message1 ="\n\nName: ".$name."\n\nE-mail: " .$email."\n\nText: " .$formtext."\n\n";	


$header = "Content-Type: text/plain; charset=utf-8\n";

$header .= "From: Wiadomość ze strony internetowej";	
$mail = mail("vldln08@gmail.com", $subject1, iconv ('utf-8', 'windows-1251', $message1), iconv ('utf-8', 'windows-1251', $header));

if($mail)
{
echo 'OK';
}

}
else
{
echo '<div class="notification_error">'.$error.'</div>';
}

}
?>