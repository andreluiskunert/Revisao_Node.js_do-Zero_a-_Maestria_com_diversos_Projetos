const router = require("express").Router();

const UserController = require("../controllers/UserController");

// middlewares
const verifyToken = require("../helpers/check-token");
const { imageUpload } = require("../helpers/image-upload");

router.post("/register", UserController.register);
router.post("/login", UserController.login);
router.get("/checkuser", UserController.checkUser);
router.get("/:id", UserController.getUserById);
router.patch(
  "/edit/:id",
  verifyToken,
  imageUpload.single("image"),
  UserController.editUser
);
module.exports = router;
// <!DOCTYPE html>
// <html lang="en">

// <head>
//     <meta charset="utf-8">
//     <title>Error</title>
// </head>

// <body>
//     <pre>Cannot POST /users/register</pre>
// </body>
// obs.: buscar solução de noite 

// </html>