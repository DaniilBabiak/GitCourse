/*import {
    getModuls,
    getDate2,
} from "./JavaScriptPromise.js";*/
//function
//function countSum (width = 0, height = 0){
//let sum =  width + height;
//alert(sum);
//}
//countSum(10, 11);

//function return
//function countSum2 (a, b){
// return a + b;
//}
//let result = countSum2(2,11);
//alert(result);

//Создание объекта
/*let user = {
    name: "John",
    surname: "Smith",
}
//Создание нового имени для name
user.name = "Pete";
for (let key in user){
    alert(key[user]);
}*/
//удаление user.name
/*delete user.name;
for (let key in user) {
    alert(user[key]);
}*/

//Напишите код для суммирования всех зарплат и сохраните результат в переменной sum. Должно получиться 390.
/*let salaries = {
    John: 100,
    Ann: 160,
   Pete: 130
}
let sum = salaries.John + salaries.Ann + salaries.Pete;
alert(sum);*/

//Второй вариант
/*let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
};
let sum = 0;
for (let key in salaries){
    sum += salaries[key];
}
alert(sum);*/

/*let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};
function multiplyNumeric(obj){
    for (let key in obj){
        if (typeof obj[key] == 'number'){
            obj[key] *= 2;
        }
    }
}
multiplyNumeric(menu);*/

//калькулятор
/*let calculator = {
 sum(){
     return this.a + this.b;
 },
    mul(){
     return this.a * this.b;
    },
    read(){
     this.a = +prompt('а?',0);
     this.b = +prompt('b?', 0);
    }
};
calculator.read();
alert(calculator.sum());
alert(calculator.mul());*/

//Создание калькулятора при помощи конструктора

/*function Calculator() {

    this.read = function() {
        this.a = +prompt('a?', 0);
        this.b = +prompt('b?', 0);
    };

    this.sum = function() {
        return this.a + this.b;
    };

    this.mul = function() {
        return this.a * this.b;
    };
}

let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );*/

/*function Accumulator(startingValue) {
    this.value = startingValue;
    this.read = function () {
        this.value += +prompt("Сколько нужно добавить?", 0);
    };
}
let accumulator = new Accumulator(1);
accumulator.read();
accumulator.read();
alert(accumulator.value);*/

//Иногда isFinite используется для проверки, содержится ли в строке число:

//let num = +prompt("Enter a number", '');

// вернёт true всегда, кроме ситуаций, когда аргумент - Infinity/-Infinity или не число
//alert( isFinite(num) );

//Создайте скрипт, который запрашивает ввод двух чисел (используйте prompt) и после показывает их сумму.
/*let a = +prompt("Первое число?", "");
let b = +prompt("Второе число?", "");
alert(a + b);*/

//Создайте функцию readNumber, которая будет запрашивать ввод числового значения до тех пор, пока посетитель его не введёт.
//
// Функция должна возвращать числовое значение.
//
// Также надо разрешить пользователю остановить процесс ввода, отправив пустую строку или нажав «Отмена». В этом случае функция должна вернуть null.

/*function readNumber() {
    let num;

    do {
        num = prompt("Введите число", 0);
    } while ( !isFinite(num) );

    if (num === null || num === '') return null;

    return +num;
}

alert(`Число: ${readNumber()}`);*/

/*let arr = [1,2,3];
alert(arr);
alert([] + 1);
alert([1] + 1);
alert([1,2] + 1);*/


//Массив – это особый тип объекта, предназначенный для работы с упорядоченным набором элементов.
//Номерация элементов массива начинается с 0: например название массива [0];

//Создание масива и определение его длинны
/*let fruits = ["apple", "banana", 1, "lastChild"];*/

//Вывод одного из элементов масива
/*alert(fruits[0]);*/

//Уменьшение длинны масива
/*fruits.length = 3;
alert(fruits.length);*/

//Вызов последнего элемента массива.
/*
alert(fruits.at(-1) );
*/

//pop
// Удаляет последний элемент из массива и возвращает его:

//Удаляем lastChild и выводим его на экран.
/*alert(fruits.pop());*/

//Вывод масива без последенго элемента lastChild
/*alert(fruits);*/

//И fruits.pop() и fruits.at(-1) возвращают последний элемент массива, но fruits.pop()
// также изменяет массив, удаляя его.

//push
// Добавляет элемент в конец массива:

//Добавляем элемент в масив
/*fruits.push("pushLastChild");*/

//Выводим масив с добавленым элементом через .push
/*alert(fruits);*/

//shift
// Удаляет из массива первый элемент и возвращает его:

//Удаляем первый элемент масива и выводим его
/*alert(fruits.shift());*/

//Выводим весь масив, в нем не будет apple
/*alert(fruits);*/

//unshift
// Добавляет элемент в начало массива:

//Добавляем в наш масив новый элемент, он будет самым первым.
/*fruits.unshift("Новое Яблоко");*/

//Выводим весь масив, теперь первый элемент не apple.
/*alert(fruits);*/

//Методы push и unshift могут добавлять сразу несколько элементов:

//Добавляем в конец массива сразу несколько элементов
/*fruits.push("предпоследний элемент", "последний элемент");*/

//Выводим масив, в конец добавилось два новых элемента
/*alert(fruits);*/

//Добавляем в начало масива сразу несколько элементов
/*fruits.unshift("первый элемент", "второй элемент");*/

//Выводим масив, в начало добавилось два новых элемента
/*alert(fruits);*/

//Массив является объектом и, следовательно, ведёт себя как объект.
// Например, копируется по ссылке:

//Создание нового масива и копирование его с уже существующим
/*let newFruints = fruits;*/

//Проверка на равенство обоих массивов. Результат // true. Проверка исключительно через === !!!
/*alert(newFruints === fruits);*/

//Добавим новый элемент в конец масива newFruits
/*newFruints.push("Груша");*/

//Выведем масив fruits. В конец масива fruits так же был добавлен элемент. Так-как ссылки на масивы одинаковы.!!!
/*alert(fruits);*/

//Технически возможно, но не правильное исспользование масивов

/*let fruits = [];*/ //Создаем масив

/*fruits[99999] = 5;*/ // Создаем элемент 5 с индексом намного привышающим длинну масива

/*fruits.age = 25*/ // создаем элемент с произвольным именем

//Это возможно, потому что в основе массива лежит объект. Мы можем присвоить ему любые свойства.

//Варианты неправильного применения массива:

// 1 Добавление нечислового свойства, например: arr.test = 5.
// 2 Создание «дыр», например: добавление arr[0], затем arr[1000] (между ними ничего нет).
// 3 Заполнение массива в обратном порядке, например: arr[1000], arr[999] и т.д.

//Методы push/pop выполняются быстро, а методы shift/unshift – медленно.

//Почему одни медленные, вторые быстрые

//push/pop - методы которые добавляют элементы в конец массива. Тоесть массив просто присваевант индекс к последнему
//элементу массива и все.

//shift/unshift - делают все аналогично, только добавляют элементы в начало массива. Представим что у нас массив на
//тысячу элементов. Что бы добавить впереди новый элемент всему массиву нужно поменять у всей 1000 элементов их индекс
//Чем длиннее масив, тем больше ресурсов и времени займет эта процедура

//Перебор элементов массива


/*let arr = ["Яблоко", "Апельсин", "Груша"];*/ //Создаем массив с тремя элементами.
//Самый старый цикл for по цифровым индексам

/*for (let i = 0; i < arr.length; i++){*/   // i = 0, означает что изначально наш масив будет считаться с 0левого индекса,
/* alert(arr[i]); */                     // i < arr.length - означает что цикл будет идти по всей длинне массива,
                                         // тобеж по каждому из элементов. i++ - после каждого цикла идет ++, означает что
/*} */                                      // после проверки нулевого индекса он будет переходить к первому и так до конца
                                            // после каждого цикла будет выводиться элемент, находящийся под конкретным индексом.

//Но для массивов возможен и другой вариант цикла, for..of:

//Создаем масив
/*let fruits = ["Яблоко", "Апельсин", "Груша"];*/

//цикл, в нем будем вызывать все допустим fruit из нашего массива и выводить их
/*for (let fruit of fruits ){
    alert(fruit);
}*/

//for (let i in arr) – никогда не используйте для массивов!!!

/*Для добавления/удаления элементов:

    push (...items) – добавляет элементы в конец,
    pop() – извлекает элемент с конца,
    shift() – извлекает элемент с начала,
    unshift(...items) – добавляет элементы в начало.
splice(pos, deleteCount, ...items) – начиная с индекса pos, удаляет deleteCount элементов и вставляет items.
slice(start, end) – создаёт новый массив, копируя в него элементы с позиции start до end (не включая end).
concat(...items) – возвращает новый массив: копирует все члены текущего массива и добавляет к нему items. Если какой-то из items является массивом, тогда берутся его элементы.
    Для поиска среди элементов:

    indexOf/lastIndexOf(item, pos) – ищет item, начиная с позиции pos, и возвращает его индекс или -1, если ничего не найдено.
includes(value) – возвращает true, если в массиве имеется элемент value, в противном случае false.
    find/filter(func) – фильтрует элементы через функцию и отдаёт первое/все значения, при прохождении которых через функцию возвращается true.
    findIndex похож на find, но возвращает индекс вместо значения.
    Для перебора элементов:

    forEach(func) – вызывает func для каждого элемента. Ничего не возвращает.
    Для преобразования массива:

    map(func) – создаёт новый массив из результатов вызова func для каждого элемента.
sort(func) – сортирует массив «на месте», а потом возвращает его.
reverse() – «на месте» меняет порядок следования элементов на противоположный и возвращает изменённый массив.
    split/join – преобразует строку в массив и обратно.
reduce(func, initial) – вычисляет одно значение на основе всего массива, вызывая func для каждого элемента и передавая промежуточный результат между вызовами.
    Дополнительно:

Array.isArray(arr) проверяет, является ли arr массивом.*/

/*let arr = [1,2,3,4,5];
arr.forEach(alert);*/

/*
let range = {
    from:1,
    to: 5,
    [Symbol.iterator](){
        this.current = this.from;
        return this;
    },
    next(){
        if(this.current <= this.to){
            return{done:false, value: this.current++};
        }else{
            return {done: true};
        }
    }
};
for(let num of range){
alert(num);
}
*/

/*
for (let letter of "test"){
alert(letter)};
*/

/*let arrayLike = {
    0: "Hello",
    1: "World",
    length:2,
};
let arr = Array.from(arrayLike);
alert(arr.pop());*/


/*let str = "sometext";
let chars = Array.from(str);
chars.forEach(alert);
alert(chars.length);*/

//Сейчас мы знаем о следующих сложных структурах данных:
//
// Объекты для хранения именованных коллекций.
// Массивы для хранения упорядоченных коллекций.


//Методы и свойства:
//
// new Map() – создаёт коллекцию.
// map.set(key, value) – записывает по ключу key значение value.
// map.get(key) – возвращает значение по ключу или undefined, если ключ key отсутствует.
// map.has(key) – возвращает true, если ключ key присутствует в коллекции, иначе false.
// map.delete(key) – удаляет элемент по ключу key.
// map.clear() – очищает коллекцию от всех элементов.
// map.size – возвращает текущее количество элементов.


//Каждый вызов map.set возвращает объект map, так что мы можем объединить вызовы в цепочку:
/*
let map = new Map();
map.set("1", "str1")
    .set(1, "num1")
    .set(true, "bool1");
alert(map.size);
for (map of map){
    alert(map);
}
*/


//Map может использовать объекты в качестве ключей.
/*let john = {
    name: "John",
};
let visitCountMap = new Map();
visitCountMap.set(john, 123);
alert(visitCountMap.get(john));*/


//Для перебора коллекции Map есть 3 метода:
//
// map.keys() – возвращает итерируемый объект по ключам,
// map.values() – возвращает итерируемый объект по значениям,
// map.entries() – возвращает итерируемый объект по парам вида [ключ, значение], этот вариант используется по умолчанию в for..of.

/*let recipeMap = new Map([
    ["Огурец", 500],
    ["Помидор", 350],
    ["Лук", 50],
]);*/
/*for (let vegetables of recipeMap.keys()){
    alert(vegetables);
}
for (let amount of recipeMap.values()){
    alert(amount);
}
for (let entry of recipeMap.entries()){
    alert(entry);
}*/

//// выполняем функцию для каждой пары (ключ, значение)
/*
recipeMap.forEach((value, key, map) => {
    alert(`${key} : ${value}`);
});*/


//Object.entries:

//Если у нас уже есть обычный объект, и мы хотели бы создать Map из него, то поможет встроенный метод Object.entries(obj),
//который получает объект и возвращает массив пар ключ-значение для него, как раз в этом формате.
//Так что мы можем создать Map из обычного объекта следующим образом:

//Здесь Object.entries возвращает массив пар ключ-значение: [ ["name","John"], ["age", 30] ].
// Это именно то, что нужно для создания Map.

/*
let obj = {
    name: "John",
    age : 30,
};

let map = new Map(Object.entries(obj));
for (let entry of map){
    alert(entry);
}*/

//Object.fromEntries:
//Есть метод Object.fromEntries, который делает противоположное:
// получив массив пар вида [ключ, значение], он создаёт из них объект:

/*
let prices = Object.fromEntries([
    ['banana', 1],
    ['orange', 2],
    ['meat', 4],
]);
for (let key in prices){
    alert(key);
    alert(prices[key]);
}*/
//Мы можем использовать Object.fromEntries, чтобы получить обычный объект из Map.
//
// К примеру, у нас данные в Map, но их нужно передать в сторонний код, который ожидает обычный объект.

/*let map = new Map();
map.set('banana', 1);
map.set('orange', 2);
map.set('meat', 4);

let obj = Object.fromEntries((map.entries()));

//Вызов map.entries() возвращает итерируемый объект пар ключ/значение, как раз в нужном формате для Object.fromEntries.
//
// Мы могли бы написать строку (*) ещё короче:

let obj = Object.fromEntries(map); // убрать .entries()

alert(obj.orange);*/



//Set

// Объект Set – это особый вид коллекции: «множество» значений (без ключей),
// где каждое значение может появляться только один раз.

//new Set(iterable) – создаёт Set, и если в качестве аргумента был предоставлен итерируемый объект (обычно это массив),
// то копирует его значения в новый Set.

//set.add(value) – добавляет значение (если оно уже есть, то ничего не делает), возвращает тот же объект set.

//set.delete(value) – удаляет значение, возвращает true, если value было в множестве на момент вызова, иначе false.

//set.has(value) – возвращает true, если значение присутствует в множестве, иначе false.

//set.clear() – удаляет все имеющиеся значения.

//set.size – возвращает количество элементов в множестве.

//Основная «изюминка» – это то, что при повторных вызовах set.add() с одним и тем же значением ничего не происходит,
// за счёт этого как раз и получается, что каждое значение появляется один раз.

// Например, мы ожидаем посетителей, и нам необходимо составить их список.
// Но повторные визиты не должны приводить к дубликатам. Каждый посетитель должен появиться в списке только один раз.

/*
let set = new Set();
let john = {name: "John"};
let pete = {name: "Pete"};
let mary = {name: "Mary"};

// считаем гостей, некоторые приходят несколько раз

set.add(john);
set.add(pete);
set.add(mary);
set.add(john);
set.add(mary);

alert(set.size);

for (let user of set){
    alert(user.name);
}
*/

//Мы можем перебрать содержимое объекта set как с помощью метода for..of, так и используя forEach:

/*let set = new Set([
    "aпельсин",
    "яблоко",
    "банан",
]);*/

//for..of

/*for (let value of set){
    alert(value);
}*/

// forEach

/*
set.forEach((value, valueAgain, set) => {
    alert(value)
});*/

//Set имеет те же встроенные методы, что и Map:

//set.values() – возвращает перебираемый объект для значений,

//set.keys() – то же самое, что и set.values(), присутствует для обратной совместимости с Map,

//set.entries() – возвращает перебираемый объект для пар вида [значение, значение],
// присутствует для обратной совместимости с Map.



//Деструктуризация позволяет разбивать объект или массив на переменные при присвоении.
//Полный синтаксис для объекта:
//let {prop : varName = default, ...rest} = object

//Свойства, которые не были упомянуты, копируются в объект rest.
//let [item1 = default, item2, ...rest] = array

//Первый элемент отправляется в item1; второй отправляется в item2, все остальные элементы попадают в массив rest.

//Можно извлекать данные из вложенных объектов и массивов,
// для этого левая сторона должна иметь ту же структуру, что и правая.


//Напишите деструктурирующее присваивание, которое:
//свойство name присвоит в переменную name.
//свойство years присвоит в переменную age.
//свойство isAdmin присвоит в переменную isAdmin (false, если нет такого свойства)

/*
let user = {
    name: "John",
    years: 30
};

let {name, years: age, isAdmin = false} = user;

alert(name);
alert(age);
alert(isAdmin);*/




//У нас есть объект salaries с зарплатами:

/*let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};*/

//Создайте функцию topSalary(salaries), которая возвращает имя самого высокооплачиваемого сотрудника.

//Если объект salaries пустой, то нужно вернуть null.
// Если несколько высокооплачиваемых сотрудников, можно вернуть любого из них.

//P.S. Используйте Object.entries и деструктурирование, чтобы перебрать пары ключ/значение.

/*
function topSalary(salaries) {

    let max = 0;
    let maxName = null;

    for(const [name, salary] of Object.entries(salaries)) {
        if (max < salary) {
            max = salary;
            maxName = name;
        }
    }

    return maxName;
}
*/

/*let date = new Date();
alert(date.getDay());*/



//JSON – это формат данных, который имеет собственный независимый стандарт и библиотеки для большинства
// языков программирования.

//JSON поддерживает простые объекты, массивы, строки, числа, логические значения и null.

//JavaScript предоставляет методы JSON.stringify для сериализации в JSON и JSON.parse для чтения из JSON.

//Оба метода поддерживают функции преобразования для интеллектуального чтения/записи.

//Если объект имеет метод toJSON, то он вызывается через JSON.stringify.

//Преобразуйте user в JSON, затем прочитайте этот JSON в другую переменную.
/*
let user = {
    name: "Василий Иванович",
    age: 35
};

let json = JSON.stringify(user);
alert(json);*/


//Напишите функцию replacer для JSON-преобразования, которая удалит свойства, ссылающиеся на meetup:
/*
let room = {
    number: 23
};

let meetup = {
    title: "Совещание",
    occupiedBy: [{name: "Иванов"}, {name: "Петров"}],
    place: room
};
room.occupiedBy = meetup;
meetup.self = meetup;

alert( JSON.stringify(meetup, function replacer(key, value) {
    return (key != "" && value == meetup) ? undefined : value;
}));
*/

/*
let name = "John";

function sayHi() {
    alert("Hi, " + name);
}

name = "Pete";
sayHi();*/

/*
function makeWorker(){
    let name = "Pete";
    return function (){
        alert(name);
    };
}
let name = "John";

let work = makeWorker();

work();
*/

/*function sayHiBye(firstName, secondName) {
    function getFullName(){
        return firstName + secondName;
    }
    alert("Hello," + getFullName("Даниил", "Бабяк") );
    alert("Bye," + getFullName("Даниил", "Бабяк") );
}*/

/*
function sayHiBye(firstName, lastName) {

// функция-помощник, которую мы используем ниже
function getFullName() {
return firstName + " " + lastName;
}
alert( "Hello, " + getFullName() );
alert( "Bye, " + getFullName() );

}
sayHiBye(1, 2);*/

/*function sum(a){
    return function (b){
        return a + b ;
    };
}
alert(sum(1)(2));
alert(sum(5)  (-2));*/

/*const a = 5;

function myFn(){
    function innerFn(a = 3){
        alert(a);
    }
    innerFn();
}

myFn();*/




/*let user = {
    firstName: "Вася",
};

function func(){
    alert(this.firstName);
}
let funcUser = func.bind(user);
funcUser();*/

/*let user = {
    firstName: "Вася",
}
function func(phrase){
    alert(phrase + ', ' + this.firstName);
}

let funcUser = func.bind(user);
funcUser("Иди нахуй");*/

/*let user = {
    name: "Вася",
    sayHi(){
        alert(`Привет, ${this.name}!`);
    }
};
let sayHi = user.sayHi.bind(user);
sayHi();
setTimeout(sayHi, 2000);*/

/*let user = {
    firstName: "Вася",
    say(phrase){
        alert(`${phrase}, ${this.firstName}!`);
    }
};

let say = user.say.bind(user);
say("Пошел нахуй");
say("Ты");*/

/*
let obj = {
    name: "John",
    lastname:"Smith",

    get fullName(){
        return `${this.name} ${this.lastname}`;
    },

    set fullName(value){
        [this.name, this.lastname] = value.split(" ");
    }
};

alert(obj.fullName);

obj.fullName = "Alice Cooper";
alert(obj.name);
alert(obj.lastname);
*/

/*
let user = {
    name: "John",
    lastName: "Smith",
};

Object.defineProperty(user, 'fullName', {
    get() {
        return `${this.name} ${this.lastName}`;
    },

    set(value) {
        [this.name, this.lastName] = value.split(" ");
    }
});
alert(user.fullName);

for (let key in user){
    alert(key);
}*/

/*let user = {
    get name(){
        return  this._name;
    },
    set name(value){
        if (value.length < 4){
            alert("Имя слишком короткое, нужно больше 4 символов");
            return;
        }else {
            alert("Красава");
        }
        this._name = value;
    }
};

user.name = "Daniil"; //красава
alert(user.name);

user.name = "";*/

/*function User(name, birthday) {
    this.name = name;
    this.birthday = birthday;

    // возраст рассчитывается из текущей даты и дня рождения
    Object.defineProperty(this, "age", {
        get() {
            let todayYear = new Date().getFullYear();
            return todayYear - this.birthday.getFullYear();
        }
    });
}

let john = new User("John", new Date(1992, 6, 1));

alert( john.birthday ); // доступен как день рождения
alert( john.age );*/


/*
let animal = {
    eats: true
};
let rabbit = {
    jumps: true
}

rabbit.__proto__ = animal;

alert(rabbit.jumps);
alert(rabbit.eats);*/

/*let animal = {
    eats:true,
    walk(){
        alert("Animals walk");
    }
};

let rabbit = {
    jumps:true,
    __proto__:animal,
};

rabbit.walk();*/


/*
let animal = {
    eats:true,
    walk(){
        alert("Animals walk");
    }
};

let rabbit = {
    jumps:true,
    __proto__:animal,
};

let longEar = {
    earLenght: 10,
    __proto__:rabbit,
}

longEar.walk();
alert(longEar.jumps);
alert(longEar.eats);*/


/*
let animal = {
    eats: true,
};

function Rabbit(name){
    this.name = name;
}
Rabbit.prototype = animal;
let rabbit = new Rabbit("White Rabbit");

alert(rabbit.eats);

*/

/*function Rabbit(name){
    this.name = name;
};
let rabbit = new Rabbit("White Rabbit");
let rabbit2 = new Rabbit("Black Rabbit");

alert(rabbit);
alert(rabbit2);*/

/*function User(name){
    this.name = name;
}
let user = new User("Что-то");
let user1 = new user.constructor("Что-то-то");

alert(user.name);
alert(user1.name);*/

/*let obj = {};
alert(obj.__proto__ === Object.prototype);*/

/*let arr = [1, 2, 3];
/!*alert(arr.__proto__ === Array.prototype);
alert(arr.__proto__.__proto__ === Object.prototype);
alert(arr.__proto__.__proto__.__proto__);*!/

alert(arr);*/

/*String.prototype.show = function (){
    alert(this);
};

"BOOM!".show();*/

/*
let obj = {
    0: "hello",
    1: "world",
    length:2,
};
obj.join = Array.prototype.join;
alert(obj.join(','));
*/

/*
let animal = {
    eats:true,
};

let rabbit = Object.create(animal);

alert(rabbit.eats);

alert(Object.getPrototypeOf(rabbit) === animal);
Object.setPrototypeOf(rabbit, {});*/

/*
let animal = {
    eats:true,
}

let rabbit = Object.create(animal, {
      jumps: {
          value:true
      }
    });
alert(rabbit.jumps);
*/

/*let clone = Object.create(Object.getPrototypeOf(obj), Object.getOwnPropertyDescriptors(obj));*/

/*
let obj = Object.create(null);

let key = prompt("What's the key?", "__proto__");
obj[key] = "some value";
alert(obj[key]);*/

/*class User {
    constructor(name) {
        this.name = name;
    }
    sayHi(){
        alert(this.name);
    }
}

let user = new User("Иван");
user.sayHi();*/

/*
function makeClass(phrase){
    return class {
        sayHi(){
            alert(phrase);
        };
    };
}
let User = makeClass("Привет");
new User().sayHi();
*/

/*
class User {
    constructor(name) {
        this.name = name;
    }

    get name(){
        return this.name;
    }

    set name(value){
        if (value < 4 ){
            alert("Имя короткое");
            return;
        }
        this._name = value;
    }
}
let user = new User("Иван");
alert(user.name);

user = new User("");*/

/*let name = prompt("Введите имя");
if (name === 'Sting' || 'Number'){
    alert(`Ваше имя ${name}`);
}else{
    alert("Вветиде корректное имя");
}*/

/*
let user = {
    passport: confirm('У вас есть паспорт?'),
    covid: confirm('У вас есть справка о ковиде?'),
}

if (user.covid && user.passport === true){
    alert('Вам разрешен выезд');
}else if(user.covid || user.passport === true){
    alert(`Вам не хватает документов`);
}else {
    alert("У вас вообще нету документов");
}*/

/*
let arr = [
    "Ябоко",
    "Апельсин",
    "Хуйня",
];

arr.forEach(alert(arr));
*/

/*const multiplySum = (value, multiply = 1) => {
   return value * multiply;
}
alert(multiplySum(20, 5));*/

/*const Error = () => {
    throw new Error ('Some error');
}
Error();
alert("После ошибки");*/

/*const fnWithError = () => {
    throw new Error('Some Error');
}
try{
    fnWithError()
}catch (error){
    console.error(error)
    console.log(error.message);
}
console.log("continue");*/

/*const acces = 18;
const maxAge = 100;

let age = prompt('Введите ваш возраст', 0);

if (age < acces) {
    alert('Ухади');
}else if (age >= acces){
    if (age <= 100){
        alert("Доступ разрешен");
    }else{
        alert("Странный возраст");
    }
} else{
    alert('Это не возраст');
}*/

/*
const myArray = ["Daniil", 20, Work = false];
console.log(myArray);
*/

/*let city = prompt('Введите ваш город', '');*/

/*myArray.push(city);

console.log(myArray);*/


/*const removeElement = myArray.pop();
console.log(myArray);
console.log(removeElement);*/


/*
let myArray = [1, 2, 3];
console.log(myArray);

const newArray = myArray.map(function (el){
    return el * 3;
});
console.log(newArray);
console.log(myArray);
*/

/*let user = {
    age: 25,
    name: "Daniil",
    city: "Kharkiv",
    marry: false,
}
const {age, name, city, marry} = user;
for (let key in user){
    alert(user[key]);
}*/

/*let fruits = ['Apple', 'Orange'];

const [fruitsOne, fruitsTwo] = fruits;

alert(fruitsOne);
alert(fruitsTwo);*/

/*let user = {
    name: "Daniil",
    age: 25,
    hasWife: false,
}

const userInfo = ({name, age, hasWife}) => {
    if(!age){
        return console.log(`user ${age} is not defiend`);
    }else
        return console.log(`user ${name} has age = ${age}`);
}
userInfo(user);*/

/*
let user = {
    name: prompt('Ваше имя', ''),
    age: prompt('Ваш возраст',0),
}
if (user.name && user.age ) {
    alert(`Имя пользователя равно ${user.name}, а его возраст равен ${user.age}`);
}else{
    alert('Пользователь не полный, заполните данные!');
}*/

/*let sumPositivNumbers = (a,b) => {
    if (typeof a !== 'number' || typeof b !== 'number'){
        alert('Одно или оба значения не являются числом');
    }
    if ( a < 0 || b < 0){
        alert('Одно или оба значения имеют отрицательное значение');
    }
    return console.log(a + b);
};
sumPositivNumbers(10, 'Десять');*/

/*let age = prompt('Введите возраст',0);

console.log(age >= 0 && age < 100 ? age : console.log('шляпа какая-то'));*/

/*let user = prompt('Введите имя', '');

const userName = user > '' ? user : 0;

alert(userName);*/

/*let user = ["Даня", "Саня", "Жена"];

user.forEach((element, index)=>{
    console.log(element, index);
})*/

/*let a = 10;

while (a < 20){
    console.log(a)
        a++;
}*/

/*let i = 0;

for ( i = 0; i < 5; i++){
    console.log(i);
}*/

/*let i = 0;

do {
    console.log(i);
    i++
}while (i < 5);*/

/*const myObject = {
    x: 10,
    y:20,
    z: 'abc',
}
for (const key in myObject){
    console.log(key, myObject[key]);
}*/

/*let str = "sometext";
let chars = Array.from(str);
chars.forEach(alert);*/

/*
let myObject = {
    x:20,
    y:true,
    z:'abc',
}
Object.keys(myObject).forEach(key =>{
    console.log(key, myObject[key]);
})*/



/*console.log(Object.keys({
    myName: 'Daniil',
    isStudent:true,
}))*/

/*console.log(Object.values({
    name: 'Daniil',
    age:20,
}));*/

/*let mySring = 'hey';

for (let letter of mySring){
    console.log(letter);
}*/

/*let myArray = [10, true, 'Daniil'];

for (let index of myArray){
    console.log(index);
}*/



/*export  function myName() {
    let name = prompt('Ваше имя', '');
    console.log(`Ваше имя ${name}`)
}*/

/*export function myName(){
    return console.log(prompt('Введите ваше имя', ''));
}
export function mySecondName(){
    let secondName = prompt('Введите вашу фамилию', '');
   return console.log((secondName));
}*/
/*let a = 1
let b = 'b'

export {
    a,
    b
}*/

/*
let first = 1
let second = 2

export {first, second}
*/

/*class Comment  {
    constructor(text){
        this.text = text;
        this.votesQty = 0;
    }

    upvote(){
        this.votesQty += 1;
    }
   //Добавление нового метода c доступом исключетельно для класса Comment. Не наследуется для созданых экземпляров!.
    static mergeComments (first,second){
        return (`${first} ${second}`)
    }

}

const firstComment = new Comment('First Comment');

firstComment.upvote();
console.log(firstComment); //1
firstComment.upvote();
console.log(firstComment); //2

const secondComment = new Comment('Second Comment');
secondComment.upvote();
console.log(secondComment); //1

//Проверка на наличие собственных свойств объекта firstComment
console.log(firstComment.hasOwnProperty('text')); //true
console.log(firstComment.hasOwnProperty('votesQty')); //true
console.log(firstComment.hasOwnProperty('upvote')); //false
console.log(firstComment.hasOwnProperty('hasOwnProperty')); //false

console.log(Comment.mergeComments('FirstString', 'SecondString'))
console.log(Comment.prototype === firstComment.__proto__); //Является прототипом объекта



class NumbersArray extends Array{
    sum(){
        return this.reduce((el, acc) => acc += el, 0);
    }
}
const myArray = new NumbersArray(2,5,7);
console.log(myArray);
console.log(myArray.sum());

console.log(NumbersArray.prototype === myArray.__proto__); //Является прототипом масива


let name = 'Bogdan';

console.log(name);
console.log(name.__proto__); //Наследуется от класса String. У этого класса есть встроенные методы.
console.log(name.length);//6 метод length - встроенный метод класса String, переменная name наследуется как раз таки
//от класса String.

let age = 10;

console.log(age);
console.log(age.__proto__);//Тоже самое что и со строкой, только наследуется от класса Number.
//Класс Number в свою очередь имеет свои встроенные методы.

const myName = new String('Daniil');

console.log(myName); //Создание нового объекта, который имеет прототип String.*/

/*
let animal = {
    eats:true,
}
let fish = {
    swim:true,
}
let bird = {
    fly:true,
}



bird.__proto__= fish;
fish.__proto__ = animal;

let penguin = {
    __proto__:bird,
    age:25,
}

console.log(penguin.fly);
console.log(penguin.swim);
console.log(penguin.eats);
*/


/*class MyNewClass {
    constructor(age) {
        this.age = prompt('Ваш возраст?', 0);
        this.defaultText = 'defaultText';
    }
}*/

/*const firstMyNewClass = new MyNewClass(25);

firstMyNewClass.defaultText = prompt('Введите текст', '');

console.log(firstMyNewClass);*/

/*const secondMyNewClass = new MyNewClass();

secondMyNewClass.defaultText = prompt('Текст?', '');

console.log(secondMyNewClass);*/


/*fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(answer => answer.json())
    .then(json => console.log(json))
    .catch(error => console.error(error))

getModuls('https://jsonplaceholder.typicode.com/todos/')
    .then(data => console.log(data))
    .catch(error => console.error(error))

getDate2('https://jsonplaceholder.typicode.com/todos/2')
    .then(answer => console.log(answer))
    .catch(error => console.error(error))*/

/*const myFn = async () => {
    return 'Good'
}
myFn()
.then(value => console.log(value))*/

/*
const myError = async () => {
    throw new Error('That was an error')
}
myError()
.then(value => console.log(value))
.catch(error => console.log(error.message));*/

/*const myTimeOut = () =>
    new Promise((resolve, reject) =>
    setTimeout(() => resolve(), 5000)
    )
const asyncFn = async () => {
    console.log('Timer Starts')
    await myTimeOut()
    console.log('Timer End')
}
asyncFn()*/

/*
const getDate = async (url) => {
    const res = await fetch(url)
    const json = await res.json()
    return json
}
const url = 'https://jsonplaceholder.typicode.com/todos/1'

try {
    const data = await getDate(url)
    console.log(data)
}catch (error){
    console.log(error.message);
}
*/

/*let sum = function (a, b) {
    return console.log(a + b)
}
sum(2, 6);*/

/*
let sum = (a, b) => a + b;
console.log(sum(2,6));

let number = a => a;
console.log('name');

let number2 = (a, b) => {
    return console.log(a + b)
}
number2(2,6)

function printMyName(){
    console.log('Daniil')
}
setTimeout(printMyName, 2000);*/


/*const myObject = {
    name:'Daniil',
    age:10,
}
console.log(myObject);

console.log(Object.keys(myObject));

const myArray = [1, 20, 30];

const multiply = myArray.map((num) => num * 2);

console.log(multiply);*/

/*let myObj = {
    name:'Daniil',
    age:20,
    country:'Ukraine',
    status:false,
}

for (let key in myObj){
    console.log(key);
}

const myObj2 = Object.keys(myObj);

console.log(myObj2);*/

/*let user = {
    name:true,
}

let user2 = {
    age:20,
}

let user3 = Object.assign(user, user2);

console.log(user3);*/


/*let name = 'Daniil';

console.log(name.__proto__);*/



/*let user = {
    name:'Daniil',
    age:20,
}

Object.defineProperty(user, "name",{
    writable:false
})
Object.defineProperty(user, "age",{
    enumerable:false
});

for (let key in user){
    console.log(key);
}*/
/*'use strict'
let admin = {
    isAdmin:true,
}
let visitor = {
    isAdmin:false,
    visiter:true,
}
let user ={
    name:'Daniil',
}

Object.assign(user, visitor, admin);
console.log(JSON.stringify(user));
console.log(JSON.stringify(visitor));
console.log(JSON.stringify(admin));*/



/*function myFn(){
    a = true;
    return console.log(a);
}
myFn()*/

/*class MyName {
    constructor() {
        this.name = prompt('Ваше имя', '');
        this.age = 0;
    }
    countForAge(){
        this.age = prompt('Ваш возраст?', 0);
    }
}
const myFirstName = new MyName()
myFirstName.countForAge();
console.log(myFirstName);

const mySecondName = new MyName()
mySecondName.countForAge();
console.log(mySecondName)*/

/*let int = 2122131231534656756879564353241231545769789780n;

console.log(typeof int);*/

/*class MyClass {
    constructor() {
        this.name = name;
    }
}

const myFirstClass = new MyClass()
myFirstClass.name = 'Daniil';
console.log(myFirstClass.name);

const mySecondClass = new MyClass()
mySecondClass.name = 'Misha';
console.log(mySecondClass.name);*/


/*let myFn = function (){
    let myName = prompt('Ваше имя', '');
    let mySecondName = prompt('Ваша фамилия', '');
    if (myName && mySecondName > ''){
        console.log(`Ваше имя ${myName}, а фамилия ${mySecondName}`);
    }else{
        console.log('Что-то не так');
    }
}
myFn();*/
/*
let a = prompt('А?', '')
let b = prompt('B?', '')

if (a || b > ''){
    alert('Окей')
}else{
    alert('Не окей')
}*/

/*
const word = 'Apple';

for (const letter of word){
    console.log(letter);
}*/

/*const asyncFn = async () =>{
    throw new Error('Ошибочка')
}
asyncFn()
    .then(value => console.log(value))
    .catch(error => console.log(error));*/

/*
const timerPromise = () =>
    new Promise((resolve, reject) =>
        setTimeout( () => resolve(),2000))


const asyncFn = async () => {
    console.log('timer start')
    await timerPromise()
    console.log('timer end')
}
asyncFn()*/

/*const getData = async (url) =>{
    const res = await fetch(url)
    const json = await res.json()
    return json
}

const url = 'https://jsonplaceholder.typicode.com/todos/1';

try {
    const data = await getData(url)
    console.log(data)
}catch (error){
    console.log(error.message);
}*/

/*const myArray = [1,2,3];
console.log(myArray)
const myArray2 = myArray.map(el => el*2);
console.log(myArray2);*/

/*let map = new Map();
map.set("1", "str")
map.set(1, "num1")
map.set(true, "bool1")

console.log(map.get(1))// "num1"
console.log(map.get("1"))// "str"
console.log(map.get(true))// "bool1"*/


/*
let a = {
    a:10,
    b:false,
    c:null
}

let b = Object.values(a)
console.log(b);*/

/*let a = [];

console.log(typeof a);

console.log(a.__proto__);*/

/*let a = {
    a:10,
    name:'Daniil'
}*/

/*let user = {
    name:'Danii',
    sayHi(){
        alert('Hi')
    }
}

Object.defineProperty(user, "name",{
    writable:false
})
Object.defineProperty(user,"sayHi",{
    enumerable:false
})

console.log(user);
for(let obj in user){
    console.log(obj);
}*/

/*const getDate = async (url) => {
    const res = await fetch(url)
    const json = await res.json()
    return json
}
const url = 'https://jsonplaceholder.typicode.com/todos/'

try{
    const data = await getDate(url)
    console.log(data)
}catch (error){
    console.log(error.message);
}*/


/*const timerPromise = () =>
    new Promise((resolve, reject)=>{
        setTimeout(() => resolve(), 5000)
    })

const asyncFn = async () => {
    console.log('timer start')
    await timerPromise()
    console.log('timer end')
}
asyncFn();*/

/*let height = 0

alert(height || 100)//100

alert(height ?? 100)//0*/

/*const myArray = [1,4,100];

const myArray2 = myArray.map((ele) => ele * 2);
console.log(myArray2);*/
/*

let receipMap = new Map([
    ["Огурец", 500],
    ["Апельсин", 200],
])

for (let vegetables of receipMap.keys()){
    alert(vegetables);
}

for (let amount of receipMap.values()){
    alert(amount)
}
for (let entries of receipMap){
    alert(entries);
}
*/

/*
let arr = [1,2,3];

console.log(arr.includes(2));

console.log(Array.isArray(arr));
*/

/*
sayHi('Вася')
function sayHi(name){
    return alert (`Привет ${name}`)
}
*/

/*const person = new Object({
    name:'Daniil',
    age:20,
    greet: function(){
        console.log('Greet!')
    }
})

Object.prototype.sayHello = function (){
    console.log('hello')
}

const newPerson = Object.create(person);

console.log(newPerson);*/

/*
const myName = new String('Daniil');
console.log(myName);
*/


/*function hello(){
    console.log('Hello', this)
}

const person = {
    name:'Daniil',
    age:25,
    sayHello:hello,
    sayHelloWindow:hello.bind(this),
    logInfo: function (job, phone){
        console.group(`${this.name}: info`)
        console.log(this.name)
        console.log(this.age)
        console.log({job})
        console.log({phone})
        console.groupEnd()
    }
}
person.logInfo()

const lena = {
    name:'Elena',
    age:23,
}

//person.logInfo.bind(lena, 'Frontend', '+0990289537')()
//person.logInfo.call(lena, 'Frontend', '+0990289537')
person.logInfo.apply(lena, ['Frontend', '+0990289537'])*/


/*const array = [1,2,3,4,5]

function multBy(arr, n){
    return arr.map(function (i){
        return i * n
    })
}
console.log(multBy(array, 20))*/

/*const array = [1,2,3,4,5]
Array.prototype.multBy = function (n){
   return this.map(function (i){
       return i * n
   })
}
console.log(array.multBy(2));*/

/*const createIncrementor = function (n){
    return function (num){
        return n + num
    }
}
const addOne = createIncrementor(1)
const addTen = createIncrementor(10)

console.log(addOne(10))
console.log(addOne(11))
console.log(addTen(10))
console.log(addTen(11))*/

/*
const getUrl = function (domain){
    return function (url){
        return(`https://${url}.${domain}`)
    }
}
const comUrl = getUrl('com');
console.log(comUrl('google'))
*/

/*console.log('Request data...')
const p = new Promise((resolve, reject) =>{
    setTimeout(() =>{
        console.log('Preparing data...')
        const backendData = {
            server:'aws',
            port:2000,
            status:'working'
        }
        resolve(backendData)
    },2000)
})

p.then((data) => {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            data.modified = true
            resolve(data)
        },2000)
    })
    /!*.then(clientData=>{
      console.log('Data received', clientData )
    })*!/
}).then(clientData => {
    console.log('Data received', clientData )
})*/

/*const sleep = ms =>{
     return new Promise(resolve => {
         setTimeout(() => resolve(), ms)
     })
}
sleep(2000).then(()=> console.log('After 2 seconds'))
sleep(3000).then(()=> console.log('After 3 seconds'))*/



/*const person = Object.create(
    {
    calculateAge() {
        console.log('Age:',new Date().getFullYear() - this.birthYear)
    }
    },
    {
    name:{
        value:'Daniil',
        enumerable:true,
        writable:true,
        configurable:true,
    },
    birthYear:{
        value:2002,
        enumerable:false,
        writable:false,
        configurable:false,
    },
    age:{
        get(){
          return new Date().getFullYear() - this.birthYear
        },
        set(value){
          /!*  document.body.style.background = 'red'*!/
            console.log('Set age:', value)
        }
    }
})

for(let key in person){
    if(person.hasOwnProperty(key)) {
        console.log('Key', key, person[key]);
    }
}
/!*person.age = 'dwedwe'*!/*/



/*
class Animal {
    constructor(options) {
        this.name = options.name
        this.age = options.age
        this.hasTail = options.hasTail
    }
    voice(){
        console.log('I am Animal')
    }
}


const animal1 = new Animal({
    name:'Animal',
    age:5,
    hasTail:true,
})
console.log(animal1);*/


/*
class Cat extends Animal{
    static type = 'CAT'
    constructor(options) {
        super(options);
        this.color = options.color
    }
    voice(){
        super.voice()
        console.log('I am cat')
    }
    get ageInfo(){
        return this.age * 7
    }
    set ageInfo(newAge){
        this.age = newAge
    }
}

const cat = new Cat({
    name:'Cat',
    age:7,
    hasTail:true,
    color:'black'
})
console.log(cat.voice());
console.log(cat.ageInfo);

cat.ageInfo = 8
console.log(cat.ageInfo)
*/


/*
let people = [
    {name:'Daniil', age:20},
    {name:'Dima', age: 30},
]
people.forEach((person)=>console.log(person))

let newPeople = people.map(person =>{
    return person.age * 2
})
console.log(newPeople)*/

/*const arr = [1,2,3,4,5]

Array.prototype.myltBy = function (n){
    return this.map((i)=>{
        return i * n
    })
}

console.log(arr.myltBy(25))


const newArr = [1,5,6]

console.log(newArr.myltBy(2));*/
/*let person = {
    name:'Daniil',
    age:20,
    personInfo:function (job, phone){
        console.log(`Его имя ${this.name}`)
        console.log(`Его Возраст ${this.age}`)
        console.log(`Работа ${job}`)
        console.log(`Телефон ${phone}`)
    }
}

person.personInfo()

let person2 = {
    name:'Lena',
    age:25
}

person.personInfo.call(person2)*/

/*const arr = [1,2,3,4,5]

Array.prototype.myltBy = function (n){
    return this.map(function (i){
        return n * i
    })
}
arr.myltBy(25)*/

/*myFn(20)

function myFn(age){
    return console.log(`Мой возраст: ${age}`)
}*/


/*
class Car {
    constructor() {
    this.price = 10000;
    this.model = 'Car'
    }
    getPrice(){
        return this.price;
    }
    getDescription(){
        return this.model;
    }
}

class Tesla extends Car {
    constructor( ) {
        super();
        this.price = 25000
        this.model = 'Tesla'
    }
}

class Autopilot {
    constructor(car) {
    this.car = car;
    }
    getPrice(){
        return this.car.getPrice() + 5000;
    }
    getDescription(){
        return `${this.car.getDescription()} with autopilot`
    }
}

class Parktronic {
    constructor(car) {
      this.car = car
    }
    getPrice(){
        return this.car.getPrice() + 3000
    }
    getDescription(){
        return `${this.car.getDescription()} with parktronic`
    }
}


let tesla = new Tesla();
    tesla = new Autopilot(tesla);
    tesla = new Parktronic(tesla);

    console.log(tesla.getPrice(), tesla.getDescription());
    //


    let tesla2 = new Tesla();
    tesla2 = new Autopilot(tesla2);

    console.log(tesla2.getPrice(), tesla2.getDescription());

    class Audi extends Car{
        constructor() {
            super();
            this.price = 20000
            this.model = 'Audi'
        }
    }
    let audi = new Audi();

    audi = new Autopilot(audi);

    console.log(audi.getPrice(), audi.getDescription());
*/
/*function createIncrementor(n){
   return function (num){
       return n + num
   }
}*/


/*
const addOne = createIncrementor(1);
console.log(addOne(20));


const addTwo = createIncrementor(2)
console.log(addTwo(20));



function generateUrl(domain){
    return function (url){
        return `https://${url}.${domain}`
    }
}
const comUrl = generateUrl('com')
const ruUrl = generateUrl('ru')
console.log(comUrl('google'));
console.log(ruUrl('Vk'))*/

/*
const user = {
    firstName:'Daniil',
}

function func(){
    alert(this.firstName)
}

let funcUser = func.bind(user);
funcUser();*/

/*const user = {
    firstName:'Daniil',
    sayHi(){
        alert(`Привет ${this.firstName}`)
    }
}

let sayHi = user.sayHi.bind(user);
sayHi();

setTimeout(sayHi, 1000);*/

/*
class Animal {
    constructor() {
        this.life = true;
    }
}

class Cat extends Animal{}
let cat = new Cat()

console.log(cat instanceof Cat);*/

/*
const person = {
    name:'Daniil',
    age:25,
    status:{
        wife:false
    }
}
const person2 = Object.assign({}, person);
person2.age = 27
console.log(person2);*/


/*
const person = {
    name:'Danii',
    age:25,
    status:{
        wife:true,
    }
}

const person2 = JSON.parse(JSON.stringify(person));
person2.name = 'Misha'
person2.status.wife = false
console.log(person)
console.log(person2);*/

/*
function createCalcFunction(n){
    return function (){
       return console.log((1000 * n))
    }
}
const culcFn = createCalcFunction(42)

culcFn()*/

/*
function getUrl(domain){
    return function (url){
        return `https://${url}.${domain}`
    }
}
const getCom = getUrl('com')
console.log(getCom('google'))


function multBy(n){
    return function (num){
        return num * n
    }
}

const getResult = multBy(2)
console.log(getResult(20))


const myArray = [1,2,3,4,5];

Array.prototype.mult = function (n){
    return this.map(function (i){
        return i * n
    })
}

console.log(myArray.mult(5));

const myNewArray = [2,4,10]

console.log(myNewArray.mult(101))


function makeIncrementor(n){
    return function (num){
        return n + num
    }
}

const addOne = makeIncrementor(1)

console.log(addOne(20))
*/

/*function bind(context, fn){
return function (...args){
    fn.apply(context, args)
}
}
function logPerson(){
    console.log(`Person:${this.name}, ${this.age}, ${this.job}`)
}

const person1 = {
    name:'Михаил',
    age:22,
    job:false
}

const person2 = {
    name:'Daniil',
    age:20,
    job:'It',
}
bind(person1, logPerson)()
bind(person2, logPerson)()*/


/*function Cat(color, name){
    this.color = color
    this.name = name
    return console.log(`Цвет кота:${this.color}, а его имя:${this.name}`)
}
const myCat = new Cat('Черный', 'Милка')*/

/*const person = {
    name:'Daniil',
    age:20,
    infoPerson(){
       return  console.log(`Его имя:${this.name}, Возраст:${this.age}`)

    }
}
console.log(person);
const person2 = {
    name:'Vlad',
    age:24,
}

person.infoPerson.bind(person2)();
console.log(person2);*/


/*
if(true){
    var test = true;
}
alert(test) // true*/

/*
let myArray = [1,2,3];

console.log(Array.isArray(myArray))*/

/*
function getUrl(dom){
    return function (url){
        return console.log(`https://${url}.${dom}`)
    }
}
const getCom = getUrl('com')

getCom('google');*/


/*
Array.prototype.myltBy = function (i){
    return this.map((num)=>{
        return i * num
    })
}

const myArray = [1,2,3,4];

console.log(myArray.myltBy(20))*/

/*class Animal {
    constructor() {
        this.name = name;
        this.age = age;
    }
    voice(){
        console.log('Звучание')
    }
}

class Cat extends Animal{
    constructor() {
        super();
        this.name = 'Cat';
    }
    voice() {
        super.voice('Мяуканье');
    }
}
console.log(Animal)
console.log(Cat);*/

/*
let a = 111

function myFn(){
    let b = 222
    function myFn2(){
        let c = 333
    }
    myFn2()
}
console.log(myFn())*/

/*
let person = {
    name:'Daniil',
    age:20,
    sayHi(){
        return console.log(this.name)
    }
}

person.sayHi();
*/


/*
let person = {
    name:'Daniil',
    age:20,
    sayHi(){
        return console.log(this.name)
    }
}

let admin = person;
admin.name = 'Lox'
admin.sayHi();
*/

/*
function sayHi(){
     console.log((this.name))
}*/


/*
let person1 = {name:'Daniil'};
let person2 = {name:'Vladik'};

function sayHi(){
     console.log(this.name)
}

person1.f = sayHi
person2.f = sayHi

person1.f()
person2.f()*/


/*let calculator = {
    sum(){
        return this.a + this.b
    },
    mul(){
        return this.a * this.b
    },
    read(){
        this.a = +prompt('a?', 0)
        this.b = +prompt('b?', 0)
    }
};

calculator.read()
console.log(calculator.sum());
console.log(calculator.mul());*/

/*

let ladder = {
    step:0,
    up(){
        this.step++;
    },
    down(){
        this.step--;
    },
    showStep:function (){
        console.log(this.step)
    }
};

ladder.up()
ladder.up()
ladder.up()
ladder.showStep()
ladder.down()
ladder.showStep()*/

/*
let arr = [1,2,3];

let arr2 = arr.map((el)=> el *2)

console.log(arr)
console.log(arr2)

arr.forEach(alert)*/



/*let myFn = function (i){
    return function (n){
        return console.log(n * i)
    }
}

const myNewFn = myFn(1)
myNewFn(4);*/

/*let person1 = {
    name:'Danii',
    status:{
        wife:false
    }
}
let person2 = JSON.parse(JSON.stringify(person1))
person2.name = 'Vlad'
person2.status.wife = true;
console.log(person1)
console.log(person2)*/

/*function getUrl(domain){
    return function (url){
        return console.log( (`https://${url}.${domain}`) )
    }
}

const com = getUrl('com')

com('google')*/

/*function getIncrementor(i){
    return function (n){
        return n + i
    }
}
const addOne = getIncrementor(1)
console.log(addOne(20));*/

/*const person = {
    name:'Daniil',
    secondName:'Babiak',
    age:25,
    personInfo: function (){
        console.log(`Его имя:${this.name}, Фамилия:${this.secondName}, Возраст:${this.age}`)
    }
}

const person2 = {
    name: prompt('Ваше имя?', ''),
    age: +prompt('Ваш возраст?', 0),
    secondName: prompt('Ваша фамилия?', '')
}
//person.personInfo.bind(person)()
//person.personInfo.call(person,)
person.personInfo.apply(person, [])*/

/*
Array.prototype.mytlBy = function (i){
    return this.map(function (n){
        return i * n
    })
}

const myArray = [1,2,3]
const myArray2 = [4,5,6]

   console.log( myArray.mytlBy(20));
   console.log( myArray2.mytlBy(225));*/


/*
class Animal {
    constructor() {
        this.name = name;
        this.age = 0
    }
    voice(sound){
        console.log (this.sound = sound);

    }

}

class Cat extends Animal{
    constructor(name, age) {
        super();
        this.name = name;
        this.age = age
    }
}
const myFirstCat = new Cat('Додик', 20);
myFirstCat.voice('Мяу')
console.log(myFirstCat)
*/


/*
const user = {
    name:'Daniil',
    sayHello(){
         console.log( `Привет, я - ${this.name}`, this);
    }
}
user.sayHello()

const f = user*/

/*document.body.style.background = 'red'

setTimeout(() => document.body.style.background = "", 2000)*/

/*
alert(location.href)
if(confirm('Перейти на страницу Ютуба?')){
    location.href = 'https://www.youtube.com/'
}*/

/*let first = document.getElementById('first')

first.style.background = 'red';*/


/*
let elements = document.querySelectorAll('ul > li:last-child');

for(let elem of elements){
    alert(elem.innerHTML);
}*/

/*
const bodyElement = document.body;

const childNodes = bodyElement.childNodes;
console.log(childNodes)

/!*for (const elem of childNodes){
    console.log(elem)
}*!/


const bodyChildren = bodyElement.children
console.log(bodyChildren)

const firstClindren = bodyElement.firstElementChild;
const lastChildren = bodyElement.lastElementChild
console.log(firstClindren)
console.log(lastChildren)

const previousSibling = bodyElement.previousElementSibling
const nextSibling = bodyElement.nextSibling
const parentSibling = bodyElement.parentElement;

console.log(previousSibling)
console.log(nextSibling)
console.log(parentSibling);


const elemOne = document.querySelectorAll('.firstUl')
console.log(elemOne)

const elemTwo = document.querySelectorAll('li')
console.log(elemOne)


const elemThree = document.querySelectorAll('.firstUl .firstLi')
console.log(elemThree)


const elemFour = document.querySelectorAll('#omgid')
console.log(elemFour)

const elemFive = document.querySelectorAll('li')
console.log(elemFive[2]);

for(let item of elemFive){
    console.log(item)
}

elemFive.forEach((item)=>{
    console.log(item)
})

const subList = document.querySelectorAll('.three .newThree')
const subItem = subList[0].querySelectorAll('li')
console.log(subItem)

const lessonLins = document.querySelector('.newThree ');
console.log(lessonLins)

/!*const elemSix = document.getElementById('li3')
elemSix.style.background = 'red'*!/

const elemSeven = document.getElementsByClassName('mainBackGround')[3].style.background = 'pink'


let backgroundElement = document.querySelector('.tired')
let backgroundElementNew = backgroundElement.innerHTML;
console.log(backgroundElementNew);*/

/*const button = document.querySelector('#button');
const img = document.querySelector('#logo');


button.value = 'Удалить';*/


/*
button.addEventListener('click', function (){
    console.log('ckick1')
    img.remove();
})
button.addEventListener('click', function (){
    console.log('ckick2')
    img.remove();
})
button.addEventListener('click', function (){
    console.log('ckick3')
    img.remove();
})
*/


/*button.onclick = function (){
    console.log('click')
}

const inputText = document.querySelector('#input-text')
const textBlock = document.querySelector('#text-block')
inputText.addEventListener('input', function (){
    console.log(inputText.value);
    textBlock.innerText = inputText.value
} )*/

/*
const counterElement = document.querySelector('#counter')
let counter = 0;
let timerID;



const btnStart = document.querySelector('#start')
btnStart.addEventListener('click', function (){
    let timerID = setInterval(function (){
        console.log('btnStart')
        counter++
        counterElement.innerText = counter;
    },1000)
})
const bntStop = document.querySelector('#stop')
bntStop.onclick =  function (){
    console.log('bntStop')
 clearInterval(timerID);
}*/
/*const btnMain = document.querySelector('#btn-main1')
btnMain.addEventListener('click', function (event){
    if(event.altKey && event.shiftKey){
        alert('Спасибо')
    }
});

const inputMain = document.querySelector('#input-main1')

inputMain.addEventListener('mouseover',function (event){
    let value;
     this.value=event.clientX+':'+event.clientY
})

const pMain = document.querySelector('#p-main')
pMain.addEventListener('dblclick',function (){
    alert('DoubleClick')
});

const mainSpan = document.querySelector('#mainSpan')
mainSpan.addEventListener('dblclick', function (){
    alert('Клик!')
})

const copy = document.querySelector('#someTextWithoutCopy')
copy.addEventListener('copy', function (){
    alert('Вы не можете скопировать этот текст')
})*/

/*window.onbeforeunload = function (){
    return false;
};*/

/*function work(){
    if(document.readyState == 'loading'){
        document.addEventListener('DOMContentLoaded', work)
    }else{
        work();
    }
}*/

/*let mytext = document.querySelector('#btnMyText')

mytext.addEventListener('click', function (){
    let text = document.getElementsByClassName('mytext')
   /!* text[0].innerHTML = "Ты кнопка"*!/
    for(let i = 0; i < text.length; i++){
        text[i].innerHTML = "Кнопка нажата"
        text[i].style.color = "purple";
    }
})*/
/*
if(confirm('Перейти на страничку ютуба?')){
    location.href = 'https://www.youtube.com/watch?v=sGGoLv3YA8Y&ab_channel=Recrent';
}
*/

/*
let url = 'https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits'

let fetchReqst = await fetch(url)
let commits = await fetchReqst.json()
alert(commits[0].author.login);
*/


/*
let requestURL = 'https://jsonplaceholder.typicode.com/todos/';

function sendRequest(method, url, body = null){
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest()
        xhr.open(method, url)

        xhr.responseType = 'json'
        xhr.setRequestHeader('Content-Type', 'application/json')

        xhr.onload = () =>{
            if(xhr.status >= 400){
                reject(xhr.response)//если больше 400 то это будет ошибка
            }else{
                resolve(xhr.response)
            }
             //распарсить из строки в объект
          /!*  console.log(JSON.parse( xhr.response) ) //либо так*!/
        }
        xhr.onerror = () =>{
            /!*console.log('Ошибка')*!/
            //либо
            reject(xhr.response) //если будет ошибка выведется сама ошибка + {}
        }
        xhr.send(JSON.stringify(body))
    })

}

/!*sendRequest('GET', requestURL)
    .then(data => console.log(data))
    .catch(err => console.log(err))*!/
const body = {
    name:'Daniil',
    age:25
}
sendRequest('POST', requestURL, body)
    .then(data => console.log(data))
    .catch(err => console.log(err))
*/

/*let socket = new WebSocket('wss://javascript.info/article/websocket/demo/hello')

socket.onopen = function (e){
    alert("[open] соединение установлено")
    alert("Отправляем данные на сервер")
    socket.send("Меня зовут Даниил")
};

socket.onmessage = function (event) {
    alert(`[message] Данные получены с севера : ${event.data}`)
};

socket.onclose = function (event){
    if(event.wasClean){
        alert(`[close] Соединение закрыто чисто, код=${event.code} причина ${event.reason}`)
    }else {
        alert('[close] соединение прервано')
    }
}

socket.onerror = function (error){
    alert(`[error] ${error.message}`)
}*/

/*
function* strGenerator(){
    yield 'H'
    yield 'e'
    yield 'l'
    yield 'l'
    yield 'o'
}

const str = strGenerator()

str.next()*/

/*Array.prototype.muly = function (n){
    return this.map(function (i){
        return  n * i
    })
}
const myArr = [1,2,3]
console.log( myArr.muly(2) )*/

/*const newDiv = document.getElementById('newId')

newDiv.innerText = '1234'*/

/*let change = document.getElementById('btnMyText2')

change.addEventListener('click', function (){
    let text = document.getElementsByClassName('mytext2')
    for (let i = 0; i < text.length; i++){
        text[i].innerHTML = "Дима Лох"
        text[i].style.color = "red";
        text[i].style.display = 'flex'
        text[i].style.justifyContent = 'center'
    }
    change.addEventListener('dblclick', function (){
        text[0].style.color = 'blue'
    })
    setTimeout(() =>{
        text[2].style.color = 'green'
    },2000)
})*/


/*
let firstH1 = document.querySelector('h1')

let secondH2 = firstH1.nextElementSibling

console.log(secondH2)*/



/*let myUrl = 'https://jsonplaceholder.typicode.com/todos/1';

let bntRequst = document.querySelector('#bnt-fetch')
bntRequst.addEventListener('click', async function (){
    let request = await fetch(myUrl)
    let commit = await request.json()
    console.log(commit)
    let values = document.querySelector('.fetchId')
    let text = document.querySelector('.fetchId2')
    values.innerText = `ID объекта: ${commit.id}`
    text.innerText = `Текст объекта: ${commit.title}`
})*/

/*
let myObj = {
    name:'Daniil',
    age:20,
    address:{
        country:'Ukraine',
        city:'Kharkiv',
    }
}

const {
    name: firstName = 'Без имени',
    age,
    car = 'Машины нету',
    address: {
        country,
        city,
    }
} = myObj
console.log(firstName, age, country, city, car)*/

/*
const firstObj = {
    first:true,
}

const secondObj = {
    second:true,
}

const thirdObj = {...firstObj, ...secondObj}
console.log(thirdObj)
*/

/*
const array = [1,2,3,10,105,20]

console.log(Math.max(...array))*/

/*
const person  = {
    name:'Daniil',
    age:20,
    country:'Ukraine',
    status:false
}

const {name, age, ...info} = person

console.log(name, age, info)*/

/*
const person  = {
    name:'Daniil',
    age:20,
    country:'Ukraine',
    status:false
}
const newPers = {
    name:'Danil',
    age:25
}

const map = new Map(Object.entries(person))
map
    .set('newField', 42)
    .set(NaN, 'NaN')
    .set(newPers, 'this obj2')
console.log(map.get('newField'))
console.log(map.get(NaN))
console.log(map.get(newPers))*/

/*const createIncrementor = function (n){
    return function (num){
        return n + num
    }
}*/

/*const addOne = createIncrementor(1)

console.log(addOne(10))*/



/*let myObj = {
    name:'Daniil',
    secondName:'Babiak',
    age:20,
    status: false,
    fullName:function () {
        return `${this.name}, ${this.secondName}`
    },
}

console.log(myObj)*/

/*
Object.prototype.readName = function (name){
    return console.log(this.name);
}

const myObj = {
    name:'Daniil',
    age:20,
}
myObj.readName();*/

/*
Array.prototype.multBy = function (n){
    return this.map(function (i){
        return n * i
    })
}

const array = [1,2,3]

console.log(array.multBy(10))*/

/*let url = 'https://jsonplaceholder.typicode.com/todos/1';
fetch(url)
    .then(response => response.json())
    .then(json => console.log(json))*/

/*let calculator = {
    sum(){
        return this.a + this.b;
    },
    mul(){
        return this.a * this.b
    },
    read(){
        this.a = +prompt('А?')
        this.b = +prompt('B?')
    }
}
calculator.read()
console.log(calculator.sum())*/

/*let myUrl = 'https://jsonplaceholder.typicode.com/todos/1';

let bntRequst = document.querySelector('#bnt-fetch')
bntRequst.addEventListener('click', async function (){
    let request = await fetch(myUrl)
    let commit = await request.json()
    console.log(commit)
    let values = document.querySelector('.fetchId')
    let text = document.querySelector('.fetchId2')
    values.innerText = `ID объекта: ${commit.id}`
    text.innerText = `Текст объекта: ${commit.title}`
})*/



stripe.onclick = function (){
    stripe.classList.add('animate')
};

let train = document.querySelector('.train')
train.addEventListener('click', function (){
    this.style.left = '450px'
})




/*let textArea = document.querySelector('.areaText')
let areaBtn = document.querySelector('.areaBtn')
areaBtn.addEventListener('click' ,function (){
    let textAreaText = textArea.value
    document.cookie = textArea.value
    console.log(textAreaText)
    console.log(document.cookie)
})*/


/*let createIncrementor = function (n){
    return function (num){
        return n + num
    }
}

let addOne = createIncrementor(1)
console.log(addOne(10))*/

/*
Array.prototype.mult = function (n){
    return this.map((i) => {
        return n * i
    })
}

let myArr = [1,2,3,4,5]
console.log(myArr.mult(5))*/
