			//script contraste	
			var link_css = "site_fatec.css";
				
			if(getCookie2() == "contraste"){
				link_css = "contraste.css";
			}else if(getCookie() == "default"){
				link_css = "site_fatec.css";
			}
			
			$(document).ready(function(){
				
				$("#contraste").click(function(){
					setCookie("contraste");
					location.reload();				
				});
				
				$("#semcontraste").click(function(){
					setCookie("default")
					location.reload();									
				});
				
			});
			
			
			$("head").append("<link rel=stylesheet href="+ " css/"+ link_css +" " +"type=text/css>");
		
			function setCookie(value){
				var data = new Date();
				data.setTime(data.getTime() + 600000);
				
				//cookies structure
				document.cookie = "contraste="+value+"; expires="+data.toUTCString()+
					"; path=/";
				
				
			}
			
			function getCookie(){
				var cookie = document.cookie.split("=");
				
				return cookie[1];
			}

function getCookie2(){
    var nameEQ = "contraste=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return undefined;

}


		//fim script contraste
	