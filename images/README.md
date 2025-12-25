# Images Directory

This directory contains photo folders for each trip location.

## Structure

Each trip should have its own folder named to match the `imageFolder` value in `data/trips.js`.

```
/images/
  ├── paris/
  │   ├── 1.jpg
  │   ├── 2.jpg
  │   └── 3.jpg
  ├── tokyo/
  │   ├── 1.jpg
  │   ├── 2.jpg
  │   └── 3.jpg
  └── your-new-trip/
      ├── 1.jpg
      ├── 2.jpg
      └── ...
```

## Adding Images

### For Existing Trips

1. Open the trip's folder (e.g., `/images/paris/`)
2. Add your photos with sequential filenames:
   - `1.jpg` or `1.heic` (first photo)
   - `2.jpg` or `2.heic` (second photo)
   - `3.jpg` or `3.heic` (third photo)
   - And so on...
   - You can mix formats (e.g., `1.jpg`, `2.heic`, `3.jpg`)

### For New Trips

1. Create a new folder in `/images/` with a simple name (e.g., `nyc`, `london`, `barcelona`)
2. Add your photos with sequential filenames starting from `1.jpg`
3. Update `data/trips.js` to add a new trip entry with the matching `imageFolder` name

## Image Requirements

- **Format**: `.jpg`, `.jpeg`, or `.heic`
  - The script checks for `.jpg` first, then `.heic` if `.jpg` doesn't exist
  - You can mix formats (e.g., `1.jpg`, `2.heic`, `3.jpg`)
  - **Note**: HEIC images have limited browser support (Safari has best support, Chrome/Firefox may not display HEIC)
- **Naming**: Must be sequential numbers starting from `1.jpg` or `1.heic`
- **No gaps**: If you have images 1, 2, 3, 5 (missing 4), the script will stop at 3
- **File size**: Recommended to optimize images for web (under 2MB each for faster loading)

## Example Workflow

1. **Take photos** on your trip
2. **Transfer photos** to your computer
3. **Rename photos** sequentially: `1.jpg`, `2.jpg`, `3.jpg`, etc.
4. **Create folder** in `/images/` (e.g., `/images/paris/`)
5. **Move photos** into the folder
6. **Add trip entry** in `data/trips.js` with matching `imageFolder` name

## Current Trip Folders

- `paris/` - Paris, France trip photos
- `tokyo/` - Tokyo, Japan trip photos

## Notes

- The script automatically loads images in numerical order
- If a trip has only one image, the navigation buttons will be hidden
- If no images are found, the modal will display a message
- You can add as many images as you want (the script tries up to 20 by default)

