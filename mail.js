const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      type: 'OAuth2',
      user: 'testthk21',
      pass: 'test21pass',
      clientId: '314418315723-8o81903kip0relulq2mkibu1adgkb4jr.apps.googleusercontent.com',
      clientSecret: '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',
      refreshToken: 'ya29.a0AWY7Ckn2BiKoAQvzQ4gHxBKqJgWlWyZU63ib10Hc41qKmUZBNvh6Mvx6XD-YY0FVdlRSk49JbI6GWkft11ZmIP_OJD7dYt0-cPFodlSkRjexd0ZrApkFwp-1V7VXIhVLwZlsbLWU-JaXC4_ZSya613_YWrX8aCgYKAdkSARISFQG1tDrpQsgqMVT1j6TMK3YUVxGd6A0163'
    }
  });

  let mailOptions = {
    from: 'testthk21@gmail.com',
    to: 'painkiller7813@gmail.com',
    subject: 'Nodemailer Project',
    text: 'your random text here like sgp_bba28c101bf66979715215ed8bf5aa15ff274a16',
  };

  transporter.sendMail(mailOptions, function(err, data) {});