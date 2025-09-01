// Require the cloudinary library
import {
  cloudinaryApiKey,
  cloudName
} from "../../../READONLY-shared-kernel/domain/adapters/cloudinary/cloudinary.config";

const cloudinary = require('cloudinary').v2;

// Return "https" URLs by setting secure: true
cloudinary.config({
  secure: true,
  cloud_name: cloudName,
  api_key: cloudinaryApiKey,
  api_secret: '71WL5NtLy9f8gmtPEe_2nqvBaN0'
})

export default cloudinary
