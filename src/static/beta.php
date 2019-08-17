<?php
  // Only process POST requests.
  if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get email address from '.env' file in the root
    $envFile = fopen(".env","r");
    $myEmail = fgets($envFile);
    // Get the form fields and remove whitespace.
    $email = $_POST; // data from form ends up in $_POST superglobal

    // Check that data was sent to the mailer.
    if (empty($email)) {
        // Set a 400 (bad request) response code and exit.
        //http_response_code(400);
        echo "Oops! There was a problem with your submission. Please complete the form and try again.";
        exit;
      }

      // Set the recipient email address.
      $recipient = "$myEmail";

      // Set the email subject.
      $subject = "Sign up for Trainr Beta $email";
      // Build the email content.
      $email_content = "Email: $email\n\n";
      $email_content .= "Subject: Sign up for Trainr Beta\n\n";

      // Build the email headers.
      $email_headers = "From: $email";

      // Send the email.
      if (mail($recipient, $subject, $email_content, $email_headers)) {
        // Set a 200 (okay) response code.
        //http_response_code(200);
        echo "Thank You! Your message has been sent.";
      } else {
        // Set a 500 (internal server error) response code.
        //http_response_code(500);
        echo "Oops! Something went wrong and we couldn\"t send your message.";
      }
    } else {
      // Not a POST request, set a 403 (forbidden) response code.
      //http_response_code(403);
      echo "There was a problem with your submission, please try again.";
    }
?>
