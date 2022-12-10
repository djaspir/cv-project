import { v4 as uuidv4 } from "uuid";

const InitState = {
  personalInfo: {
    firstName: "Jasper",
    lastName: "Sanchez",
    address: "412 San Isidro St. Tinago Ligao, City",
    email: "jaspersanchez1996@gmail.com",
    phone: "0917-822-1376",
  },
  education: [
    {
      id: uuidv4(),
      schoolName: "St. Mary's Academy of Ligao",
      studyTitle: "Elementary",
      dateOfStudy: "2002 - 2009",
    },
    {
      id: uuidv4(),
      schoolName: "Ligao National Highschool",
      studyTitle: "High School",
      dateOfStudy: "2009 - 2011",
    },
    {
      id: uuidv4(),
      schoolName: "St. Mary's Academy of Ligao",
      studyTitle: "High School",
      dateOfStudy: "2011 - 2012",
    },
    {
      id: uuidv4(),
      schoolName: "Adamson University Manila",
      studyTitle: "B.S. Information Technology",
      dateOfStudy: "2014 - 2019",
    },
  ],
  experience: [
    {
      id: uuidv4(),
      companyName: "JXM Technology Solution Inc.",
      positionTitle: "IT Intern - DB ADMIN",
      mainTask: "Analyze data based on field tests of site engineers",
      dateOfWork: "January - April 2019",
    },
    {
      id: uuidv4(),
      companyName: "JXM Technology Solution Inc.",
      positionTitle: "SQA (Service Quality Agent)",
      mainTask:
        "Configure microprocessors that will be deployed for customer’s CPE tests",
      dateOfWork: "April 2019 - March 2022",
    },
    {
      id: uuidv4(),
      companyName: "JXM Technology Solution Inc.",
      positionTitle: "Junior Software Developer",
      mainTask: "Develop and Implement new software programs",
      dateOfWork: "April 2019 - March 2022",
    },
  ],
};

export default InitState;
