const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');
require('colors');

console.clear();

// console.log(argv);

crearArchivo(argv.b, argv.l, argv.h)
	.then((nombreArchivo) => {
		return console.log(nombreArchivo.rainbow, 'creado'.rainbow);
	})
	.catch((err) => console.log(err));
