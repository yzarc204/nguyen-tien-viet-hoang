<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title></title>
    <link id="favicon" rel="shortcut icon" href="" type="image/x-icon">

    <!-- CSS -->
    <!-- <link rel="stylesheet" href="./public/css/reset.css"> -->
    <link rel="stylesheet" href="./public/css/app.css">
    <link rel="stylesheet" href="./public/css/responsive.css">
    <link rel="stylesheet" href="./public/css/vendor.css">
    <!-- GOOGLE FONTS -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet">
</head>

<body>
    <div class="center">
        <div class="popup">
            <div class="title">
                <ion-icon class="bell" name="notifications"></ion-icon>
                Thông Báo
            </div>
            <div id="description">
            </div>
            <div class="dismiss-btn">
                <button id="dismiss-popup-btn">
                    OK
                </button>
            </div>
        </div>
    </div>
    <div id="root">
        <div id="main">
            <div class="container">
                <!-- RENDER HERE ! -->
            </div>
        </div>
    </div>

    <!-- PLUGIN  -->
    <script src="https://code.jquery.com/jquery-3.6.0.slim.min.js" integrity="sha256-u7e5khyithlIdTpu22PHhENmPcRdFiHRjhAuHcs05RI=" crossorigin="anonymous"></script>
    <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
    <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
    <!-- SCRIPT -->

    <script src="./public/js/config.js"></script>
    <script src="./public/js/app.js"></script>


</body>

</html>