import express from 'express';
import data from './data.js';
const app = express();
app.get('/api/professionals/:id', (req, res) => {
  const pro = data.professionals.find((x) => x._id === req.params.id);
  if (pro) {
    res.send(pro);
  } else {
    res.status(404).send({ message: 'Profession Not Found' });
  }
});


app.get('/api/professionals', (req, res) => {
  res.send(data.professionals);
}); 

app.get('/', (req, res) => {
  res.send('Server is ready');
});
const port = process.env.PORT || 5001;
app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`);
});

