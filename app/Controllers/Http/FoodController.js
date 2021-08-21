"use strict";

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Food = use("App/Models/Food");

/**
 * Resourceful controller for interacting with foods
 */
class FoodController {
  /**
   * Show a list of all foods.
   * GET foods
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index({ request, response, view }) {
    const foods = await Food.all();

    return foods;
  }

  /**
   * Create/save a new food.
   * POST foods
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, response }) {
    const { available, description, image, name, price } = request.body;

    const food = new Food();
    food.available = available;
    food.description = description;
    food.image = image;
    food.name = name;
    food.price = price;
    await food.save();

    return response
      .status(200)
      .send({ data: food, message: "Registro adicionado com sucesso." });
  }

  /**
   * Display a single food.
   * GET foods/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ params, request, response, view }) {
    const food = Food.find(params.id);

    return food;
  }

  /**
   * Update food details.
   * PUT or PATCH foods/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request, response }) {
    const { id } = params;
    const { available, description, image, name, price } = request.body;

    const food = await Food.findOrFail(id);

    if (food) {
      food.available = available;
      food.description = description;
      food.image = image;
      food.name = name;
      food.price = price;
      await food.save();
    }

    return response
      .status(200)
      .send({ data: food, message: "Registro atualizado com sucesso." });
  }

  /**
   * Delete a food with id.
   * DELETE foods/:id
   *
   * @param {object} ctx
   * @param {Response} ctx.response
   */
  async destroy({ params, response }) {
    const { id } = params;
    const food = await Food.findOrFail(id);

    if (food) {
      await food.delete();
    }

    const foods = await Food.all();

    return response
      .status(200)
      .send({ data: foods, message: "Registro excluido com sucesso." });
  }
}

module.exports = FoodController;
