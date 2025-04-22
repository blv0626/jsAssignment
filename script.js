const elements = document.getElementsByClassName("element");

for (let i = 0; i < elements.length; i++) {
  const el = elements[i];

  if (el.innerText.includes("here")) {
    el.style.backgroundColor = "blue";
  } else {
    el.style.backgroundColor = "black";
    el.style.color = "white";
  }
}

console.log(elements);