import { v2 as cloudinary } from 'cloudinary';
import { response } from 'express';
import fs from "fs"

// Configuration
cloudinary.config({ 
    cloud_name: process.env.CLOUD_NAME, 
    api_key: process.env.CLOUD_API_KEY, 
    api_secret: process.env.CLOUD_API_SECRET 
});

const uploadOnCloud = async (localFilePath) => {
    try {
        if (!localFilePath) return null;
        cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto"
        })
        //File uploaded
        console.log("File is Uploaded on Storage", response.url);
        return response;

    } catch (error) {
        fs.unlinkSync(localFilePath) //remove temporary file when failed 
    }
}

export {uploadOnCloud}
