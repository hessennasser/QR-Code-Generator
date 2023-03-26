const wrapper = document.querySelector(".wrapper");
const btn = document.querySelector(".btn");
const img = document.querySelector(".output img");
img.src = "data:image/png;base64,";
let input = document.getElementById("url-input");
let url = `https://api.api-ninjas.com/v1/qrcode?format=png&data=`;
let apiKey = "VTOMZO2EHgXCKNUu6C5G4Q==3HksQbohiVTSTlnX";
let options = {
    method: "GET",
    headers: {
        'X-Api-Key': apiKey,
        'content-type': 'application/json'
    }
};
btn.addEventListener("click", () => {
    if(!input.value) return
    generate();
    img.src = "data:image/png;base64,";
});

let generate = () => {
    let data = input.value;
    finalURL = url + data;
    fetch(finalURL, options)
        .then(res => res.text())
        .then(data => img.src += data)
        .finally(wrapper.classList.add("active"));
};
