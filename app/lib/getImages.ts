import fs from 'fs';
import path from 'path';

export const getImages = () => {
  const imagesDirectory = path.join(process.cwd(), 'public/images/all');
  const filenames = fs.readdirSync(imagesDirectory);

  return filenames.filter((file) =>
    /\.(png|jpe?g|gif|svg)$/.test(file.toLowerCase())
  );
};
