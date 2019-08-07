import path from 'path'
import express from 'express'

const app = express()
const DIST_DIR = __dirname
const INDEX_FILE = path.join(DIST_DIR, 'index.html')

// remove the comment on production release
if (process.env.mode == 'development') {
  // express-basic-auth
  const auth = require('./auth');
  app.use(auth);
}

app.get('*.js', function (req, res, next) {
    req.url = req.url + '.gz';
    res.set('Content-Encoding', 'gzip');
    res.set('Content-Type', 'application/javascript');
    next();
});

app.use(express.static(DIST_DIR, { maxAge: '1y', lastModified: true })); // one week caching

app.get('/*', (req, res) => {
    res.sendFile(INDEX_FILE)
});

const PORT = process.env.PORT || 8080;
app.listen(PORT);
