<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Class Reminder - Dance Bloc Brazil</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            margin: 0;
            padding: 0;
            background-color: #f4f4f4;
        }

        .header {
            background-color: #FF00F7;
            color: white;
            padding: 20px;
            text-align: center;
            border-top-left-radius: 8px;
            border-top-right-radius: 8px;
        }

        .header img {
            max-width: 200px;
            height: auto;
        }

        .center-img {
            display: block;
            margin-left: auto;
            margin-right: auto;
            max-width: 200px;
            margin-bottom: 20px;
        }

        .content {
            background: white;
            margin: 20px auto;
            padding: 20px;
            max-width: 800px;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }

        .content p {
            margin-bottom: 1.2em;
        }

        .footer {
            background-color: #FF00F7;
            color: white;
            text-align: center;
            padding: 10px;
            border-bottom-left-radius: 8px;
            border-bottom-right-radius: 8px;
            margin-top: 20px;
        }

        .unsubscribe {
            margin-top: 10px;
            font-size: 1em;
            font-weight: bold;
            color: #f0f0f0;
        }

        .unsubscribe a {
            color: #fff;
            text-decoration: underline;
        }
    </style>
</head>

<body>
    <img src="https://www.danceblocbrazil.com/faviconpng-removebg-preview.png" alt="Dance Bloc Brazil Logo"
        class="center-img">
    <div class="header">
        <h1>Dance Bloc Brazil</h1>
        <h2>Class Reminder</h2>
    </div>

    <div class="content">
        <p>Hi {{ $data->student->name }},</p>

        <p>This is a reminder that you have a class titled "<strong>{{ $data->class->name }}</strong>" scheduled for
            tomorrow,
            <strong><u>{{ $data->class->datetime->format('d/m/Y \a\t h:i A') }}</u></strong>.
        </p>

        <p>If you have any questions or need further assistance, feel free to contact us.</p>

        <p>We look forward to seeing you!</p>
        <p>Dance Bloc Brazil Team</p>
    </div>

    <div class="footer">
        &copy; {{ date('Y') }} Dance Bloc Brazil. All rights reserved.
        <div class="unsubscribe">
            To unsubscribe from these reminders, please update your settings in your <a
                href="https://www.danceblocbrazil.com/dashboard">profile settings</a>.
        </div>
    </div>
</body>

</html>
