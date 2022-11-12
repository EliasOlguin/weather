//#region
//HOY

let temperaturaValor = document.getElementById("temperatura-valor1");
let termica = document.getElementById("sensacion-termica1");

let lluvia = document.getElementById("lluvia1");
let iconoAnimado = document.getElementById("icono-animado1");

let vientoVelocidad = document.getElementById("viento-velocidad1");

//MAÑANA

let temperaturaValor2 = document.getElementById("temperatura-valor2");
let termica2 = document.getElementById("sensacion-termica2");

let lluvia2 = document.getElementById("lluvia2");
let iconoAnimado2 = document.getElementById("icono-animado2");

let vientoVelocidad2 = document.getElementById("viento-velocidad2");

//DIA 3

let temperaturaValor3 = document.getElementById("temperatura-valor3");
let termica3 = document.getElementById("sensacion-termica3");

let lluvia3 = document.getElementById("lluvia3");
let iconoAnimado3 = document.getElementById("icono-animado3");

let vientoVelocidad3 = document.getElementById("viento-velocidad3");

//DIA 4

let temperaturaValor4 = document.getElementById("temperatura-valor4");
let termica4 = document.getElementById("sensacion-termica4");

let lluvia4 = document.getElementById("lluvia4");
let iconoAnimado4 = document.getElementById("icono-animado4");

let vientoVelocidad4 = document.getElementById("viento-velocidad4");

//DIA 5

let temperaturaValor5 = document.getElementById("temperatura-valor5");
let termica5 = document.getElementById("sensacion-termica5");

let lluvia5 = document.getElementById("lluvia5");
let iconoAnimado5 = document.getElementById("icono-animado5");

let vientoVelocidad5 = document.getElementById("viento-velocidad5");

//DIA 6

let temperaturaValor6 = document.getElementById("temperatura-valor6");
let termica6 = document.getElementById("sensacion-termica6");

let lluvia6 = document.getElementById("lluvia6");
let iconoAnimado6 = document.getElementById("icono-animado6");

let vientoVelocidad6 = document.getElementById("viento-velocidad6");

//#region Dia 7

let temperaturaValor7 = document.getElementById("temperatura-valor7");
let termica7 = document.getElementById("sensacion-termica7");

let lluvia7 = document.getElementById("lluvia7");
let iconoAnimado7 = document.getElementById("icono-animado7");

let vientoVelocidad7 = document.getElementById("viento-velocidad7");
//#endregion
//#endregion

const url = `https://api.open-meteo.com/v1/forecast?latitude=-54.81&longitude=-68.31&hourly=temperature_2m,apparent_temperature,precipitation,windspeed_10m&timezone=America/Argentina/Ushuaia`;
const isRain = (precipitacion) => {
  if (precipitacion < 1) {
    iconoAnimado2.src = "animated/day.svg";
  } else if (precipitacion >= 1 && precipitacion < 2) {
    iconoAnimado2.src = "animated/rainy-1.svg";
  } else if (precipitacion >= 2 && precipitacion < 15) {
    iconoAnimado2.src = "animated/rainy-4.svg";
  } else if (precipitacion >= 15 && precipitacion < 30) {
    iconoAnimado2.src = "animated/rainy-5.svg";
  } else if (precipitacion >= 30 && precipitacion < 60) {
    iconoAnimado2.src = "animated/rainy-6.svg";
  } else if (precipitacion > 60) {
    iconoAnimado2.src = "animated/rainy-7.svg";
  }
};
fetch(url)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    let temp = Math.round(data.hourly.temperature_2m[11]);
    temperaturaValor.textContent = `${temp} ° C`;

    let sensacion = Math.round(data.hourly.apparent_temperature[11]);
    termica.textContent = `${sensacion} ° C`;

    let precipitacion = Math.round(data.hourly.precipitation[11]);
    lluvia.textContent = precipitacion;

    let viento = Math.round(data.hourly.windspeed_10m[11]);
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

    //MAÑANA

    let temp2 = Math.round(data.hourly.temperature_2m[40]);
    temperaturaValor2.textContent = `${temp2} ° C`;

    let sensacion2 = Math.round(data.hourly.apparent_temperature[40]);
    termica2.textContent = `${sensacion2} ° C`;

    let precipitacion2 = Math.round(data.hourly.precipitation[40]);
    lluvia2.textContent = precipitacion2;

    let viento2 = Math.round(data.hourly.windspeed_10m[40]);
    vientoVelocidad2.textContent = `${viento2} km/h`;

    isRain(precipitacion2);

    //DIA 3

    let temp3 = Math.round(data.hourly.temperature_2m[64]);
    temperaturaValor3.textContent = `${temp3} ° C`;

    let sensacion3 = Math.round(data.hourly.apparent_temperature[64]);
    termica3.textContent = `${sensacion3} ° C`;

    let precipitacion3 = Math.round(data.hourly.precipitation[64]);
    lluvia3.textContent = `%${precipitacion3}`;

    let viento3 = Math.round(data.hourly.windspeed_10m[64]);
    vientoVelocidad3.textContent = `${viento3} km/h`;

    if (precipitacion3 < 1) {
      iconoAnimado3.src = "animated/day.svg";
    } else if (precipitacion3 >= 1 && precipitacion3 < 2) {
      iconoAnimado3.src = "animated/rainy-1.svg";
    } else if (precipitacion3 >= 2 && precipitacion3 < 15) {
      iconoAnimado3.src = "animated/rainy-4.svg";
    } else if (precipitacion3 >= 15 && precipitacion3 < 30) {
      iconoAnimado3.src = "animated/rainy-5.svg";
    } else if (precipitacion3 >= 30 && precipitacion3 < 60) {
      iconoAnimado3.src = "animated/rainy-6.svg";
    } else if (precipitacion3 > 60) {
      iconoAnimado3.src = "animated/rainy-7.svg";
    }

    //DIA 4

    let temp4 = Math.round(data.hourly.temperature_2m[88]);
    temperaturaValor4.textContent = `${temp4} ° C`;

    let sensacion4 = Math.round(data.hourly.apparent_temperature[88]);
    termica4.textContent = `${sensacion4} ° C`;

    let precipitacion4 = Math.round(data.hourly.precipitation[88]);
    lluvia4.textContent = precipitacion4;

    let viento4 = Math.round(data.hourly.windspeed_10m[88]);
    vientoVelocidad4.textContent = `${viento4} km/h`;

    if (precipitacion4 < 1) {
      iconoAnimado4.src = "animated/day.svg";
    } else if (precipitacion4 >= 1 && precipitacion4 < 2) {
      iconoAnimado4.src = "animated/rainy-1.svg";
    } else if (precipitacion4 >= 2 && precipitacion4 < 15) {
      iconoAnimado4.src = "animated/rainy-4.svg";
    } else if (precipitacion4 >= 15 && precipitacion4 < 30) {
      iconoAnimado4.src = "animated/rainy-5.svg";
    } else if (precipitacion4 >= 30 && precipitacion4 < 60) {
      iconoAnimado4.src = "animated/rainy-6.svg";
    } else if (precipitacion4 > 60) {
      iconoAnimado.src = "animated/rainy-7.svg";
    }

    //DIA 5

    let temp5 = Math.round(data.hourly.temperature_2m[112]);
    temperaturaValor5.textContent = `${temp5} ° C`;

    let sensacion5 = Math.round(data.hourly.apparent_temperature[112]);
    termica5.textContent = `${sensacion5} ° C`;

    let precipitacion5 = Math.round(data.hourly.precipitation[112]);
    lluvia5.textContent = precipitacion5;

    let viento5 = Math.round(data.hourly.windspeed_10m[112]);
    vientoVelocidad5.textContent = `${viento5} km/h`;

    if (precipitacion5 < 1) {
      iconoAnimado5.src = "animated/day.svg";
    } else if (precipitacion5 >= 1 && precipitacion5 < 2) {
      iconoAnimado5.src = "animated/rainy-1.svg";
    } else if (precipitacion5 >= 2 && precipitacion5 < 15) {
      iconoAnimado5.src = "animated/rainy-4.svg";
    } else if (precipitacion5 >= 15 && precipitacion5 < 30) {
      iconoAnimado5.src = "animated/rainy-5.svg";
    } else if (precipitacion5 >= 30 && precipitacion5 < 60) {
      iconoAnimado5.src = "animated/rainy-6.svg";
    } else if (precipitacion5 > 60) {
      iconoAnimado5.src = "animated/rainy-7.svg";
    }

    //DIA 6

    let temp6 = Math.round(data.hourly.temperature_2m[136]);
    temperaturaValor6.textContent = `${temp6} ° C`;

    let sensacion6 = Math.round(data.hourly.apparent_temperature[136]);
    termica6.textContent = `${sensacion6} ° C`;

    let precipitacion6 = Math.round(data.hourly.precipitation[136]);
    lluvia6.textContent = precipitacion6;

    let viento6 = Math.round(data.hourly.windspeed_10m[136]);
    vientoVelocidad6.textContent = `${viento6} km/h`;

    if (precipitacion6 < 1) {
      iconoAnimado6.src = "animated/day.svg";
    } else if (precipitacion6 >= 1 && precipitacion6 < 2) {
      iconoAnimado6.src = "animated/rainy-1.svg";
    } else if (precipitacion6 >= 2 && precipitacion6 < 15) {
      iconoAnimado6.src = "animated/rainy-4.svg";
    } else if (precipitacion6 >= 15 && precipitacion6 < 30) {
      iconoAnimado6.src = "animated/rainy-5.svg";
    } else if (precipitacion6 >= 30 && precipitacion6 < 60) {
      iconoAnimado6.src = "animated/rainy-6.svg";
    } else if (precipitacion6 > 60) {
      iconoAnimado6.src = "animated/rainy-7.svg";
    }

    //DIA 7

    let temp7 = Math.round(data.hourly.temperature_2m[160]);
    temperaturaValor7.textContent = `${temp7} ° C`;

    let sensacion7 = Math.round(data.hourly.apparent_temperature[160]);
    termica7.textContent = `${sensacion7} ° C`;

    let precipitacion7 = Math.round(data.hourly.precipitation[160]);
    lluvia7.textContent = precipitacion7;

    let viento7 = Math.round(data.hourly.windspeed_10m[160]);
    vientoVelocidad7.textContent = `${viento7} km/h`;

    if (precipitacion7 < 1) {
      iconoAnimado7.src = "animated/day.svg";
    } else if (precipitacion7 >= 1 && precipitacion7 < 2) {
      iconoAnimado7.src = "animated/rainy-1.svg";
    } else if (precipitacion7 >= 2 && precipitacion7 < 15) {
      iconoAnimado7.src = "animated/rainy-4.svg";
    } else if (precipitacion7 >= 15 && precipitacion7 < 30) {
      iconoAnimado7.src = "animated/rainy-5.svg";
    } else if (precipitacion7 >= 30 && precipitacion7 < 60) {
      iconoAnimado7.src = "animated/rainy-6.svg";
    } else if (precipitacion7 > 60) {
      iconoAnimado7.src = "animated/rainy-7.svg";
    }
  })
  .catch((error) => {
    console.log(error);
  });
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
getDays();
