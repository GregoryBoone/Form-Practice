const submit = document.getElementById("submit");

function changeCursor() {
  submit.style.cursor = "pointer";
}

submit.onmouseover = changeCursor();
