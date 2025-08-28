const fs = require('fs');
const path = require('path');
const https = require('https');

// Create images directory if it doesn't exist
const imagesDir = path.join(__dirname, '../public/images');
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

// Image URLs to download
const imageUrls = [
  { name: 'bugs_bunny.jpg', url: 'https://i.imgur.com/3JwVYb1.jpg' },
  { name: 'tweety.png', url: 'https://i.imgur.com/5w7wXxU.png' },
  { name: 'daffy_duck.png', url: 'https://i.imgur.com/9yQ7XxU.png' },
  { name: 'tasmanian_devil.png', url: 'https://i.imgur.com/8yQ7XxU.png' },
  { name: 'porky_pig.png', url: 'https://i.imgur.com/7yQ7XxU.png' },
  { name: 'marvin.png', url: 'https://i.imgur.com/6yQ7XxU.png' },
  { name: 'elmer_fudd.png', url: 'https://i.imgur.com/5yQ7XxU.png' },
  { name: 'yosemite_sam.png', url: 'https://i.imgur.com/4yQ7XxU.png' },
  { name: 'road_runner.png', url: 'https://i.imgur.com/3yQ7XxU.png' },
  { name: 'wile_e_coyote.png', url: 'https://i.imgur.com/2yQ7XxU.png' },
];

// Function to download an image
function downloadImage(url, filepath) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(filepath);
    https.get(url, (response) => {
      response.pipe(file);
      file.on('finish', () => {
        file.close(resolve);
      });
    }).on('error', (err) => {
      fs.unlink(filepath, () => {}); // Delete the file if there's an error
      reject(err);
    });
  });
}

// Download all images
async function downloadAllImages() {
  for (const { name, url } of imageUrls) {
    const filepath = path.join(imagesDir, name);
    try {
      console.log(`Downloading ${name}...`);
      await downloadImage(url, filepath);
      console.log(`Downloaded ${name} successfully!`);
    } catch (error) {
      console.error(`Error downloading ${name}:`, error.message);
    }
  }
}

downloadAllImages().catch(console.error);
