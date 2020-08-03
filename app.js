const express = require('express');
const path = require('path');

const app = express();
const port = process.env.port || 3000;

app.use('/public', express.static(path.join(__dirname, 'public')));

app.get('/:width?/:length?', (req, res, next) => {
  if (typeof req.params.width !== 'undefined' && typeof req.params.length !== 'undefined') {
    const { width, length } = req.params;
    const valuesPasses = checkWidthAndHeight(width, length);
    if (!valuesPasses) return next();
    return res.sendFile(path.join(__dirname, 'views', 'index.html'));
  }
  return res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.use(function (req, res) {
  return res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

app.listen(port, () =>
  console.log(`App listening at http://localhost:${port}`)
);

function checkWidthAndHeight(width, length) {
  const allowedValues = [5, 10, 15, 20];
  if (allowedValues.includes(width) && allowedValues.includes(length)) {
    return true;
  }
  return false;
}