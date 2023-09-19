import "./less/index.less";

// Örnek bir event kullanımı aşağıdadır. Çalıştırmak için comment dışına alın
// document.querySelector("h1").addEventListener("click",function(e){
// alert("Bana tıkladın!")
// });

// Kodlar buraya gelecek!

document.querySelector("h1").addEventListener("click", function (e) {
  alert("Bana tıkladın!");
});

/* document.querySelector("img").addEventListener("mouseover", function (e) {
  e.target.style.border = "5px solid red";
});
document.querySelector("img").addEventListener("mouseout", function (e) {
  e.target.style.border = "none";
}); */

const imgNodeList = document.querySelectorAll("img");
imgNodeList.forEach((img) => {
  img.addEventListener("mouseover", function (e) {
    e.target.style.border = "5px solid red";
  });
  img.addEventListener("mouseout", function (e) {
    e.target.style.border = "none";
    e.target.style.transform = "rotate(0)";
  });

  img.addEventListener("wheel", function (e) {
    e.target.style.transform = "rotate(180deg)";
  });
});

document.addEventListener("keydown", function (e) {
  if (e.type === "keydown" && e.key === "Escape") {
    document.querySelector("body").style.backgroundColor = "red";
  }
  if (e.type === "keydown" && e.key === "ArrowUp") {
    console.log("Yukarı");
  }
});

window.addEventListener("load", function (e) {
  console.log("Yükleme Bitti.");
});

window.addEventListener("resize", function (e) {
  console.log("inner sizes", e.target.innerHeight, e.target.innerWidth);
});

window.addEventListener("scroll", function (e) {
  console.log("Scroll yapıldı.", e.target.scrollingElement.scrollTop);
});

document.querySelector("input").addEventListener("select", (e) => {
  const log = document.getElementById("log");
  const selection = e.target.value.substring(
    e.target.selectionStart,
    e.target.selectionEnd
  );
  log.textContent = `Seçtiğin metin ${selection}`;
  console.log("Seçildi");
});

const suruklenebilir = document.querySelectorAll("[draggable='true']");
suruklenebilir.forEach((suruklenen) => {
  suruklenen.addEventListener("dragstart", (e) => {
    suruklenen.classList.add("dragging");
    console.log("sürükleniyor", e.target);
  });
  suruklenen.addEventListener("dragend", (e) => {
    suruklenen.classList.remove("dragging");
    console.log("bitti", e.target);
  });
});
