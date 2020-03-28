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

	</head>
	<body>
		<div class="container" style="text-align: center;">
			<div class="header" style="margin: 0 auto;">
				<div class="centering" style="display: inline-block; vertical-align: middle;">
					<img src="https://drive.google.com/uc?id=1kvlkGXbsdeSjNmit2NFxm-RPiseO4kcQ" style="max-width: 80%;max-height: 100%;">
				</div>
				<div class="centering" style="display: inline-block; vertical-align: middle;">
					<div class="heading" style="color: #004afd; font-size: 30px; font-family: 'Noto Serif', serif; font-weight: bold; margin-bottom: 2%; margin-left: 5%;">Dysthymia</div>
					<div class="desc" style="font-size: 15px; font-family: 'Noto Serif', serif; margin-top: 2%; margin-left: 5%;">Make your life better!</div>
				</div>
			</div>
			<div class="score" style="margin-top: 5%;">
				<div class="scoreTitle" style="font-size: 25px; font-family: 'Noto Serif', serif; color: #004afd;">Score</div>
				<div class="scoreValue" style="font-size: 55px; font-family: 'Noto Serif', serif; font-weight: bold;">${score}</div>
			</div>
			<div class="remainData" style="margin-top: 5%; text-align: center;">
				<div class="name" style="margin-bottom: 5%;">
					<div class="title" style="font-size: 20px; font-family: 'Noto Serif', serif; color: #004afd;">Name</div>
					<div class="value" style="font-size: 22px; font-family: 'Noto Serif', serif;">${userName}</div>
				</div>
				<div class="date" style="margin-top: 5%;">
					<div class="title" style="font-size: 20px; font-family: 'Noto Serif', serif; color: #004afd;">Date</div>
					<div class="value" style="font-size: 22px; font-family: 'Noto Serif', serif;">${startDay} - ${endDay}</div>
				</div>
			</div>
			<footer class="footer" style="padding: 5% 0;">
				<div class="copyright" style="padding: 3% 0; font-size: 12px;">
					<div>&copy; Copyright Dysthymia 2020.</div>
					<div>All rights reserved.</div>
				</div>
			</footer>
		</div>
	</body>
</html>
  `;
}
