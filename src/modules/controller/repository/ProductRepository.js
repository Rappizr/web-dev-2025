const Db = require("../../../helpers/Db");

const findOne = async (id) => {
  return await Db.product.findUnique({
    where: {
      id,
    },
  });
};

const findAll = async () => {
  return await Db.product.findMany();
};

const create = async (data) => {
  return await Db.product.create({
    data,
  });
};

const updateById = async (id, data) => {
  return await Db.product.update({
    where: {
      id,
    },
    data,
  });
};

const delateById = async (id) => {
  return await Db.product.delate({
    where: {
      id,
    },
  });
};

module.exports = {
  findOne,
  findAll,
  create,
  updateById,
  delateById,
};
