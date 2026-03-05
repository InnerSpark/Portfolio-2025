const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// View engine setup
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files (CSS, images, JS)
app.use(express.static(path.join(__dirname, 'public')));

// Parse form data
app.use(express.urlencoded({ extended: true }));

// Main route - render the SPA
app.get('/', (req, res) => {
  res.render('index');
});

// Contact form handler
app.post('/contact', (req, res) => {
  const { name, email, message } = req.body;
  
  // For now: log to console (later: send email with nodemailer)
  console.log('New contact message:');
  console.log(`Name: ${name}`);
  console.log(`Email: ${email}`);
  console.log(`Message: ${message}`);

  // Redirect back with success (you can add query param for message)
  res.redirect('/?success=1#contact');
});

app.listen(port, () => {
  console.log(`Inner Spark Media running at http://localhost:${port}`);
});