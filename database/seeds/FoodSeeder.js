"use strict";

/*
|--------------------------------------------------------------------------
| FoodSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

const Food = use("App/Models/Food");

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use("Factory");

class FoodSeeder {
  async run() {
    await Food.createMany([
      {
        name: "Macarrão de ovo",
        description:
          "Macarrão de ovo com carne assada no topo cebolinha e alho crocante decoração de comida chinesa vista lateral de vegetais",
        price: "15",
        available: true,
        image:
          "https://image.freepik.com/fotos-gratis/macarrao-de-ovo-com-carne-assada-no-topo-cebolinha-e-alho-crocante-decoracao-de-comida-chinesa-vista-lateral-de-vegetais_71919-1862.jpg",
      },
      {
        name: "Misture feijão frito",
        description:
          "Misture feijão frito (feijão amargo) com camarões e pasta de camarão (goong pad kapi sator) comida tailandesa prato de curry picante",
        price: "12",
        available: true,
        image:
          "https://image.freepik.com/fotos-gratis/misture-feijao-frito-feijao-amargo-com-camaroes-e-pasta-de-camarao-goong-pad-kapi-sator-comida-tailandesa-prato-de-curry-picante-com-vista-superior_71919-1869.jpg",
      },
      {
        name: "Misture feijão",
        description:
          "Misture feijão frito (feijão amargo) com camarão e pasta de camarão servindo receita de arroz (goong pad kapi sator) comida tailandesa",
        price: "9",
        available: true,
        image:
          "https://image.freepik.com/fotos-gratis/misture-feijao-frito-feijao-amargo-com-camarao-e-pasta-de-camarao-servindo-receita-de-arroz-goong-pad-kapi-sator-comida-tailandesa-vista-lateral-do-prato-de-curry-picante_71919-1870.jpg",
      },
    ]);
  }
}

module.exports = FoodSeeder;
