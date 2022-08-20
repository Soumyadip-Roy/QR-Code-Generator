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

            setTimeout(() => {
                const saveUrl = qr.querySelector('img').src;
                console.log(saveUrl);
                createSaveBtn(saveUrl);
            }, 50);
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
    qr.innerHTML='';
    const saveLink = document.getElementById('save-link');
    if(saveLink){
        saveLink.remove();
    }

}

const createSaveBtn = (saveUrl)=>{
    const link = document.createElement('a');
    link.id='save-link';
    link.classList = `bg-blue-500 hover:bg-blue-700 text-white font-bold p-2 px-20 rounded m-auto my-5`;
    link.href=saveUrl;
    link.download='qrcode';
    link.innerHTML="Save Image";
    document.getElementById('generated').appendChild(link);
}
form.addEventListener('submit',onGenerateSubmit);

