/*
https://jsfiddle.net/mockinterview/av1sudwt/
https://www.youtube.com/watch?v=yVYRpe89hD4
Прислал Владислав Аткишкин

Допиши код так, чтобы Leopard унаследовал от Cat все методы.

Сделай так, чтобы у Leopard метод sayMeow возвращал 'Roar!' А метод
getPet у Leopard должен возвращать ту строку, возвращает метод у Cat, и
кроме этого устанавливать леопарду, у которого был вызван метод, в поле
mood значение 'счастлив'.

Обрати внимание: использование ключевого слова class запрещено.
Наследование нужно реализовывать через прототипы.
*/

function Cat() {}

Cat.prototype.sayMeow = () => {
  console.log('Meow!   Meow!   Meow!');
  return 'Meow!   Meow!   Meow!';
};

Cat.prototype.getPet = () => {
  console.log('Purrrrr');
  return 'Purrrrrr';
};

function Leopard() {
  this.__proto__ = Cat.prototype;
	this.mood = '1'
    this.sayMeow = function() {
  	console.log('Roar')
  }
    this.getPet = function() {
  	console.log(this.__proto__.getPet());
    this.mood = 'Happy'
  }
}

//Leopard.prototype = Cat.prototype
//let leo = Object.create(Cat.prototype)
let leo = new Leopard();
leo.sayMeow()
console.log(leo.mood)
leo.getPet()
console.log(leo.mood)
