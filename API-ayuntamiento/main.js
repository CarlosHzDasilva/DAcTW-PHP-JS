const URL = "https://www.santacruzdetenerife.es/opendata/dataset/f38a3086-8d4c-4c6a-943e-629056b66f01/resource/95a65af3-5f11-4041-a418-45afcc5e7686/download/agendacultural.json";
const proxy = "https://api.allorigins.win/raw?url=";

//Elementos del DOM
const header = document.getElementById("header");
const container = document.getElementById("container");
const selectCategories = document.getElementById("select");

//Datos
let events = [];
let category = [];
let actualCategory = 0;

//Carga de eventos
const eventsLoad = (category) => {

    console.log(category);

    if (category == "0") {
        container.innerHTML = "";

        let cardsFragment = document.createDocumentFragment();

        events.forEach(element => {
            let card = document.createElement("div");
            card.setAttribute("class", "cards");
            container.appendChild(card);

            let eventImage = document.createElement("img");
            eventImage.setAttribute("class", "eventImages");
            eventImage.src = element.imagen;
            card.appendChild(eventImage);

            let eventCategory = document.createElement("p");
            eventCategory.innerHTML = "<strong>Categoría: </strong>" + element.categoria;
            card.appendChild(eventCategory);

            let titulo = document.createElement("h3");
            titulo.innerText = element.nombre;
            card.appendChild(titulo);

            let autor = document.createElement("p");
            autor.innerHTML = element.descripcion;
            autor.setAttribute("class", "description")
            card.appendChild(autor);

            if (element.autor != null) {
                let autor = document.createElement("p");
                autor.innerHTML = element.autor;
                card.appendChild(autor);
            }

            if (element.ciudad != null) {
                let city = document.createElement("p");
                city.innerHTML = element.ciudad;
                card.appendChild(city);
            }

            if (element.hora_inicio != null) {
                if (element.hora_inicio != 0) {
                    let initTime = parseInt(element.hora_inicio/3600) + ":" + ((element.hora_inicio % 3600) / 60 == 0 ? "00" : ((element.hora_inicio % 3600) / 60));
                    let time = document.createElement("p");
                    time.innerHTML = "<strong>Hora de inicio: </strong>" + initTime;
                    card.appendChild(time);
                }
            }

            if (element.fecha_inicio != null) {
                let initDate = element.fecha_inicio.toString();
                initDate = initDate.substring(6,8) + "/" + initDate.substring(4,6) + "/" + initDate.substring(0,4);
                let date = document.createElement("p");
                date.innerHTML = `<strong>${initDate}</strong>`;
                card.appendChild(date);
            }
        })

        container.appendChild(cardsFragment);

    } else {
        container.innerHTML = "";

        let cardsFragment = document.createDocumentFragment();

        events.forEach(element => {
            if (element.categoria == category) {
                let card = document.createElement("div");
                card.setAttribute("class", "cards");
                container.appendChild(card);

                let eventImage = document.createElement("img");
                eventImage.setAttribute("class", "eventImages");
                eventImage.src = element.imagen;
                card.appendChild(eventImage);

                let eventCategory = document.createElement("p");
                eventCategory.innerHTML = "<strong>Categoría: </strong>" + element.categoria;
                card.appendChild(eventCategory);

                let titulo = document.createElement("h3");
                titulo.innerText = element.nombre;
                card.appendChild(titulo);

                let autor = document.createElement("p");
                autor.innerHTML = element.descripcion;
                autor.setAttribute("class", "description")
                card.appendChild(autor);

                if (element.autor != null) {
                    let autor = document.createElement("p");
                    autor.innerHTML = element.autor;
                    card.appendChild(autor);
                }

                if (element.ciudad != null) {
                    let city = document.createElement("p");
                    city.innerHTML = element.ciudad;
                    card.appendChild(city);
                }

                if (element.hora_inicio != null) {
                    if (element.hora_inicio != 0) {
                        let initTime = parseInt(element.hora_inicio/3600) + ":" + ((element.hora_inicio % 3600) / 60 == 0 ? "00" : ((element.hora_inicio % 3600) / 60));
                        let time = document.createElement("p");
                        time.innerHTML = "<strong>Hora de inicio: </strong>" + initTime;
                        card.appendChild(time);
                    }
                }

                if (element.fecha_inicio != null) {
                    let initDate = element.fecha_inicio.toString();
                    initDate = initDate.substring(6,8) + "/" + initDate.substring(4,6) + "/" + initDate.substring(0,4);
                    let date = document.createElement("p");
                    date.innerHTML = `<strong>${initDate}</strong>`;
                    card.appendChild(date);
                }
            }
        })
        container.appendChild(cardsFragment);
    }
}

//Carga de categorías
const categoriesLoad = () => {
    let logo = document.createElement("img");
    logo.setAttribute("class", "logo");
    logo.src = "./images/logo-sede-santacruzdetenerife-small.png";
    header.appendChild(logo);

    let selectLabel = document.createElement("label");
    selectLabel.for = "selectCategory";
    selectLabel.innerHTML = "Seleccione una categoría:";
    selectCategories.appendChild(selectLabel);

    let select = document.createElement("select");
    select.name = "selectCategory";
    select.id = "filter";
    select.addEventListener("change", () => {
        actualCategory = document.getElementById("filter").value;
        eventsLoad(actualCategory);
    })
    selectCategories.appendChild(select);

    let selectDefault = document.createElement("option");
    selectDefault.selected = true;
    selectDefault.value = "0";
    selectDefault.innerText = "Mostrar todas las categorías";
    select.appendChild(selectDefault);

    let selectFragment = document.createDocumentFragment();

    category.forEach(element => {
        let option = document.createElement("option");
        option.value = element;
        option.innerText = element;

        selectFragment.appendChild(option);
    })

    select.appendChild(selectFragment);
}

//Carga de Datos
const dataLoad = () => {
    fetch(proxy + URL)
    .then(res => res.json())
    .then(data => {
        console.log(data);

        //Carga de elementos en el array de eventos
        data.docs.forEach(element => events.push(element));

        //Carga de elementos en el array de categorias
        data.docs.forEach(element => {
            if (category.indexOf(element.categoria) == -1) {
                category.push(element.categoria);
            }
        });

        //Carga de opciones
        categoriesLoad();

        //Carga de elementos
        eventsLoad(actualCategory);
    })
}

window.onload = () => {
    dataLoad();
}
