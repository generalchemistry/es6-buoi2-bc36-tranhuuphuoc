let dataGlasses = [
    { id: "G1", src: "./img/g1.jpg", virtualImg: "./img/v1.png", brand: "Armani Exchange", name: "Bamboo wood", color: "Brown", price: 150, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ea voluptates officiis? " },
    { id: "G2", src: "./img/g2.jpg", virtualImg: "./img/v2.png", brand: "Arnette", name: "American flag", color: "American flag", price: 150, description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. In assumenda earum eaque doloremque, tempore distinctio." },
    { id: "G3", src: "./img/g3.jpg", virtualImg: "./img/v3.png", brand: "Burberry", name: "Belt of Hippolyte", color: "Blue", price: 100, description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit." },
    { id: "G4", src: "./img/g4.jpg", virtualImg: "./img/v4.png", brand: "Coarch", name: "Cretan Bull", color: "Red", price: 100, description: "In assumenda earum eaque doloremque, tempore distinctio." },
    { id: "G5", src: "./img/g5.jpg", virtualImg: "./img/v5.png", brand: "D&G", name: "JOYRIDE", color: "Gold", price: 180, description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error odio minima sit labore optio officia?" },
    { id: "G6", src: "./img/g6.jpg", virtualImg: "./img/v6.png", brand: "Polo", name: "NATTY ICE", color: "Blue, White", price: 120, description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit." },
    { id: "G7", src: "./img/g7.jpg", virtualImg: "./img/v7.png", brand: "Ralph", name: "TORTOISE", color: "Black, Yellow", price: 120, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim sint nobis incidunt non voluptate quibusdam." },
    { id: "G8", src: "./img/g8.jpg", virtualImg: "./img/v8.png", brand: "Polo", name: "NATTY ICE", color: "Red, Black", price: 120, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, unde enim." },
    { id: "G9", src: "./img/g9.jpg", virtualImg: "./img/v9.png", brand: "Coarch", name: "MIDNIGHT VIXEN REMIX", color: "Blue, Black", price: 120, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit consequatur soluta ad aut laborum amet." }
];

const domId = (id) => document.getElementById(id);

const getGlassesList = () => {
  let html = dataGlasses.reduce((total, element, index) => {
    total += `<div class="col-4 .vglasses__items" onclick =addGlasses(${index})><img src="${element.src}"></div>`;
    return total;
  }, "");
  domId("vglassesList").innerHTML = html;
};

window.addGlasses = (index) => {
  domId("btnAfter").classList.add("d-none");
  domId("btnBefore").classList.remove("d-none");

  domId("glassesInfo").style.display = "block";
  domId("avatar").innerHTML = `<img id="glasses" src="${dataGlasses[index].virtualImg}">`;
  domId("info_name").innerHTML = `${dataGlasses[index].name} - ${dataGlasses[index].brand} (${dataGlasses[index].color})`;
  domId("info_price").innerHTML = "$" + dataGlasses[index].price;
  domId("info_dsc").innerHTML = dataGlasses[index].description;
};

window.removeGlasses = (valid) => {
  if (!valid) {
    domId("glasses").style.opacity = 0;
    domId("btnBefore").classList.add("d-none");
    domId("btnAfter").classList.remove("d-none");
    return;
  }
  domId("glasses").style.opacity = 0.9;
  domId("btnAfter").classList.add("d-none");
  domId("btnBefore").classList.remove("d-none");
};

window.onload = getGlassesList();

