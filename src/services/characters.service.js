const Character = require("../models/Character");

const createCharacterService = async (character) =>
  await Character.create(character);

const readAllCharacterService = async () =>
  await Character.find().populate("user");

const readCharacterByIdService = async (id) => await Character.findById(id);

const readCharacterByNameService = async () => {};

const updateCharacterService = async () => {};

const deleteCharacterService = async () => {};

module.exports = {
  createCharacterService,
  readAllCharacterService,
  readCharacterByIdService,
  readCharacterByNameService,
  updateCharacterService,
  deleteCharacterService,
};
