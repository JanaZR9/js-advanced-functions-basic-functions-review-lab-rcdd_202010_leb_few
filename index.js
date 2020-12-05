// Your code here

//1
function saturdayFun(activity="roller-skate"){
  return `This Saturday, I want to ${activity}!`;
}
saturdayFun();
saturdayFun("bathe my dog");

//2
function mondayWork(act="go to the office"){
  return `This Monday, I will ${act}.`;
}
mondayWork();
mondayWork("work from home");

//3 
function wrapAdjective(car="*"){
  return function(desc="special"){
    return `You are ${car}${desc}${car}!`;
  }
}

const Calculator = {
  add: function(a,b) {
    return a + b;
  },
  
  subtract: function(a,b){
    return a - b;
  },
  
   multiply: function(a,b) {
    return a * b
  },
  divide: function(a,b) {
    return a / b;
  }
  
  
}
  