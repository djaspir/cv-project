import Section from "../Utility/Section";
import PersonalInfo from "./PersonalInfo";

const CVForm = () => {
  return (
    <div className="cv-form">
      <h2 className="cv-form-title">CV Creator Form</h2>
      <Section name="Personal Information">
        <PersonalInfo/>
      </Section>
    </div>
  );
};

export default CVForm;
