document
  .getElementById("noakhali-donate-btn")
  .addEventListener("click", function () {
    const dashboardTotalMoney = parseFloat(
      document.getElementById("dashboard-amount").innerText
    );
    const inputMoney = getInputValueByID("amount1");
    if (
      isNaN(inputMoney) ||
      inputMoney <= 0 ||
      dashboardTotalMoney < inputMoney
    ) {
      alert("invalid input");
      return;
    }
    const addMoney =
      getTotalAmountByID("noakhali-amount") + getInputValueByID("amount1");

    document.getElementById("noakhali-amount").innerText = addMoney;

    document.getElementById("dashboard-amount").innerText =
      dashboardMoney("amount1");

    document.getElementById("amount1").value = "";
  });

document
  .getElementById("feni-donate-btn")
  .addEventListener("click", function () {
    const dashboardTotalMoney = parseFloat(
      document.getElementById("dashboard-amount").innerText
    );
    const inputMoney = getInputValueByID("amount2");
    if (
      isNaN(inputMoney) ||
      inputMoney <= 0 ||
      dashboardTotalMoney < inputMoney
    ) {
      alert("invalid input");
      return;
    }
    const addMoney =
      getTotalAmountByID("feni-amount") + getInputValueByID("amount2");

    document.getElementById("feni-amount").innerText = addMoney;

    document.getElementById("dashboard-amount").innerText =
      dashboardMoney("amount2");
    document.getElementById("amount2").value = "";
  });
document
  .getElementById("quota-donate-btn")
  .addEventListener("click", function () {
    const dashboardTotalMoney = parseFloat(
      document.getElementById("dashboard-amount").innerText
    );
    const inputMoney = getInputValueByID("amount3");
    if (
      isNaN(inputMoney) ||
      inputMoney <= 0 ||
      dashboardTotalMoney < inputMoney
    ) {
      alert("invalid input");
      return;
    }
    const addMoney =
      getTotalAmountByID("quota-amount") + getInputValueByID("amount3");

    document.getElementById("quota-amount").innerText = addMoney;

    document.getElementById("dashboard-amount").innerText =
      dashboardMoney("amount3");

    document.getElementById("amount3").value = "";
  });

document.getElementById("history-btn").addEventListener("click", function () {
  document.getElementById("donation-page").classList.add("hidden");
  document
    .getElementById("history-btn")
    .classList.add("font-semibold", "bg-[#B4F461]", "lg:text-lg", "text-black");
  document
    .getElementById("donation-btn")
    .classList.remove(
      "font-semibold",
      "bg-[#B4F461]",
      "lg:text-lg",
      "text-black"
    );
});

document.getElementById("donation-btn").addEventListener("click", function () {
  document.getElementById("donation-page").classList.remove("hidden");

  document
    .getElementById("history-btn")
    .classList.remove(
      "font-semibold",
      "bg-[#B4F461]",
      "lg:text-lg",
      "text-black"
    );
  document
    .getElementById("donation-btn")
    .classList.add("font-semibold", "bg-[#B4F461]", "lg:text-lg", "text-black");
});
