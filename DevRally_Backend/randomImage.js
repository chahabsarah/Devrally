const path = require('path');
const fs = require('fs');

const imageFiles = [
  'avatar1.png',
  'avatar2.png',
  'avatar3.png',
  'avatar4.png',
  'avatar5.png',
  'avatar6.png',
  'avatar7.png',
];

function getRandomImage() {
  const randomIndex = Math.floor(Math.random() * imageFiles.length);
  const imageFile = imageFiles[randomIndex];
  const imagePath = path.join(__dirname, './images', imageFile);

  const imageData = fs.readFileSync(imagePath).toString('base64');
  const ext = path.extname(imageFile).slice(1);
  const contentType = `image/${ext}`;

  return {
    data: imageData,
    contentType: contentType,
  };
}

module.exports = { getRandomImage };
