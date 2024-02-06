<?php

// Twilio API credentials
$account_sid = 'your_account_sid_here';
$auth_token = 'your_auth_token_here';

// WhatsApp recipient
$recipient = 'whatsapp:+1234567890';

// Twilio API URL
$url = 'https://api.twilio.com/2010-04-01/Accounts/' . $account_sid . '/Messages.json';

// Message body
$message_body = 'Hello, this is a WhatsApp message sent from PHP!';

// Send WhatsApp message using Twilio API
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_POST, 1);
curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query(array(
    'To' => $recipient,
    'From' => 'whatsapp:+14155238886',
    'Body' => $message_body,
)));
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);
curl_setopt($ch, CURLOPT_USERPWD, $account_sid . ':' . $auth_token);
$result = curl_exec($ch);
curl_close($ch);

// Display response
echo $result;
?>
