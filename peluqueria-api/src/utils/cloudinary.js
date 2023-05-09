const cloudinary = require ("cloudinary")
require("dotenv").config()

cloudinary.config({
    cloud_name:"dwyfwbq1s",
    api_key:"244682742452274",
    api_secret:"A_35vLTBZLzVz2x3cXEBtNuqo4Y"
})

// const uploadimagen = (filepatch)=>{
//     return cloudinary.v2.uploader.upload(filepatch,{
//         folder:"services"
//     })
// }
const uploadimagen = (filepatch)=>{
    return cloudinary.v2.uploader.upload(filepatch,{
        folder:"services"
    }, function(error, result) {
        console.log(error, result);
    });
}

const deleteImage = async (publicId) => {
    return await cloudinary.v2.uploader.destroy(publicId);
  };

  module.exports={uploadimagen,deleteImage} 