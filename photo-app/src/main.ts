import { User, Album, Picture, PhotoOrientation } from './photo-app';

const user = new User(1, 'ulzahk', 'Francisco', true);
const album = new Album(10, 'Platzi Pictures');
const picture = new Picture(1, 'TypeScript Couse', '2020-03', PhotoOrientation.Landscape);

// Creamos Relaciones entre Objetos

user.addAlbum(album);
album.addPicture(picture);

console.log('user', user)