const express = require('express');
const app = express();
const userRoutes = require('./app/routes/userRoutes');
const sequelize = require('./app/db/db');

sequelize
  .authenticate()
  .then(() => {
    console.log('Database connected...');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });

app.use(express.json());

app.use('/api', userRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
