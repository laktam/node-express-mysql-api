import express from 'express';
import authorRoutes from './routes/author.js';

const app = express();
const port = 3000;

app.use(express.json());
app.use('/api', authorRoutes);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});