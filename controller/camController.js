const getAllCam = (req, res) => {
    res.status(200).send({
      status: 200,
      data: {
        sensors: ["rfid", "ir", "ultrasonic"],
        sensor_stat : true
      },
    });
  };
  
  const getCamById = (req, res) => {
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
  
  const updateCamById = (req, res) => {
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
  
  
module.exports = { getAllCam, getCamById, updateCamById };