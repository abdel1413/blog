let btn = document.querySelector(".btn");
let select = document.querySelector("#framework");

btn.onclick = (event) => {
  event.preventDefault();

  console.log(select.selectedIndex);
  console.log(select.value);
  alert(
    `the selected item value: ${select.value} with index ${select.selectedIndex}`
  );
};

//accessing select elt options collection
let selectBox = select.options;

//looping through
Array.from(selectBox).forEach((e) => console.log(e.text));

//accessing innerHtml and value
let selectOption = select.options[select.selectedIndex];
console.log("selectOption is: ", selectOption.text);
console.log("and ist value is :", selectOption.value);

//getting multiple elements
let multSelect = document.querySelector(".multiple");
let btn2 = document.querySelector(".btn2");

console.log("mult", multSelect);
for (let op of multSelect) {
  console.log(op.text, op.value);
}

console.log(multSelect);

btn2.onclick = (event) => {
  event.preventDefault();
  let multy = [].filter
    .call(multSelect.options, (option) => option.selected)
    .map((op) => op.text);
  alert(multy);
};
