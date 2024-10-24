const open = document.getElementById("open");
const close = document.querySelector(".modal-close");
/*const close = document.querySelector("#close");*/

const modal = document.querySelector(".modalcontainer");

open.onclick = () => {
  modal.style.display = "flex";
};
close.onclick = () => {
  modal.style.display = "none";
};
