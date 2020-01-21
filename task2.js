/*
Задача 2

Оценка сложности: 2
Оценка трудозатрат: 4 часа
Фактические трудозатраты: 5 часов
 
Сложность O(n)
Оценка необходимой памяти: зависит от структуры data и кол-ва isin в параметрах запроса

Возможные расширения:
- кеширование data для пар date:isin и поиск среди них
- управление объемом
- управление временем жизни 
- методы очистки
- в качестве хранилища лучше использовать localStorage или IndexedDB
- использовать Cache Api

*/

const getBondsData = ( cache = [], prevDate = '', prevIsins = [] ) => async ( {date, isins} ) => {

	if ( prevDate === date && prevIsins.length === isins.length && prevIsins.filter( a => isins.indexOf(a) === -1 ) ) {		
		return cache;
	} else {
		
		const result = await http.post({
			url: `/bonds/${date}`,
			body: isins,
		});
		
		prevDate = date;
		prevIsins = isins;
		
		cache = [...result];
		
		return result;		
	}
};





