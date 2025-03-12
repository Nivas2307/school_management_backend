const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const schoolRoutes = require('./routes/schoolRoutes.js');
const db = require('./config/db.js');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', schoolRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
