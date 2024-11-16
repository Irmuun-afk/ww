const c = document.querySelector('.c');
const ser = document.querySelector('.ser buton');
const wb = document.querySelector('.w-b');
const wd = document.querySelector('.w-d');

ser.addEventListener('click', ()=>{
    const APIKey = 'd18a4b01be11fffebf01d2d61cb0e3f8';
    const city = document.querySelector('ser input').value;

    if(city== '')
      return;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`).then(Response => Response.json()).then(json => {
      const image = document.querySelector('.w-b img');
      const temp = document.querySelector('.w-b .temp');
      const desc = document.querySelector('.w-b .desc');
      const hu = document.querySelector('.w-d .hu span');
      const wind = document.querySelector('.w-d .wind span');

      switch (json.w[0].main){
        case 'Clear':
             image.src = 'https://cdn-icons-png.flaticon.com/512/1838/1838979.png';
             break;
        
        case 'Rain':
             image.src = 'https://cdn-icons-png.flaticon.com/512/6635/6635158.png';
             break;

        case 'Snow':
             image.src = 'https://cdn-icons-png.flaticon.com/512/6635/6635320.png';
             break; 
        
        case 'Clouds':
             image.src = 'https://cdn-icons-png.flaticon.com/512/3208/3208756.png';
             break;

        case 'Mist':
             image.src = 'https://cdn-icons-png.flaticon.com/512/4005/4005901.png';
             break;
        default:
             image.src = 'https://cdn-icons-png.flaticon.com/512/3208/3208756.png';
      }
    });
});