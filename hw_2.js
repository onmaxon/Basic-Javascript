//1. Дан код:
//var a = 1, b = 1, c, d;
//c = ++a; alert(c);           // 2
//d = b++; alert(d);           // 1
//c = (2+ ++a); alert(c);      // 5
//d = (2+ b++); alert(d);      // 4
//alert(a);                    // 3
//alert(b);                    // 3
//Почему код даёт именно такие результаты?

//Ответ
//префиксная форма возвращает новое значение
//постфиксная форма возвращает старое значение
//var a = 1, b = 1, c, d;
//c = ++a; alert(c);           // 2
//d = b++; alert(d);           // 1
//c = (2+ 3); alert(c);      // 5
//d = (2+ 2++); alert(d);      // 4
//alert(a);                    // 3
//alert(b);                    // 3

//2. Чему будет равен x в примере ниже?
//var a = 2;
//var x = 1 + (a *= 2);

//Ответ 5

//3. Объявить две целочисленные переменные a и b и задать им произвольные начальные значения. Затем написать скрипт, который работает по следующему принципу:
//если a и b положительные, вывести их разность;
//если а и b отрицательные, вывести их произведение;
//если а и b разных знаков, вывести их сумму; ноль можно считать положительным числом.

var a = parseInt(prompt("Введите первое число"));
var b = parseInt(prompt("Введите второе число"));

if (a > 0 && b > 0){
	x = a - b;
	alert(x);
}
else if (a < 0 && b < 0){
	x = a * b;
	alert(x);
}
else{
	x = a + b;
	alert(x)
}

//4. Присвоить переменной а значение в промежутке [0..15]. С помощью оператора switch организовать вывод чисел от a до 15.
var a = parseInt(prompt("Введите число от 0 до 15"));
switch(a){
	case 0:
		alert('0')
	case 1:
		alert('1')
	case 2:
		alert('2')
	case 3:
		alert('3')
	case 4:
		alert('4')
	case 5:
		alert('5')
	case 6:
		alert('6')
	case 7:
		alert('7')
	case 8:
		alert('8')
	case 9:
		alert('9')
	case 10:
		alert('10')
	case 11:
		alert('11')
	case 12:
		alert('12')
	case 13:
		alert('13')
	case 14:
		alert('14')
	case 15:
		alert('15')
}
//5. Реализовать основные 4 арифметические операции в виде функций с двумя параметрами. Обязательно использовать оператор return.
function calc(a,b,y){
	if ( y === '-'){
		return a - b;
		}
	else if ( y === '+'){
		return a + b;
	}
	else if ( y === '*'){
		return a * b;
	}
	else if ( y === '/'){
		return a / b;
	}
}
var c = calc(parseInt(prompt('Первое число')),parseInt(prompt('Второе число')),prompt('арифметические операции -,+,*,/'));
alert(c)

//6. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation), где arg1, arg2 – значения аргументов, operation – строка с названием операции. В зависимости от переданного значения операции выполнить одну из арифметических операций (использовать функции из пункта 5) и вернуть полученное значение (использовать switch).
function mathOperation(arg1, arg2, operation){
	switch(operation){
		case 'сложение':
			return arg1 + arg2;
		break;
		case 'вычитание':
			return arg1 - arg2;
		break;
		case 'умножение':
			return arg1 * arg2;
		break;
		case 'деление':
			return arg1 / arg2;
		break;
	}
}

alert(mathOperation(5,5,'умножение'));
//7. *Сравнить null и 0. Попробуйте объяснить результат.
//8. *С помощью рекурсии организовать функцию возведения числа в степень. Формат: function power(val, pow), где val – заданное число, pow – степень.