// Vanilla javascript
const btn = document.querySelector(".button");
const input_box = document.querySelector(".input_text");
const img = document.querySelector(".qr-img");
const downbtn = document.querySelector(".btn");

function qrcode(content) {
    const src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + content;
    img.src = src;
    img.style.display = "block";
    downbtn.style.display = "block";




}
btn.addEventListener("click", () => {
    if (input_box.value === "") {
        alert("Please type something")
    } else {
        qrcode(input_box.value);
    }
});

function downloadQR() {
    let image = document.querySelector('.qr-image').querySelector('img').src;
    let link = document.createElement("a");
    link.download = "qr_code.png";
    link.href = image;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    delete link;

}
downbtn.addEventListener('click', () => {
    downloadQR();
});