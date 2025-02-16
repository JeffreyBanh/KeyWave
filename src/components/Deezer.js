import fetch from 'node-fetch';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const player = require('play-sound')();

async function playTrackPreview(trackId) {
  try {
    const response = await fetch(`https://api.deezer.com/track/${trackId}`);
    const data = await response.json();

    if (data.preview) {
      console.log(`Playing preview for: ${data.title} by ${data.artist.name}`);
      console.log(`Preview URL: ${data.preview}`);

      player.play(data.preview, (err) => {
        if (err) {
          console.error('Error playing preview:', err);
        } else {
          console.log('Preview finished playing.');
        }
      });
    } else {
      console.error('No preview available for this track.');
    }
  } catch (error) {
    console.error('Error fetching track details:', error);
  }
}

const trackId = 3135557;
playTrackPreview(trackId);