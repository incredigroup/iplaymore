import fs from 'fs';
import path from 'path';

export default (req, res) => {
  const { menu } = req.query;
  const dirRelativeToPublicFolder = 'files/' + menu;
  const dir = path.resolve('./public', dirRelativeToPublicFolder);
  const filenames = fs.readdirSync(dir).sort((a, b)=> {
    return a.replace('.jpg', '') - b.replace('.jpg', '') > 0 ? 1 : -1;
  });
  const images = filenames.map(name => path.join('/', dirRelativeToPublicFolder, name));
  res.statusCode = 200;
  res.json(images);
}