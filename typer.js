function typer(selector){
	var typeSpeed = 120,delSpeed=50,duration = 0,arr=[],selector= document.getElementById(selector),contentLength = 0;
	
	this.type = function(input,speed){
		
			var args = Array.prototype.slice.call(arguments);
			arr.push(['type'].concat(args).concat(duration))

			if(typeof(input)=='string'){
			textLength = input.length;
			speed = speed ? speed : typeSpeed;
			setTimeout(typeString, duration, input, speed);
			duration+=textLength*speed;
			contentLength+=textLength;
			}
			else if(typeof(input)=='number'){
			duration+=input;
			}
			
			return this;
	}
	
	this.del = function(input){
		if(input===undefined){
		setTimeout(delString,duration,contentLength);	
		arr.push(['del'].concat(duration))
		duration+=contentLength*delSpeed+500;
		contentLength = 0;
		}
		else{
		var args = Array.prototype.slice.call(arguments);
		arr.push(['del'].concat(args).concat(duration))
		setTimeout(delString,duration,input);	
		duration+=input*delSpeed+500;
		contentLength-=input;
		}
		return this;
	}	
	
	this.end = function(){
		arr.push(['end'].concat(duration))
		setTimeout(removeCursor,duration);	
		return this;
	}
	
	this.repeat = function(){
		setInterval(function(){
				for(i=0;i<arr.length;i++){
					if(arr[i][0]=='type'){
						if(arr[i][3]!==undefined){
							setTimeout(typeString, arr[i][3], arr[i][1], arr[i][2]);
							contentLength+=arr[i][1].length;
						}
						else if(typeof(arr[i][1])=='number'){
						}
						else{
							setTimeout(typeString, arr[i][2], arr[i][1],typeSpeed);
							contentLength+=arr[i][1].length;
						}
					}
					
					else if(arr[i][0]=='del'){
						if(arr[i][2]===undefined){
							setTimeout(delString, arr[i][1],contentLength);
							contentLength = 0;
						}
						else{
							setTimeout(delString, arr[i][2],arr[i][1]);
							contentLength-=arr[i][1];
						}
					}
					else{
						setTimeout(removeCursor, arr[i][1]);
					}
				}
			},duration);
			duration=0;
	}
		
	function typeString(text,speed){
		if(selector.className=='') selector.className = 'typer';
		for (var i = 0; i < text.length; i++) {
				setTimeout(function(content){
				selector.innerText+=content;
				}, speed * i,text.charAt(i));
			}
	}
		
	function delString(length){
		if(selector.className=='') selector.className = 'typer';
		for (var i = 0; i < length; i++) {
				setTimeout(function(){
					var content = selector.innerText
					content = content.substr(0,content.length-1)
					selector.innerText=content;
				}, delSpeed * i);
			}
	}
	
	function removeCursor(){
		selector.className='';
	}
	

	
	function init(){
		var style = document.createElement("style");
		document.head.appendChild(style);
		sheet = style.sheet;
		sheet.insertRule('.typer::after { content: "|";animation: blink 500ms infinite; }', 0);
		sheet.insertRule('@keyframes blink {from { opacity: 0; } to { opacity: 1; }}', 0);
		selector.className = 'typer';
	}
	
	init();
}