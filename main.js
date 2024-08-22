// Open App Store when user clicks on download button
const buttons = document.getElementsByClassName("download-button");

for (let i = 0; i < buttons.length; i++) {
  buttons[i].onclick = function () {
    window.open(
      "https://apps.apple.com/ca/app/t-moji/id6465692268?platform=iphone",
      "_blank"
    );
  };
}

document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(
    ".hero-container, .card, .call-to-action-container"
  );

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.animation = "0.3s linear 0s 0.1 normal forwards";
          entry.target.style.opacity = "1";
          entry.target.style.transform = "scale(1)";
        }
      });
    },
    {
      threshold: 0.0, // Adjust the threshold as needed
    }
  );

  cards.forEach((card) => {
    observer.observe(card);
  });
});