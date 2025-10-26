const ProductRepository = require("../repository/ProductRepository");

const findOne = async (id) => {
  return await ProductRepository.findOne(id);
};

const findAll = async () => {
  return await ProductRepository.findAll();
};

const create = async (id, data) => {
  return await ProductRepository.create(data);
};

const updateById = async (id) => {
  return await ProductRepository.updateById(id);
};

const delateById = async (id) => {
  return await ProductRepository.delateById(id);
};

module.exports = {
  findOne,
  findAll,
  create,
  updateById,
  delateById,
};
