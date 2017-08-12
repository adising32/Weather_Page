var btn = document.getElementById("button");
var para = document.getElementById("para");
var unit = "metric";
$('#metric').click(function(){
    unit="metric";
    $(this).addClass('active');
    $('#imperial').removeClass('active');
});
$('#imperial').click(function(){
    unit="imperial";
    $(this).addClass('active');
    $('#metric').removeClass('active');
});

btn.addEventListener("click",function(){
    
    var loc = document.getElementById('box1').value;
    var request = new XMLHttpRequest();
   request.open("GET","http://api.openweathermap.org/data/2.5/weather?q="+loc+"&units="+unit+"&appid=e493e9eef4c6684714e7e67cd75b162c",true);
    request.onload = function(){
        var ourData = JSON.parse(request.responseText);
        para.innerHTML = "<br>"+ourData.name+", "+ourData.sys.country+"<br> Description: "+ourData.weather[0].description+"                    <br>"+"Temperature: "+ourData.main.temp+"<br>Pressure: "+ourData.main.pressure+"<br>Humidity: "+
                         ourData.main.humidity;
    };
    request.send();
});














