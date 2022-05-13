// if user add todo list;
showNote();

let addBtn = document.getElementById("addBtn");

addBtn.addEventListener("click", function addNote(e) {
  let addText = document.getElementById("addText");
  if (addText.value == "") {
    return alert("Enter Some text!!");
  }
  let notes = localStorage.getItem("notes");

  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  notesObj.push(addText.value);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  addText.value = "";
  showNote();
});

// Updating the list
function showNote() {
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  let html = "";
  notesObj.forEach(function (element, index) {
    html += `<div class="item id="${index + 1}">
                <div class="task-details">${element}</div>
                <button id="${index}" onclick="deleting(this.id)" class="btn">Delete</button>
            </div>`;
  });

  let noteEle = document.getElementById("notes");
  noteEle.innerHTML = html;
}

// deleting a node

function deleting(index) {
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  notesObj.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  showNote();
}

// search button:

let searchTxt = document.getElementById("searchTxt");

searchTxt.addEventListener("input", function () {
  let inputTxt = searchTxt.value.toLowerCase();
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  for (let i = 0; i < notesObj.length; i++) {
    let showncard = document.getElementsByClassName("item")[i];
    if (notesObj[i].includes(inputTxt)) {
      showncard.style.display = "flex";
    } else {
      showncard.style.display = "none";
    }
  }
});

searchTxt.addEventListener("keydown", function (event) {
  // Checking for Backspace.
  if (event.KeyCode == 8) {
    
  }
  // Checking for Delete.
  if (event.keyCode == 46) {
    $("#GFG_DOWN").html("Delete is Pressed!");
  }
});
