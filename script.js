/*const b = document.getElementById("btn");
const n = document.getElementById('name');
const p = document.getElementById('pass');
const phn = document.getElementById('phoneNumber');
let phno = Number(phn);

b.style.cssText = "font-size: 13px"
b.addEventListener('click', ()=>{
    if(n.value != "" && p.value != "" && phno.value != ""){
        alert("success");
    }else{
        console.error("don't leave the field empty")
    }
})
*/
const containerel = document.getElementsByClassName('inside');
const content = document.querySelector('#paragraph');
const firstButton = document.querySelector('#E');
const goestoFeed = document.querySelector("#feedBackBTN");

const EntireForm = document.forms.FEEDBACK;

EntireForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(EntireForm);

    const dataString = new URLSearchParams(formData).toString();
    //const jsondata = JSON.stringify(Object.fromEntries(formData));

    fetch("https://reqres.in/api/users/2", {
        method: "POST",
        body: new FormData(EntireForm),
        
    })
    .then(res => res.json())
    .then((data) => {
        console.log((data));
        //document.getElementById('new').innerText =JSON.stringify(data.data.id)
    })
})


/*EntireForm,addEventListener('formdata', (e) => {


    const formData = e.formData;
    console.log([...formData.entries()]);
    
})*/


