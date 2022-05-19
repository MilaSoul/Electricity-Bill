window.start_loader = function () {
  const loader = document.getElementById("loader-holder");
  loader.style.display = "flex";
};
window.end_loader = function () {
  const loader = document.getElementById("loader-holder");
  loader.style.display = "none";
};
window.onload = function () {
  setTimeout(() => {
    end_loader();
  }, 500);
  const billForm = document.getElementById("calculate-bill-form");
  billForm.addEventListener("submit", function (e) {
    e.preventDefault();
    start_loader();
    const numberUnits = document.getElementById("units-used").value;
    const numberDays = document.getElementById("number-days").value;
    var unitsXrate = 0;
    daysXrate = 0;
    (total = 0), (totalInterest = 0), (monthlyInterest = 0);

    unitsXrate = parseFloat(numberUnits) * 0.2;
    daysXrate = parseFloat(numberDays) * 0.04;
    total = unitsXrate + daysXrate;
    setTimeout(() => {
      document.getElementById("principal").textContent = parseFloat(
        numberUnits
      ).toLocaleString("en-US", { style: "decimal", maximumFractionDigits: 2 });
      document.getElementById("number-days-display").textContent = parseFloat(
        numberDays
      ).toLocaleString("en-US", {
        style: "decimal",
        maximumFractionDigits: 2,
      });
      document.getElementById("total-pay-before-vat").textContent = parseFloat(
        total
      ).toLocaleString("en-US", { style: "decimal", maximumFractionDigits: 2 });
      document.getElementById("total-pay-after-vat").textContent = parseFloat(
        total * 0.135 + total
      ).toLocaleString("en-US", { style: "decimal", maximumFractionDigits: 2 });
      document.getElementById("result").style.display = "table";
      document.getElementById("reset-btn").style.display = "block";
      end_loader();
    }, 500);
  });
  loanForm.addEventListener("reset", function (e) {
    start_loader();
    setTimeout(() => {
      document.getElementById("principal").textContent = "";
      document.getElementById("number-days-display").textContent = "";
      document.getElementById("total-pay-before-vat").textContent = "";
      document.getElementById("total-pay-after-vat").textContent = "";
      document.getElementById("result").style.display = "none";
      document.getElementById("reset-btn").style.display = "none";
      end_loader();
    }, 500);
  });
};
