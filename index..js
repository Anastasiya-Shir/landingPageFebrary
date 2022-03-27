// alert("hi");
let a = document.querySelectorAll('a');
let btn = document.querySelectorAll('button');
a.forEach(element => {
  element.onclick = function () { alert("click"); }
});
// btn.forEach(element => {
//   element.onclick = function () { alert("click"); }
// });

btn.forEach(element => element.id = "example");

a.forEach(element => element.id = "example");


btn.forEach(element => {
  element.onclick = function () { console.log(this); }
});





const onClick = (element) => {
  const id = element.id;
  const clickedElement = document.getElementById(id);
  const currentActive = document.
    getElementsByClassName("active-tab");
  console.log("id")

  if (currentActive?.length) {
    currentActive[0].classList.remove("active-tab");
  }

  clickedElement.classList.add("active-tab");
};