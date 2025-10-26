const Db = require("../../../helpers/Db");

const findOne = async (id) => {
  return await Db.rating.findUnique({
    where: {
      id,
    },
  });
};

const findAll = async () => {
  return await Db.rating.findMany();
};

const create = async (data) => {
  return await Db.rating.create({
    data,
  });
};

const updateById = async (id, data) => {
  return await Db.rating.update({
    where: {
      id,
    },
    data,
  });
};

const delateById = async (id) => {
  return await Db.rating.delate({
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
