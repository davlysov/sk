/*
Задача 1

Оценка сложности: 5
Оценка трудозатрат: 4 часа
Фактические трудозатраты: 7 часов
 
Сложность O(n)
Оценка необходимой памяти: зависит от входного массива
Ограничения в 320000 элементов в массиве при выполнении не более 5 сек - зависит от параметров машины

Возможно добавить:
- проверка элементов в массиве на положительность и не ноль;
- проверка выполнения parseFloat, toFixed


*/

const shareConverter = (sum=0, res=[]) => (arr = []) => new Promise( (resolve, reject) => {
	for (let i=0; i<arr.length; i++) {
		const el = arr[i];
		const pel = parseFloat(el);

		sum+=pel;

		setTimeout( () => {
			const val = pel / sum * 100;
			res.push( val.toFixed(3) + "" );

			if (i === arr.length -1 ) {
                const r = [...res];
                sum = 0;
                res = [];
				resolve(r);
			}
			
		}, 0 );
	}
});


/* Пример №1 */

const arr1 = ['1.5', '3', '6', '1.5'];

var sc1 = shareConverter();

var start = (new Date).getTime(), diff = 0;

const r1 = await sc1(arr1);

diff = (new Date).getTime() - start;

console.log('1. Время выполнения, мс:', diff, 'Результат:', r1);

console.log('---------------------------------------------------');

/* Пример №2 */

const arr2 = Array.from( {length: 320000}, (v,i) => '1.5' );

var sc2 = shareConverter();

var start = (new Date).getTime(), diff = 0;

const r2 = await sc2(arr2);

diff = (new Date).getTime() - start;

console.log('2. Время выполнения, мс:', diff, 'Результат:', r2);