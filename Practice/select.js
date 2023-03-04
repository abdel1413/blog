let btn = document.querySelector("#btn");
let select = document.querySelector("#framework");

btn.onclick = (event) => {
  event.preventDefault();
  console.log(select.selectedIndex);
  console.log(select.value);
  alert(
    `the selected item value: ${select.value} with index ${select.selectedIndex}`
  );
};
