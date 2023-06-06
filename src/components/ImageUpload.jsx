import { useState } from 'react'
import { uploadFile } from 'react-s3'

import { Buffer } from 'buffer'
import { config } from '../constants/config.js'

Buffer.from('anything', 'base64')
window.Buffer = window.Buffer || require('buffer').Buffer

const ImageUpload = () => {
  const [selectedImage, setSelectedImage] = useState(null)

  const handleImageChange = (event) => {
    const file = event.target.files[0]
    setSelectedImage(file)
  }

  const handleUpload = async (file) => {
    console.log('file', file)
    console.log(config)
    uploadFile(file, config)
      .then((data) => console.log('DATA:', data))
      .catch((err) => {
        console.log('error')
        console.error(err)
      })
  }

  return (
    <div>
      <h2>Image Upload</h2>
      <input type="file" accept="image/*" onChange={handleImageChange} />
      <button onClick={() => handleUpload(selectedImage)}>Upload</button>
    </div>
  )
}

export default ImageUpload
