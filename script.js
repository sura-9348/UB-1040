// ================= SCHOLARSHIP =================
function checkScholarship(){

let income = document.getElementById("income").value;
let category = document.getElementById("category").value;
let gender = document.getElementById("gender").value;
let marks = document.getElementById("marks").value;
let result = document.getElementById("result");

result.innerHTML = "";

if(marks >= 75){
result.innerHTML += `
<div class="card">
<h3>Central Sector Merit Scholarship</h3>
<p><b>Last Date:</b> 31 March 2026</p>
<a href="https://scholarships.gov.in" target="_blank">
<button class="apply-btn">Apply Here</button>
</a>
</div><br>`;
}

if(category == "SC" || category == "ST" || category == "OBC"){
result.innerHTML += `
<div class="card">
<h3>Post Matric Scholarship</h3>
<p><b>Last Date:</b> 30 April 2026</p>
<a href="https://scholarships.gov.in" target="_blank">
<button class="apply-btn">Apply Here</button>
</a>
</div><br>`;
}

if(category.includes("Minority")){
result.innerHTML += `
<div class="card">
<h3>Minority Scholarship</h3>
<p><b>Last Date:</b> 15 March 2026</p>
<a href="https://scholarships.gov.in" target="_blank">
<button class="apply-btn">Apply Here</button>
</a>
</div><br>`;
}

if(gender == "Female"){
result.innerHTML += `
<div class="card">
<h3>AICTE Pragati Scholarship for Girls</h3>
<p><b>Last Date:</b> 20 April 2026</p>
<a href="https://www.aicte-india.org" target="_blank">
<button class="apply-btn">Apply Here</button>
</a>
</div><br>`;
}

if(income <= 250000){
result.innerHTML += `
<div class="card">
<h3>Karnataka SSP Scholarship</h3>
<p><b>Last Date:</b> 10 May 2026</p>
<a href="https://ssp.postmatric.karnataka.gov.in" target="_blank">
<button class="apply-btn">Apply Here</button>
</a>
</div><br>`;
}

if(result.innerHTML == ""){
result.innerHTML = "No schemes matched. Try changing inputs.";
}
}


// ================= PENSION =================
function checkPension() {

let age = document.getElementById("age").value;
let income = document.getElementById("income").value;
let category = document.getElementById("category").value;
let disability = document.getElementById("disability").value;
let govt = document.getElementById("govt").value;

let resultHTML = "";

if(age >= 60 && income <= 200000){
resultHTML += `
<div class="scheme">
<h3>Old Age Pension Scheme</h3>
<p><b>Last Date to Apply:</b> 31 March 2026</p>
<a href="https://nsap.nic.in/" target="_blank">
<button class="apply-btn">Apply Here</button>
</a>
</div>`;
}

if(disability === "yes"){
resultHTML += `
<div class="scheme">
<h3>Disability Pension Scheme</h3>
<p><b>Last Date to Apply:</b> 30 June 2026</p>
<a href="https://sevasindhu.karnataka.gov.in/" target="_blank">
<button class="apply-btn">Apply Here</button>
</a>
</div>`;
}

if(category === "sc" || category === "st"){
resultHTML += `
<div class="scheme">
<h3>Social Security Pension (SC/ST)</h3>
<p><b>Last Date to Apply:</b> 31 July 2026</p>
<a href="https://sevasindhu.karnataka.gov.in/" target="_blank">
<button class="apply-btn">Apply Here</button>
</a>
</div>`;
}

if(govt === "yes"){
resultHTML += `
<div class="scheme">
<h3>Government Employee Pension</h3>
<p><b>Last Date to Apply:</b> Within 6 months after retirement</p>
<a href="https://pensionersportal.gov.in/" target="_blank">
<button class="apply-btn">Apply Here</button>
</a>
</div>`;
}

if(resultHTML === ""){
resultHTML = "<p>Not eligible for major pension schemes based on given details.</p>";
}

document.getElementById("result").innerHTML = resultHTML;
}


// ================= FARMER =================
function checkFarmer() {

let land = document.getElementById("land").value;
let income = document.getElementById("income").value;
let crop = document.getElementById("crop").value;
let irrigation = document.getElementById("irrigation").value;

let resultHTML = "";

if(land > 0 && income <= 300000){
resultHTML += `
<div class="scheme">
<h3>PM-KISAN Scheme</h3>
<p><b>Last Date to Apply:</b> 31 March 2026</p>
<a href="https://pmkisan.gov.in/" target="_blank">
<button class="apply-btn">Apply Here</button>
</a>
</div>`;
}

if(crop === "sugarcane" || crop === "corn" || crop === "rice" || crop === "wheat"){
resultHTML += `
<div class="scheme">
<h3>Pradhan Mantri Fasal Bima Yojana</h3>
<p><b>Last Date to Apply:</b> 31 July 2026</p>
<a href="https://pmfby.gov.in/" target="_blank">
<button class="apply-btn">Apply Here</button>
</a>
</div>`;
}

if(irrigation === "rainfed"){
resultHTML += `
<div class="scheme">
<h3>Micro Irrigation Scheme</h3>
<p><b>Last Date to Apply:</b> 30 June 2026</p>
<a href="https://pmksy.gov.in/" target="_blank">
<button class="apply-btn">Apply Here</button>
</a>
</div>`;
}

if(land <= 2 && land > 0){
resultHTML += `
<div class="scheme">
<h3>Small Farmer Subsidy Scheme</h3>
<p><b>Last Date to Apply:</b> 15 August 2026</p>
<a href="https://sevasindhu.karnataka.gov.in/" target="_blank">
<button class="apply-btn">Apply Here</button>
</a>
</div>`;
}

if(resultHTML === ""){
resultHTML = "<p>No schemes matched based on given details.</p>";
}

document.getElementById("result").innerHTML = resultHTML;
}


// ================= WOMEN =================
function checkWomen() {

let age = document.getElementById("age").value;
let income = document.getElementById("income").value;
let marital = document.getElementById("marital").value;
let working = document.getElementById("working").value;

let resultHTML = "";

if(marital === "widow" && income <= 300000){
resultHTML += `
<div class="scheme">
<h3>Widow Pension Scheme</h3>
<p><b>Last Date to Apply:</b> 31 March 2026</p>
<a href="https://sevasindhu.karnataka.gov.in/" target="_blank">
<button class="apply-btn">Apply Here</button>
</a>
</div>`;
}

if(working === "no" && income <= 300000){
resultHTML += `
<div class="scheme">
<h3>Women Self Employment Scheme</h3>
<p><b>Last Date to Apply:</b> 30 June 2026</p>
<a href="https://www.nrlm.gov.in/" target="_blank">
<button class="apply-btn">Apply Here</button>
</a>
</div>`;
}

if(age <= 25){
resultHTML += `
<div class="scheme">
<h3>Women Education Assistance</h3>
<p><b>Last Date to Apply:</b> 31 July 2026</p>
<a href="https://scholarships.gov.in/" target="_blank">
<button class="apply-btn">Apply Here</button>
</a>
</div>`;
}

if(resultHTML === ""){
resultHTML = "<p>No schemes matched based on given details.</p>";
}

document.getElementById("result").innerHTML = resultHTML;
}