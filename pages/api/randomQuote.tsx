import { StillCamera } from "pi-camera-connect";
import * as fs from "fs";
const stillCamera = new StillCamera();

// Take still image and save to disk
export default async (req, res) => {

  stillCamera.takeImage().then(image => {
    res.status(200).json({
      image: image.toJSON()
    });
  });
};
