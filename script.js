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
    //reading the info from my text input
    const numberUnits = document.getElementById("units-used").value;
    const numberDays = document.getElementById("number-days").value;
    
    //initializing variables
    var unitsXrate = 0;
    daysXrate = 0;
    total = 0;
    //multiplying every unit by .2 and every day by 0.04, then adding it up on total
    unitsXrate = parseFloat(numberUnits) * 0.2;
    daysXrate = parseFloat(numberDays) * 0.04;
    total = unitsXrate + daysXrate;
    //displaying info
    setTimeout(() => {
      //display number of units
      document.getElementById("principal").textContent = parseFloat(
        numberUnits
      ).toLocaleString("en-US", { style: "decimal", maximumFractionDigits: 2 });
      //displau numer of days
      document.getElementById("number-days-display").textContent = parseFloat(
        numberDays
      ).toLocaleString("en-US", {
        style: "decimal",
        maximumFractionDigits: 2,
      });
      //display the addition of those before
      document.getElementById("total-pay-before-vat").textContent = parseFloat(
        total
      ).toLocaleString("en-US", { style: "decimal", maximumFractionDigits: 2 });
      //display the previous +13.5%
      document.getElementById("total-pay-after-vat").textContent = parseFloat(
        total * 0.135 + total
      ).toLocaleString("en-US", { style: "decimal", maximumFractionDigits: 2 });
      //this makes the result section and button appear
      document.getElementById("result").style.display = "table";
      document.getElementById("reset-btn").style.display = "block";
      end_loader();
    }, 500);
  });
  //will clear all the info from a previous bill calculation so we can do a new one
  billForm.addEventListener("reset", function (e) {
    start_loader();
    setTimeout(() => {
      document.getElementById("principal").textContent = "";
      document.getElementById("number-days-display").textContent = "";
      document.getElementById("total-pay-before-vat").textContent = "";
      document.getElementById("total-pay-after-vat").textContent = "";
      //this makes the result section and button disappear
      document.getElementById("result").style.display = "none";
      document.getElementById("reset-btn").style.display = "none";
      end_loader();
    }, 500);
  });
};
