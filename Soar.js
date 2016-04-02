var fromName;
var toName;
var messageField;
var title = $(this.lookupSelector("C1Title"));

//var texts =[
var point = $(this.lookupSelector("C1Text1"));
var point2 = $(this.lookupSelector("C1Text2"));
var point3 = $(this.lookupSelector("C1Text3"));
var point4 = $(this.lookupSelector("C1Text4"));
var point5 = $(this.lookupSelector("C1Text5"));
var point6 = $(this.lookupSelector("C1Text6"));
var point7 = $(this.lookupSelector("C1Text7"));
var texts =[point, point2,point3, point4, point5, point6, point7];



if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp=new XMLHttpRequest();
  }
else
  {// code for IE6, IE5
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }

xmlhttp.open("GET","SOAR.xml",false);
xmlhttp.send();
xmlDoc=xmlhttp.responseXML; 



var x=xmlDoc.getElementsByTagName("accounts");
	title.html(x[0].getElementsByTagName("title")[0].childNodes[0].nodeValue);
  for(var i = 0;i<texts.length;i++){
  texts[i].html(x[0].getElementsByTagName("message")[i].childNodes[0].nodeValue);
  }

