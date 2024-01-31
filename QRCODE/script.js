const qr=document.getElementById("qr-input")
const img=document.getElementById("qr-image")
const bt=document.getElementById("qr-btn")

function ck()
{
    const inputValue=qr.value
    if(!inputValue)
    {
        alert("Please enter a valid URL")
        return ;
    }
    else
    {
        img.src=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputValue}`  
        img.alt='QR code for ${inputValue}'
    }
}
bt.addEventListener('click',ck)