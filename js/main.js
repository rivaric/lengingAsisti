// Carusel
const items = document.querySelectorAll(".carusel-item");
const arrowLeft = document.querySelector(".arrow-left");
const arrowRight = document.querySelector(".arrow-right");

arrowRight.addEventListener("click", () => {
  items.forEach((item) => {
    if (item.classList.contains("carusel-item-center")) {
      item.classList.remove("carusel-item-center");
      item.classList.add("carusel-item-right");
    } else if (item.classList.contains("carusel-item-left")) {
      item.classList.remove("carusel-item-left");
      item.classList.add("carusel-item-center");
    } else if (item.classList.contains("carusel-item-right")) {
      item.classList.remove("carusel-item-right");
      item.classList.add("carusel-item-left");
    }
  });
});
arrowLeft.addEventListener("click", () => {
  items.forEach((item) => {
    if (item.classList.contains("carusel-item-center")) {
      item.classList.remove("carusel-item-center");
      item.classList.add("carusel-item-left");
    } else if (item.classList.contains("carusel-item-left")) {
      item.classList.remove("carusel-item-left");
      item.classList.add("carusel-item-right");
    } else if (item.classList.contains("carusel-item-right")) {
      item.classList.remove("carusel-item-right");
      item.classList.add("carusel-item-center");
    }
  });
});

// Circle focused
const leftSigment = document.querySelector(".left-sigment");
const rightSigment = document.querySelector(".right-sigment");
const topSigment = document.querySelector(".top-sigment");
const bottomSigment = document.querySelector(".bottom-sigment");
const center = document.querySelector(".center");

const topText = document.querySelector(".top-text");
const rightText = document.querySelector(".right-text");
const bottomText = document.querySelector(".bottom-text");
const leftText = document.querySelector(".left-text");

const selectedText = (position) => {
  if (position === "top") return topText;

  if (position === "right") return rightText;

  if (position === "bottom") return bottomText;

  if (position === "left") return leftText;
};

const addHoverEffectSigment = (sigment, coordinates, axis, position) => {
  sigment.addEventListener("mouseover", () => {
    sigment.style.transform = `translate${axis}(${coordinates}px)`;
    selectedText(
      position
    ).style.transform = `translate${axis}(${coordinates}px)`;
  });

  sigment.addEventListener("mouseleave", () => {
    sigment.style.transform = `translate${axis}(0px)`;
    selectedText(position).style.transform = `translate${axis}(0px)`;
  });
};

addHoverEffectSigment(leftSigment, -10, "X", "left");
addHoverEffectSigment(rightSigment, 10, "X", "right");
addHoverEffectSigment(topSigment, -10, "Y", "top");
addHoverEffectSigment(bottomSigment, 10, "Y", "bottom");

center.addEventListener("mouseover", () => {
  leftSigment.style.transform = `translateX(-10px)`;
  rightSigment.style.transform = `translateX(10px)`;
  topSigment.style.transform = `translateY(-10px)`;
  bottomSigment.style.transform = `translateY(10px)`;
  leftText.style.transform = `translateX(-10px)`;
  rightText.style.transform = `translateX(10px)`;
  topText.style.transform = `translateY(-10px)`;
  bottomText.style.transform = `translateY(10px)`;
});

center.addEventListener("mouseleave", () => {
  leftSigment.style.transform = `translateX(0px)`;
  rightSigment.style.transform = `translateX(0px)`;
  topSigment.style.transform = `translateY(0px)`;
  bottomSigment.style.transform = `translateY(0px)`;
  leftText.style.transform = `translateX(0px)`;
  rightText.style.transform = `translateX(0px)`;
  topText.style.transform = `translateY(0px)`;
  bottomText.style.transform = `translateY(0px)`;
});

// Show messages when scrolling
const messages = document.querySelectorAll(".message-wrapper");

function checkBlocksVisibility() {
  const windowHeight = window.innerHeight;

  messages.forEach((message) => {
    const blockPosition = message.getBoundingClientRect().top;

    if (blockPosition < windowHeight - 200) {
      message.style.opacity = "1";
      message.style.transform = "translateX(0)";
    }
  });
}

checkBlocksVisibility();

window.addEventListener("scroll", function () {
  checkBlocksVisibility();
});

// Send form
const form = document.querySelector(".form");
const inputName = document.querySelector('input[name="name"]');
const inputEmail = document.querySelector('input[name="email"]');
const inputPhone = document.querySelector('input[name="phone"]');
const inputOrgName = document.querySelector('input[name="organization_name"]');
const inputMessage = document.querySelector('input[name="message"]');
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const data = {
    name: inputName.value,
    email: inputEmail.value,
    phone: inputPhone.value,
    organization_name: inputOrgName.value,
    message: inputMessage.value,
  };

  console.log(data);
});
