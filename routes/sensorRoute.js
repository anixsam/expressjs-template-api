const express = require("express");
const { getAllSensors,getSensorById,updateSensorById } = require("../controller/sensorController");
const router = express.Router();



router.route("/").get(getAllSensors);
router.route("/:id").get(getSensorById).put(updateSensorById);


module.exports = router;