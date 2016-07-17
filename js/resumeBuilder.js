/*
This is empty on purpose! Your code to build the resume will go here.
 */
 /*$("#main").append(["Aditya"]); */
 //var awesomeThoughts="Iam awesome!";
 //console.log(awesomeThoughts);
 //var fun=awesomeThoughts.replace("awesome","fun");
 //console.log(fun);
 //$("#main").append([fun]);


var formattedname=HTMLheaderName.replace("%data%","Aditya Anantharaman");
var formattedrole=HTMLheaderRole.replace("%data%","Web Developer");
$("#header").prepend(formattedrole);
$("#header").prepend(formattedname);



var bio={
	"name":"Aditya Anantharaman",
	"role":"Web Developer",
	"contact_info":{
		"email":"adityanant@gmail.com",
		"github":"aditya5558",
		"place":"Surathkal"
	},
	"picture_URL":"images/aditya.jpg",
	"welcome_message":"Hi ! This is my resume ",
	"skills":["C "," C++ "," Erlang "," HTML "," CSS "," Machine Learning "," JavaScript "]
}
//$("#main").append(bio);

var email = bio.contact_info.email;
var formattedEmail = HTMLemail.replace("%data%", email);
$("#topContacts").append(formattedEmail);

var github = bio.contact_info.github;
var formattedGithub = HTMLgithub.replace("%data%", github);
$("#topContacts").append(formattedGithub);

var _location = bio.contact_info.place;
var formattedLocation = HTMLlocation.replace("%data%", _location);
$("#topContacts").append(formattedLocation);

var bioPic = bio.picture_URL;
var formattedBioPic = HTMLbioPic.replace("%data%", bioPic);
$("#header").append(formattedBioPic);

var welcomeMessage = bio.welcome_message;
var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", welcomeMessage);
$("#header").append(formattedWelcomeMessage);

var skills = bio.skills;
var formattedSkills = HTMLskills.replace("%data%", skills);
$("#header").append(HTMLskillsStart);
$("#skills").append(formattedSkills);

var education=
{
	"schools":[
	{"name":"   National Institute of Technology Karnataka , Surathkal",
		"years":"   2015-2019",
		"degree":"   Btech - Information Technology",
		"city":"Surathkal   "
	}
	],
	"online_courses":[
	{
		"name":"JavaScript Syntax",
		"school":"Udacity",
		"dates":2016,
		"url":"www.udacity.com/courses/ud804"
	},
	{
		"name":"Machine Learning",
		"school":"Coursera-Stanford University",
		"dates":"2016",
		"url":"www.coursera.org/learn/machine-learning"
	}
	]
}

//$("#main").append(education.name);

for(s in education.schools){
	$("#education").append(HTMLschoolStart);
	var _name=HTMLschoolName.replace("%data%",education.schools[s].name);
	var _years=HTMLschoolDates.replace("%data%",education.schools[s].years);
	var _degree=HTMLschoolDegree.replace("%data%",education.schools[s].degree);
	var _loc=HTMLschoolLocation.replace("%data%",education.schools[s].city);
	$(".education-entry:last").append(_name);
	$(".education-entry:last").append(_years);
	$(".education-entry:last").append(_degree);
	$(".education-entry:last").append(_loc);
	
}

$(".education-entry").append(HTMLonlineClasses);
for(i in education.online_courses){
	
	//$(".education-entry").append(HTMLonlineClasses);
	var _oname=HTMLonlineTitle.replace("%data%",education.online_courses[i].name);
	var _oschool=HTMLonlineSchool.replace("%data%",education.online_courses[i].school);
	var _odate=HTMLonlineDates.replace("%data%",education.online_courses[i].dates);
	var _ourl=HTMLonlineURL.replace("%data%",education.online_courses[i].url);
	$(".education-entry:last").append(_oname);
	$(".education-entry:last").append(_oschool);
	$(".education-entry:last").append(_odate);
	$(".education-entry:last").append(_ourl);

}

$(document).click(function(loc) {
  // your code goes here!
  var x=loc.pageX;
  var y=loc.pageY;
  logClicks(x,y);
});

function inName(name){
	name=name.trim().split(" ");
	console.log(name);
	name[1]=name[1].toUpperCase();
	name[0]=name[0].slice(0,1).toUpperCase()+name[0].slice(1).toLowerCase();

	return name[0]+" "+name[1];

}

$('#main').append(internationalizeButton);

var projects={
	"ieee":[
	{
		"name":"Distributed Systems Programming with Erlang",
		"dates":"Summer of 2016",
		"description":"IEEE Summer project:Learning about the functional programming language Erlang and Distributed Systems"

	},
	{
		"name":"Competitive Coding",
		"dates":"Summer of 2016",
		"description":"IEEE Summer project:Learning about various Data structures and algorithms"
	}
	]

}

projects.display=function()
{
	for(p in projects.ieee)
	{
		$("#projects").append(HTMLprojectStart);
		var ftitle=HTMLprojectTitle.replace("%data%",projects.ieee[p].name);
		$(".project-entry:last").append(ftitle);
		var fdates=HTMLprojectDates.replace("%data%",projects.ieee[p].dates);
		$(".project-entry:last").append(fdates);
		var fdesc=HTMLprojectDescription.replace("%data%",projects.ieee[p].description);
		$(".project-entry:last").append(fdesc);
		

	}
}
projects.display();

//$("#mapDiv").append(googleMap);