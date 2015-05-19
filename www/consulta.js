


		$.ajax({
			url:'http://www.dvrinfravision.com/traba.php?categorias',
			dataType: 'json',
			type: 'get',
			success: function(data){
				for (var i = data.length - 1; i >= 0; i--) {
					$('#accordion').append('<li data-role="list-divider"><a class="ui-link ui-btn ui-shadow ui-corner-all" href="#empresas" data-role="button" onclick="consult('+data[i]['ID']+')" >'+data[i]['tipopadre']+'</a></li>');
				 //   $('#list'+data[i]['ID']+'').find('#empresas').append().hide();
				
				};

			},
			error: function(){},
		});



function consult(id){

	//	$('#list'+id).html('<img src="www.ptyfasthelp.com/FastHelpPTYServer/img/ajax-loader.gif">');
		var Html = "";
		$.ajax({
			url: 'http://www.dvrinfravision.com/traba.php?empresas='+id,
			dataType: 'json',
			type: 'get',
			success: function(data){

				if(data.length == 0) {

					Html = Html + '<div>No se encontraron resultados.</div>';
				}
				else{
					
					for (var i = data.length - 1; i >= 0; i--) {
							Html = Html + ('<li data-role="list-divider" role="heading" class="ui-li-divider ui-bar-inherit">'+
											'<a href="detalles.html?id='+data[i]['ID']+'" class="ui-link ui-btn ui-shadow ui-corner-all" data-role="button" role="button" rel="external" >'+data[i]['nombre']+'</a>'+
											'</li>');
					/*Html = Html +'<li>'+
				'<a href="#">'+data[i]['nombre']+'</a>'+
				'</li>';*/

					};
                 $('#listaempresas').html(Html);
				}
                 

				

			//$(this).closest('.drop').find('.list').slideToggle()
			},
			error: function(){},
		});
	}

//$(".drop").on('click','button', function() {
function detalles(even){
	
		var Html = "";
		$.ajax({
			url: 'http://www.dvrinfravision.com/traba.php?detalles='+even,
			dataType: 'json',
			type: 'get',
			success: function(data){

				if(data.length == 0) {

					Html = Html + '<div>No se encontraron resultados.</div>';
				}
				else{
					
					for (var i = data.length - 1; i >= 0; i--) {
							Html = Html + ('<li data-role="list-divider" role="heading" class="ui-li-divider ui-bar-inherit">'+
											'<a href="detalles.html?id='+data[i]['ID']+'" class="ui-link ui-btn ui-shadow ui-corner-all" data-role="button" role="button" rel="external" >'+data[i]['nombre']+'</a>'+
											'</li>');
					
					};
                 $('#listaempresas').html(Html);
				}
                 

				

			//$(this).closest('.drop').find('.list').slideToggle()
			},
			error: function(){},
		});
	}

