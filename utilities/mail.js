var nodemailer = require('nodemailer');

var _from = 'cedv90@gmail.com';

var transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: _from,
    pass: 'carlosdiaz0301'
  }
});

var send = function (to, subject, body, callBackOk, callBackError){
	console.log('Entra!');
	transporter.sendMail({
		from: _from,
		to: to,
		subject: subject,
		html: body
	}, function(error, info){
		if (error) {
			if (callBackError){
				callBackError(error);
			}
		} 
		else {
			if (callBackOk){
				callBackOk('Email sent: ' + info.response);
			}
		}
	});
}

module.exports = {
  send: send
};