    	var socket = io();
    	socket.on('connect', function (){

    		console.log('Conectado al Servidor');

    	});

    	socket.on('disconnect', function(){

    		console.log('perdimos conexion con el Servidor');
    	});

    	//enviar informacion
    	socket.emit('enviarMensajes', { usuario: 'Johnny', mensaje: 'Hola jjbv' }, function(resp){

    		console.log('se disparo el guevo mio', resp)

    	});


    	//escuchar info

    	socket.on('enviarMensajes', function(mensaje) {

    		console.log('info del server', mensaje)

    	})