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
  const loanForm = document.getElementById("calculate-loan-form");
  loanForm.addEventListener("submit", function (e) {
    e.preventDefault();
    start_loader();
    const numberUnits = document.getElementById("loan-amount").value;
    // const interest = document.getElementById('loan-interest').value;
    const numberDays = document.getElementById("loan-years").value;
    var unitsXrate = 0;
    daysXrate = 0;
    (total = 0), (totalInterest = 0), (monthlyInterest = 0);

    unitsXrate = parseFloat(numberUnits) * 0.2;
    daysXrate = parseFloat(numberDays) * 0.04;
    total = unitsXrate + daysXrate;
    //totalInterest = parseFloat(total) - parseFloat(principalAmount);
    setTimeout(() => {
      document.getElementById("principal").textContent = parseFloat(
        numberUnits
      ).toLocaleString("en-US", { style: "decimal", maximumFractionDigits: 2 });
      // document.getElementById('annual-interest').textContent = parseFloat(interest).toLocaleString("en-US", { style: "decimal", maximumFractionDigits: 2 }) + "%";
      document.getElementById("loan-terms").textContent = parseFloat(
        numberDays
      ).toLocaleString("en-US", {
        style: "decimal",
        maximumFractionDigits: 2,
      });
      document.getElementById("total-pay").textContent = parseFloat(
        total
      ).toLocaleString("en-US", { style: "decimal", maximumFractionDigits: 2 });
      document.getElementById("total-interest").textContent = parseFloat(
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
      // document.getElementById('annual-interest').textContent = ""
      document.getElementById("loan-terms").textContent = "";
      // document.getElementById("monthly-pay").textContent = "";
      document.getElementById("total-pay").textContent = "";
      document.getElementById("total-interest").textContent = "";
      document.getElementById("result").style.display = "none";
      document.getElementById("reset-btn").style.display = "none";
      end_loader();
    }, 500);
  });
};
