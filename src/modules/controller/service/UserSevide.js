const UserRepository = require("../repository/UserRepository");

const findOne = async (id) => {
  return await UserRepository.findOne(id);
};

const findAll = async () => {
  return await UserRepository.findAll();
};

const create = async (id, data) => {
  return await UserRepository.create(data);
};

const updateById = async (id) => {
  return await UserRepository.updateById(id);
};

const delateById = async (id) => {
  return await UserRepository.delateById(id);
};

module.exports = {
  findOne,
  findAll,
  create,
  updateById,
  delateById,
};
