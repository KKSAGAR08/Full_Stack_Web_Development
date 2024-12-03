import express from 'express';
import { fileURLToPath } from 'url';
import path from 'path';
import qr from 'qr-image'; 


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 3000;


app.use(express.urlencoded({ extended: true }));


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});


app.post('/process', (req, res) => {
  const userInput = req.body.userInput;

  
  res.type('png'); 
  const qr_svg = qr.image(userInput, { type: 'png' });
  qr_svg.pipe(res); 
});


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
