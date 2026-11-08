// Présence d'une image fournie (public/images/<fichier>), lue au moment de la construction.
import fs from 'node:fs';
import path from 'node:path';

export const imageExiste = (fichier: string): boolean =>
  fs.existsSync(path.join(process.cwd(), 'public', 'images', fichier));
