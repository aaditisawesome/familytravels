/**
 * Family Travel Map - Main Script
 * Handles map initialization, markers, and modal interactions
 */

// Global variables
let map;
let markers = [];
let currentTrip = null;
let currentImageIndex = 0;
let currentImages = [];

/**
 * Initialize the map when the page loads
 */
function initMap() {
    // Create map centered globally (world view)
    map = L.map('map').setView([20, 0], 2);
    
    // Add OpenStreetMap tiles (no API key required)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 19
    }).addTo(map);
    
    // Add markers for each trip
    addTripMarkers();
}

/**
 * Add markers to the map for each trip in the trips array
 */
function addTripMarkers() {
    // Check if trips data is available
    if (typeof trips === 'undefined' || !Array.isArray(trips)) {
        console.error('Trips data not found or invalid');
        return;
    }
    
    trips.forEach((trip, index) => {
        // Validate trip data
        if (!trip.coordinates || !Array.isArray(trip.coordinates) || trip.coordinates.length !== 2) {
            console.warn(`Invalid coordinates for trip: ${trip.title || index}`);
            return;
        }
        
        const [lat, lng] = trip.coordinates;
        
        // Create custom icon (optional - using default for simplicity)
        const marker = L.marker([lat, lng])
            .addTo(map)
            .bindTooltip(trip.title || 'Trip', {
                permanent: false,
                direction: 'top',
                offset: [0, -10]
            });
        
        // Store trip data with marker
        marker.tripData = trip;
        
        // Add click event to open modal
        marker.on('click', function() {
            openModal(trip);
        });
        
        markers.push(marker);
    });
    
    // Fit map to show all markers if there are any
    if (markers.length > 0) {
        const group = new L.featureGroup(markers);
        map.fitBounds(group.getBounds().pad(0.1));
    }
}

/**
 * Open the modal with trip information
 * @param {Object} trip - Trip object from trips array
 */
function openModal(trip) {
    currentTrip = trip;
    currentImageIndex = 0;
    
    // Set modal content
    document.getElementById('modal-title').textContent = trip.title || 'Untitled Trip';
    
    // Set year if available
    const yearElement = document.getElementById('modal-year');
    if (trip.year) {
        yearElement.textContent = trip.year;
        yearElement.style.display = 'block';
    } else {
        yearElement.style.display = 'none';
    }
    
    // Set description if available
    const descriptionElement = document.getElementById('modal-description');
    if (trip.description) {
        descriptionElement.textContent = trip.description;
        descriptionElement.style.display = 'block';
    } else {
        descriptionElement.style.display = 'none';
    }
    
    // Load images for this trip
    loadTripImages(trip.imageFolder || '');
    
    // Show modal
    const modal = document.getElementById('modal');
    modal.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
}

/**
 * Load images from the trip's image folder
 * Supports both .jpg/.jpeg and .heic formats
 * @param {string} imageFolder - Folder name inside /images/ directory
 */
function loadTripImages(imageFolder) {
    if (!imageFolder) {
        console.warn('No image folder specified for trip');
        currentImages = [];
        displayImage();
        return;
    }
    
    // Try to load images sequentially (1.jpg, 2.jpg, etc. or 1.heic, 2.heic, etc.)
    // Checks for .jpg first, then .heic if .jpg doesn't exist
    // Handles both lowercase and uppercase extensions (.jpg/.JPG, .heic/.HEIC)
    currentImages = [];
    let imageIndex = 1;
    const maxAttempts = 50; // Maximum number of images to try
    
    // Supported image formats (in order of preference)
    // Each format is tried in both lowercase and uppercase
    const formats = ['jpg', 'jpeg', 'heic'];
    const formatCases = ['lower', 'upper']; // Try lowercase first, then uppercase
    
    // Try loading images until we find one that doesn't exist
    function tryLoadImage(index) {
        let formatIndex = 0;
        let caseIndex = 0;
        let foundImage = false;
        
        // Try each format for this index (both cases)
        function tryFormat() {
            if (formatIndex >= formats.length) {
                // No formats worked for this index
                if (currentImages.length === 0 && index === 1) {
                    // No images found at all
                    console.warn(`No images found in images/${imageFolder}/`);
                    displayImage(); // Still call to handle empty state
                } else {
                    // We found some images, display the first one
                    displayImage();
                }
                return;
            }
            
            const format = formats[formatIndex];
            // Try lowercase first, then uppercase
            const extension = caseIndex === 0 ? format.toLowerCase() : format.toUpperCase();
            const imagePath = `images/${imageFolder}/${index}.${extension}`;
            const img = new Image();
            
            img.onload = function() {
                currentImages.push(imagePath);
                foundImage = true;
                // Try next image number
                if (index < maxAttempts) {
                    tryLoadImage(index + 1);
                } else {
                    // Done loading, display first image
                    displayImage();
                }
            };
            
            img.onerror = function() {
                // Try uppercase if we tried lowercase, or move to next format
                if (caseIndex === 0) {
                    // Try uppercase version of same format
                    caseIndex = 1;
                    tryFormat();
                } else {
                    // Both cases failed, try next format
                    formatIndex++;
                    caseIndex = 0;
                    tryFormat();
                }
            };
            
            img.src = imagePath;
        }
        
        tryFormat();
    }
    
    // Start loading from image 1
    tryLoadImage(1);
}

/**
 * Display the current image in the modal
 */
function displayImage() {
    const imageElement = document.getElementById('modal-image');
    const counterElement = document.getElementById('photo-counter');
    const galleryElement = document.querySelector('.photo-gallery');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    
    if (currentImages.length === 0) {
        // No images available
        imageElement.src = '';
        imageElement.alt = 'No images available';
        imageElement.style.display = 'none';
        counterElement.textContent = '';
        galleryElement.classList.add('single-image');
        prevBtn.disabled = true;
        nextBtn.disabled = true;
        return;
    }
    
    // Show image
    imageElement.style.display = 'block';
    imageElement.src = currentImages[currentImageIndex];
    imageElement.alt = `${currentTrip.title} - Photo ${currentImageIndex + 1}`;
    
    // Update counter
    if (currentImages.length > 1) {
        counterElement.textContent = `${currentImageIndex + 1} / ${currentImages.length}`;
        galleryElement.classList.remove('single-image');
    } else {
        counterElement.textContent = '';
        galleryElement.classList.add('single-image');
    }
    
    // Update navigation buttons
    prevBtn.disabled = currentImages.length <= 1;
    nextBtn.disabled = currentImages.length <= 1;
}

/**
 * Show next image in gallery
 */
function nextImage() {
    if (currentImages.length <= 1) return;
    
    currentImageIndex = (currentImageIndex + 1) % currentImages.length;
    displayImage();
}

/**
 * Show previous image in gallery
 */
function prevImage() {
    if (currentImages.length <= 1) return;
    
    currentImageIndex = (currentImageIndex - 1 + currentImages.length) % currentImages.length;
    displayImage();
}

/**
 * Close the modal
 */
function closeModal() {
    const modal = document.getElementById('modal');
    modal.classList.remove('active');
    document.body.style.overflow = ''; // Restore scrolling
    currentTrip = null;
    currentImages = [];
    currentImageIndex = 0;
}

// Event Listeners
document.addEventListener('DOMContentLoaded', function() {
    // Initialize map when page loads
    initMap();
    
    // Modal close button
    const closeBtn = document.querySelector('.close');
    if (closeBtn) {
        closeBtn.addEventListener('click', closeModal);
    }
    
    // Close modal when clicking outside
    const modal = document.getElementById('modal');
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                closeModal();
            }
        });
    }
    
    // Gallery navigation buttons
    const nextBtn = document.getElementById('next-btn');
    const prevBtn = document.getElementById('prev-btn');
    
    if (nextBtn) {
        nextBtn.addEventListener('click', nextImage);
    }
    
    if (prevBtn) {
        prevBtn.addEventListener('click', prevImage);
    }
    
    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        const modal = document.getElementById('modal');
        if (modal.classList.contains('active')) {
            if (e.key === 'Escape') {
                closeModal();
            } else if (e.key === 'ArrowRight') {
                nextImage();
            } else if (e.key === 'ArrowLeft') {
                prevImage();
            }
        }
    });
});

