const School = require('../models/schoolModel');

// Function to add a new school
exports.addSchool = (req, res) => {
    const { name, address, latitude, longitude } = req.body;

    if (!name || !address || latitude == null || longitude == null) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    School.addSchool({ name, address, latitude, longitude }, (err, result) => {
        if (err) {
            return res.status(500).json({ message: 'Database error', error: err });
        }
        res.status(201).json({ message: 'School added successfully', schoolId: result.insertId });
    });
};





// Function to list schools
exports.listSchools = (req, res) => {
    let { latitude, longitude } = req.query;

    // If latitude & longitude are provided, parse them
    if (latitude !== undefined && longitude !== undefined) {
        latitude = parseFloat(latitude);
        longitude = parseFloat(longitude);

        // Validate numbers
        if (isNaN(latitude) || isNaN(longitude)) {
            return res.status(400).json({ message: 'Latitude and Longitude must be valid numbers' });
        }
    }

    // Fetch all schools from the database
    School.getAllSchools((err, results) => {
        if (err) {
            return res.status(500).json({ message: 'Database error', error: err });
        }

        if (!results.length) {
            return res.status(404).json({ message: 'No schools found' });
        }

        // If latitude & longitude are provided, sort by distance
        if (latitude !== undefined && longitude !== undefined) {
            results.forEach(school => {
                const dLat = (school.latitude - latitude) * (Math.PI / 180);
                const dLon = (school.longitude - longitude) * (Math.PI / 180);
                const a = Math.sin(dLat / 2) ** 2 + Math.cos(latitude * (Math.PI / 180)) * Math.cos(school.latitude * (Math.PI / 180)) * Math.sin(dLon / 2) ** 2;
                const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
                school.distance = 6371 * c; 
            });

    
            results.sort((a, b) => a.distance - b.distance);
        }

        res.json(results);
    });
};
