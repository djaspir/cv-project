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
      studyTitle: "High School",
      dateOfStudy: "2011-2012",
    },
  ],
  experience: [
    {
      id: uuidv4(),
      companyName: "",
      positionTitle: "",
      mainTask: "",
      dateOfWork: "",
    },
  ],
};

export default InitState;
