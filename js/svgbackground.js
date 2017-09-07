var stars = document.getElementById("star"),
    stargroup = document.getElementById("star-group"),
    starcount = 500,svg_ns ="http://www.w3.org/2000/svg",
    xlink = "http://www.w3.org/1999/xlink";

$(document).ready(function(){
	var svg = document.querySelector("svg");
	createStar();
	
});

function createStar(){
	var star;
	   	
	while(starcount--){
    	var use = document.createElementNS(svg_ns,"use");
    	use.setAttributeNS(xlink,"xlink:href","#"+stars.id);
    	star = use;
    	star.setAttribute('transform','translate('+random(-400,1000)+','+random(-300,80)+') '+
    	"scale("+random(0.3,0.8)+")");
    	star.setAttribute("opacity",random(0.3,0.6));
    	stargroup.appendChild(star);
    }
}

//创建随机数
function random(min,max){
	return min + Math.random()*(max-min);
}
