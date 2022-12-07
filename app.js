// Selectors
// STEP ONE
const oneNextStepButton = document.querySelector(".next-to-two");
const nameInput = document.querySelector(".name-input");
const emailInput = document.querySelector(".email-input");
const phoneInput = document.querySelector(".phone-input");
const stepNumbers = document.querySelectorAll(".step-number");
// STEP TWO
const frequencyCheckbox = document.querySelector(".toggle");
const monthlyLabel = document.querySelector(".monthly");
const yearlyLabel = document.querySelector(".yearly");
const pricePlans = document.querySelectorAll(".plan-price");
const freeTexts = document.querySelectorAll(".free-text");
const planDivs = document.querySelectorAll(".plan");

// Variables
let currentStep = 1;
const BILLING_PLANS = {
  monthly: ["$9/mo", "$12/mo", "$15/mo"],
  yearly: ["$90/yr", "$120/yr", "$150/yr"]
};
let selectedPlan = null;

// Event listeners
oneNextStepButton.addEventListener("click", nextToTwo);
frequencyCheckbox.addEventListener("click", setPlanFrequency);
planDivs.forEach(div => div.addEventListener("click", selectPlan));

// Functions
function nextToTwo(event) {
  // Prevent form from submitting
  event.preventDefault();
  let isValid = true;
  [nameInput, emailInput, phoneInput].forEach(element => {
    if (!element.value) {
      element.classList.add("error");
      isValid = false;
    }
  });
  if (isValid) {
    currentStep = 2;
    stepNumbers[currentStep-1].classList.add("active");
    stepNumbers[currentStep-2].classList.remove("active");
  }
}

function validateEmail(email) {
  return email.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
}

function validatePhone(phone) {

}

function setPlanFrequency(e) {
  let plan = "monthly";
  // Yearly selected
  if (e.target.checked) {
    yearlyLabel.classList.add("active");
    monthlyLabel.classList.remove("active");
    plan = "yearly";
  } // Monthly selected
  else {
    monthlyLabel.classList.add("active");
    yearlyLabel.classList.remove("active");
  }

  freeTexts.forEach(element => {
    plan === "monthly" ? element.classList.remove("show") : element.classList.add("show");
  });
  pricePlans.forEach((element, index) => {
    element.textContent = BILLING_PLANS[plan][index];
  });
}

function selectPlan(e) {
  planDivs.forEach(el => el.classList.remove("selected"));
  e.target.classList.add("selected");
  // TODO: set selected plan and validate if a plan is selected. If none, can't move to step 3
}