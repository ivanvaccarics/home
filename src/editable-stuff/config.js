// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Ivan",
  middleName: "",
  lastName: "Vaccari",
  message: " Ph.D. in Computer Science, Computer Engineer and technology enthusiast ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/ivanvaccarics",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/ivanvaccari/",
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/ivanvaccari.png"),
  imageSize: 375,
  message:
    "Hi, I'm Ivan. I obtained a Ph.D. in Computer Science and Degree in Computer Engineering, with 110/110 cum laude, from the University of Genoa (UNIGE) in 2017 and 2021 respectively. For my work on IoT security, I received the award for best thesis from the ABB company on theme \"Digitization through the Internet of Things in the power generation industry and Smart grids and smart cities\" carried out in collaboration with the Institute of Electronics and Information and Telecommunications Engineering (IEIIT) of the National Research Council (CNR). Now, I'm working as Software Engineer in the RINA company to develop DevOps solution for clients. I like to develop personal projects during my free time and I'm always looking for new challenges to learn new technologies and improve my skills. ",
    resume: require("../editable-stuff/resume.pdf"),
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: false,
  heading: "Recent Projects",
  gitHubUsername: "ivanvaccarics", //i.e."johnDoe12Gh"
  reposLength: 0,
  specificRepos: [],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    { 
      img: require("../editable-stuff/ivanvaccari.png"), 
      label: "First slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require("../editable-stuff/ivanvaccari.png"), 
      label: "Second slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Python", value: 90 },
    { name: "SQL", value: 75 },
    { name: "NoSQL", value: 75 },
    { name: "C/C++", value: 60 },
    { name: "Java", value: 60 },
    { name: "Linux/Windows/MacOs", value: 85 },
    { name: "Docker", value: 80 },
    { name: "Azure", value: 80 },
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 80 },
    { name: "Collaboration", value: 90 },
    { name: "Positivity", value: 75 },
    { name: "Adaptability", value: 85 },
    { name: "Problem Solving", value: 90 },
    { name: "Empathy", value: 70 },
    { name: "Organization", value: 90 },
    { name: "Creativity", value: 75 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: false,
  heading: "Get In Touch",
  message:
    "If you have any questions, or if you just want to say hi, please feel free to email me at",
  email: "ivan.vaccari91@gmail.com",
};

const experiences = {
  show: true,
  heading: "Experiences",
  data: [
    {
      role: 'Software Engineer - RINA',// Here Add Company Name
      companylogo: require('../assets/img/rina.png'),
      date: 'July 2021 – Present',
    },
    {
      role: 'Ph.D. in Computer Science - University of Genoa (UNIGE)',
      companylogo: require('../assets/img/Unige.png'),
      date: 'October 2017 – May 2021',
    },
    {
      role: 'Research fellow in Cyber Security - National Research Council (CNR)',
      companylogo: require('../assets/img/CNR.png'),
      date: 'June 2017 – June 2021',
    },
  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };
