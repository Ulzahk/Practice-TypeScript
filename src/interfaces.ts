export = {};

// Función para mostrar una fotografía
enum PhotoOrientation {
  Landscape,
  Portrait,
  Square,
  Panorama
}

interface Picture {
  title: string,
  date: string,
  orientation: PhotoOrientation
}

function showPicture(picture: Picture){
  console.log(`[title: ${picture.title},
    date: ${picture.date},
    orientation: ${picture.orientation}]`)
}

let myPic = {
  title: 'Test title',
  date: '2020-03',
  orientation: PhotoOrientation.Landscape
}

showPicture(myPic);
showPicture({
  title: 'Test title',
  date: '2020-03',
  orientation: PhotoOrientation.Portrait
  //extra: 'Test' // Error 
});