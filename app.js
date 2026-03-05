const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  const success = req.query.success ? true : false;
  res.render('index', { success });
});

app.post('/contact', (req, res) => {
  const { name, email, message } = req.body;
  console.log('Contact:', { name, email, message });
  // Add Nodemailer here later
  res.redirect('/?success=1#contact');
});

app.listen(port, () => {
  console.log(`Server at http://localhost:${port}`);
});