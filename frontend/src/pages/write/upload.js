import axios from 'axios';

const cloudName = 'ddmucrojh'; // Replace with your Cloudinary cloud name
const unsignedUploadPreset = 'wedxuzli'; // Replace with your unsigned upload preset

const uploadToCloudinary = async (file) => {
  try {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', unsignedUploadPreset);
    formData.append('folder', 'blog');
      

    const response = await axios.post(
      `https://api.cloudinary.com/v1_1/${cloudName}/upload`,
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }
    );

    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error('Upload failed');
    }
  } catch (error) {
    throw error;
  }
};

export default uploadToCloudinary;
