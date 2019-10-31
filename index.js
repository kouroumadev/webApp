var allInpt = document.querySelectorAll("input");
var allBtn = document.querySelectorAll("button");

function calculator(aa,bb,cc){
  var delta = (bb*bb)-(4*aa*cc);
  var txt = document.getElementsByTagName("p");
  if(delta > 0){
    var x1 = ((-1*bb)-Math.sqrt(delta))/(2*aa);
    var x2 = ((-1*bb)+Math.sqrt(delta))/(2*aa);
    txt[1].textContent ="This equation has two solutions: X1 = "+ Math.floor(x1)+", X2 = "+Math.floor(x2);
  }
  else if (delta < 0){
    txt[1].textContent = "does'nt answer because delta less than 0";
  }
  else {
    var x3 = (-1*bb)/(2*aa);
    txt[1].textContent ="This Equation have only one solution: X1 = "+x3;
  }
}


$(allBtn[1]).on("click",function(){
  if(ifErase() === 1){
    alert("SHOULD FILL ALL THE TEXT-BOX");
  }
  else{
    var a = parseInt($(allInpt[0]).val(),10);
    var b = parseInt($(allInpt[1]).val(),10);
    var c = parseInt($(allInpt[2]).val(),10);
    calculator(a,b,c);
  }
});


$(allBtn[0]).on("click",function(){
  var txt = document.getElementsByTagName("p");
  for(var i = 0;i < 3;i++){
    allInpt[i].valueAsNumber = 0;
    txt[1].textContent="Answer";
  }
});

$(allBtn[1]).on("click", function(){
  ifErase();
});

function ifErase(){
  var flag = 0;
  if(allInpt[0].valueAsNumber ===0 || allInpt[1].valueAsNumber ===0 || allInpt[2].valueAsNumber ===0){
    flag = 1;
  }
  return flag;
}
