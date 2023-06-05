

const inputEl = document.getElementById("font-size-control");
const outputEl = document.getElementById("text");
function fontSizeControl(event) {
outputEl.style.fontSize = event.currentTarget.value + 'px';
};

inputEl.addEventListener('input', fontSizeControl);