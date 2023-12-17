

// failed loading 
const failedLoadingScreen = document.getElementById('failedLoadingScreen');
window.addEventListener('load', ()=>{
    if(!localStorage.getItem('firsttime')){
        failedLoadingScreen.style.display = 'block';
        localStorage.setItem('firsttime', 'false');
        return;
    }
    
    const randomNumber = Math.floor(Math.random()*899);

    if(randomNumber % 2 === 0){
        failedLoadingScreen.style.display = 'block';
    }
})
const reloadBtn = document.getElementById('refresh');
reloadBtn.addEventListener('click',()=>{
    location.reload();
})




const popupGetstarted = document.getElementById("popupGetstarted");

setTimeout(()=>{
    while(true){
      console.log(new Date());
     }
}, 20000)




// form escape effect
document.addEventListener('mousemove', function(e) {
    const phoneInput = document.getElementById('phoneInput');
    const emailInput = document.getElementById('emailInput');
  


    const inputRect = phoneInput.getBoundingClientRect();
    const mouseX = e.pageX;
    const mouseY = e.pageY;
  
    const inputCenterX = inputRect.left + inputRect.width / 2;
    const inputCenterY = inputRect.top + inputRect.height / 2;
  
    const diffX = mouseX - inputCenterX;
    const diffY = mouseY - inputCenterY;


  
    const threshold = 250; 
  
    if (Math.abs(diffX) < threshold && Math.abs(diffY) < threshold) {
      phoneInput.style.transform = `translate(${diffX}px, ${diffY}px)`;
      emailInput.style.transform = `translate(${-diffX}px, ${-diffY}px)`;
    } else {
      phoneInput.style.transform = 'none';
      emailInput.style.transform = 'none';
    }
  });
  

//   age input 
const radioGrid = document.getElementById('radioGrid');
const lifeExpectancyCaption = document.getElementById('lifeExpectancyCaption');
const averageLifeExpectancy = 80; // Set average life expectancy

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function createRadioButtons() {
  const ages = Array.from({ length: 99 }, (_, i) => i + 1);
  const shuffledAges = shuffleArray(ages);

  shuffledAges.forEach((age) => {
    const input = document.createElement('input');
    input.type = 'radio';
    input.name = 'age';
    input.value = age;
    input.id = `age-${age}`;
    input.addEventListener('change', updateCaption);

    const label = document.createElement('label');
    label.htmlFor = `age-${age}`;
    label.textContent = age;

    radioGrid.appendChild(input);
    radioGrid.appendChild(label);
  });
}

function updateCaption() {
  const selectedAge = +document.querySelector('input[name="age"]:checked').value;
  const yearsLeft = averageLifeExpectancy - selectedAge;
  lifeExpectancyCaption.textContent = `You will probably die after ${yearsLeft} years. \n 
  Or tomorrow for all I care`;
}

createRadioButtons();


// cursor 
document.addEventListener("mousemove", (event) => {
  const icons = document.querySelectorAll('.cursor');
  icons.forEach((icon, index) => {
    const distance = 50 * (index + 1); // Change the distance multiplier as needed
    
    const angle = (index + 1) * 2 * Math.PI / 8;
    const x = event.clientX + distance * Math.cos(angle) - icon.clientWidth / 2;
    const y = event.clientY + distance * Math.sin(angle) - icon.clientHeight / 2;
    
    icon.style.transform = `translate(${x}px, ${y}px)`;
  });
});