var counter = 1;
setInterval(function() {
  document.getElementById('radio' + counter).checked = true;
  counter++;
  if (counter > 3) {
    counter = 1;
  }
}, 4000);

function openNav() {
  document.getElementById("mySidepanel").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidepanel").style.width = "0";
}



let cLoseBtn = document.getElementById("closeBtn");
let modalCloseBtn = document.getElementById("modalCloseBtn");
let openBtn = document.getElementById("open-btn");
let Bg = document.getElementById("bg-wrapp");
let Form = document.getElementById("form");
let email = document.getElementById("email");
let password = document.getElementById("password");
let Text = document.getElementById("text");
let modal = document.getElementById("modal");

openBtn.addEventListener("click", () => {
  Bg.style.display = "block";
});

cLoseBtn.addEventListener("click", () => {
  //   location = "about.html";
  Bg.style.display = "none";
});

modalCloseBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

Form.addEventListener("submit", (evt) => {
  evt.preventDefault();

  let obj = {
    gmail: email.value,
    password: password.value,
  };

  if (
    obj.gmail == "adhamqayumov@gmail.com" &&
    obj.password == "11111111"
  ) {
      location = "../message/message.html"
    localStorage.setItem("token", JSON.stringify(obj));
  } else {
  }

  email.value = null;
  password.value = null;
});

const localText = localStorage.getItem("textValue");
const parseText = JSON.parse(localText);

modalCloseBtn.addEventListener('click', clearStorages)

function clearStorages() {
  localStorage.clear(localText)  
}

if (parseText) {
  modal.style.display = "flex";
  Text.textContent = parseText;
} else {
  modal.style.display = "none";
}



