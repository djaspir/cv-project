import Section from "../Utility/Section";
import Education from "./Education";
import Experience from "./Experience";
import PersonalInfo from "./PersonalInfo";

const CVForm = () => {
  return (
    <div className="cv-page cv-no-flex cv-sticky">
      <h2 className="cv-form-title">CV Creator Form</h2>
      <Section name="Personal Information">
        <PersonalInfo />
      </Section>
      <Section name="Educational Background">
        <Education />
      </Section>
      <Section name="Work Experience">
        <Experience />
      </Section>
    </div>
  );
};

export default CVForm;
