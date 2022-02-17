document.getElementById("calculate-btn").addEventListener("click", function () {
  const totalExpenses = expenses("food", "rent", "clothes");
  const displayExpenses = document.getElementById("total-expenses");
  displayExpenses.innerText = totalExpenses;
  const displayBalance = document.getElementById("balance");
  displayBalance.innerText = balance();
});
function expenses(para1, para2, para3) {
  const food = document.getElementById(para1).value;
  const rent = document.getElementById(para2).value;
  const clothes = document.getElementById(para3).value;
  const totalExpenses =
    parseFloat(food) + parseFloat(rent) + parseFloat(clothes);
  return totalExpenses;
}
function balance() {
  const totalExpenses = expenses("food", "rent", "clothes");
  const income = document.getElementById("my-income").value;
  const totalBalance = income - totalExpenses;
  return totalBalance;
}

document.getElementById("savings").addEventListener("click", function () {
  const savingInput = document.getElementById("input-savings");
  const savingAmount = document.getElementById("saving-amount");
  const remainingBalance = document.getElementById("remaining-balance");
  const mySaving = (savingAmount.innerText =
    (balance() * savingInput.value) / 100);
  remainingBalance.innerText = balance() - mySaving;
});
