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
async function downloadImage(imageSrc) {
    const image = await fetch(imageSrc)
    const imageBlog = await image.blob()
    const imageURL = URL.createObjectURL(imageBlog)

    const link = document.createElement('a')
    link.href = imageURL
    link.download = 'qr_code.png'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link);
}

downbtn.addEventListener('click', () => {
    downloadImage(img.src);
});
