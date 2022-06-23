const fs = require('fs');
const colors = require('colors');

const crearArchivo = async (base = 5, listar = false, hasta = 10) => {
	try {
		let salida = '';
		let consola = '';

		const limite = hasta;
		for (let i = 0; i <= limite; i++) {
			consola += `${base} ${'x'.green} ${i} = ${base * i}\n`;
			salida += `${base} x ${i} = ${base * i}\n`;
		}
		if (listar) {
			console.log('############################'.blue);
			console.log('        TABLA DEL '.yellow, colors.red(base));
			console.log('############################'.blue);
			console.log(consola);
		}
		fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

		return `tabla-${base}.txt`;
	} catch (error) {
		console.log(error);
	}
};

module.exports = {
	crearArchivo,
};
