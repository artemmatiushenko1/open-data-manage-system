const mDKey = require('../models/metadataKey');

exports.getAllMDKeys = async (req, res) => {
  try {
    const mDKeys = await mDKey.findAll();
    res.status(200).json({
      status: 'success',
      data: { mDKeys },
    });
  } catch (e) {
    res.json({ message: 'Failed to get all metadata keys' });
  }
};

exports.getMDKeyById = async (req, res) => {
  try {
    const { id } = req.params;
    const type = await mDKey.findOne({ where: { id } });
    if (type)
      return res.status(200).json({
        status: 'success',
        data: { type },
      });
    throw new Error("Can't find a metadata key with a given id");
  } catch (e) {
    res.json({ message: e.message });
  }
};

exports.createMDKey = async (req, res) => {
  try {
    const key = await mDKey.create(req.body);
    if (key)
      return res.status(200).json({
        status: 'success',
        data: { key },
      });
  } catch (e) {
    res.json({ message: 'Failed to create a new metadata key' });
  }
};

exports.deleteMDKeyByID = async (req, res) => {
  try {
    const { id } = req.params;
    const type = await mDKey.destroy({
      where: {
        id,
      },
    });
    res.status(200).json({
      status: 'success',
      data: { number_of_destroyed_rows: type },
    });
  } catch (e) {
    res.json({ message: e.message });
  }
};

exports.updateMDKeyById = async (req, res) => {
  try {
    const { id } = req.params;
    const type = await mDKey.update(req.body, {
      where: { id },
    });

    res.status(200).json({
      status: 'success',
      data: {
        number_of_affected_rows: type,
      },
    });
  } catch (e) {
    res.json({ message: 'Failed to update a metadata key with a given id' });
  }
};
