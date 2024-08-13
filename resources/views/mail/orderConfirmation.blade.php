<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Order Confirmation - Dance Bloc Brazil</title>
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
        }

        .header img {
            max-width: 200px;
            /* Updated max-width */
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

        .footer {
            background-color: #FF00F7;
            color: white;
            text-align: center;
            padding: 10px;
            border-top: 1px solid #ddd;
            margin-top: 20px;
        }

        .order-details {
            margin-top: 20px;
        }

        .order-details table {
            width: 100%;
            border-collapse: collapse;
        }

        .order-details th,
        .order-details td {
            text-align: left;
            padding: 10px;
            border-bottom: 1px solid #ddd;
        }

        .order-details th {
            background-color: #f4f4f4;
        }
    </style>
</head>

<body>
    <img src="https://www.danceblocbrazil.com/faviconpng-removebg-preview.png" alt="Dance Bloc Brazil Logo"
        class="center-img">
    <div class="header">
        <h1>Dance Bloc Brazil</h1>
        <h2>Order Confirmation</h2>
    </div>

    <div class="content">
        <p>Hi {{ $data['user'] }},</p>

        <p>Thank you for your order! Here are the details of your order:</p>

        <div class="order-details">
            <table>
                <tr>
                    <th>Items:</th>
                    <td>
                        <ul>
                            @foreach ($data['items'] as $item)
                                <li>{{ $item }}</li>
                            @endforeach
                        </ul>
                    </td>
                </tr>
                <tr>
                    <th>Order Total:</th>
                    <td>${{ number_format($data['orderTotal'], 2) }}</td>
                </tr>
                <tr>
                    <th>Discount Total:</th>
                    <td>${{ number_format($data['discountTotal'], 2) }}</td>
                </tr>
            </table>
        </div>

        <p>If you have any questions or need further assistance, feel free to contact us.</p>

        <p>We look forward to seeing you!</p>
        <p>Dance Bloc Brazil Team</p>
    </div>

    <div class="footer">
        &copy; {{ date('Y') }} Dance Bloc Brazil. All rights reserved.
    </div>
</body>

</html>
