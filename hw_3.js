
//1. С помощью цикла while вывести все простые числа в промежутке от 0 до 100.

//2. С этого урока начинаем работать с функционалом интернет-магазина. Предположим, есть сущность корзины. Нужно реализовать функционал подсчета стоимости корзины в зависимости от находящихся в ней товаров.
//3. Товары в корзине хранятся в массиве. Задачи:
//a) Организовать такой массив для хранения товаров в корзине;

var cart = [["Магазин 1", 35000],["Магазин 2", 15000],["Магазин 3", 25000]];

//b) Организовать функцию countBasketPrice, которая будет считать стоимость корзины.
function countBasketPrice(cart){
	var total = 0;
	for(i = 0; i < cart.length; i++){
		total = total + cart[i][1];
	}
	return total;
}

test_sum = countBasketPrice(cart);
alert("Совершили покупок на : " +test_sum +" рублей");

//4.*Вывести с помощью цикла for числа от 0 до 9, не используя тело цикла. Выглядеть это должно так:
//for(…){// здесь пусто}
for (var i = 0; i <= 9; alert(i++)){}

//5. *Нарисовать пирамиду с помощью console.log, как показано на рисунке, только у вашей пирамиды должно быть 20 рядов, а не 5:
//x
//xx
//xxx
//xxxx
//xxxxx
 var x = "";
 for(var i = 0; i < 5 ; i++){
     x = x + "x";
     console.log(x);
 }