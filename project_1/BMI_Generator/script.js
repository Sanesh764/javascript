// const form = document.querySelector("form");

// form.addEventListener("submit", function (e) {
//     e.preventDefault();

//     const height = parseInt(document.querySelector("#height").value);
//     const weight = parseInt(document.querySelector("#weight").value);
//     const result = parseInt(document.querySelector("#result"));

//     if (isNaN(height) || height <= 0) {
//         result.innerHTML = `Please give a valid height`;
//     } 
//     else if (isNaN(weight) || weight <= 0) {
//         result.innerHTML = `Please give a valid weight`;
//     } 
//     else {
//         const bmi = (weight / ((height * height) / 10000)).toFixed(2);
//         result.innerHTML = `<span>Your BMI is ${bmi}</span>`;
//     }
// });

const form = document.querySelector("form");
form.addEventListener("submit", function (e) {
    e.preventDefault();
    const height = parseFloat(document.querySelector("#height").value);
    const weight = parseFloat(document.querySelector("#weight").value);
    const result = document.querySelector("#result"); // 

    // Input validation
    if (!height || height <= 0 || height > 300) {
        showResult(result, "Please enter a valid height (1 - 300 cm).", "error");
        return;
    }
    if (!weight || weight <= 0 || weight > 500) {
        showResult(result, "Please enter a valid weight (1 - 500 kg).", "error");
        return;
    }
    // BMI calculation
    const heightInMeters = height / 100;
    const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(2);
    const { category, cssClass } = getCategory(bmi);

    showResult(result, `Your BMI is <strong>${bmi}</strong> — ${category}`, cssClass);
});
function getCategory(bmi) {
    if (bmi < 18.5) return { category: "Underweight",     cssClass: "under"  };
    if (bmi < 25)   return { category: "Normal weight",   cssClass: "normal" };
    if (bmi < 30)   return { category: "Overweight",      cssClass: "over"   };
                    return { category: "Obese",            cssClass: "obese"  };
}
function showResult(el, message, cssClass) {
    el.innerHTML = message;
    el.className = cssClass; // CSS class swap for color change
}