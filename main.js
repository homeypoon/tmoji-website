
// Open App Store when user clicks on download button
const buttons = document.getElementsByClassName("download-button");

for (let i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function () {
        window.open("https://apps.apple.com/ca/app/t-moji/id6465692268?platform=iphone", "_blank");
    };
}
