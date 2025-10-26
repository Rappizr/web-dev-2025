const { PrismaClient } = require("@prisma/client");
const Joi = require("joi");
const prisma = new PrismaClient();

// ✅ GET /api/products
const findAll = async (req, res) => {
  try {
    const products = await prisma.product.findMany();
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ✅ GET /api/products/:id
const findOne = async (req, res) => {
  try {
    const product = await prisma.product.findUnique({
      where: { id: parseInt(req.params.id) },
    });
    if (!product) return res.status(404).json({ message: "Product not found" });
    res.json(product);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ✅ POST /api/products
const create = async (req, res) => {
  const schema = Joi.object({
    name: Joi.string().required(),
    description: Joi.string().required(),
    category: Joi.string().valid("kuliner", "souvenir", "fashion").required(),
    lokasi: Joi.string().required(),
    image: Joi.string().uri().required(),
    video: Joi.string().uri().required(),
    price: Joi.number().integer().required(),
  });

  try {
    await schema.validateAsync(req.body);

    const newProduct = await prisma.product.create({
      data: {
        name: req.body.name,
        description: req.body.description,
        category: req.body.category,
        lokasi: req.body.name,
        image: req.body.image,
        video: req.body.video,
        price: req.body.price,
      },
    });

    res.status(201).json(newProduct);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// ✅ PUT /api/products/:id
const updateById = async (req, res) => {
  const schema = Joi.object({
    name: Joi.string().required(),
    description: Joi.string().required(),
    category: Joi.string().valid("kuliner", "souvenir", "fashion").required(),
    lokasi: Joi.string().required(),
    image: Joi.string().uri().required(),
    video: Joi.string().uri().required(),
    price: Joi.number().integer().required(),
  });

  try {
    await schema.validateAsync(req.body);

    const updatedProduct = await prisma.product.update({
      where: { id: parseInt(req.params.id) },
      data: req.body,
    });

    res.json(updatedProduct);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// ✅ DELETE /api/products/:id
const deleteById = async (req, res) => {
  try {
    await prisma.product.delete({
      where: { id: parseInt(req.params.id) },
    });
    res.json({ message: "Product deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ✅ Export semua fungsi
module.exports = {
  findAll,
  findOne,
  create,
  updateById,
  deleteById,
};
