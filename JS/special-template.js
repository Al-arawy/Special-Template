let aLink = document.querySelectorAll("nav ul li a");
aLink.forEach(function (li) {
  li.onclick = function () {
    aLink.forEach(function (e) {
      e.classList.remove("active");
    });
    this.classList.add("active");
  };
});
let menu = document.querySelector("header nav ul");
let Toggle = document.querySelector(".bar");
menu.onclick = (e) => {
  e.stopPropagation();
}
Toggle.addEventListener("click", (e) => {
  if (menu.style.display === "none") {
    menu.style.display = "block"
  }
  else {
    menu.style.display = "none"
  }
});
document.addEventListener('click', (e) => {
  if (e.target !== menu && e.target !== Toggle) {
    if (menu.style.display == "block") {
      menu.style.display = "none"
    }
  }
})
// Start Setting Box
document.querySelector(".setting").addEventListener("click", () => {
  let settingBox = document.querySelector(".setting-box");
  if (settingBox.style.left === "-200px") {
    settingBox.style.left = 0;
  } else {
    settingBox.style.left = "-200px";
  }
});
let ulLink = document.querySelectorAll(".color-container ul li");
ulLink.forEach(function (li) {
  li.addEventListener("click", function (e) {
    document.documentElement.style.setProperty(
      "--main-color",
      this.dataset.color
    );
    localStorage.setItem("color-option", this.dataset.color);
    ulLink.forEach(function (li) {
      li.classList.remove("active");
    });
    this.classList.add("active");
  });
});
// End Setting Box
// Set Local Storage
let mainColor = localStorage.getItem("color-option");
if (mainColor !== null) {
  document.documentElement.style.setProperty("--main-color", mainColor);
  document.querySelectorAll(".color-container ul li").forEach(function (li) {
    li.classList.remove("active");
    if (li.dataset.color === mainColor) {
      li.classList.add("active");
    }
  });
};
// Start Gallery Section
let ourGallery = document.querySelectorAll(".gallery .images img");
ourGallery.forEach((img) => {
  img.addEventListener("click", function() {
    let popupImg = document.createElement("div")
    popupImg.className = 'popup';
    document.body.append(popupImg);

    let imgBox = document.createElement('div');
    imgBox.className ='img-box';
    popupImg.append(imgBox);

    let popupImgInner = document.createElement("img");
    popupImgInner.className = 'popup-img-inner';
    imgBox.append (popupImgInner);
    popupImgInner.src = img.src;

    let closePopup = document.createElement('span');
    closePopup.className = 'close-popup';
    closePopup.textContent = "X";
    imgBox.append (closePopup);
    
    
  })
});
document.addEventListener("click", function(close) {
  if (close.target.className == 'close-popup') {
    close.target.parentNode.remove()
    document.querySelector(".popup").remove()
  }
})

// End Gallery Section
