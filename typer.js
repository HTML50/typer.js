function typer(selector){
	var typeSpeed = 120,delSpeed=50,duration = 0,preText;

	this.type = function(text,speed){
			if(typeof(text)=='string'){
			textLength = text.length;
			speed = speed ? speed : typeSpeed;
			setTimeout(typeString, duration, text, speed);
			duration+=textLength*speed;
			preText=text;
			}
			else if(typeof(text)=='number'){
			setTimeout(function(){
				selector.innerText+=' ';
				},duration);	
			duration+=text;	
			}
			return this;
	}
	
	this.del = function(input){
		setTimeout(delString, duration);	
		duration+=preText.length*delSpeed;		
		return this;
	}	
	
	this.end = function(){
		setTimeout(function(){
			var sheet = document.styleSheets[1];
			sheet.deleteRule(0);
			sheet.deleteRule(0);			
		},duration);	
	}
	
	function typeString(text,speed){
		for (var i = 0; i < text.length; i++) {
				setTimeout(function(content){
				selector.innerText+=content;
				}, speed * i,text.charAt(i));
			}
	}
		
	function delString(){
		for (var i = 0; i < preText.length; i++) {
				setTimeout(function(){
					var content = selector.innerText
					content = content.substr(0,content.length-1)
					selector.innerText=content;
				}, delSpeed * i);
			}
	}
			
	function init(){
		var style = document.createElement("style");
		document.head.appendChild(style);
		sheet = style.sheet;
		sheet.insertRule('#'+selector.id+'::after { content: "|";animation: blink 800ms infinite; }', 0);
		sheet.insertRule('@keyframes blink {from { opacity: 0; } to { opacity: 1; }}', 0);
	}
	
	init();
}