const router = require("express").Router();
const authController = require("../controllers/auth.controller");
const userController = require("../controllers/user.controller");
const followController = require("../controllers/follow.controller");
const uploadController = require("../controllers/upload.controller");
const multer = require('multer');
const upload = multer();


// auth
router.post("/register", authController.signUp);
router.post("/login", authController.signIn);
router.get("/logout", authController.logout)

// user
router.get('/', userController.getAllUsers);
router.get('/:id', userController.userInfo);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);

// upload
router.post('/upload', upload.single('file'), uploadController.uploadProfil)

// follow => a faire quand la collection beneficary sera créer!
router.patch('/followEducatif/:id', followController.followByEducatif);
router.patch('/followMedical/:id', followController.followByMedical)
router.patch('/unFollowEducatif/:id', followController.unFollowByEducatif)
router.patch('/unFollowMedical/:id', followController.unFollowByMedical)

module.exports =  router;
