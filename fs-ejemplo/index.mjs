import fs from 'fs';

// Leer un archivo de manera asíncrona
fs.readFile('./data/example.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log('Contenido del archivo:', data);
});

// Escribir en un nuevo archivo y luego renombrarlo
fs.writeFile('./data/newfile.txt', 'Contenido nuevo', (err) => {
    if (err) throw err;
    console.log('Archivo creado y escrito');

    // Ahora renombramos el archivo
    fs.rename('./data/newfile.txt', './data/renamedfile.txt', (err) => {
        if (err) throw err;
        console.log('Archivo renombrado');
    });
});
