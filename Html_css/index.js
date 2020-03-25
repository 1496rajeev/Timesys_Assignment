
//Link preview function
function showPreview() {
    const img_url = document.getElementById("linkinputId").value;
    if (img_url === "") {
        alert("Please enter image URL");
    } else {
        let img = document.createElement("img");
        img.src = img_url;
        img.height = 200;
        img.width=350;
        const link_preview_tag = document.getElementById("linkimgpreview");
        link_preview_tag.appendChild(img);
    } 
}

//Drag and drop preview function
var dropinput = document.getElementById('dropinput');
    dropinput.addEventListener('change', handleImage, false);

function handleImage(e) {
    var reader = new FileReader();
    reader.onload = function (event) {
        
    let img = document.getElementById('dropPreview');
    img.src=event.target.result;
    }
    reader.readAsDataURL(e.target.files[0]);
}