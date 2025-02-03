<?php
if($_SERVER['REQUEST_METHOD'] != 'POST'){
    //  mensaje de error en JSON.
    echo json_encode(['success' => false, 'message' => 'Método de solicitud no permitido']);
    exit; // Termina la ejecución del script
}

require 'phpmailer/PHPMailer.php';
require 'phpmailer/Exception.php';
$configs = include('config.php');

use PHPMailer\PHPMailer\PHPMailer;

$name = $_POST['name'] ?? 'anonimo'; // Uso del operador de fusión null de PHP 7+
$email = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['message'];
$service = $_POST['service'];

$body = <<<HTML
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mensaje desde la web</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
        }
        .container {
            max-width: 600px;
            margin: 20px auto;
            padding: 20px;
            border: 1px solid #ccc;
            border-radius: 5px;
            background-color: #f9f9f9;
        }
        h1, h3 {
            color: #333;
        }
        p {
            margin-bottom: 20px;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Contacto desde el sitio web</h1>
        <p><strong>De:</strong> $name / $email</p>
        <p><strong>Servicio deseado: </strong>$service</p>
        <h3>Mensaje cliente:</h3>
        <p>$message</p>
    </div>
</body>
</html>
HTML;


$mailer = new PHPMailer();

//RECIPIENTS
$mailer->setFrom($configs['emailAddress'], $name);
$mailer->addAddress($configs['emailAddress'], $configs['domain']);
$mailer->Subject = "Mensaje web: $subject";
$mailer->msgHTML($body);
$mailer->AltBody = strip_tags($body);
$mailer->CharSet = 'UTF-8';

// Comentado porque $foto no está definido
// if(isset($_FILES['foto']) && $_FILES['foto']['size'] > 0 ){
//     $mailer->addAttachment($_FILES['foto']['tmp_name'], $_FILES['foto']['name']);
// }

if($mailer->send()){
    // El correo fue enviado
    echo json_encode(['success' => true, 'message' => 'Correo enviado con éxito']);
}else{
    // El correo no pudo ser enviado
    echo json_encode(['success' => false, 'message' => 'Error al enviar el correo']);
}
