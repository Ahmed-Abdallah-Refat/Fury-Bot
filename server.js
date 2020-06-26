const express = require('express');
const app = express();
app.use(express.static('public'));
app.get('/', function(request, response) {
  response.sendFile(__dirname + '/views/index.html'); 
});
const listener = app.listen(process.env.PORT, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});

// عشان تخلي البوت 24 ساعه
// ولاتنسى تسوي خطوات ال uptimerobot
const http = require('http');
app.get("/", (request, response) => {
  response.sendStatus(200); 
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`https://github.com/Ahmed-Abdallah-Refat/Fury-Bot/`); //replace jagroshmusicbot with your project name بدل jagroshmusicbot بي اسم البروجكت حقك
}, 280000); 
  
  /* ملاحظة: في حاله كان البريفكس يلي تبيه علامه تعجب او حتى مع بعض البريفكسات الثانيه
 يمكن يجيك ايرور فا الحل هو انك تحط البريفكس بين الدبل كوتيشن ذي ""
وتنحل المشكله انشاء الله
*/
var shell = require('shelljs');
  
shell.exec('java -jar Fury.jar')      
