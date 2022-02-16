
document.getElementById("calculate-btn").addEventListener("click", function () {
  const income = document.getElementById("my-income").value;
  const food = document.getElementById("food").value;
  const rent = document.getElementById("rent").value;
  const clothes = document.getElementById("clothes").value;
  const totalExpenses =
    parseFloat(food) + parseFloat(rent) + parseFloat(clothes);
  const displayExpenses = document.getElementById("total-expenses");
  displayExpenses.innerText = totalExpenses;
  const displayBalance = document.getElementById("balance");
  displayBalance.innerText = income - totalExpenses;
});
document.getElementById()