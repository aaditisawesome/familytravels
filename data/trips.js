/**
 * Family Travel Trips Data
 * 
 * This file contains an array of trip objects. Each trip represents a location
 * that will be displayed on the map.
 * 
 * To add a new trip:
 * 1. Add a new object to the trips array below
 * 2. Include: title, coordinates [latitude, longitude], imageFolder
 * 3. Optionally include: year, description
 * 4. Create a folder in /images/ with the same name as imageFolder
 * 5. Add photos to that folder named sequentially: 1.jpg, 2.jpg, 3.jpg, etc.
 * 
 * Example structure:
 * {
 *   title: "Trip Name",
 *   coordinates: [48.8566, 2.3522],  // [latitude, longitude]
 *   year: "2023",
 *   description: "A wonderful trip description...",
 *   imageFolder: "paris"  // Must match folder name in /images/
 * }
 */

const trips = [
    {
        title: "Costa Rica",
        coordinates: [9.848955986297373, -84.07800686181297],
        year: "2024",
        description: "After exploring the forests of Costa Rica through hikes and rapelling, we enjoyed the local beaches along with Costa Rican casado, and ended off with a blast at ziplining and sloth watching.",
        imageFolder: "costa-rica"
    },
    {
        title: "Nainital, India",
        coordinates: [29.389019277019614, 79.45650393421937],
        year: "2023",
        description: "We first explored the wildlife at Jim Corbett National Park in a safari tour, and then we enjoyed the scenic views of Nainital lake and the mountains, ending off with a beautiful boat ride.",
        imageFolder: "nainital"
    },
    {
        title: "Jaisalmer, India",
        coordinates: [26.907619995490467, 70.89618547930063],
        year: "2021",
        description: "We first explored the desert of Jaisalmer through a camel ride and a jeep safari, and then we enjoyed the local markets and the sunset at the fort. We spent a few nights at a beautiful resort, and even spent one night camping in a tent.",
        imageFolder: "jaisalmer"
    },
    {
        title: "Cabo San Lucas, Mexico",
        coordinates: [22.890160303218444, -109.91535184921425],
        year: "2022",
        description: "We went on this trip with Nanu and Nani, spending a week at a beautiful all-inclusive resort, having fun at the beach and pool, and enjoying the festive activities such as the nightly shows. We also explored the waters by snorkeling and jet skiing.",
        imageFolder: "cabo"
    },
    {
        title: "Fremont, California",
        coordinates: [37.499303465005696, -121.91407069438536],
        year: "2007-2025",
        description: "Our humble abode.",
        imageFolder: "home"
    },
    {
        title: "Antigua and Barbuda",
        coordinates: [17.09069241150619, -61.794519567368404],
        year: "2024",
        description: "We watched 2 cricket T20 world cup games with Tanya Mami, Sanjay Mamu, and Ishaan, and even seeing an Indian victory live. We also explored beaches around the island and ate some delicious traditional food.",
        imageFolder: "antigua"
    },
    {
        title: "Nassau, The Bahamas",
        coordinates: [25.08381546706582, -77.32066857259355],
        year: "2025",
        description: "We spent a few nights at the Atlantis Resort, having lots of fun at the water park and the beach, exploring almost every water slide. We also ate some delicious food and participated in other fun activities such as an escape room.",
        imageFolder: "bahamas"
    },
    {
        title: "Seattle, Washington",
        coordinates: [47.60958459671099, -122.33517462673107],
        year: "2022",
        description: "We visited Priya Masi's family at Seattle, and despite the extremely cold weather, we explored the wilderness by hiking on mountains and in the snow. We also visited fun places like the very first Starbucks and the aircraft mueseum.",
        imageFolder: "seattle"
    }

];

/**
 * NOTES FOR ADDING YOUR OWN TRIPS:
 * 
 * 1. FINDING COORDINATES:
 *    - Use Google Maps: Right-click a location → Click coordinates to copy
 *    - Format: [latitude, longitude] (e.g., [40.7128, -74.0060] for NYC)
 * 
 * 2. IMAGE FOLDER SETUP:
 *    - Create a folder in /images/ with a simple name (e.g., "paris", "tokyo")
 *    - Name your photos sequentially: 1.jpg, 2.jpg, 3.jpg, etc. (or 1.heic, 2.heic, etc.)
 *    - Supported formats: .jpg, .jpeg, .heic
 *    - The script will automatically find and load all numbered images
 *    - You can mix formats (e.g., 1.jpg, 2.heic, 3.jpg) - it checks .jpg first, then .heic
 * 
 * 3. IMAGE NAMING:
 *    - Start from 1 (not 0) - e.g., 1.jpg or 1.heic
 *    - Use consecutive numbers (1, 2, 3, 4...)
 *    - If you skip a number, the script will stop loading at that point
 *    - Note: HEIC images may not display in all browsers (Safari has best support)
 * 
 * 4. OPTIONAL FIELDS:
 *    - year: Displayed below the title (can be omitted)
 *    - description: Shown in the modal (can be omitted)
 * 
 * 5. EXAMPLE NEW TRIP:
 *    {
 *      title: "New York City",
 *      coordinates: [40.7128, -74.0060],
 *      year: "2024",
 *      description: "Our amazing trip to the Big Apple!",
 *      imageFolder: "nyc"
 *    }
 *    Then create /images/nyc/ and add 1.jpg, 2.jpg, etc.
 */

