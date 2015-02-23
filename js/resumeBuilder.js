//JSON

var bio = {
    "name": "Valerie Mettler",
    "role": "Web Developer",
    "contacts": {
        "email": "valeriemettler@gmail.com",
        "github": "github.com/valeriemettler",
        "twitter": "@valmett",
        "location": "The Bay Area"
    },
    "picture": "images/val.jpg",
    "welcomeMessage": "Welcome to my Resume Website!",
    "skills": ["Javascript", "Ruby", "Ruby on Rails"]
};

var work = {
    "jobs": [
        {
            "employer": "NYC Department of Education",
            "title": "English Teacher",
            "location": "NY, NY",
            "dates": "2008-2014",
            "description": "Taught ESL in a bilingual middle school",
        }
    ]
};

var projects = {
    "projects": [
        {
            "title": "LanguageCheck",
            "dates": "2014",
            "description": "Get help and help others with short language translations",
            "images": [
                "images/languagecheck.gif"
            ],
        }
    ]
};

var education = {
    "schools": [
        {
            "name": "McGill University",
            "location": "Montreal, Quebec, Canada",
            "degree": "Master of Arts",
            "major": "Second Language Education",
            "url": "www.mcgill.ca"
        }
    ],
    "onlineCourses": [
        {
            "title": "Full Stack Web Development Course",
            "school": "Bloc.io",
            "url": "bloc.io"
        }
    ]
};

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedBioPic = HTMLbioPic.replace("%data%", bio.picture);
var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);

var formattedContactInfo = [];
formattedContactInfo.push(HTMLemail.replace("%data%", bio.contacts.email));
formattedContactInfo.push(HTMLgithub.replace("%data%", bio.contacts.github));
formattedContactInfo.push(HTMLtwitter.replace("%data%", bio.contacts.twitter));
formattedContactInfo.push(HTMLlocation.replace("%data%", bio.contacts.location));


$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").append(formattedBioPic);
$("#header").append(formattedWelcomeMsg);

if(bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);

    for(i in bio.skills) {
        $("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));
    }
}

for(i in formattedContactInfo) {
    $("#topContacts").append(formattedContactInfo[i]);
    $("#footerContacts").append(formattedContactInfo[i]);
}


function displayWork() {

    if(work.jobs.length > 0) {

        $("#workExperience").append(HTMLworkStart);

        for(i in work.jobs) {
            var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
            var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
            var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
            var formattedDatesWorked = HTMLworkDates.replace("%data%", work.jobs[i].datesWorked);
            var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);

            var formattedEmployerWorkTitle = formattedEmployer + formattedWorkTitle;

            $(".work-entry:last").append(formattedEmployerWorkTitle);
            $(".work-entry:last").append(formattedWorkLocation);
            $(".work-entry:last").append(formattedDatesWorked);
            $(".work-entry:last").append(formattedWorkDescription);
        }

    }

}

displayWork();


projects.display = function() {
    if(projects.projects.length > 0) {
        for(i in projects.projects) {
            $("#projects").append(HTMLprojectStart);

            var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title).replace("#", projects.projects[i].url);
            var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[i].datesWorked);
            var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);

            $(".project-entry:last").append(formattedProjectTitle);
            $(".project-entry:last").append(formattedProjectDates);
            $(".project-entry:last").append(formattedProjectDescription);

            for(img in projects.projects[i].images) {
                var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[i].images[img]);
                $(".project-entry:last").append(formattedProjectImage);
            }


        }
    }
}

projects.display();

education.display = function() {
    if(education.schools.length > 0 || education.onlineCourses.length > 0) {
        for(i in education.schools) {
            $("#education").append(HTMLschoolStart);

            var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[i].name);
            var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
            var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
            var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].major);

            $(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);
            $(".education-entry:last").append(formattedSchoolLocation);
            $(".education-entry:last").append(formattedSchoolMajor);
        }

        if(education.onlineCourses.length > 0) {
            $("#education").append(HTMLonlineClasses);
            for(i in education.onlineCourses) {
                $("#education").append(HTMLschoolStart);
                var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title);
                var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
                var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url).replace("#", education.onlineCourses[i].url);

                $(".education-entry:last").append(formattedOnlineTitle);
                $(".education-entry:last").append(formattedOnlineSchool);
                $(".education-entry:last").append(formattedOnlineURL);
            }
        }

    }
}

education.display();


$("#mapDiv").append(googleMap);
// 1. Iterate through each JSON and append its information to index.html in the correct section.

//1a. First off, you’ll be using jQuery’s selector.append() and selector.prepend() functions to modify index.html.

//1b. selector.append() makes an element appear at the end of a selected section.

//1c. selector.prepend() makes an element appear at the beginning of a selected section.

//2. Pay close attention to the ids of the <div>s in index.html and the HTML snippets in helper.js.
//2a. They’ll be very useful as jQuery selectors for selector.append() and selector.prepend()
//2b. <div id="main">, <div id="header">, etc.

//3.You’ll also be using the JavaScript method string.replace(old, new) to swap out all the placeholder text (e.g. %data%) for data from your resume JSONs.

//4. Here’s an example of some code that would add the location of one your companies to the page:
//var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
//$(".work-entry:last").append(formattedLocation);

//5.  Use the mockup at the bottom of this document as a guide for the order in which you should append elements to the page.

//6. All of your code for adding elements to the resume should be within functions.
//6a. And all of your functions should be encapsulated within the same objects containing your resume data
//For instance, your functions for appending work experience elements to the page should be found within the same object containing data about your work experience.

//7.  Your resume should also console.log() information about click locations.
//7a.  On line 90 in helper.js, you’ll find a jQuery onclick handler that you’ll need to modify to work with the logClicks(x,y) function above it.
//$(document).click(function(loc) {
  // your code goes here!
// });

//8.It’s possible to make additional information show up when you click on the pins in the map. Check out line 174 in helper.js and the Google Maps API to get started.
//// hmmmm, I wonder what this is about...
    // google.maps.event.addListener(marker, 'click', function() {
      // your code goes here!
    // });

// Function definitions


  // Display contact info


  // Display image and welcome message

  // Display skills

  // Display jobs

  // Display projects

  // Display education

  // Call display functions

  // Log clicks to console
     // console.log

  // Internationalize!

  // Add map!


