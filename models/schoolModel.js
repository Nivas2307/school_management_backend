const db = require('../config/db');

const School = {
    addSchool: (schoolData, callback) => {
        const { name, address, latitude, longitude } = schoolData;

        if (!name || !address || latitude == null || longitude == null) {
            return callback({ message: "Latitude and Longitude are required" }, null);
        }

        const sql = 'INSERT INTO schools (name, address, latitude, longitude) VALUES (?, ?, ?, ?)';
        db.query(sql, [name, address, latitude, longitude], (err, result) => {
            if (err) {
                console.error("Database error:", err);
                return callback(err, null);
            }
            callback(null, { message: "School added successfully", schoolId: result.insertId });
        });
    },

    getAllSchools: (callback) => {
        const sql = 'SELECT * FROM schools';
        db.query(sql, (err, results) => {
            if (err) {
                console.error("Database error:", err);
                return callback(err, null);
            }
            callback(null, results);
        });
    }
};

module.exports = School;
