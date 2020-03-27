module.exports = (userName, score, startDay, endDay) => {
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Dysthymia</title>
    <link href="https://fonts.googleapis.com/css?family=Noto+Serif:400,700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

  </head>
  <body style="margin: 0;padding: 0;">
    <div class="outer" style="width: 100%; height: 100%; background-color: #004afd;">
      <div class="inner" style="width: 100%; height: 100%; margin: auto; position: relative; background: #ffffff; text-align: center;">
        <div class="logo" style="width:100%;">
          <img src="https://drive.google.com/uc?id=1kvlkGXbsdeSjNmit2NFxm-RPiseO4kcQ" style="margin-top: 3%;max-width: 100%;max-height: 100%;">
        </div>
        <div class="heading" style="font-size: 40px; color: #004afd; font-family: 'Noto Serif', serif; font-weight: bold; margin-top: 2%;">Dysthymia</div>
        <div class="title" style="font-size: 18px; margin-top: 2%;">Make your life better!</div>
        <div class="title" style="font-size: 18px; margin-top: 10%; color: #555555;">Name</div>
        <div class="name" style="font-size: 25px; margin-top: 1%;">${userName}</div>
        <div class="title" style="font-size: 18px; margin-top: 10%; color: #555555;">Week Date</div>
        <div class="date" style="font-size: 18px; font-family: 'Noto Serif', serif; margin-top: 1%;">${startDay} - ${endDay}</div>
        <div class="title" style="font-size: 18px; margin-top: 10%; color: #555555;">Score</div>
        <div class="score" style="font-size: 60px; font-family: 'Noto Serif', serif; margin-top: 1%;">${score}</div>
        <footer class="footer" style="padding: 3% 0;">
          <div class="socialMedia">
            <div class="line" style="width: 90%; height: 1px; background-color: #EAEAEA; margin: auto;"></div>
            <div class="divHold" style="text-align: justify; align-self: center; text-align: center;">
                <div style="vertical-align: top; display: inline-block; *display: inline; zoom: 1;"><a href="#" class="fa fa-facebook" style="padding: 15px; font-size: 25px; width: 10px; text-align: center; text-decoration: none; color: #555555; margin: 5px 2px;"></a></div>
                <div style="vertical-align: top; display: inline-block; *display: inline; zoom: 1;"><a href="#" class="fa fa-twitter" style="padding: 15px; font-size: 25px; width: 10px; text-align: center; text-decoration: none; color: #555555; margin: 5px 2px;"></a></div>
                <div style="vertical-align: top; display: inline-block; *display: inline; zoom: 1;"><a href="#" class="fa fa-instagram" style="padding: 15px; font-size: 25px; width: 10px; text-align: center; text-decoration: none; color: #555555; margin: 5px 2px;"></a></div>
                <div style="vertical-align: top; display: inline-block; *display: inline; zoom: 1;"><a href="#" class="fa fa-linkedin" style="padding: 15px; font-size: 25px; width: 10px; text-align: center; text-decoration: none; color: #555555; margin: 5px 2px;"></a></div>
            </div>
            <div style="width: 90%; height: 1px; background-color: #EAEAEA; margin: auto;"></div>
          </div>
          <div class="copyright" style="padding: 3% 0; font-size: 12px;">
            <div>&copy; Copyright Dysthymia 2020.</div>
            <div>All rights reserved.</div>
          </div>
        </footer>
      </div>
    </div>
  </body>
  </html>
  `;
}
