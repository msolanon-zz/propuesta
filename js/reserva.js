var reservacion;

$(document).ready(function() {

	$('#calendar').fullCalendar({
			header: {
				left: 'prev,next today',
				center: 'title',
				right: 'month,agendaWeek,agendaDay,listMonth'
			},
			defaultDate: new Date(),
			navLinks: true, // can click day/week names to navigate views
			selectable: true,
			selectHelper: true,
			locale: 'es',
			select: function(start, end) {
				var fechaCalendar = new Date(start);
				fechaCalendar = new Date(fechaCalendar.getFullYear(), fechaCalendar.getMonth(), fechaCalendar.getDate() + 1, 0, 0, 0);
				var fechaCalMod = fechaCalendar.getFullYear() + '/'
					+ ('0' + (fechaCalendar.getMonth() + 1)).slice(-2) + '/'
					+ ('0' + fechaCalendar.getDate()).slice(-2);
				$('#fecha').val(fechaCalMod);
				$('#fechaFin').val(fechaCalMod);
				$('#modalReservar').modal('show');
			},
			editable: false,
			eventLimit: true, // allow "more" link when too many events
			events: [
				{
					title: 'Reserva de Edlin Abarca sala 4 todo el dia',
					start: '2017-07-03T07:30:00',
					end: '2017-07-03T17:00:00'
				},
				{
					title: 'Long Event',
					start: '2017-07-10T07:30:00',
					end: '2017-07-10T12:00:00'
				},
				{
					title: 'Repeating Event',
					start: '2017-07-18T07:30:00',
					end: '2017-07-18T17:00:00'
				},
				{
					title: 'Evento',
					start: '2017-07-19T07:30:00',
					end: '2017-07-19T12:00:00'
				},
				{
					title: 'Conference',
					start: '2017-07-23T13:00:00',
					end: '2017-07-23T17:00:00'
				}
			],
			eventClick : function(event) {
				abrirInformacion(event);
			}
		});
	});

function abrirInformacion(event){
	reservacion = event;
	var fechaCalendar = new Date(event.start);
	fechaCalendar = new Date(fechaCalendar.getFullYear(), fechaCalendar.getMonth(), fechaCalendar.getDate() + 1, 0, 0, 0);
	var fechaCalMod = fechaCalendar.getFullYear() + '/'
		+ ('0' + (fechaCalendar.getMonth() + 1)).slice(-2) + '/'
		+ ('0' + fechaCalendar.getDate()).slice(-2);
	$('#fechaInfo').html(fechaCalMod);
	$('#fechaFin').html(fechaCalMod);
	$('#descripcionInfo').html('La sala ha sido reservada por Edlin Abarca todo el día. El tipo de reunión es externa.');
	$('#modalInformacion').modal('show');
}

function modificarReserva(){
	$('#modalInformacion').hide();
	var fechaCalendar = new Date(reservacion.start);
	fechaCalendar = new Date(fechaCalendar.getFullYear(), fechaCalendar.getMonth(), fechaCalendar.getDate() + 1, 0, 0, 0);
	var fechaCalMod = fechaCalendar.getFullYear() + '/'
		+ ('0' + (fechaCalendar.getMonth() + 1)).slice(-2) + '/'
		+ ('0' + fechaCalendar.getDate()).slice(-2);
	$('#fecha').val(fechaCalMod);
	$('#adicional').val(reservacion.title);
	$('#modalReservar').modal('show');
}

function reservar(){
	$('#modalReservar').modal('hide');
};

function modalCancelar(){
	$('#modalInformacion').modal('hide');
	$('#modalInformacion').hide();
	$('#modalCancelar').modal('show');	
};


function cancelarReserva(){
	alert('Se ha cancelado de reservación de la sala.');
	$('#modalCancelar').hide();
	$('#modalCancelar').modal('hide');
}