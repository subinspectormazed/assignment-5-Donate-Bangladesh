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
    const inputMoneyValue = getInputValueByID("amount1");
    const addMoney = getTotalAmountByID("noakhali-amount") + inputMoneyValue;

    document.getElementById("noakhali-amount").innerText = addMoney;

    document.getElementById("dashboard-amount").innerText =
      dashboardMoney("amount1");

    document.getElementById("amount1").value = "";

    const historyItem = document.createElement("div");
    historyItem.className = "card bg-base-100 w-8/12 shadow-xl mx-auto mb-4";

    historyItem.innerHTML = `<div class="card-body">
            <h2 class="text-base font-bold">${inputMoneyValue} Taka is Donated for Flood at Noakhali, Bangladesh</h2>
            <p class = "text-xs">Date: ${new Date().toLocaleString()}</p></div>`;

    const historyPage = document.getElementById("history-page");

    historyPage.insertBefore(historyItem, historyPage.firstChild);

    popUp();
  });

document
  .getElementById("feni-donate-btn")
  .addEventListener("click", function () {
    const dashboardTotalMoney = parseFloat(
      document.getElementById("dashboard-amount").innerText
    );
    const inputMoneyValue = getInputValueByID("amount2");
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

    document.getElementById("amount1").value = "";

    const historyItem = document.createElement("div");
    historyItem.className = "card bg-base-100 w-8/12 shadow-xl mx-auto mb-4";

    historyItem.innerHTML = `<div class="card-body">
            <h2 class="text-base font-bold">${inputMoneyValue} Taka is Donated for Flood Relief in Feni,Bangladesh</h2>
            <p class="text-xs">Date: ${new Date().toLocaleString()}</p></div>`;

    const historyPage = document.getElementById("history-page");

    historyPage.insertBefore(historyItem, historyPage.firstChild);
    popUp();
  });
document
  .getElementById("quota-donate-btn")
  .addEventListener("click", function () {
    const dashboardTotalMoney = parseFloat(
      document.getElementById("dashboard-amount").innerText
    );
    const inputMoneyValue = getInputValueByID("amount3");
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

    document.getElementById("amount1").value = "";

    const historyItem = document.createElement("div");
    historyItem.className = "card bg-base-100 w-8/12 shadow-xl mx-auto mb-4";

    historyItem.innerHTML = `<div class="card-body">
            <h2 class="text-base font-bold">${inputMoneyValue} Taka is Donated for Aid for Injured in the Quota Movement</h2>
            <p class = "text-xs">Date: ${new Date().toLocaleString()}</p></div>`;

    const historyPage = document.getElementById("history-page");

    historyPage.insertBefore(historyItem, historyPage.firstChild);
    popUp();
  });

document.getElementById("history-btn").addEventListener("click", function () {
  document.getElementById("donation-page").classList.add("hidden");
  document.getElementById("history-page").classList.remove("hidden");
  document
    .getElementById("history-btn")
    .classList.add(
      "font-semibold",
      "bg-[#B4F461]",
      "lg:text-lg",
      "text-black",
      "border-none"
    );
  document
    .getElementById("donation-btn")
    .classList.remove(
      "font-semibold",
      "bg-[#B4F461]",
      "lg:text-lg",
      "text-black",
      "border-none"
    );
});

document.getElementById("donation-btn").addEventListener("click", function () {
  document.getElementById("donation-page").classList.remove("hidden");
  document.getElementById("history-page").classList.add("hidden");

  document
    .getElementById("history-btn")
    .classList.remove(
      "font-semibold",
      "bg-[#B4F461]",
      "lg:text-lg",
      "text-black",
      "border-none"
    );
  document
    .getElementById("donation-btn")
    .classList.add(
      "font-semibold",
      "bg-[#B4F461]",
      "lg:text-lg",
      "text-black",
      "border-none"
    );
});
