// --створити масив з:
// - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль
//
// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль




let numbers = [5,7,9,2,89];
for (let i = 0; i < numbers.length; i++){
    console.log(numbers[i]);
};

let str = ['apple','plum','cherry','melon','grape'];
for (let m = 0; m < str.length; m++){
    console.log(str[m]);
};

let mix = ['apple',7,true,'melon',false];
for (let k = 0; k < str.length; k++){
    console.log(mix[k]);
};

var arr = [];
let index = 0;
while(index < 14){
    let r = Math.floor(Math.random() * 100);
    arr[index] = r;
      console.log(arr[index]);
index++;
};

