/*jshint browser:true */
/*global $ */(function()
{
	"use strict";
 /*
   hook up event handlers 
   */
   function register_event_handlers()
   {


   	/* button  Guardar */
   	$(document).on("click", ".uib_w_3", function(evt)
   	{
   		/* your code goes here */
   		var xhr = new XMLHttpRequest();
   		xhr.open("GET", "http://localhost:8080/webresources/py.com.veteuna.entidades.mascota", false);
   		xhr.setRequestHeader("Accept","application/json");
   		xhr.onload = function(){
   			if(xhr.status == 200)
   			{
   				var json_string = xhr.responseText;
   				console.log(json_string);
   				var json = JSON.parse(json_string);
   				navigator.notification.alert(json[0].nombre, "nombre");
   			}
   			else if(xhr.status == 404)
   			{
   				navigator.notification.alert("Web Service Doesn't Exist", "Error");
   			}
   			else
   			{
   				navigator.notification.alert("Unknown error occured while connecting to server", "Error");
   			}
   		}
   		xhr.send(); 
   		return true;
   	});

   }
   document.addEventListener("app.Ready", register_event_handlers, false);
})();
