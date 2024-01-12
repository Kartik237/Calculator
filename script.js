var tempText = 0;
var keyArray = [
  42, 43, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57,
];
var operatorVar = 0;
var tempAns;
var ansArr = [];
var opArr = [];
var storeArr = [];
var getHistory = [];
var keyUpNumber = {
  1: "one",
  2: "two",
  3: "three",
  4: "four",
  5: "five",
  6: "six",
  7: "seven",
  8: "eight",
  9: "nine",
  0: "zero",
  ".": "decimal",
};

const numbers = (e) => {
  /*e.innerHTML - object property*/
  if (document.getElementById("display").innerHTML == "0") {
    if ((e.innerHTML > 0 && e.innerHTML < 10) || e.innerHTML == "-") {
      document.getElementById("display").innerHTML = e.innerHTML;
    } else if (e.innerHTML == ".") {
      document.getElementById("display").innerHTML += e.innerHTML;
    }
  } else {
    temp = document.getElementById("display").innerHTML;
    temp = String(temp);
    if (e.innerHTML == "+" || e.innerHTML == "*" || e.innerHTML == "/") {
      if (
        temp[temp.length - 1] == "-" &&
        (temp[temp.length - 2] == "+" ||
          temp[temp.length - 2] == "*" ||
          temp[temp.length - 2] == "-" ||
          temp[temp.length - 2] == "/")
      ) {
        temp = temp.slice(0, temp.length - 2);
        document.getElementById("display").innerHTML = temp + e.innerHTML;
      } else if (
        temp[temp.length - 1] == "+" ||
        temp[temp.length - 1] == "*" ||
        temp[temp.length - 1] == "-" ||
        temp[temp.length - 1] == "/"
      ) {
        temp = temp.slice(0, temp.length - 1);
        document.getElementById("display").innerHTML = temp + e.innerHTML;
      } else if (temp[temp.length - 1] == ".") {
        document.getElementById("display").innerHTML += "0" + e.innerHTML;
      } else {
        document.getElementById("display").innerHTML += e.innerHTML;
      }
    } else if (e.innerHTML == ".") {
      temp = "";
      temp = document.getElementById("display").innerHTML;
      temp = String(temp);
      if (temp[temp.length - 1] == ".") {
        document.getElementById("display").innerHTML = temp; // multiple dot at a time - Elmination ex-....
      } else {
        for (var j = 0; j < temp.length; j++) {
          if (
            temp[j] == "+" ||
            temp[j] == "-" ||
            temp[j] == "/" ||
            temp[j] == "*"
          ) {
            operatorVar = 0;
          } else if (temp[j] == ".") {
            operatorVar = 1;
          }
        }
        if (operatorVar == 0) {
          temp = document.getElementById("display").innerHTML;
          if (
            temp[temp.length - 1] == "+" ||
            temp[temp.length - 1] == "*" ||
            temp[temp.length - 1] == "-" ||
            temp[temp.length - 1] == "/"
          ) {
            document.getElementById("display").innerHTML += "0.";
          } else {
            document.getElementById("display").innerHTML += e.innerHTML;
          }
        } else {
          operatorVar = 0;
        }
      }
    } else if (e.innerHTML == "-") {
      temp = document.getElementById("display").innerHTML;
      temp = String(temp);
      if (
        temp[temp.length - 1] == "+" ||
        temp[temp.length - 1] == "*" ||
        temp[temp.length - 1] == "/"
      ) {
        document.getElementById("display").innerHTML += "-";
      } else if (temp[temp.length - 1] > 0) {
        document.getElementById("display").innerHTML += "-";
      }
    } else {
      document.getElementById("display").innerHTML += e.innerHTML;
    }
  }
};

const allClear = () => {
  document.getElementById("display").innerHTML = "0";
  ansArr = [];
  opArr = [];
  storeArr = [];
  ans = 0;
  temp = "";
};

document.addEventListener("keypress", function (event) {
  for (let i = 0; i < keyArray.length; i++) {
    if (event.keyCode == keyArray[i]) {
      if (document.getElementById("display").innerHTML == "0") {
        if ((event.key > 0 && event.key < 10) || event.key == "-") {
          document.getElementById("display").innerHTML = event.key;
        } else if (event.key == ".") {
          document.getElementById("display").innerHTML += event.key;
        }
      } else {
        temp = document.getElementById("display").innerHTML;
        temp = String(temp);
        if (event.key == "+" || event.key == "*" || event.key == "/") {
          if (
            temp[temp.length - 1] == "-" &&
            (temp[temp.length - 2] == "+" ||
              temp[temp.length - 2] == "*" ||
              temp[temp.length - 2] == "-" ||
              temp[temp.length - 2] == "/")
          ) {
            temp = temp.slice(0, temp.length - 2);
            document.getElementById("display").innerHTML =
              temp + event.key;
          } else if (
            temp[temp.length - 1] == "+" ||
            temp[temp.length - 1] == "*" ||
            temp[temp.length - 1] == "-" ||
            temp[temp.length - 1] == "/"
          ) {
            temp = temp.slice(0, temp.length - 1);
            document.getElementById("display").innerHTML =
              temp + event.key;
          } else if (temp[temp.length - 1] == ".") {
            document.getElementById("display").innerHTML +=
              "0" + event.key;
          } else {
            document.getElementById("display").innerHTML += event.key;
          }
        } else if (event.key == ".") {
          temp = document.getElementById("display").innerHTML;
          temp = String(temp);
          if (temp[temp.length - 1] == ".") {
            document.getElementById("display").innerHTML = temp;
          } else {
            for (var j = 0; j < temp.length; j++) {
              if (
                temp[j] == "+" ||
                temp[j] == "-" ||
                temp[j] == "/" ||
                temp[j] == "*"
              ) {
                operatorVar = 0;
              } else if (temp[j] == ".") {
                operatorVar = 1;
              }
            }
            if (operatorVar == 0) {
              temp = document.getElementById("display").innerHTML;
              if (
                temp[temp.length - 1] == "+" ||
                temp[temp.length - 1] == "*" ||
                temp[temp.length - 1] == "-" ||
                temp[temp.length - 1] == "/"
              ) {
                document.getElementById("display").innerHTML += "0.";
              } else {
                document.getElementById("display").innerHTML += event.key;
              }
            } else {
              operatorVar = 0;
            }
          }
        } else if (event.key == "-") {
          temp = document.getElementById("display").innerHTML;
          temp = String(temp);
          if (
            temp[temp.length - 1] == "+" ||
            temp[temp.length - 1] == "*" ||
            temp[temp.length - 1] == "/"
          ) {
            document.getElementById("display").innerHTML += "-";
          } else if (temp[temp.length - 1] > 0) {
            document.getElementById("display").innerHTML += "-";
          }
        } else {
          document.getElementById("display").innerHTML += event.key;
        }
      }
    }
  }
});

function clearData() {
  var tempText2 = "";
  tempText2 = document.getElementById("display").innerHTML;
  tempText2 = String(tempText2);
  if (tempText2.length == 1) {
    document.getElementById("display").innerHTML = 0;
  } else {
    tempText2 = tempText2.slice(0, tempText2.length - 1);
    document.getElementById("display").innerHTML = tempText2;
  }
}

var ans;

// var history = [];
function answer() {
  tempAns = "";
  storeArr = [];
  ans = ":";
  opArr = [];
  ansArr = [];

  tempAns = document.getElementById("display").innerHTML;
  tempAns = String(tempAns);
  for (var k = 0; k < tempAns.length; k++) {
    if (
      tempAns[k] == "+" ||
      tempAns[k] == "-" ||
      tempAns[k] == "*" ||
      tempAns[k] == "/"
    ) {
      if (
        tempAns[k - 1] == "+" ||
        tempAns[k - 1] == "*" ||
        tempAns[k - 1] == "/"
      ) {
        ansArr.push(k - 1);
      } else {
        opArr.push(temp[k]);
        ansArr.push(k);
      }
    }
  }
  console.log(tempAns);
  for (var i = 0; i < ansArr.length + 1; i++) {
    if (i == 0) {
      storeArr.push(Number(tempAns.substring(0, ansArr[i])));
    } else {
      storeArr.push(
        Number(tempAns.substring(ansArr[i - 1] + 1, ansArr[i]))
      );
    }
  }
  for (var j = 0; j < storeArr.length; j++) {
    if (Number.isNaN(storeArr[j]) == true) {
      storeArr.splice(j, 1);
    }
  }
  // console.log(storeArr);
  for (var i = 0; i < opArr.length; i++) {
    if (opArr[i] == "+") {
      ans = storeArr[i] + storeArr[i + 1];
      storeArr[i + 1] = ans;
    } else if (opArr[i] == "-") {
      ans = storeArr[i] - storeArr[i + 1];
      storeArr[i + 1] = ans;
    } else if (opArr[i] == "/") {
      ans = storeArr[i] / storeArr[i + 1];
      storeArr[i + 1] = ans;
    } else if (opArr[i] == "*") {
      ans = storeArr[i] * storeArr[i + 1];
      storeArr[i + 1] = ans;
    }
  }
  if (ans == ":") {
    ans = tempAns;
    document.getElementById("display").innerHTML = parseFloat(tempAns);
  } else {
    document.getElementById("display").innerHTML = parseFloat(ans);
  }

  getHistory.push(`${tempAns} = ${ans}`);
    historyShow();
}

function historyShow() {
    var historyShow = document.querySelector(".history_container");
    historyShow.innerHTML = "";
    for (var i = 0; i < getHistory.length; i++) {
        // console.log(getHistory[i])
        historyShow.innerHTML += `<span>${getHistory[i]}</span>`;
    }
}

/*keypress doesnt work for backspace so thats why using keydown*/
document.addEventListener("keydown", function (event) {
  if (event.keyCode == 8) {
    clearData();
    document.getElementById("oneClear").classList.add("oranges");
  } else if (event.keyCode == 13) {
    answer();
    document.getElementById("equals").classList.add("equals");
  } else if (event.keyCode == 46) {
    allClear();
    document.getElementById("clear").classList.add("oranges");
  } else if (event.key == "*") {
    document.getElementById("multiply").classList.add("oranges");
  } else if (event.key == "/") {
    document.getElementById("divide").classList.add("oranges");
  } else if (event.key == "+") {
    document.getElementById("add").classList.add("oranges");
  } else if (event.key == "-") {
    document.getElementById("subtract").classList.add("oranges");
  } else if ((event.key >= 0 && event.key < 10) || event.key == ".") {
    document
      .getElementById(keyUpNumber[event.key])
      .classList.add("hovers");
  }
});

document.addEventListener("keyup", function (event) {
  if (event.keyCode == 8) {
    document.getElementById("oneClear").classList.remove("oranges");
  } else if (event.keyCode == 13) {
    answer();
    document.getElementById("equals").classList.remove("equals");
  } else if (event.keyCode == 46) {
    allClear();
    document.getElementById("clear").classList.remove("oranges");
  } else if (event.key == "*") {
    document.getElementById("multiply").classList.remove("oranges");
  } else if (event.key == "/") {
    document.getElementById("divide").classList.remove("oranges");
  } else if (event.key == "+") {
    document.getElementById("add").classList.remove("oranges");
  } else if (event.key == "-") {
    document.getElementById("subtract").classList.remove("oranges");
  } else if ((event.key >= 0 && event.key < 10) || event.key == ".") {
    document
      .getElementById(keyUpNumber[event.key])
      .classList.remove("hovers");
  }
});