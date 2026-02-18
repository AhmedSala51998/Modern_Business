<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

header('Content-Type: application/json');

require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $mail = new PHPMailer(true);

    $lang = $_POST['lang'] ?? 'en';

    try {

        // SMTP Settings
        $mail->isSMTP();
        $mail->Host       = 'smtp.gmail.com';
        $mail->SMTPAuth   = true;
        $mail->Username   = 'modernbusiness515@gmail.com';
        $mail->Password   = 'wizl vuki gumg xfgu';
        $mail->SMTPSecure = 'tls';
        $mail->Port       = 587;

        // From & To
        $mail->setFrom($_POST['email'], htmlspecialchars($_POST['name']));
        $mail->addAddress('modernbusiness515@gmail.com', 'Modern Business');

        // Logo
        $logoUrl = 'https://modrnbusines.com/img/logo.png';

        /* ==============================
           LANGUAGE SWITCH
        ============================== */

        if($lang === 'ar'){

            $mail->Subject = 'طلب استشارة مقاولات جديد';

            $dir = 'rtl';
            $align = 'right';

            $title = 'استفسار مشروع جديد';
            $receivedText = 'تم استلام طلب جديد من نموذج التواصل في موقعك.';
            $clientName = 'اسم العميل';
            $emailText = 'البريد الإلكتروني';
            $projectType = 'نوع المشروع';
            $projectDetails = 'تفاصيل المشروع';
            $sentOn = 'تم الإرسال بتاريخ';
            $companyText = 'مودرن بيزنس - مقاولات وإنشاءات';

            $successMessage = 'تم إرسال طلبك بنجاح!';
            $invalidMethod = 'طريقة الطلب غير صحيحة';

        } else {

            $mail->Subject = 'New Construction Consultation Request';

            $dir = 'ltr';
            $align = 'left';

            $title = 'New Project Inquiry';
            $receivedText = 'You have received a new request from your website contact form.';
            $clientName = 'Client Name';
            $emailText = 'Email';
            $projectType = 'Project Type';
            $projectDetails = 'Project Details';
            $sentOn = 'Sent on';
            $companyText = 'Modern Business - Construction & Contracting';

            $successMessage = 'Your request has been sent successfully!';
            $invalidMethod = 'Invalid request method';
        }

        /* ==============================
           EMAIL BODY
        ============================== */

        $body = '
        <div dir="'.$dir.'" style="background:#f4f4f7;padding:40px 0;font-family:Arial,sans-serif;text-align:'.$align.';">
          <table align="center" width="100%" cellpadding="0" cellspacing="0"
                 style="max-width:600px;background:#ffffff;border-radius:8px;overflow:hidden;box-shadow:0 4px 12px rgba(0,0,0,0.07);">

            <tr>
              <td style="padding:30px;text-align:center;">
                <img src="'.$logoUrl.'" style="width:180px;margin-bottom:20px;">
                <h2 style="margin:0;color:#333;">'.$title.'</h2>
              </td>
            </tr>

            <tr>
              <td style="padding:20px 40px;">

                <p style="font-size:16px;color:#444;">
                  '.$receivedText.'
                </p>

                <hr>

                <p><strong>'.$clientName.':</strong> '.htmlspecialchars($_POST['name']).'</p>

                <p><strong>'.$emailText.':</strong> 
                   <a href="mailto:'.htmlspecialchars($_POST['email']).'">
                   '.htmlspecialchars($_POST['email']).'
                   </a>
                </p>

                <p><strong>'.$projectType.':</strong> '.htmlspecialchars($_POST['subject']).'</p>

                <p><strong>'.$projectDetails.':</strong><br>
                '.nl2br(htmlspecialchars($_POST['message'])).'
                </p>

                <hr>

                <p style="color:#777;font-size:14px;">
                  '.$sentOn.' '.date("Y-m-d H:i").' <br>
                  '.$companyText.'
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
            'message' => $successMessage
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
        'message' => $invalidMethod ?? 'Invalid request method'
    ]);
}