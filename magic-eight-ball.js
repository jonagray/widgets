'use strict';

let userName = '';

userName ? console.log(`Hello, ${userName}!`) : console.log('Hello!') ;

const userQuestion = '';

let randomNumber = Math.floor(Math.random() * 8);

let eightBall = '';

switch (randomNumber) {
  case 0:
    eightBall = 'It is certain';
    break;
  case 1:
    eightBall = 'It is decidedly so';
    break;
  case 2:
    eightBall = 'Reply hazy, try again';
    break;
  case 3:
    eightBall = 'Cannot predict now';
    break;
  case 4:
    eightBall = 'Don\'t count on it';
    break;
  case 5:
    eightBall = 'My sources say no';
    break;
  case 6:
    eightBall = 'Outlook not so good';
    break;
  case 7:
    eightBall = 'Signs point to yes'
  default:
    eightBall = 'I\'m not sure why you\'re asking me.';
}

let playEightBall = function(userName, userQuestion) {
  console.log(`${userName} wants to know: ${userQuestion.toLowerCase()} Answer: ${eightBall}`)
}

playEightBall('Jonny', 'Do I love programming?');