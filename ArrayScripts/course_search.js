
let courses = [
    {
    CourseId: "PROG100",
    Title: "Introduction to HTML/CSS/Git",
    Location: "Classroom 7",
    StartDate: "09/08/22",
    Fee: "100.00",
    },
    {
    CourseId: "PROG200",
    Title: "Introduction to JavaScript",
    Location: "Classroom 9",
    StartDate: "11/22/22",
    Fee: "350.00",
    },
    {
    CourseId: "PROG300",
    Title: "Introduction to Java",
    Location: "Classroom 1",
    StartDate: "01/09/23",
    Fee: "50.00",
    },
    {
    CourseId: "PROG400",
    Title: "Introduction to SQL and Databases",
    Location: "Classroom 7",
    StartDate: "03/16/23",
    Fee: "50.00",
    },
    {
    CourseId: "PROJ500",
    Title: "Introduction to Angular",
    Location: "Classroom 1",
    StartDate: "04/25/23",
    Fee: "50.00",
    }
];

function PROG200start(array) {
    let startDate = [];

  for (let i = 0; i < array.length; i++) {
    let contents = array[i].StartDate;
    if (array[i].CourseId === "PROG200") {
        startDate.push(contents);
    }
  }
  console.log(`The PROG200 course starts at ${startDate}`);
}
PROG200start(courses);
 
function PROJ500title(array) {
    let title = [];

    for (let i = 0; i < array.length; i++) {
        let contents = array[i].Title;
        if (array[i].CourseId === "PROJ500") {
                title.push(contents);
        }
    }
    console.log(`The title of the PROJ500 course is ${title}`);
}
PROJ500title(courses);

function under50(array) {
    let courseTitle = [];

    for (let i = 0; i < array.length; i++) {
        let contents = array[i].Title;
        if (array[i].Fee === "50.00") {
                courseTitle.push(contents)  + " ";
        }
    }
    console.log(`The titles of the courses that cost $50 or less are ${courseTitle.join(", ")}`);
}
under50(courses);

function classroom1(array) {
    let course = [];

    for (let i = 0; i < array.length; i++) {
        let contents = array[i].CourseId
        if (array[i].Location === "Classroom 1") {
                course.push(contents) + " ";
            }
    }
    console.log(`The courses that meet in Classroom 1 are ${course.join(", ")}`);
}
classroom1(courses);