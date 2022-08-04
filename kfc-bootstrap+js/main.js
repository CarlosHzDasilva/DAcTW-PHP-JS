fetch("./ficheros/ofertas.json")
  .then(response => response.json())
  .then(data => {
    for (let i = 0; i < data.length; i++) {
        document.getElementById("lista").innerHTML +=
        `
        <div class="card" style="width: 18rem;">
            <img src="./imagenes/ofertas/${data[i].codigo}.png" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${data[i].descripcion}</h5>
            </div>
        </div>
        `
    }
    });

fetch("./ficheros/cupones.json")
.then(response => response.json())
.then(data => {
  for (let i = 0; i < data.length; i++) {
      document.getElementById("cupones").innerHTML +=
      `
      <div class="card" style="width: 18rem;">
      <img src="./imagenes/cupones/${data[i].codigo}.png" class="card-img-top" alt="...">
          <div class="card-body">
              <h5 class="card-title">${data[i].descripcion}</h5>
              <h5 class="card-title">${data[i].precio}</h5>
              <h5 class="card-title">${data[i].codigo}</h5>
          </div>
      </div>
      `
  }
  });

for (let index = 0; index < 4; index++) {

    document.getElementById("footer-options").innerHTML +=
    `
    <span class="d-flex flex-column justify-content-start align-items-start p-3 m-2">
        <span class="fs-5 p-3 fw-bold text-light">Título de sección</span>
        <ul class="list-unstyled text-light">
            <li>Lorem ipsum dolor sit amet</li>
            <li>Est quidam mnesarchum ex</li>
            <li>An everti reprimique scribentur sea</li>
            <li>Duis eius inimicus eum eu</li>
            <li>Laudem graece fabulas ad his</li>
        </ul>
    </span>
    `
}
