const inputs = document.getElementsByTagName("input");
const errors = document.querySelectorAll(".errorbox");
const errorm = document.querySelectorAll(".errormessage");
console.log(errors);
const inputlist = Array.from(inputs);
const button = document.getElementById("trialbutton");
const form = document.getElementById("formbox");
const email = document.getElementById("email");

function errorchecker(event){
    const emailvalue = email.value;
    let hasError = false;
    for(let x = 0;x<inputlist.length;x++){
        if(inputlist[x].value==""){
        event.preventDefault();
        errors[x].style.display = "flex";
        errors[x].style.color = "red";
        inputlist[x].placeholder="";
        errors[x].innerHTML= '<svg style="margin-right:20px" viewBox="0 0 24 24" width="24" height="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><circle fill="#FF7979" cx="12" cy="12" r="12"/><rect fill="#FFF" x="11" y="6" width="2" height="9" rx="1"/><rect fill="#FFF" x="11" y="17" width="2" height="2" rx="1"/></g></svg>';
        hasError = true;
        errorm[x].style.color = "red";
        errorm[x].style.display = "block";
        errorm[x].innerText =`${inputlist[x].name} cannot be empty`;
        }
        if(!(emailvalue=="") && !(emailvalue.includes("@gmail.com")) &&
            !(emailvalue.includes("@yahoo.com"))){
                errors[2].style.display = "flex";
                errors[2].style.color = "red";
                errors[2].innerHTML= '<svg style="margin-right:20px" viewBox="0 0 24 24" width="24" height="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><circle fill="#FF7979" cx="12" cy="12" r="12"/><rect fill="#FFF" x="11" y="6" width="2" height="9" rx="1"/><rect fill="#FFF" x="11" y="17" width="2" height="2" rx="1"/></g></svg>';
                hasError = true;
                errorm[2].style.color = "red";
                errorm[2].style.display = "block";
                errorm[2].innerText =`Looks like this is not an email`;
                
        }
        if(hasError==true){
            event.preventDefault();
        }
    }
}
for(let x = 0;x<inputlist.length;x++){
    inputlist[x].addEventListener(("focus"), ()=>{errors[x].style.display = "none";
        errorm[x].style.display = "none";
    });
}
/*for(let x = 0;x<errors.length;x++){
    errors[x].addEventListener(("click"), ()=>{errors[x].style.display="none"});
}*/

form.addEventListener("submit",errorchecker);
