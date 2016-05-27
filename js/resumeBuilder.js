var bio = {
	"name" : "Gregory Palin",
	"role" : "Web Developer",
	"contacts" : {
		"mobile" : "647-227-7779",
		"email" : "gregpalin1@gmail.com",
		"github" : "https://github.com/gregpalin",
		"location" : "Toronto, Canada"
	},
	"welcomeMessage" : "Thanks for taking the time to visit my online resume.",
	"skills" : ["HTML", "CSS", "Javascript", "jQuery", "Python"],
	"biopic" : "https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-1/p160x160/13233094_1620577074930340_7453648609072098043_n.jpg?oh=9ebc9e00da0d429c011fd3032792f7d0&oe=57C94FD9",
	"display" : function(){
		$("#header").prepend(HTMLheaderRole.replace("%data%", bio.role)).prepend(HTMLheaderName.replace("%data%",bio.name));
		$("#topContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile)).append(HTMLemail.replace("%data%", bio.contacts.email)).append(HTMLgithub.replace("%data%", bio.contacts.github)).append(HTMLlocation.replace("%data%", bio.contacts.location));
		$("#header").append(HTMLbioPic.replace("%data%", bio.biopic)).append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));
		if(bio.skills.length != 0){
			$("#header").append(HTMLskillsStart);
		}
		var i = 0;
		while(i < bio.skills.length){
			$("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));
			i += 1;
		}
	}
};
bio.display();

var education = {
	"schools" : [{
		"name" : "University of Guelph",
		"location" : "Guelph, Ontario",
		"degree" : "HBA",
		"majors" : ["Information Systems and Human Behaviour"],
		"dates" : "2009-2015",
		"url" : "http://www.uoguelph.ca/"
	}],
	"onlineCourses" : [{
		"title" : "Introduction to Programming Nanodegree",
		"school" : "Udacity, Inc.",
		"date" : "February 2016 - May 2016",
		"url" : "https://www.udacity.com/"
	}],
	"display" : function(){
		var i = 0;
		if(education.schools.length != 0){
			$("#education").append(HTMLschoolStart);
		}
		while(i < education.schools.length){
			var formattedEduName = HTMLschoolName.replace("#", education.schools[i].url).replace("%data%", education.schools[i].name);
			var formattedEduDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
			var formattedEduLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
			var formattedEduDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
			var formattedEduMajors = HTMLschoolMajor.replace("%data%", education.schools[i].majors);
			$(".education-entry").append(formattedEduName + formattedEduDegree + formattedEduLocation + formattedEduDates + formattedEduMajors);
			i += 1;
		}
		i = 0;
		if(education.onlineCourses.length != 0){
			$("#education").append(HTMLonlineClasses).append(HTMLschoolStart);
		}
		while(i < education.onlineCourses.length){
			var formattedOEduTitle = HTMLonlineTitle.replace("#", education.onlineCourses[i].url).replace("%data%", education.onlineCourses[i].title);
			var formattedOEduSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school); 
			var formattedOEduDate = HTMLonlineDates.replace("%data%", education.onlineCourses[i].date);
			$(".education-entry:last").append(formattedOEduTitle, formattedOEduSchool, formattedOEduDate);
			i += 1;
		}
	}
};
education.display();

var work = {
	"jobs" : [{
		"employer" : "PAR-Med Property Management, Inc.",
		"title" : "Property Managment Assistant",
		"location" : "Toronto, Ontario",
		"dates" : "January 2015 - Current",
		"description" : "Examples of duties: Lease administration, marketing, insurance administration, property management contract generation, tenant correspondence."
	},{
		"employer" : "Kingsway Real Estate Brokerage",
		"title" : "Real Estate Agent",
		"location" : "Mississauga, Ontario",
		"dates" : "July 2015 - Current",
		"description" : "Mainly residential buyer representation in Toronto."
	}],
	"display" : function(){
		if(work.jobs.length){
			$("#workExperience").append(HTMLworkStart);
		}
		var i = 0;
		while(i < work.jobs.length){
			var formattedEmployer = HTMLworkEmployer.replace("#", "#").replace("%data%", work.jobs[i].employer);
			var formattedTitle = formattedEmployer + HTMLworkTitle.replace("%data%", work.jobs[i].title);
			var formattedDate = HTMLworkDates.replace("%data%", work.jobs[i].dates);
			var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
			var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);
			$(".work-entry").append(formattedTitle, formattedDate, formattedLocation, formattedDescription);
			i += 1;
		}
	}
}
work.display();

var projects = {
	"projects" : [{
		"title" : "Unit One Notes",
		"dates" : "February 8, 2016 - February 11, 2016",
		"description" : "A simple website using HTML and CSS to display notes from a course I took.",
		"images" : "images/notes_screenshot_one.JPG"
	},{
		"title" : "Programming Quiz",
		"dates" : "February 17, 2016 - February 21, 2016",
		"description" : "Designed a program using Python to test users knowledge of Python.",
		"images" : "images/quiz_screenshot_one.JPG"
	},{
		"title" : "Movie Website",
		"dates" : "March 13, 2016 - March 16, 2016",
		"description" : "Made a website python that displays trailers for various movies that I enjoy.",
		"images" : "images/movie_screenshot_one.JPG"
	}],
	"display" : function(){
		if(projects.projects.length != 0){
			$("#projects").append(HTMLprojectStart);
		}
		var i = 0;
		while(i < projects.projects.length){
			var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
			var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
			var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);
			var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[i].images);
			$(".project-entry").append(formattedTitle, formattedDates, formattedDescription, formattedImage);
			console.log(formattedDescription);
			i += 1;
		}
	}
}
projects.display();
