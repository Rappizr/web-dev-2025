const { PrismaClient } = require("@prisma/client");
const Joi = require("joi");
const prisma = new PrismaClient();

// ============================
// GET ALL RATINGS
// ============================
const findAll = async (req, res) => {
  try {
    const ratings = await prisma.rating.findMany({
      include: {
        user: true, // opsional, aktifkan jika sudah ada relasi user
        product: true, // opsional, aktifkan jika sudah ada relasi product
      },
    });
    res.json(ratings);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Gagal mengambil data rating" });
  }
};

// ============================
// GET RATING BY ID
// ============================
const findOne = async (req, res) => {
  const { id } = req.params;
  try {
    const rating = await prisma.rating.findUnique({
      where: { id: parseInt(id) },
      include: {
        user: true,
        product: true,
      },
    });

    if (!rating) {
      return res.status(404).json({ message: "Rating tidak ditemukan" });
    }

    res.json(rating);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Gagal mengambil rating" });
  }
};

// ============================
// CREATE NEW RATING
// ============================
const create = async (req, res) => {
  const schema = Joi.object({
    userId: Joi.number().integer().required(),
    productId: Joi.number().integer().required(),
    rating: Joi.number().min(1).max(5).required(),
    comment: Joi.string().allow("").optional(),
  });

  try {
    await schema.validateAsync(req.body);

    const newRating = await prisma.rating.create({
      data: {
        userId: req.body.userId,
        productId: req.body.productId,
        rating: req.body.rating,
        comment: req.body.comment,
      },
    });

    res.status(201).json(newRating);
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: error.message });
  }
};

// ============================
// UPDATE RATING BY ID
// ============================
const updateById = async (req, res) => {
  const { id } = req.params;
  const schema = Joi.object({
    userId: Joi.number().integer().required(),
    productId: Joi.number().integer().required(),
    rating: Joi.number().min(1).max(5).required(),
    comment: Joi.string().allow("").optional(),
  });

  try {
    await schema.validateAsync(req.body);

    const updatedRating = await prisma.rating.update({
      where: { id: parseInt(id) },
      data: req.body,
    });

    res.json(updatedRating);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Gagal memperbarui rating" });
  }
};

// ============================
// DELETE RATING BY ID
// ============================
const deleteById = async (req, res) => {
  const { id } = req.params;

  try {
    await prisma.rating.delete({
      where: { id: parseInt(id) },
    });

    res.json({ message: "Rating berhasil dihapus" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Gagal menghapus rating" });
  }
};

// ============================
// EXPORT SEMUA FUNGSI
// ============================
module.exports = {
  findAll,
  findOne,
  create,
  updateById,
  deleteById,
};
