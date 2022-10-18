'use strict'

function showNavbar() {
    let navbar = document.querySelector("header");

    if (window.scrollY > 100) {
        navbar.classList.add("bg-black");
    } else {
        navbar.classList.remove("bg-black");
    }
}

function changeLayout() {
    let layoutBtnImg = document.querySelector(".layout-btn img");
    let layoutImgs = document.querySelectorAll(".gallery-img, .gallery-img-w")
    let layoutImgsArray = Array.from(layoutImgs, element => element);
    let fourBlockImg = "/portfolio/assets/images/four-block.svg";
    let twoBloclImg = "/portfolio/assets/images/two-block.svg";

    if (layoutBtnImg.src == `${window.location.protocol}//${window.location.host}${fourBlockImg}`) {
        layoutBtnImg.src = twoBloclImg;
        layoutImgsArray.forEach(element => {
            element.classList.remove("gallery-img-half");
        });

    } else {
        layoutBtnImg.src = fourBlockImg;
        layoutImgsArray.forEach(element => {
            element.classList.add("gallery-img-half");
        });
    }
}

function forceChangeLayOut() {
    let layoutBtnImg = document.querySelector(".layout-btn img");
    let layoutImgs = document.querySelectorAll(".gallery-img, .gallery-img-w")
    let layoutImgsArray = Array.from(layoutImgs, element => element);

    if (window.innerWidth < 768) {
        layoutBtnImg.src = "/portfolio/assets/images/four-block.svg";
        layoutImgsArray.forEach(element => {
            element.classList.add("gallery-img-half");
        });
    }
}

function filterGallery(e) {
    e.target.classList.toggle("filtered")

    let buttonText = e.target.innerText;
    let targetSectionId;

    if (buttonText == "Logo Designs") {
        targetSectionId = "logo-section";
    } else if (buttonText == "Photography") {
        targetSectionId = "photo-section";
    } else if (buttonText == "Sketches & Paintings") {
        targetSectionId = "drawing-section";
    }

    document.getElementById(targetSectionId).classList.toggle("hidden-section");

    let sections = document.querySelectorAll(".hidden-section")
    if (sections.length == 3) {
        document.querySelector(".no-result").classList.add("show-section")
    } else {
        document.querySelector(".no-result").classList.remove("show-section")
    }

}

window.addEventListener('DOMContentLoaded', function () {
    window.addEventListener("scroll", showNavbar);

    if (window.location.pathname == "/gallery.html") {
        let layoutBtn = document.getElementById("layout-button");
        if (layoutBtn) {
            layoutBtn.addEventListener("click", changeLayout);
        }

        visualViewport.addEventListener("resize", forceChangeLayOut)
    }

    let filterBtn = document.querySelectorAll(".filter")
    if (filterBtn.length > 0) {
        let filterBtnArray = Array.from(filterBtn, element => element);
        filterBtnArray.forEach(element => {
            element.addEventListener("click", filterGallery);
        });
    }
});