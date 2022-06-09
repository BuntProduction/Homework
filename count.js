//Coding challenge for Clapy
//Find the sum of all the multiples of 3 and 5 below 10

function multiples() {
    var num = document.getElementById("input").value;
    let sum = 0;
    for (let i = 0; i <= num; i++) {
  
      if (i % 3 === 0 || i % 5 === 0) {
        sum += i;
      }
    }
    document.getElementById("answer").value = (sum - num);
    return;
  }

  console.log(multiples(10));

  //the program works for 10 but not for some of he numbers because of the "-", how improve that ?
  //Example for 11 : the answer is 22