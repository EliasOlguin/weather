const url = `https://api.open-meteo.com/v1/forecast?latitude=-54.81&longitude=-68.31&hourly=temperature_2m,apparent_temperature,precipitation,windspeed_10m&timezone=America/Argentina/Ushuaia`;

const getIcons = (data) => {
  let horaDelDia = new Date().getHours();
  console.log(horaDelDia);
  for (let dia = 1; dia <= 7; dia++) {
    let temperaturaValor = document.getElementById(`temperatura-valor${dia}`);
    let termica = document.getElementById(`sensacion-termica${dia}`);
    let lluvia = document.getElementById(`lluvia${dia}`);
    let iconoAnimado = document.getElementById(`icono-animado${dia}`);
    let vientoVelocidad = document.getElementById(`viento-velocidad${dia}`);
    let temp2 = Math.round(data.hourly.temperature_2m[horaDelDia]);
    temperaturaValor.textContent = `${temp2} ° C`;
    let sensacion = Math.round(data.hourly.apparent_temperature[horaDelDia]);
    termica.textContent = `${sensacion} ° C`;
    let precipitacion = Math.round(data.hourly.precipitation[horaDelDia]);
    lluvia.textContent = `%${precipitacion}`;
    let viento = Math.round(data.hourly.windspeed_10m[horaDelDia]);
    vientoVelocidad.textContent = `${viento} km/h`;
    if (precipitacion < 1) {
      iconoAnimado.src = "animated/day.svg";
    } else if (precipitacion >= 1 && precipitacion < 2) {
      iconoAnimado.src = "animated/rainy-1.svg";
    } else if (precipitacion >= 2 && precipitacion < 15) {
      iconoAnimado.src = "animated/rainy-4.svg";
    } else if (precipitacion >= 15 && precipitacion < 30) {
      iconoAnimado.src = "animated/rainy-5.svg";
    } else if (precipitacion >= 30 && precipitacion < 60) {
      iconoAnimado.src = "animated/rainy-6.svg";
    } else if (precipitacion > 60) {
      iconoAnimado.src = "animated/rainy-7.svg";
    }
    horaDelDia += 24;
  }
};
const getWeather = async () => {
  await fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      getIcons(data);
    })
    .catch((error) => {
      console.log(error);
    });
};
const getDays = () => {
  const dias = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sábado",
    "Domingo",
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sábado",
  ];
  let nombreDia = new Date().getDay();
  console.log(nombreDia);
  for (let day = 0; day <= 6; day++) {
    let dia = document.getElementById(`dia${day}`);
    let numeroDia = nombreDia + day;
    dia.textContent = `${dias[numeroDia]}`;
  }
};
getWeather();
getDays();
