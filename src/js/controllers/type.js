const { Type } = require('../models/model');

exports.getAllTypes = async (req, res) => {
  try {
    const types = await Type.findAll();
    res.status(200).json({
      status: 'success',
      data: { types },
    });
  } catch (e) {
    res.json('Failed to get all types');
  }
};

exports.createType = async (req, res) => {
  try {
    const type = await Type.create(req.body);
    if (type)
      res.status(200).json({
        status: 'success',
        data: { type },
      });
  } catch (e) {
    res.json({ message: 'Failed to create a new Type' });
  }
};

exports.getTypeById = async (req, res) => {
  try {
    const { id } = req.params;
    const type = await Type.findOne({ where: { id } });
    if (type)
      return res.status(200).json({
        status: 'success',
        data: { type },
      });
  } catch (e) {
    return res.json({ message: 'Failed to get type by id' });
  }
};

exports.deleteTypeById = async (req, res) => {
  try {
    const { id } = req.params;
    const type = await Type.destroy({
      where: {
        id,
      },
    });
    res.status(200).json({
      status: 'success',
      data: { type },
    });
  } catch (e) {
    res.json({ message: e.message });
  }
};

exports.updateTypeById = async (req, res) => {
  try {
    const { id } = req.params;
    const type = await Type.update(req.body, {
      where: { id },
    });

    res.status(200).json({
      status: 'success',
      data: {
        type,
      },
    });
  } catch (e) {
    res.json({ message: 'Failed to update type by id' });
  }
};
