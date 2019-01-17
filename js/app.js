$(document).ready(function(){
	$('#s-btn').on('click',function(){
			var location = $('#search')[0].value;
			// console.log($('#search'));
			var url = "https://api.openweathermap.org/data/2.5/weather?q="+location+"&appid=4fd4c401ba371b00522e421e7aeb5d68"
			var req = new Request(url);	
			  let a;
			  console.log(fetch(req));
			  fetch(req)
			      .then(function(response) {
			          a = response.json();
			          a.then(function(obj){
			          	$('#datastack').append("<h1>"+location+"(lat:"+obj.coord.lat+", lon:"+obj.coord.lon+")</h1><h2>"+obj.weather[0].description+"</h2><p><h2>Humidity:"+obj.main.humidity+" %</h2><h2>Pressure:"+obj.main.pressure+" hPa</h2><h2></h2></p>")
			          	console.log();
			            console.log(obj);
			            });
			      });
		});
});
