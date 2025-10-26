const RatingRepository = require("../repository/RatingRepository");

const findOne = async (id) => {
  return await RatingRepository.findOne(id);
};

const findAll = async () => {
  return await RatingRepository.findAll();
};

const create = async (id, data) => {
  return await RatingRepository.create(data);
};

const updateById = async (id) => {
  return await RatingRepository.updateById(id);
};

const delateById = async (id) => {
  return await RatingRepository.delateById(id);
};

module.exports = {
  findOne,
  findAll,
  create,
  updateById,
  delateById,
};
