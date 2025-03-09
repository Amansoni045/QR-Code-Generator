let imgBox = document.getElementById("img-box");
let qrImage = document.getElementById("qrImage");
let qrText = document.getElementById("qrText");
let copyTextBtn = document.getElementById("copyText");
let downloadQRBtn = document.getElementById("downloadQR");

function generateQR() {
    if (qrText.value.trim() === "") {
        alert("Please enter a valid text or URL!");
        return;
    }

    qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + encodeURIComponent(qrText.value);
    imgBox.style.display = "block";
}

copyTextBtn.addEventListener("click", () => {
    navigator.clipboard.writeText(qrText.value);
    alert("Copied to clipboard!");
});


downloadQRBtn.addEventListener("click", () => {
    let qrURL = qrImage.src;
    let link = document.createElement("a");
    link.href = qrURL;
    link.download = "QR_Code.png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});
