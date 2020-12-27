// Возможность языка создавать локальный Scope данных и в последствии его затрагивать /c/ 

// Замыкание — это комбинация функции и лексического окружения, в котором эта функция была определена. 
// Другими словами, замыкание дает вам доступ к Scope внешней функции из внутренней функции. 
// В JavaScript замыкания создаются каждый раз при создании функции, во время ее создания.
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Closures

// Ну у Владилена лучше)) ... 

function init() {
    var name = "Mozilla"; // name - локальная переменная, созданная в init
    function displayName() { // displayName() - внутренняя функция, замыкание
        console.log(name); // displayName() использует переменную, объявленную в родительской функции
    }
    displayName();
}

// myEx :) 

function showPcInfo() {
    const CPU = 'i7 4790'
    const GPU = 'MSI 1070'

    function printSpecs() {
        console.log('CPU: ', CPU);
        console.log('GPU: ', GPU);
    }
    printSpecs()
}

showPcInfo()

console.log('-----');

function makeFunc() {
    var name = "Mozilla";
    function displayName() {
      console.log(name);
    }
    return displayName;
  };
  
  var name = 'Override Mozilla'
  let myFunc = makeFunc();
  myFunc();