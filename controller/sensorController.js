const getAllSensors = (req, res) => {
  res.status(200).send({
    status: 200,
    data: {
      sensors: ["rfid", "ir", "ultrasonic"],
      sensor_stat : true
    },
  });
};

const getSensorById = (req, res) => {
  res.status(200).send({
    status: 200,
    data:
    {
        sensor_id : req.params.id,
        sensor: "rfid",
        sensor_stat : true,
        sensor_data : "123456789",
    }
  });
};

const updateSensorById = (req, res) => {
    res.status(200).send({
        status: 200,
        data:
        {
            sensor_id : req.params.id,
            sensor: "rfid",
            sensor_stat : true,
            sensor_data : "123456789",
        }
    });
};


module.exports = { getAllSensors, getSensorById, updateSensorById };
