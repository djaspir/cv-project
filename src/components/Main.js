import { useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import CVForm from "./CVForm/CVForm";
import CVPreview from "./CVPreview/CVPreview";
import InitState from "./Utility/InitState";

const Main = () => {
  const [cv, setCv] = useState(InitState);

  const handleChangePersonal = (e) => {
    const { name, value } = e.target;

    setCv((prevState) => ({
      ...prevState,
      personalInfo: {
        ...prevState.personalInfo,
        [name]: value,
      },
    }));
  };

  const handleChangeExperience = (e, id) => {
    const { name, value } = e.target;

    setCv((prevState) => {
      const newExperience = prevState.experience.map((experienceItem) => {
        if (experienceItem.id === id) {
          return { ...experienceItem, [name]: value };
        }
        return experienceItem;
      });
      return { ...prevState, experience: [...newExperience] };
    });
  };

  const handleAddExperience = () => {
    setCv((prevState) => ({
      ...prevState,
      experience: [
        ...prevState.experience,
        {
          id: uuidv4(),
          companyName: "",
          positionTitle: "",
          mainTask: "",
          dateOfWork: "",
        },
      ],
    }));
  };

  const handleDeleteExperience = (id) => {
    setCv((prevState) => {
      const newExperience = prevState.experience.filter(
        (experienceItem) => experienceItem.id !== id
      );
      return { ...prevState, experience: [...newExperience] };
    });
  };

  const handleChangeEducation = (e, id) => {
    const { name, value } = e.target;

    setCv((prevState) => {
      const newEducation = prevState.education.map((educationItem) => {
        if (educationItem.id === id) {
          return { ...educationItem, [name]: value };
        }
        return educationItem;
      });
      return { ...prevState, education: [...newEducation] };
    });
  };

  const handleAddEducation = () => {
    setCv((prevState) => ({
      ...prevState,
      education: [
        ...prevState.education,
        {
          id: uuidv4(),
          schoolName: "",
          studyTitle: "",
          dateOfStudy: "",
        },
      ],
    }));
  };

  const handleDeleteEducation = (id) => {
    setCv((prevState) => {
      const newEducation = prevState.education.filter(
        (educationItem) => educationItem.id !== id
      );
      return { ...prevState, education: [...newEducation] };
    });
  };

  return (
    <main className="main">
      <CVForm
        cv={cv}
        onChangePersonal={handleChangePersonal}
        onChangeExperience={handleChangeExperience}
        onAddExperience={handleAddExperience}
        onDeleteExperience={handleDeleteExperience}
        onChangeEducation={handleChangeEducation}
        onAddEducation={handleAddEducation}
        onDeleteEducation={handleDeleteEducation}
      />
      <CVPreview cv={cv} />
    </main>
  );
};

export default Main;
