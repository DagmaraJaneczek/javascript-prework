//Random Computer Move
var computerMove, randomNumber;
randomNumber = Math.floor(Math.random() * 3 + 1);
console.log('wylosowana liczba to: ' + randomNumber);
if (randomNumber == '1') {
  computerMove = 'kamień';
} else {
  computerMove = 'nieznany ruch';
}
if (randomNumber == '2') {
  computerMove = 'papier';
} else {
  computerMove = 'nieznany ruch';
}
if (randomNumber == '3') {
  computerMove = 'nożyce';
} else {
  computerMove = 'nieznany ruch';
}
printMessage('Mój ruch: ' + computerMove);

//Player Move

var playerInput, playerMove;
playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
console.log('Wpisana odpowiedź to: ' + playerInput);
if (playerInput == '1') {
  playerMove = 'kamień';
  printMessage('Twój ruch: ' + playerMove);
} else if (playerInput == '2') {
  playerMove = 'papier';
  printMessage('Twój ruch' + playerMove);
} else if (playerInput == '3') {
  playerMove = 'nożyce';
  printMessage('Twój ruch' + playerMove);
} else {
  playerMove = 'nieznany ruch';
  printMessage('nieznany ruch');
}