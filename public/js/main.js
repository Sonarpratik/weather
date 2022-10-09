const submit_Btn = document.getElementById("submit_Btn");
const submit_Btn6 = document.getElementById("future_Btn6");
const future_Btn5 = document.getElementById("future_Btn5");

const city_name = document.getElementById("city_name");
const city_name_given = document.getElementById("city_name_given");
const temp_status = document.getElementById("temp_status");
const temp = document.getElementById("temp");
const temp1 = document.getElementById("temp1");
const datahide = document.querySelector(".middle_layer");
// const datahide1 = document.querySelector(".w-box");
const datahide2 = document.querySelector(".all-other");
const datahide_last = document.querySelector(".bar_box");
const w_details = document.getElementById("w-details");
const w_humidity = document.getElementById("w-humidity");
const side_Btn = document.getElementById("gust");
const datex = document.getElementById("datex");
const month = document.getElementById("month");
const  year= document.getElementById("year");

const  wind= document.getElementById("wind");
const  gust= document.getElementById("gust");



const today_date = document.getElementById("year");

const datadate = document.querySelector("#datex");
const datamonth = document.querySelector("#month");


const getInfo = async (event) => {
  event.preventDefault();
  // alert('hi');
  // lef url = api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
  let city_val = city_name.value;

  if (city_val === "") {
    city_name_given.innerText = `Plz Give Correct Data`;
    datahide.classList.add("data_hide");
  } else {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${city_val}&units=metric&appid=cae773c02ab2bd14ef8f7594f5d3c44d`;
      const repo = await fetch(url);
      const data = await repo.json();
      const arrData = [data];

      city_name_given.innerText = `${arrData[0].name},${arrData[0].sys.country}`;
      temp.innerText = arrData[0].main.temp;
      w_humidity.innerText = arrData[0].main.humidity;
      const mood = arrData[0].weather[0].main;
      const details = arrData[0].weather[0].description;
      w_details.innerText = details;
      // today_date.innerText = `Stay Calm`;

      wind.innerText=arrData[0].wind.speed;
      gust.innerText=arrData[0].wind.gust;
      function formatDate(date){
        // console.log(  date.getDay());
        console.log( date.getDate());
        // console.log( (date.getMonth()+1));
        // console.log(  date.getYear());
      datex.innerText = (date.getDate());
      month.innerText = (date.getMonth()+1);
      year.innerText = (date.getYear()-100);

      }

      if (mood === "Clear") {
        temp_status.innerHTML = `<i class="fa fa-sun" style='color: #eccc68;'></i>`;
      } else if (mood === "Clouds") {
        temp_status.innerHTML = `<i class="fa fa-cloud"></i>`;
      } else if (mood === "Rain") {
        temp_status.innerHTML = `<i class="fa fa-tint"></i>`;
      } else {
        temp_status.innerHTML = `<i class="fa fa-sun" style='color: #eccc68;'></i>`;
      }

      datahide.classList.remove("data_hide");
      //   datahide1.classList.remove("data_hide");
      datahide2.classList.remove("data_hide");
      datahide_last.classList.remove("data_hide");
      datadate.classList.remove("data_hide");
      datamonth.classList.remove("data_hide");
      formatDate(new Date());

      console.log(data);
    } catch {
      city_name_given.innerText = `Plz Give Correct Spelling Of City`;
      datahide.classList.add("data_hide");
      datahide1.classList.add("data_hide");
    }
  }
};

const goFuture = async (event) => {
  event.preventDefault();
  let city_val = city_name.value;

  if (city_val === "") {
    city_name_given.innerText = `Plz Give Correct Data`;
    datahide.classList.add("data_hide");
  } else {
    try {
            datadate.classList.add("data_hide");
      datamonth.classList.add("data_hide");
      let url1 = `https://api.openweathermap.org/data/2.5/forecast?q=${city_val}&units=metric&appid=cae773c02ab2bd14ef8f7594f5d3c44d`;
      const repo1 = await fetch(url1);
      const forcast_data = await repo1.json();
      const lastData = [forcast_data];
      const start_from = lastData[0].list[39].main.temp;

      w_humidity.innerText = lastData[0].list[39].main.humidity;

      wind.innerText=lastData[0].list[39].wind.speed;
      gust.innerText=lastData[0].list[39].wind.gust;

      console.log(start_from);

      const last_mood = lastData[0].list[39].weather[0].main;

      temp.innerText = start_from;
      today_date.innerText = lastData[0].list[39].dt_txt;
      city_name_given.innerText = `${lastData[0].city.name},${lastData[0].city.country}`;

      w_details.innerText = lastData[0].list[39].weather[0].description;

      if (last_mood === "Clear") {
        temp_status.innerHTML = `<i class="fa fa-sun" style='color: #eccc68;'></i>`;
      } else if (last_mood === "Clouds") {
        temp_status.innerHTML = `<i class="fa fa-cloud"></i>`;
      } else if (last_mood === "Rain") {
        temp_status.innerHTML = `<i class="fa fa-tint"></i>`;
      } else {
        temp_status.innerHTML = `<i class="fa fa-sun" style='color: #eccc68;'></i>`;
      }
    } catch {
      city_name_given.innerText = `Plz Give Correct Spelling Of City`;
      // datahide.classList.add("data_hide");
      // datahide1.classList.add("data_hide");
    }
  }
};


const goFuture1 = async (event) => {
  event.preventDefault();
  let city_val = city_name.value;

  if (city_val === "") {
    city_name_given.innerText = `Plz Give Correct Data`;
    datahide.classList.add("data_hide");
  } else {
    try {
            datadate.classList.add("data_hide");
      datamonth.classList.add("data_hide");
      let url1 = `https://api.openweathermap.org/data/2.5/forecast?q=${city_val}&units=metric&appid=cae773c02ab2bd14ef8f7594f5d3c44d`;
      const repo1 = await fetch(url1);
      const forcast_data = await repo1.json();
      const lastData = [forcast_data];
      const start_from = lastData[0].list[10].main.temp;
      w_humidity.innerText = lastData[0].list[10].main.humidity;
      wind.innerText=lastData[0].list[10].wind.speed;
      gust.innerText=lastData[0].list[10].wind.gust;

      console.log(start_from);

      const last_mood = lastData[0].list[10].weather[0].main;

      temp.innerText = start_from;
      today_date.innerText = lastData[0].list[10].dt_txt;
      city_name_given.innerText = `${lastData[0].city.name},${lastData[0].city.country}`;

      w_details.innerText = lastData[0].list[10].weather[0].description;

      if (last_mood === "Clear") {
        temp_status.innerHTML = `<i class="fa fa-sun" style='color: #eccc68;'></i>`;
      } else if (last_mood === "Clouds") {
        temp_status.innerHTML = `<i class="fa fa-cloud"></i>`;
      } else if (last_mood === "Rain") {
        temp_status.innerHTML = `<i class="fa fa-tint"></i>`;
      } else {
        temp_status.innerHTML = `<i class="fa fa-sun" style='color: #eccc68;'></i>`;
      }
    } catch {
      city_name_given.innerText = `Plz Give Correct Spelling Of City`;
      // datahide.classList.add("data_hide");
      // datahide1.classList.add("data_hide");
    }
  }
};

const goFuture2 = async (event) => {
  event.preventDefault();
  let city_val = city_name.value;

  if (city_val === "") {
    city_name_given.innerText = `Plz Give Correct Data`;
    datahide.classList.add("data_hide");
  } else {
    try {
            datadate.classList.add("data_hide");
      datamonth.classList.add("data_hide");
      let url1 = `https://api.openweathermap.org/data/2.5/forecast?q=${city_val}&units=metric&appid=cae773c02ab2bd14ef8f7594f5d3c44d`;
      const repo1 = await fetch(url1);
      const forcast_data = await repo1.json();
      const lastData = [forcast_data];
      const start_from = lastData[0].list[18].main.temp;
      w_humidity.innerText = lastData[0].list[18].main.humidity;
      wind.innerText=lastData[0].list[18].wind.speed;
      gust.innerText=lastData[0].list[18].wind.gust;

      
      console.log(start_from);

      const last_mood = lastData[0].list[18].weather[0].main;


      temp.innerText = start_from;
      today_date.innerText = lastData[0].list[18].dt_txt;
      city_name_given.innerText = `${lastData[0].city.name},${lastData[0].city.country}`;

      w_details.innerText = lastData[0].list[18].weather[0].description;

      if (last_mood === "Clear") {
        temp_status.innerHTML = `<i class="fa fa-sun" style='color: #eccc68;'></i>`;
      } else if (last_mood === "Clouds") {
        temp_status.innerHTML = `<i class="fa fa-cloud"></i>`;
      } else if (last_mood === "Rain") {
        temp_status.innerHTML = `<i class="fa fa-tint"></i>`;
      } else {
        temp_status.innerHTML = `<i class="fa fa-sun" style='color: #eccc68;'></i>`;
      }
    } catch {
      city_name_given.innerText = `Plz Give Correct Spelling Of City`;
      // datahide.classList.add("data_hide");
      // datahide1.classList.add("data_hide");
    }
  }
};


const goFuture3 = async (event) => {
  event.preventDefault();
  let city_val = city_name.value;

  if (city_val === "") {
    city_name_given.innerText = `Plz Give Correct Data`;
    datahide.classList.add("data_hide");
  } else {
    try {
            datadate.classList.add("data_hide");
      datamonth.classList.add("data_hide");
      let url1 = `https://api.openweathermap.org/data/2.5/forecast?q=${city_val}&units=metric&appid=cae773c02ab2bd14ef8f7594f5d3c44d`;
      const repo1 = await fetch(url1);
      const forcast_data = await repo1.json();
      const lastData = [forcast_data];
      const start_from = lastData[0].list[26].main.temp;
      w_humidity.innerText = lastData[0].list[26].main.humidity;
      wind.innerText=lastData[0].list[26].wind.speed;
      gust.innerText=lastData[0].list[26].wind.gust;


      console.log(start_from);

      const last_mood = lastData[0].list[26].weather[0].main;

      temp.innerText = start_from;
      today_date.innerText = lastData[0].list[26].dt_txt;
      city_name_given.innerText = `${lastData[0].city.name},${lastData[0].city.country}`;

      w_details.innerText = lastData[0].list[26].weather[0].description;

      if (last_mood === "Clear") {
        temp_status.innerHTML = `<i class="fa fa-sun" style='color: #eccc68;'></i>`;
      } else if (last_mood === "Clouds") {
        temp_status.innerHTML = `<i class="fa fa-cloud"></i>`;
      } else if (last_mood === "Rain") {
        temp_status.innerHTML = `<i class="fa fa-tint"></i>`;
      } else {
        temp_status.innerHTML = `<i class="fa fa-sun" style='color: #eccc68;'></i>`;
      }
    } catch {
      city_name_given.innerText = `Plz Give Correct Spelling Of City`;
      // datahide.classList.add("data_hide");
      // datahide1.classList.add("data_hide");
    }
  }
};
const goFuture4 = async (event) => {
  event.preventDefault();
  let city_val = city_name.value;

  if (city_val === "") {
    city_name_given.innerText = `Plz Give Correct Data`;
    datahide.classList.add("data_hide");
  } else {
    try {
            datadate.classList.add("data_hide");
      datamonth.classList.add("data_hide");
      let url1 = `https://api.openweathermap.org/data/2.5/forecast?q=${city_val}&units=metric&appid=cae773c02ab2bd14ef8f7594f5d3c44d`;
      const repo1 = await fetch(url1);
      const forcast_data = await repo1.json();
      const lastData = [forcast_data];
      const start_from = lastData[0].list[34].main.temp;
      w_humidity.innerText = lastData[0].list[34].main.humidity;
      wind.innerText=lastData[0].list[34].wind.speed;
      gust.innerText=lastData[0].list[34].wind.gust;


      console.log(start_from);

      const last_mood = lastData[0].list[34].weather[0].main;

      temp.innerText = start_from;
      today_date.innerText = lastData[0].list[34].dt_txt;
      city_name_given.innerText = `${lastData[0].city.name},${lastData[0].city.country}`;

      w_details.innerText = lastData[0].list[34].weather[0].description;

      if (last_mood === "Clear") {
        temp_status.innerHTML = `<i class="fa fa-sun" style='color: #eccc68;'></i>`;
      } else if (last_mood === "Clouds") {
        temp_status.innerHTML = `<i class="fa fa-cloud"></i>`;
      } else if (last_mood === "Rain") {
        temp_status.innerHTML = `<i class="fa fa-tint"></i>`;
      } else {
        temp_status.innerHTML = `<i class="fa fa-sun" style='color: #eccc68;'></i>`;
      }
    } catch {
      city_name_given.innerText = `Plz Give Correct Spelling Of City`;
      // datahide.classList.add("data_hide");
      // datahide1.classList.add("data_hide");
    }
  }
};








submit_Btn.addEventListener("click", getInfo);
submit_Btn6.addEventListener("click", getInfo);
future_Btn5.addEventListener("click", goFuture);
future_Btn1.addEventListener("click", goFuture1);
future_Btn2.addEventListener("click", goFuture2);
future_Btn3.addEventListener("click", goFuture3);
future_Btn4.addEventListener("click", goFuture4);
