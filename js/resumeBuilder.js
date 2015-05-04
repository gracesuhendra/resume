//create bio object
var bio = {
  "name": "Grace Ng",
  "role": "Mathematician/Web Developer",
  "wecomeMessage": "Welcome to my resume!",
  "contacts": {
  "mobile": "(+1)812-361-8456",
	"email": "gracesuhendra91@gmail.com",
	"github": "gracesuhendra",
	"twitter": "Gracies_XOXO",
	"location": "Jakarta, Indonesia"
  },
  "skills": [
    "Mathematics", "Statistics", "HTML", "CSS", "JavaScript", "Python", "Java", "C++", "C#", "VB.Net", "SQL"
  ],
  "bioPic": "images/me.jpg"
}

//function for displaying bio object
bio.display = function() {
  var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
  $("#header").prepend(formattedRole);
	
  var formattedName = HTMLheaderName.replace("%data%", bio.name);
  $("#header").prepend(formattedName);
	
  var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
  var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
  var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
  var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
  var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
  $("#topContacts").append(formattedMobile);
  $("#topContacts").append(formattedEmail);
  $("#topContacts").append(formattedGithub);
  $("#topContacts").append(formattedTwitter);
  $("#topContacts").append(formattedLocation);
	
  $("#footerContacts").append(formattedMobile);
  $("#footerContacts").append(formattedEmail);
  $("#footerContacts").append(formattedGithub);
  $("#footerContacts").append(formattedTwitter);
  $("#footerContacts").append(formattedLocation);
	
  var formattedMessage = HTMLWelcomeMsg.replace("%data%", bio.wecomeMessage);
  $("#header").append(formattedMessage);
	
  var formattedImage = HTMLbioPic.replace("%data%", bio.bioPic);	
  $("#header").append(formattedImage);

  //replace and display skills
  $("#header").append(HTMLskillsStart);
  for (skill in bio.skills) {
    var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
    $("#skills").append(formattedSkill);
  }
}

var des = "I am a Mathematician who is interested in web development.<br><br>Lately, I help government and nonprofit organizations to develop their websites and share their mission to the world.<br/><br/>Everyday I always keep learning the newest technology and try to apply them in my works.";

var summary = {
  "description": des,
  display: function() {
    $("#summary").append(HTMLsumStart);
    var formattedDescription = HTMLsumDescription.replace("%data%", summary.description);
    $(".sum-entry:last").append(formattedDescription);
  }
}

//create work object 
var work = {
  "jobs": [
    {
      "employer": "Mathematics Students Association",
	  "url": "http://www.himatika.itb.ac.id/101/",
      "title": "Head of Fund Raising",
      "location": "Bandung, Indonesia",
      "dates": "2011",
      "description": "Responsible for raising fund for Mathematics Majors Graduation ceremony"
    },
    {
      "employer": "TIENS Group",
	  "url": "http://in.tiens.com/tiens/group/en/index.htm",
      "title": "Sales Representative",
      "location": "Bandung, Indonesia",
      "dates": "2012 - 2013",
      "description": "Sold and promoted TIENS' products"
    },
    {
      "employer": "Student Leadership Academy (SLA)",
	  "url": "http://www.ivytech.edu/indianapolis/studentlife/leadership-programs.html",
      "title": "member",
      "location": "Ivy Tech Community College Bloomington, IN 47404",
      "dates": "2013",
      "description": "Learned about leadership, professionalism, and public speaking"
    }
  ]
}

//function for displaying work object
work.display = function() {
  for (job in work.jobs) {
    // create new div for work experience
    $("#workExperience").append(HTMLworkStart);
    // concat employer and title
    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
	var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
    formattedEmployer = formattedEmployer.replace("%url%", work.jobs[job].url);
	var formattedEmployerTitle = formattedEmployer + formattedTitle;
    $(".work-entry:last").append(formattedEmployerTitle);

    var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
    $(".work-entry:last").append(formattedDates);

    var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
    $(".work-entry:last").append(formattedLocation);

    var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
    $(".work-entry:last").append(formattedDescription);

    $(".work-entry:last").append("<br><div><hr class='section-hr'></div>");
  }
}

//create projects object
var projects = {
  "portfolios": [
    {
      "title": "Monroe County Energy Challenge",
      "url": "http://gracesuhendra.github.io/moco/",
      "dates": "2015",
      "description": "Working with the local government's Representative to organize the content of a website that introduces the energy saving solution.",
      "images": []
    },
    {
      "title": "The Sanctuary at Browning Farms",
      "url": "http://thesanctuaryatbrowningfarms.com/",
      "dates": "2015",
      "description": "TDesigning a website that introduces a nonprofit organization for pet adoption.",
      "images": []
    },
    {
      "title": "Ice Cream",
	    "url": "http://gracesuhendra.github.io/mockup/",
      "dates": "2014",
      "description": "Take a mockup design in PDF and build my customize design to that mockup using Bootstrap Framework and customized CSS",
      "images": []
    },
    {
      "title": "Grace Ng's Resume",
	    "url": "http://gracesuhendra.github.io/frontend-nanodegree-resume/",
      "dates": "2014",
      "description": "Develop an interactive resume application that reads your resume content from a JSON file and dynamically displays that content within a provided template",
      "images": []
    },
    {
      "title": "Dr. Freeze",
	    "url": "http://github.com/gracesuhendra/drFreeze",
      "dates": "2014",
      "description": "Build a website for ice cream cafe using HTML and CSS from scratch",
      "images": []
    },
	{
      "title": "Social Network Structure using Python",
	    "url": "http://github.com/gracesuhendra/Udacity/tree/master/Intro-to-CS-course",
      "dates": "2014",
      "description": "Build a structure for social network using dictionary data structure in Python",
      "images": []
    }
  ]
}

//function for displaying projects object
projects.display = function() {
  for (project in projects.portfolios) {
    $("#projects").append(HTMLprojectStart);
	
    var formattedTitle = HTMLprojectTitle.replace("%data%", projects.portfolios[project].title);
	formattedTitle = formattedTitle.replace("%url%", projects.portfolios[project].url);
    $(".project-entry:last").append(formattedTitle);
	
    var formattedDates = HTMLprojectDates.replace("%data%", projects.portfolios[project].dates);
    $(".project-entry:last").append(formattedDates);
	
    var formattedDescription = HTMLprojectDescription.replace("%data%", projects.portfolios[project].description);
    $(".project-entry:last").append(formattedDescription);
	
	for (image in projects.portfolios[project].images) {
        var formattedImage = HTMLprojectImage.replace("%data%",projects.portfolios[project].images[image]);
        $(".project-entry:last").append(formattedImage);
    }
	
    $(".project-entry:last").append("<br><div><hr class='section-hr'></div>");
  }
}



//create education object 
var education = {
  "schools": [
    {
      "name": "Bandung Institute Of Technology",
	  "url": "images/itb_transcript.jpg",
      "degree": "Bachelor of Science",
      "dates": "2009 - 2013",
      "location": "Bandung, Indonesia",
      "major": ["Applied Mathematics"]
    },
    {
      "name": "Ivy Tech Community College",
	  "url": "http://www.ivytech.edu/",
      "degree": "Associates of Applied Science",
      "dates": "2013 - 2015 (expected)",      
      "location": "Ivy Tech Community College Bloomington, IN 47404",
      "major": ["Computer Information System"]    
    }
  ], 
  "onlineCourses": [
    {
      "title": "Introduction to Computer Science",
      "school": "Udacity",
      "dates": 2014,
      "URL": "http://www.udacity.com/course/cs101"
    },
    {
      "title": "Intro to HTML and CSS",
      "school": "Udacity",
      "dates": 2014,
      "URL": "http://www.udacity.com/course/ud304"
    },
    {
      "title": "How to Use Git and GitHub",
      "school": "Udacity",
      "dates": 2014,
      "URL": "http://www.udacity.com/course/ud775"
    },
    {
      "title": "JavaScript Basics",
      "school": "Udacity",
      "dates": 2014,
      "URL": "http://www.udacity.com/course/ud804"
    }
  ]
}

//function for displaying education object
education.display = function() {
  // create new div for work experience
  $("#education").append(HTMLschoolLists);
  for (school in education.schools) {
    $("#education").append(HTMLschoolStart);
    // concat employer and title
    var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
    formattedSchoolName = formattedSchoolName.replace("%url%", education.schools[school].url);
	 var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
    var formattedSchoolNameDegree = formattedSchoolName + formattedSchoolDegree;
    $(".education-entry:last").append(formattedSchoolNameDegree);
		
    var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
    $(".education-entry:last").append(formattedSchoolDates);
		
    var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
    $(".education-entry:last").append(formattedSchoolLocation);
		
    var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
    $(".education-entry:last").append(formattedSchoolMajor);

    $(".education-entry:last").append("<br><div><hr class='section-hr'></div>");
  }
	
  // create new div for online courses
  $("#education").append(HTMLonlineClasses);
  for (course in education.onlineCourses) {
    $("#education").append(HTMLonlineStart);
    // concat employer and title
    var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
    var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
    formattedOnlineTitle = formattedOnlineTitle.replace("%url%", education.onlineCourses[course].URL);
	var formattedOnlineTitleSchool = formattedOnlineTitle + formattedOnlineSchool;
    $(".online-entry:last").append(formattedOnlineTitleSchool);
		
    var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
    $(".online-entry:last").append(formattedOnlineDates);
		
    var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[course].URL);
    formattedOnlineURL = formattedOnlineURL.replace("%url%", education.onlineCourses[course].URL);
	$(".online-entry:last").append(formattedOnlineURL);

    $(".online-entry:last").append("<br><div><hr class='section-hr'></div>");
  }
}


//call display all functions
bio.display();
summary.display();
education.display();
work.display();
projects.display();



//google map
$("#mapDiv").append(googleMap);