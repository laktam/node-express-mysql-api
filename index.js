import express from 'express';
import authorRoutes from './routes/author.js';
import cors from 'cors';

const app = express();
const port = 8081;

app.use(cors());
app.use(express.json());
app.use('/api', authorRoutes);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});