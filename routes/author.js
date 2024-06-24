import { Router } from 'express';
import Database from '../database/database.js';

const router = Router();

// Get all users
router.get('/authors', (req, res) => {
    Database.select("authors")
        .then((result) => {
            const [rows] = result;
            console.log(rows);
            res.json(rows);
        })
        .catch(err => {
            console.log(err);
            res.json([]);
        })
});

router.get('/authors/:id', (req, res) => {
    const authorId = req.params.id;
    Database.selectById("authors", "Au_ID", authorId)
        .then(([rows]) => {
            if (rows.length > 0) {
                res.json(rows[0]);
            } else {
                res.status(404).send('no author found')
            }

        })
        .catch(err => {
            console.log(err);
        });
})

router.get('/authors/byname/:name', (req, res) => {
    const name = req.params.name;
    Database.selectByColumn("authors", "Author", name)
        .then(([rows]) => {
            res.json(rows);
        })
        .catch(err => {
            console.log(err)
            res.json([])
        });
})

router.post('/authors/', (req, res) => {
    const author = req.body;
    console.log("data ", author)
    Database.insert("authors", author)
        .then(([rows]) => {
            console.log(rows)
            if (rows.affectedRows > 0) {
                res.json({
                    success: true
                })
            } else {
                res.json({
                    success: false
                })
            }
        })
        .catch(err => {
            res.json({
                success: false
            })
            console.log(err)
        });
})


export default router;
