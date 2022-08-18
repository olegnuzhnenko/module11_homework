// Задание 3

// Напишите функцию, которая принимает число как аргумент и возвращает функцию, которая также принимает число как аргумент и возвращает сумму этих двух чисел. Выведите в консоль результат.


function calcSumm(numOne, numTwo){

    let numSumm = numOne + numTwo
    
    return numSumm
   
  }
  
  let funcResult = calcSumm(4,2)
  
  console.log(`Сумма: ${funcResult}`)