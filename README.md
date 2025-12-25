# Family Travel Map

An interactive world map displaying family travel locations with photo galleries. Built with vanilla JavaScript, Leaflet.js, and OpenStreetMap.

## Features

- 🌍 Interactive world map with clickable markers
- 📸 Photo galleries for each trip location
- 📱 Fully responsive design
- 🎨 Warm, nostalgic aesthetic
- ⌨️ Keyboard navigation (arrow keys, Escape)
- 🖱️ Smooth animations and transitions

## Quick Start

1. **Open the app**: Simply open `index.html` in a web browser
   - No server required - works as a static site
   - For best results, use a local web server (see below)

2. **Add your trips**: Edit `data/trips.js` to add your travel locations

3. **Add photos**: Place photos in `/images/{trip-folder}/` named sequentially (1.jpg, 2.jpg, etc.)

## File Structure

```
christmas gift/
├── index.html          # Main HTML file
├── style.css           # Styling
├── script.js           # Map and modal logic
├── data/
│   └── trips.js        # Trip data (edit this to add trips)
├── images/             # Photo folders
│   ├── paris/          # Example: Paris photos
│   ├── tokyo/          # Example: Tokyo photos
│   └── README.md       # Instructions for adding images
└── README.md           # This file
```

## Adding a New Trip

### Step 1: Add Trip Data

Edit `data/trips.js` and add a new object to the `trips` array:

```javascript
{
    title: "New York City",
    coordinates: [40.7128, -74.0060],  // [latitude, longitude]
    year: "2024",
    description: "Our amazing trip to the Big Apple!",
    imageFolder: "nyc"  // Must match folder name
}
```

**Finding Coordinates:**
- Use Google Maps: Right-click a location → Click coordinates to copy
- Format: `[latitude, longitude]` (e.g., `[40.7128, -74.0060]` for NYC)

### Step 2: Create Image Folder

1. Create a new folder in `/images/` with the same name as `imageFolder`
   - Example: `/images/nyc/`

2. Add your photos to this folder
   - Name them sequentially: `1.jpg`, `2.jpg`, `3.jpg`, etc. (or `1.heic`, `2.heic`, etc.)
   - Start from `1` (not `0`) - e.g., `1.jpg` or `1.heic`
   - Use consecutive numbers (don't skip numbers)
   - You can mix formats (e.g., `1.jpg`, `2.heic`, `3.jpg`)

### Step 3: Test

Open `index.html` in a browser and click the new marker on the map!

## Image Requirements

- **Format**: `.jpg`, `.jpeg`, or `.heic`
  - The script automatically checks for both formats
  - Checks `.jpg` first, then `.heic` if `.jpg` doesn't exist
  - You can mix formats (e.g., `1.jpg`, `2.heic`, `3.jpg`)
  - **Browser Note**: HEIC images have limited support (Safari works best, Chrome/Firefox may not display HEIC)
- **Naming**: Sequential numbers starting from `1.jpg` or `1.heic`
- **No gaps**: If you skip a number (e.g., have 1, 2, 4), loading stops at 2
- **File size**: Optimize images for web (under 2MB each recommended)

## Running a Local Server (Recommended)

While the app works by opening `index.html` directly, using a local server is recommended to avoid CORS issues:

### Python 3
```bash
python3 -m http.server 8000
```
Then open: `http://localhost:8000`

### Node.js (http-server)
```bash
npx http-server
```

### VS Code
- Install "Live Server" extension
- Right-click `index.html` → "Open with Live Server"

## Customization

### Changing Colors

Edit `style.css` to modify the color scheme:
- Main background: `background` in `body` (line ~15)
- Accent colors: `#8b4513` and `#6b4423` (brown tones)
- Modal background: `background` in `.modal-content` (line ~100)

### Changing Map Style

In `script.js`, modify the tile layer URL (line ~20) to use different map styles:
- Default: OpenStreetMap (current)
- Other options: CartoDB, Stamen, etc.

### Adding More Image Formats

The app currently supports `.jpg`, `.jpeg`, and `.heic`. To add more formats (like `.png`), modify the `formats` array in the `loadTripImages` function in `script.js`.

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Requires JavaScript enabled

## Troubleshooting

**Markers not showing?**
- Check browser console for errors
- Verify `trips.js` is loaded correctly
- Ensure coordinates are valid `[lat, lng]` arrays

**Images not loading?**
- Check that image folder name matches `imageFolder` in trips.js
- Verify images are named `1.jpg`, `2.jpg`, etc. (not `01.jpg`)
- Check browser console for 404 errors
- Ensure images are in the correct folder path

**Modal not opening?**
- Check browser console for JavaScript errors
- Verify trip data structure is correct

## License

Free to use and modify for personal or commercial projects.

## Credits

- **Leaflet.js**: Interactive maps
- **OpenStreetMap**: Map tiles
- Built with vanilla JavaScript, HTML, and CSS

