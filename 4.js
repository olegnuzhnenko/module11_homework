// Задание 4

// Напишите функцию, которая принимает два числа. Каждую секунду необходимо выводить числа в интервале от первого до второго принятого числа. Используйте setInterval.

// Например, пользователь ввёл числа 5 и 15. Каждую секунду в консоль должно печататься число, начиная с 5 и заканчивая 15 (всего 11 чисел: 5 6 7 8 9 10 11 12 13 14 15).

let from = prompt('Введите число для начала отсчёта')
let to = prompt('Введите число для завершения отсчёта')

function printNumbers (from, to){
    let current = from 
    let last = to
    let timerId = setInterval(function(){
        
        if (current == to){
            clearInterval(timerId)
        }
        else if (current == 0){
            alert('Вы не ввели число для начала отсчёта')
            clearInterval(timerId)
        }
  
       else if (last == 0){
            alert('Вы не ввели число для завершения отсчёта')
            clearInterval(timerId)
        }
      console.log(current)  
      current++
    },1000)
}
printNumbers(from, to)