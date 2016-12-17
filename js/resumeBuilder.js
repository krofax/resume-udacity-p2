var name = "San";
var formattedName = HTMLheaderName.replace("%data%",name);

var role = "Student";
$("#header").append(formattedName);
var formattedRole = HTMLheaderRole.replace("%data%",role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
