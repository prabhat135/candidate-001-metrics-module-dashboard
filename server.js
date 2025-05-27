const express = require('express');
const path = require('path');
const app = express();

const port = process.env.PORT || 3000;

// serve frontend files
app.use(express.static(path.join(__dirname, 'public')));

// API routes
app.get('/api/metrics/upgrade-conversions', require('./api/upgradeConversions'));
app.get('/api/metrics/raffle-sales', require('./api/raffleSales'));

// start server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
