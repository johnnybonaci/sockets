const { io } = require('../server');


io.on('connection', (cliente) => {

	console.log('Usuario conectado');


	cliente.emit('enviarMensajes', {

		usuario: 'Admid',
		mensjae: 'Bienvenido a bienvenidos'
	})

	cliente.on('disconnect', () => {

		console.log('usuario desconecctado')
	});

	//EScuchar al cliente
	cliente.on('enviarMensajes', (data, callback) => {

		console.log(data);

		cliente.broadcast.emit('enviarMensajes', data);



		//callback( { resp: 'borralo'});
	})

});