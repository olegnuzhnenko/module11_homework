// В прошлом модуле в юните «Циклы» вы выполняли следующее задание:

// Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в массиве. Если в массиве есть нулевой элемент, то он учитывается и выводится отдельно. 

// При выполнении задания необходимо учесть, что массив может содержать не только числа, но и знаки, например null и так далее.

// На этот раз оформите решение в виде функции: постарайтесь дать этой функции корректное название, вызовите функцию, проанализируйте синтаксис.

arr = [1, 2, 3, 4, 5, 0, 'kokos'];
function countOfOdd(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
if (typeof arr[i] === 'number'){
    if(arr[i] % 2 === 0 && arr[i] !== 0) {
      console.log('Четное')
    }
    else if (arr[i] % 2 !== 0) {
       console.log('Нечетное')
     }
    else if (arr[i] === 0) {
       console.log('Это ноль!')
     }
    
  }
    else {
      console.log("Это не число!")
    }
}
}
countOfOdd(arr);