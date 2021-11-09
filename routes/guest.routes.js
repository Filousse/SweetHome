const router = require("express").Router();
const guestController = require("../controllers/guest.controller");
const uploadController = require("../controllers/upload.controller");
const multer = require('multer');
const upload = multer();


// CRUD
router.get('/', guestController.readGuest);
router.get('/:id', guestController.infoGuest);
router.post('/', guestController.createGuest);
router.delete('/:id', guestController.deleteGuest);
// Ref settings
router.post('/educRef/:id', guestController.followingEducRef);
router.post('/medicalRef/:id', guestController.followingMedicalRef);

// upload
router.post('/upload', upload.single('file'), uploadController.uploadPicture)


module.exports = router;

