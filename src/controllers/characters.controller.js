const charactersService = require("../services/characters.service");

const createCharacterController = async (req, res) => {
  try {
    const { name, imageUrl } = req.body;
    const user = req.userId;
    const character = await charactersService.createCharacterService(
      name,
      imageUrl,
      user
    );
    const response = {
      id: character._id,
      user: character.user,
      name: character.name,
      imageUrl: character.imageUrl,
    };
    res
      .status(201)
      .send({ character: response, message: "Character created successfully" });
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
};

const readAllCharacterController = async (req, res) => {
  try {
    const characters = await charactersService.readAllCharacterService();
    if (characters.length === 0) {
      return res.status(404).send({ message: "No characters found" });
    }
    const response = characters.map((character) => {
      return {
        id: character._id,
        user: character.user,
        name: character.name,
        imageUrl: character.imageUrl,
      };
    });
    return res.status(200).send({ results: response });
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
};

const readCharacterByIdController = async (req, res) => {
  try {
    const id = req.params.id;
    const response = await charactersService.readCharacterByIdService(id);
    res.send(response);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
};

const readCharacterByNameController = async (req, res) => {};

const updateCharacterController = async (req, res) => {};

const deleteCharacterController = async (req, res) => {};

module.exports = {
  createCharacterController,
  readAllCharacterController,
  readCharacterByIdController,
  readCharacterByNameController,
  updateCharacterController,
  deleteCharacterController,
};
