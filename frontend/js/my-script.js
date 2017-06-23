function allowDrop(ev) {
	ev.preventDefault();
}
 
function drag(ev) {
	ev.dataTransfer.setData("text", ev.target.id);
}
 
function drop(ev) {
	ev.preventDefault();
	var data = ev.dataTransfer.getData("text");
	if(ev.target.id == "drop-data"){
		if(document.getElementById(data).getAttribute("data-type") == "0"){
			alert("can't drop here !");
			return;
		}
	}
	ev.target.appendChild(document.getElementById(data));
}

function build_chart(){
	var barData = {
    labels : ["January","February","March","April","May","June"],
    datasets : [
        {
            fillColor : "#48A497",
            strokeColor : "#48A4D1",
            data : [456,479,324,569,702,600]
        },
        {
            fillColor : "rgba(73,188,170,0.4)",
            strokeColor : "rgba(72,174,209,0.4)",
            data : [364,504,605,400,345,320]
        }
        ]
    }
 
    // get bar chart canvas
    var income = document.getElementById("chart").getContext("2d");
 
    // draw bar chart
    new Chart(income).Bar(barData);
}

var app = angular.module("open-data",[]);
app.controller("open-controller" , function($scope){
	$scope.var = "aaa";
    $scope.click=function(){
        build_chart();
    }
});

