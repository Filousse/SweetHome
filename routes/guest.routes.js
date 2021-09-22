const router = require("express").Router();
const guestController = require("../controllers/guest.controller");
const uploadController = require("../controllers/upload.controller");
const multer = require('multer');
const upload = multer();


// CRUD
router.get('/', guestController.readGuest);
router.get('/:id', guestController.infoGuest);
router.post('/', guestController.createGuest);
// router.put('/:id', guestController.updateGuest);
router.delete('/:id', guestController.deleteGuest);
router.put('/educRef/:id', guestController.updateEducRef);
router.put('/medicalRef/:id', guestController.updateMedicalRef);


// upload
router.post('/upload', upload.single('file'), uploadController.uploadPicture)


module.exports = router;
