const form = document.getElementById('generate-form')
const qr = document.getElementById('qrcode')

onGenerateSubmit = (e)=>{
    e.preventDefault();

    clearui();

    const url = document.getElementById('url').value;
    const size = document.getElementById('size').value;

    
    if(url === ""){
        alert('please enter a url');
    }
    else{
        console.log(url,size);
        showSpinner();
        setTimeout(() => {
            hideSpinner();
            generateQRCode(url,size);
        }, 1000);


    }

}

const generateQRCode = (url , size)=>{
    const qrcode = new QRCode('qrcode',{
        text:url,
        width:size,
        height:size
    })
}

const showSpinner = () =>{
    document.getElementById('spinner').style.display="block";
}
const hideSpinner = () =>{
    document.getElementById('spinner').style.display="none";
}

const clearui = ()=>{
    qr.innerHTML=''
}
const createSaveBtn = (saveUrl)=>{
    
}
form.addEventListener('submit',onGenerateSubmit);

