const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();
const db = require('./db/connection');
//api route import
const apiRoutes = require('./routes/apiRoutes');

// EXPRESS MIDDLEWARE
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// api route method
app.use('/api', apiRoutes);

// Not found response for unmatched routes
app.use((req, res) => {
  res.status(404).end();
});

// start server after db connection
db.connect(err => {
  if (err) throw err;
  console.log('Database connected.');
  app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
  });
});

