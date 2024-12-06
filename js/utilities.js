function getTotalAmountByID(id) {
  const totalAmount = parseFloat(document.getElementById(id).innerText);
  return parseFloat(totalAmount.toFixed(2));
}

function getInputValueByID(id) {
  const donateAmount = parseFloat(document.getElementById(id).value);

  return parseFloat(donateAmount.toFixed(2));
}

function dashboardMoney(id) {
  const deductMoney =
    document.getElementById("dashboard-amount").innerText -
    getInputValueByID(id);

  return deductMoney;
}

document.getElementById("close-popup").addEventListener("click", function(){
document.getElementById("popup").classList.add("hidden");
document.getElementById("full-page").classList.remove("overflow-hidden")
})

function popUp(){
document.getElementById("popup").classList.remove("hidden");
document.getElementById("full-page").classList.add("overflow-hidden");
document.getElementById("popup").classList.add("flex");
}
