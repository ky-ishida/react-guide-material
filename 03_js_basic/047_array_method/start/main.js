const array = [10, 20, 30, 40];
const newArry = [];

for (let i = 0; i < array.length; i++) {
  const val = array[i] * 2;
  if(val>50){
  newArry.push(array[i] * 2);
}
}

console.log(newArry);

const newArry2 = array.map((val) => {
  return val * 2;
});

const newArry3 =newArry2.filter(val=> val>50)
console.log(newArry2);
