import sharp from 'sharp';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { promises as fs } from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const SOURCE_LOGO = join(__dirname, '../src/assets/logo.jpg');
const PUBLIC_DIR = join(__dirname, '../public');

const FAVICON_SIZES = [
  { size: 16, name: 'favicon-16x16.png' },
  { size: 32, name: 'favicon-32x32.png' },
  { size: 180, name: 'apple-touch-icon.png' },
  { size: 192, name: 'android-chrome-192x192.png' },
  { size: 512, name: 'android-chrome-512x512.png' }
];

async function generateFavicons() {
  try {
    // Create public directory if it doesn't exist
    await fs.mkdir(PUBLIC_DIR, { recursive: true });

    // Generate PNG favicons
    for (const { size, name } of FAVICON_SIZES) {
      await sharp(SOURCE_LOGO)
        .resize(size, size, {
          fit: 'contain',
          background: { r: 255, g: 255, b: 255, alpha: 0 }
        })
        .png()
        .toFile(join(PUBLIC_DIR, name));
      
      console.log(`Generated ${name}`);
    }

    // Generate favicon.ico (32x32 PNG that browsers will handle)
    await sharp(SOURCE_LOGO)
      .resize(32, 32, {
        fit: 'contain',
        background: { r: 255, g: 255, b: 255, alpha: 0 }
      })
      .png()
      .toFile(join(PUBLIC_DIR, 'favicon.ico'));
    
    console.log('Generated favicon.ico');

    // Generate Safari SVG
    await sharp(SOURCE_LOGO)
      .resize(512, 512)
      .png()
      .toFile(join(PUBLIC_DIR, 'safari-pinned-tab.svg'));
    
    console.log('Generated safari-pinned-tab.svg');

    // Generate og-image.jpg
    await sharp(SOURCE_LOGO)
      .resize(1200, 630, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 1 } })
      .jpeg({ quality: 90 })
      .toFile(join(PUBLIC_DIR, 'og-image.jpg'));
    
    console.log('Generated og-image.jpg');

    // Generate twitter-card.jpg
    await sharp(SOURCE_LOGO)
      .resize(800, 418, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 1 } })
      .jpeg({ quality: 90 })
      .toFile(join(PUBLIC_DIR, 'twitter-card.jpg'));
    
    console.log('Generated twitter-card.jpg');

  } catch (error) {
    console.error('Error generating favicons:', error);
  }
}

generateFavicons(); 