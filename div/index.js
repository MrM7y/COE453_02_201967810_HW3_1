const functions = require('@google-cloud/functions-framework');

functions.http('div', (req, res) => {
  req.body.Result = req.body.X / req.body.Y;
  res.send(req.body);
});
