let SubmitForm = document.getElementById("submitForm");
let TextArea = document.getElementById("textArea");
let LogOut = document.getElementById("logout");

LogOut.addEventListener("click", () => {
  localStorage.removeItem("token");

  const localData = localStorage.getItem("token");
  const parseData = JSON.parse(localData);

  console.log(parseData);
  if (!parseData) {
    return (location = "/");
  }
});

function localFunc() {
  const localData = localStorage.getItem("token");
  const parseData = JSON.parse(localData);

  console.log(parseData);
  if (!parseData) {
    return (location = "/");
  }
}

localFunc();

SubmitForm.addEventListener("submit", (evt) => {
  evt.preventDefault();

  localStorage.setItem("textValue", JSON.stringify(TextArea.value));

  TextArea.value = null;
});
