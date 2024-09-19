// document.getElementById("outBtn").addEventListener("click", function (event) {
//   event.preventDefault();

//   let inputOutAmount = document.getElementById("inputOutAmount");
//   let valueOutAmount = inputOutAmount.value;
//   let inputOutPin = document.getElementById("inputOutPin");
//   let valueOutPin = inputOutPin.value;
//   // let outDemo = document.getElementById("outDemo");
//   if (valueOutPin === "1234") {
//     let money = document.getElementById("money").innerText;
//     document.getElementById("money").innerText =
//       Number(money) - Number(valueOutAmount);
//   } else {
//     let outDemo = document.getElementById("outDemo");
//     outDemo.innerText = "Invalid Pin!";
//     outDemo.style.color = "red";
//     outDemo.style.fontWeight = "bold";
//     outDemo.style.fontSize = "12px";
//   }
//   document.getElementById("inputOutPin").addEventListener("click", function () {
//     let outDemo = document.getElementById("outDemo");
//     outDemo.style.visibility = "hidden";
//   });
//   inputOutAmount.value = "";
//   inputOutPin.value = "";
// });

document.getElementById("outBtn").addEventListener("click", function (event) {
  event.preventDefault();

  let inputOutAmount = document.getElementById("inputOutAmount");
  let valueOutAmount = Number(inputOutAmount.value);
  let inputOutPin = document.getElementById("inputOutPin");
  let valueOutPin = inputOutPin.value;
  let outDemo = document.getElementById("outDemo");

  if (valueOutPin === "1234") {
    let moneyElement = document.getElementById("money");
    let money = Number(moneyElement.innerText);
    moneyElement.innerText = money - valueOutAmount;

    // সঠিক পিন হলে বার্তা মুছে ফেলুন
    outDemo.innerText = "";
    outDemo.style.visibility = "hidden";
  } else {
    // ভুল পিন হলে বার্তা দেখান
    outDemo.innerText = "Invalid Pin!";
    outDemo.style.color = "red";
    outDemo.style.fontWeight = "bold";
    outDemo.style.fontSize = "12px";
    outDemo.style.visibility = "visible";
  }

  // ইনপুট ফিল্ডগুলো পরিষ্কার করা
  inputOutAmount.value = "";
  inputOutPin.value = "";
});

// ইনপুটে ক্লিক করলে বার্তা গায়েব হবে
document.getElementById("inputOutPin").addEventListener("click", function () {
  let outDemo = document.getElementById("outDemo");
  outDemo.innerText = ""; // বার্তা মুছে ফেলুন
  outDemo.style.visibility = "hidden"; // বার্তা দৃশ্যমানতা গায়েব করুন
});
