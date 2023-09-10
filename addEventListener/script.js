const tag = document.querySelector("div");

//ADDEVENTLISTENER
// elemento.addEventListener(event, callback, options)
tag.addEventListener("click", function () {
  tag.style.backgroundColor = "red";
});
// O terceiro parâmetro é opcional.

function trocaDeCor() {
  tag.style.borderRadius = "100%";
}
tag.addEventListener("click", trocaDeCor);

// function sobrepor() {
//   tag.style.backgroundColor = "green";
// }
// tag.addEventListener("mouseover", sobrepor);
