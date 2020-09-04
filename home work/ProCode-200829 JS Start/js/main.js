let flagWidth = null;
let flagHeight = null;
let flagBackgroundLG = null;
let tempHeight = 100;
let tempWidth = 200;
let one = 1;
/***** НИЖЕ ЭТОГО КОММЕНТАРИЯ НАПИШИТЕ СВОЙ КОД *****/




flagWidth = `${tempWidth + tempWidth + tempHeight}px`;
flagHeight = `${tempWidth + tempHeight}px`;
console.log (flagWidth, flagHeight);
let a = `${tempHeight / (one + one)}%`;

flagBackgroundLG = `rgb(0,0,255)${a}, rgb(255, 215, 0)${a}`;

console.log (a)
console.log(flag);


/***** ВЫШЕ ЭТОГО КОММЕНТАРИЯ НАПИШИТЕ СВОЙ КОД *****/
/*

.flag { 
  width: <значение переменной flagWidth>;
  height: <значение переменной flagHeight>;
  background: linear-gradient(<значение переменной flagBackgroundLG>);
}

*/

flag.style.height = flagHeight;
flag.style.width = flagWidth;
flag.style.background = `linear-gradient(${ flagBackgroundLG })`;



