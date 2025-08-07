function switchTab(tabId) {
  document.querySelectorAll('.tab-content').forEach(tab => {
    tab.classList.remove('active');
  });
  document.querySelectorAll('.tab').forEach(btn => {
    btn.classList.remove('active');
  });
  document.getElementById(tabId).classList.add('active');
  event.target.classList.add('active');
}

function calculateTransferTime() {
  const fileSize = parseFloat(document.getElementById('fileSize').value);
  const speed = parseFloat(document.getElementById('speed').value);
  const fileUnit = document.getElementById('fileUnit').value;
  const speedUnit = document.getElementById('speedUnit').value;

  if (isNaN(fileSize) || isNaN(speed)) {
    document.getElementById('fileResult').innerText = "Please enter valid numbers.";
    return;
  }

  let sizeInMB = fileUnit === "GB" ? fileSize * 1024 : fileSize;
  let speedInMBps = speedUnit === "Mbps" ? speed / 8 : speed;
  let timeInSeconds = sizeInMB / speedInMBps;

  const hours = Math.floor(timeInSeconds / 3600);
  const minutes = Math.floor((timeInSeconds % 3600) / 60);
  const seconds = Math.floor(timeInSeconds % 60);

  document.getElementById('fileResult').innerText = `Estimated time: ${hours}h ${minutes}m ${seconds}s`;
}

function convertTemperature() {
  const temp = parseFloat(document.getElementById('tempInput').value);
  const unit = document.getElementById('tempUnit').value;
  if (isNaN(temp)) {
    document.getElementById('tempResult').innerText = "Invalid temperature.";
    return;
  }

  const result = unit === "C"
    ? (temp * 9/5) + 32 + " °F"
    : ((temp - 32) * 5/9) + " °C";

  document.getElementById('tempResult').innerText = `Result: ${result}`;
}

function toScientific() {
  const input = parseFloat(document.getElementById('sciInput').value);
  if (isNaN(input)) {
    document.getElementById('sciResult').innerText = "Enter a valid number.";
    return;
  }
  document.getElementById('sciResult').innerText = `Scientific Notation: ${input.toExponential()}`;
}

function convertMetric() {
  const input = parseFloat(document.getElementById('metricInput').value);
  const from = parseFloat(document.getElementById('metricFrom').value);
  const to = parseFloat(document.getElementById('metricTo').value);
  if (isNaN(input)) {
    document.getElementById('metricResult').innerText = "Enter a number.";
    return;
  }
  const result = (input * from) / to;
  document.getElementById('metricResult').innerText = `Converted: ${result}`;
}
