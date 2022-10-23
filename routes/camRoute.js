const express = require("express");
const { getAllCam,getCamById,updateCamById } = require("../controller/camController");
const router = express.Router();


router.route("/").get(getAllCam);
router.route("/:id").get(getCamById).put(updateCamById);

module.exports = router;