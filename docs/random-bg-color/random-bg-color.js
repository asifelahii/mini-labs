console.log('"Alhamdulillah"...js connected.'); // will appear in the browser console if script file is linked properly

const startBtn = document.getElementById("start-changing-color");
const stopBtn = document.getElementById("stop-changing-color");
const statusIndicator = document.querySelector(".status-indicator");
const statusText = document.querySelector(".status-text");
const body = document.body;
let colorIntervalId;

function getRandomColor() {
  // 1. Generate a random number between 0 and 16777215
  // 2.1 Convert the number to hexadecimal
  // 2.2 Pad the hexadecimal string with leading zeros if necessary to ensure it is 6 characters long
  // 3. Prefix the hexadecimal string with a '#' to form a valid CSS color code
  // 4. Return the final color code

  // 1.
  const random_number_in_decimal = Math.floor(Math.random() * 16777215);
  // 2.
  const random_color_in_hex = random_number_in_decimal
    .toString(16)
    .padStart(6, "0");
  // 3.
  const final_color_code = `#${random_color_in_hex}`;
  // 4.
  return final_color_code;
}

function changeBackgroundColor() {
  const randomColor = getRandomColor();

  const stylesheet = document.styleSheets[0];
  for (let rule of stylesheet.cssRules) {
    if (rule.selectorText === "body") rule.style.background = randomColor;
  }
}

const onStartClick = () => {
  colorIntervalId = setInterval(changeBackgroundColor, 1000);

  // Update UI state
  startBtn.disabled = true;
  stopBtn.disabled = false;
  startBtn.classList.add("active");
  statusIndicator.classList.add("active");
  statusText.textContent = "Running";
};

const onStopClick = () => {
  clearInterval(colorIntervalId);

  // Update UI state
  startBtn.disabled = false;
  stopBtn.disabled = true;
  startBtn.classList.remove("active");
  statusIndicator.classList.remove("active");
  statusText.textContent = "Stopped";
};

startBtn.addEventListener("click", onStartClick);
stopBtn.addEventListener("click", onStopClick);
