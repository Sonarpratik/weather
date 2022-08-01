const submit_Btn = document.getElementById('submit_Btn');
const city_name = document.getElementById('city_name');
const city_name_given = document.getElementById('city_name_given');
const temp_status = document.getElementById('temp_status');
const temp = document.getElementById('temp');
const datahide=document.querySelector('.middle_layer');

const getInfo = async (event) => {
    event.preventDefault();
    // alert('hi');
    // lef url = api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
    let city_val = city_name.value;

    if (city_val === "") {
        city_name_given.innerText = `Plz Give Correct Data`;
        datahide.classList.add('data_hide');
        
    } else {
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${city_val}&units=metric&appid=cae773c02ab2bd14ef8f7594f5d3c44d`
            const repo = await fetch(url);
            const data = await repo.json();
            const arrData = [data];

            city_name_given.innerText = `${arrData[0].name},${arrData[0].sys.country}`;
            temp.innerText = arrData[0].main.temp;
            const mood = arrData[0].weather[0].main;
            
            //conditions for images
            if(mood==="Clear"){
                temp_status.innerHTML=`<i class="fa fa-sun" style='color: #eccc68;'></i>`;
            }else if(mood ==="Clouds"){
                temp_status.innerHTML=`<i class="fa fa-cloud"></i>`;

            }else if(mood==="Rain"){
                temp_status.innerHTML=`<i class="fa fa-tint"></i>`;

            }else{
                temp_status.innerHTML=`<i class="fa fa-sun" style='color: #eccc68;'></i>`;

            }
            
        datahide.classList.remove('data_hide');

            console.log(data);
        } catch {
            city_name_given.innerText = `Plz Give Correct Spelling Of City`;
        datahide.classList.add('data_hide');

        }
    }
}
// cae773c02ab2bd14ef8f7594f5d3c44d
//b14425a6554d189a2d7dc18a8e7d7263

submit_Btn.addEventListener('click', getInfo);


//https://api.openweathermap.org/data/2.5/weather?q={pune}&appid={cae773c02ab2bd14ef8f7594f5d3c44d}