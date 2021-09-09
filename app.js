"use strict";
/*alert('hey')
const userName='katya'
let age='77'
console.log(age)*/

/*let isGreater = 4 > 1;
alert( isGreater );*/

/*let age = prompt('Сколько тебе лет?', 100);
alert(`Тебе ${age} лет!`);*/

//let test = prompt("Test", '')

/*let isBoss = confirm("Ты здесь главный?");
alert( isBoss );*/

/*let s = "моя" + " строка";
alert(s);*/

/*let year = prompt('В каком году была опубликована спецификация ECMAScript-2015?', '');

if (year == 2015) {
  alert( 'Да вы знаток!' );
} else {
  alert( 'А вот и неправильно!' ); // любое значение, кроме 2015
}*/

/*let year = prompt('В каком году была опубликована спецификация ECMAScript-2015?', '');

if (year < 2015) {
  alert( 'Это слишком рано...' );
} else if (year > 2015) {
  alert( 'Это поздновато' );
} else {
  alert( 'Верно!' );
}*/

/*let age = prompt('Возраст?', '');

let message = (age < 3) ? 'Здравствуй, малыш!' :
  (age < 18) ? 'Привет!' :
  (age < 100) ? 'Здравствуйте!' :
  'Какой необычный возраст!';

alert( message );*/

/*let hour = 12;
let minute = 30;

if (hour == 12 && minute == 30) {
  alert( 'The time is 12:30' );
}*/

/*let firstName = null;
let lastName = null;
let nickName = "Суперкодер";

// показывает первое истинное значение:
alert(firstName ?? lastName ?? nickName ?? "Аноним"); */

/*let sum = 0;

while (true) {

  let value = +prompt("Введите число", '');

  if (!value) break; // (*)

  sum += value;

}
alert( 'Сумма: ' + sum );*/

/*outer: for (let i = 0; i < 3; i++) {

    for (let j = 0; j < 3; j++) {
  
      let input = prompt(`Значение на координатах (${i},${j})`, '');
  
      // если пустая строка или Отмена, то выйти из обоих циклов
      if (!input) break outer; // (*)
  
      // сделать что-нибудь со значениями...

    }
  }
  
  alert('Готово!');*/

  /*for (let i=0;i<=10;i++){
      if(i%2==0)
      alert(i)
  }*/

  /*let i=0
  while (i<3){
      alert(`number ${i}!`)
      i++
  }*/

  /*let a = 2 + 2;

switch (a) {
  case 3:
    alert( 'Маловато' );
    break;
  case 4:
    alert( 'В точку!' );
    break;
  case 5:
    alert( 'Перебор' );
    break;
  default:
    alert( "Нет таких значений" );
}*/

/*let arg = prompt("Введите число?");
switch (arg) {
  case '0':
  case '1':
    alert( 'Один или ноль' );
    break;

  case '2':
    alert( 'Два' );
    break;

  case 3:
    alert( 'Никогда не выполнится!' );
    break;
  default:
    alert( 'Неизвестное значение' );
}*/
 
/*const number = +prompt('Введите число между 0 и 3', '');
switch (number){
  case 0: 
  alert ('Вы ввели число 0');
  break;
  case 1: 
  alert ('Вы ввели число 1');
  break;
  case 2: 
  case 3: 
  alert('Вы ввели число 2, а может и 3');
  break;
}*/

/*const number = +prompt('Cколько 2+2', '');
switch (number){
  case 2: 
  alert ('мало');
  break;
  case 4: 
  alert ('верно');
  break;
  case 6: 
  case 8: 
  alert('много');
  break;
  default:
      alert('no');
}*/

/*function checkAge(age) {
    if (age > 18) {
      return true;
    } else {
      return confirm('А родители разрешили?');
    }
  }
  
  let age = prompt('Сколько вам лет?', 18);
  
  if ( checkAge(age) ) {
    alert( 'Доступ получен' );
  } else {
    alert( 'Доступ закрыт' );
  }*/

  /*function checkAge(age) {
    return (age > 18) || confirm('Родители разрешили?');
  }

  let age=prompt('сколько лет ')
  if (checkAge(age)){
      alert('ok')
  }
  else {
      alert('no')
    }*/

    /*function min(a, b) {
    return a < b ? a : b;
    }

    let a=5;
    let b=6;
    alert(min(a,b))*/

  /* function ask(question, yes, no) {
        if (confirm(question)) yes()
        else no();
      }
       // использование: функции showOk, showCancel передаются в качестве аргументов ask
      ask("как?", showOk, showCancel);
      function showOk() {
        alert( "Вы согласны." );
      }
      
      function showCancel() {
        alert( "Вы отменили выполнение." );
      }*/
      
     