<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

header('Content-Type: application/json');

require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $mail = new PHPMailer(true);

    try {

        // SMTP Settings
        $mail->isSMTP();
        $mail->Host       = 'smtp.gmail.com';
        $mail->SMTPAuth   = true;
        $mail->Username   = 'info@modrnbusines.com';
        $mail->Password   = 'wizl vuki gumg xfgu';
        $mail->SMTPSecure = 'tls';
        $mail->Port       = 587;

        // From & To
        $mail->setFrom($_POST['email'], htmlspecialchars($_POST['name']));
        $mail->addAddress('info@modrnbusines.com', 'Modern Business');

        $mail->Subject = 'New Construction Consultation Request';

        // Logo
        $logoUrl = 'https://modrnbusines.com/img/logo.png';

        // Email Body
        $body = '
        <div style="background:#f4f4f7;padding:40px 0;font-family:Arial,sans-serif;">
          <table align="center" width="100%" cellpadding="0" cellspacing="0"
                 style="max-width:600px;background:#ffffff;border-radius:8px;overflow:hidden;box-shadow:0 4px 12px rgba(0,0,0,0.07);">

            <tr>
              <td style="padding:30px;text-align:center;">
                <img src="'.$logoUrl.'" style="width:180px;margin-bottom:20px;">
                <h2 style="margin:0;color:#333;">New Project Inquiry</h2>
              </td>
            </tr>

            <tr>
              <td style="padding:20px 40px;">
                <p style="font-size:16px;color:#444;">
                  You have received a new request from your website contact form.
                </p>

                <hr>

                <p><strong>Client Name:</strong> '.htmlspecialchars($_POST['name']).'</p>
                <p><strong>Email:</strong> 
                   <a href="mailto:'.htmlspecialchars($_POST['email']).'">
                   '.htmlspecialchars($_POST['email']).'
                   </a>
                </p>
                <p><strong>Project Type:</strong> '.htmlspecialchars($_POST['subject']).'</p>

                <p><strong>Project Details:</strong><br>
                '.nl2br(htmlspecialchars($_POST['message'])).'
                </p>

                <hr>

                <p style="color:#777;font-size:14px;">
                  Sent on '.date("Y-m-d H:i").' <br>
                  Modern Business - Construction & Contracting
                </p>
              </td>
            </tr>

          </table>
        </div>
        ';

        $mail->isHTML(true);
        $mail->Body = $body;

        $mail->send();

        echo json_encode([
            'status' => 'success',
            'message' => 'Your request has been sent successfully!'
        ]);

    } catch (Exception $e) {

        echo json_encode([
            'status' => 'error',
            'message' => 'Mail Error: '.$mail->ErrorInfo
        ]);
    }

} else {
    echo json_encode([
        'status' => 'error',
        'message' => 'Invalid request method'
    ]);
}