const form=document.querySelector("#form");
const dpt=document.querySelector("#dpt");
const book=document.querySelector("#book");
const email=document.querySelector("#email");
const Aname=document.querySelector("#Aname");
const year=document.querySelector("#year");
const price=document.querySelector("#price");

form.addEventListener('submit',(e)=>{
    
    if(!validateInputs()){
        e.preventDefault();
    }
})

function validateInputs()
{
    const dptVal=dpt.value.trim();
    const bookVal=book.value.trim();
    const emailVal=email.value.trim();
    const AnameVal=Aname.value.trim();
    const yearVal=year.value.trim();
    const priceVal=price.value.trim();
    
    let success=true;

    if(dptVal===''){
        success=false;
        setError(dpt,"Select the category")
    }
    else{
        setSuccess(dpt)
    }

    if(bookVal===''){
        success=false;
        setError(book,'Book is required')
    }
    else{
        setSuccess(book)
    }

    if (AnameVal===''){
        success=false;
        setError(Aname, 'Author name is required')
    }
    else{
        setSuccess(Aname)
    }

    if(emailVal===''){
        success=false;
        setError(email,'Email is required')
    }
    else if(!validateEmail(emailVal))
    {
        success=false;
        setError(email,'Please enter a valid email')
    }
    else{
        setSuccess(email)
    }

    if (yearVal===''){
        success=false;
        setError(year,'Published year is required')
    }
    else if (yearVal>=1000 && yearVal<2025)
    {
        setSuccess(year)
    }
    else{
        success=false;
        setError(year,'Published year is invalid')
    }
    
    if (priceVal>0)
    {
        setSuccess(price)
    }
    else{
        success=false;
        setError(price,'invalid amount')
    }


}

function setError(element,message){
    const inputGroup=element.parentElement;
    const errorElement=inputGroup.querySelector('.error')
    
    errorElement.innerText=message;
    inputGroup.classList.add('error')
    inputGroup.classList.remove('success')
}

function setSuccess(element){
    const inputGroup=element.parentElement;
    const errorElement=inputGroup.querySelector('.error')
    
    errorElement.innerText='';
    inputGroup.classList.add('success')
    inputGroup.classList.remove('error')
}

const validateEmail=(email)=> {
    return String(email)
    .toLowerCase()
    .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
}