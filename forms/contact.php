<?php
$receiving_email_address = 'edilza_rodrigues@hotmail.com';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];

    $headers = "From: $email";

    $email_body = "Nome: $name\n";
    $email_body .= "Email: $email\n";
    $email_body .= "Assunto: $subject\n\n";
    $email_body .= "Mensagem:\n$message";

    $success = mail($receiving_email_address, $subject, $email_body, $headers);

    if ($success) {
        echo "success";
    } else {
        echo "error";
    }
} else {
    // Se o formulário não foi enviado por POST, redirecionar para a página do formulário
    header("Location: index.html");
}
?>

