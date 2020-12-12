"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const photo_app_1 = require("./photo-app");
const user = new photo_app_1.User(1, 'ulzahk', 'Francisco', true);
const album = new photo_app_1.Album(10, 'Platzi Pictures');
const picture = new photo_app_1.Picture(1, 'TypeScript Couse', '2020-03', photo_app_1.PhotoOrientation.Landscape);
// Creamos Relaciones entre Objetos
user.addAlbum(album);
album.addPicture(picture);
console.log('user', user);
