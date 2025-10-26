const Db = require("../../../helpers/Db");

const findOne = async (id) => {
  return await Db.user.findUnique({
    where: {
      id,
    },
  });
};

const findAll = async () => {
  return await Db.user.findMany();
};

const create = async (data) => {
  return await Db.user.create({
    data,
  });
};

const updateById = async (id, data) => {
  return await Db.user.update({
    where: {
      id,
    },
    data,
  });
};

const delateById = async (id) => {
  return await Db.user.delate({
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
