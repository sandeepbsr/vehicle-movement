const express = require('express');
const cors = require('cors');
const app = express();
const port = 3002;

app.use(cors());

const vehicleData = [
  { latitude: 17.385044, longitude: 78.486671, timestamp: '2024-07-20T10:00:00Z' },
  { latitude: 17.385045, longitude: 78.486672, timestamp: '2024-07-20T10:00:05Z' },
];

app.get('/api/vehicle', (req, res) => {
  res.json(vehicleData);
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
