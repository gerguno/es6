// В JavaScript есть очень простой способ сделать из arguments настоящий массив. Для этого возьмём метод массива: slice.

// По стандарту вызов arr.slice(start, end) создаёт новый массив и копирует в него элементы массива arr от start до end. А если start и end не указаны, то копирует весь массив.

// Вызовем его в контексте arguments:

function printArgs() {
  // вызов arr.slice() скопирует все элементы из this в новый массив
  var args = [].slice.call(arguments);
  console.log( args.join(', ') ); // args - полноценный массив из аргументов
}

printArgs('Привет', 'мой', 'мир'); // Привет, мой, мир