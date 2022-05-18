const name= document.getElementById('name')
const password= document.getElementById('password')
const form= document.getElementById('form')
const errorElement= document.getElementById('error')

form.addEventListener('submit',(e) =>{
    let messages = []
    if (name.value === '' || name.value == null){
        messages.push('enter the name')
    }
    if (password. value.length <= 8) {
        messages.push('the password must be longer than 8 char')
    }
    if (password.value.length >= 20) {
        messages.push('the password must be less than 20 char')
    }
    if (password.value === 'password') {
        messages.push(' password must not be the word password')
    }
    if(messages.length > 0){
    e.preventDefault()
    errorElement.innerText = messages.join(',')
    }  

})
//selections and options with if ..else
const select= document.querySelector('select');
const para =document .querySelector('h5');

select.addEventListener('change', setWeather);

function setWeather() {
    

 const choice = select.value

 if(choice === 'sunny'){
     para .textContent = 'it is a beautiful day with a sun, i think we can get an ice cream guys'
 }
 else if (choice === 'rainy') {
     para.textContent= 'can you bring an umbrella for me plz, because it raining'
     
 }
 else if (choice === 'snowing') {
     para.textContent = 'it is snow day let get our long coat it is to cold'
     
 }
 else if (choice === 'overcast') {
     para.textContent ='it is overcast ...........'
     
 }
 else{
     para.textContent= "i don't know for sure!"
 }
}
//end of else if;
const Select1= document.querySelector('Select');
const para1= document.querySelector('h3');

Select1 .addEventListener('change', setFood);
function setFood(menu) {
    const menu= Select1.value;

 switch (menu) {
   
    case 'rice' :
        para1.textContent='i like rice';
         break;
    case 'potatoes':
        para1.textContent='they are hard to eat';
        break;
    case 'vegetables':
        para1.textContent='for giving you body a healthly life';
        break;
    case 'fruits':
        para1.textContent='i love them moreeee';
        break;

     default:
         para1.textContent='i am in fasting today i am sorry';
         break;
 }  
}