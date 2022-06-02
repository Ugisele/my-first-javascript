const name= document.getElementById('name')
const password= document.getElementById('password')
const form= document.getElementById('form')
const errorElement= document.getElementById('error')

form.addEventListener('submit',(e) =>{
    let messages = []
    if (name.value === '' || name.value == null){
        messages.push('enter the name please!')
    }
    if (password. value.length <= 8) {
        messages.push('the password must be longer than 8 char!')
    }
    if (password.value.length >= 20) {
        messages.push('the password must be less than 20 char!')
    }
    if (password.value === 'password') {
        messages.push(' password must not be the word password!')
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

// this is a switch statement
const Select1= document.querySelector('#Food');
const para1= document.querySelector('#res');

Select1.addEventListener('change', setFood);
function setFood() {
    let menu= Select1.value
    console.log(menu,'menu')
 switch (menu) {
   
    case 'rice' :
        para1.textContent='i like rice!';
        console.log('here1');
         
        break;
    case 'potatoes':
        para1.textContent='they are hard to eat!';
        console.log('here2');
        
        break;
    case 'vegetables':
        para1.textContent='for giving you body a healthly life!';
        console.log('her3e');
        
        break;
    case 'fruits':
        para1.textContent='i love them moreeee!';
        console.log('here4');
        
        break;

     default:
         para1.textContent='i am in fasting today i am sorry';
        console.log('here default');
         
         break;
 }  
}