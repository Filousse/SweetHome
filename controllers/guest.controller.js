const GuestModel = require("../models/guest.model");
const UserModel = require("../models/user.model");
const ObjectID = require("mongoose").Types.ObjectId;


module.exports.readGuest = async (req, res) => {
  GuestModel.find((err, docs) => {
    if (!err) res.send(docs);
    else console.log("Error to get data : " + err);
  })
};

module.exports.infoGuest = async (req, res) => {
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send("ID unknown : " + req.params.id);
  GuestModel.findById(req.params.id, (err, docs) => {
    if (!err) res.send(docs);
    else console.log("ID unknown : " + err);
  })
};

module.exports.createGuest = async (req, res) => {
  const newGuest = new GuestModel({
    guestId: req.body.guestId,
    name: req.body.name,
    surname: req.body.surname,
    dateBirthday: req.body.dateBirthday,
    picture: req.body.picture,
    adminName: req.body.adminName,
    educRef: req.body.educRef,
    medicalRef: req.body.medicalRef,
    files: [],
  });
  try {
    const guest = await newGuest.save();
    return res.status(201).json(guest);
  } catch (err) {
    return res.status(400).send(err);
  }
};

module.exports.deleteGuest = (req, res) => {
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send("ID unknown : " + req.params.id);

  GuestModel.findByIdAndRemove(req.params.id, (err, docs) => {
    if (!err) res.send(docs);
    else console.log("Delete error : " + err);
  });
};

module.exports.followingEducRef = async (req, res) => {
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send("ID unknown : " + req.params.id);
  try {
    await GuestModel.findByIdAndUpdate(
      req.params.id,
      {
        $set: {
          educRef: req.body.educRef
        }
      },
      { new: true },
      (err, docs) => {
          if (!err) res.status(201).json(docs);
          if (err) return res.status(400).json(err);
      }
    );
  } catch (err) {
    return res.status(500).json({ message: err });
  }
};

module.exports.followingMedicalRef = async (req, res) => {
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send("ID unknown : " + req.params.id);
  try {
    await GuestModel.findByIdAndUpdate(
      req.params.id,
      {
        $set: {
          medicalRef: req.body.medicalRef
        }
      },
      { new: true, upsert: true, setDefaultsOnInsert: true },
      (err, docs) => {
        if (!err) return res.status(200).json(docs);
        if (err) return res.status(400).json(err);
      }
    );
  } catch (err) {
    return res.status(500).json({ message: err });
  }
};