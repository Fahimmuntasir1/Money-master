// calculate button
document.getElementById("calculate-btn").addEventListener("click", function () {
  const totalExpenses = expenses("food", "rent", "clothes");
  errorMassage('my-income', 'income-error')
  errorMassage("food", "food-error");
  errorMassage("rent", "rent-error");
  errorMassage("clothes", "clothes-error");
  errorMassage("savings", "savings-error");
  const displayExpenses = document.getElementById("total-expenses");
  displayExpenses.innerText = totalExpenses;
  const displayBalance = document.getElementById("balance");
  displayBalance.innerText = balance();
});
// expenses calculation
function expenses(para1, para2, para3) {
  const food = document.getElementById(para1).value;
  const rent = document.getElementById(para2).value;
  const clothes = document.getElementById(para3).value;
  const totalExpenses =
    parseFloat(food) + parseFloat(rent) + parseFloat(clothes);
  return totalExpenses;
}
// balance calculation
function balance() {
  const totalExpenses = expenses("food", "rent", "clothes");
  const income = document.getElementById("my-income").value;
  const totalBalance = income - totalExpenses;
  return totalBalance;
}
// error messages
function errorMassage(errorId, msgId) {
  const messageId = document.getElementById(msgId);
  const errorCatch = document.getElementById(errorId);
  if (errorCatch.value == " " || isNaN(errorCatch.value) || errorCatch.value <=0) {
    messageId.style.display = "block";
    // console.log(errorCatch.value);
  }
  // messageId.style.display = "block";
}
// savings button
document.getElementById("savings").addEventListener("click", function () {
  const savingInput = document.getElementById("input-savings");
  const savingAmount = document.getElementById("saving-amount");
  const remainingBalance = document.getElementById("remaining-balance");
  const mySaving = (savingAmount.innerText =
    (balance() * savingInput.value) / 100);
  remainingBalance.innerText = balance() - mySaving;
});
