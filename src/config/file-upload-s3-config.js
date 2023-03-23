import multer from "multer"
import aws from "aws-sdk"
import multerS3 from "multer-s3";
import dotenv from "dotenv";

aws.config.update({
    region: 'ap-south-1',
})