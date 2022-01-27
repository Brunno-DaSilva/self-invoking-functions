console.log("Ciao bella me piacere parlare in italiano");

// VARIABLES
const happyFace = ["😀", "😃", "😄", "😁", "😆", "😅", "😂", "🤣"];
const scaryFace = ["👻", "💀", "👽", "👾", "🎃", "👹", "👺", "🤡"];
let bothArr;

//Self-Invoking Function
const selfInvokFunc = (function (arrOne, arrTwo) {
  let bothArr = [...arrOne, ...arrTwo];
  return bothArr;
})(happyFace, scaryFace);

console.log(selfInvokFunc);

// Linking to HTML
const arrayOne = document.getElementById("arrayOne");
const arrayTwo = document.getElementById("arrayTwo");
const bothArray = document.getElementById("bothArray");

arrayOne.innerText = happyFace;
arrayTwo.innerText = scaryFace;
bothArray.innerText = selfInvokFunc;
