import Section from "../Utility/Section";
import Education from "./Education";
import Experience from "./Experience";
import PersonalInfo from "./PersonalInfo";

const CVForm = ({
  cv,
  onChangePersonal,
  onChangeExperience,
  onAddExperience,
  onDeleteExperience,
  onChangeEducation,
  onAddEducation,
  onDeleteEducation,
}) => {
  return (
    <div className="cv-page cv-no-flex cv-sticky">
      <h2 className="cv-form-title">CV Creator Form</h2>
      <Section name="Personal Information">
        <PersonalInfo
          personalInfo={cv.personalInfo}
          onChange={onChangePersonal}
        />
      </Section>
      <Section name="Educational Background">
        <Education
          education={cv.education}
          onChange={onChangeEducation}
          onAdd={onAddEducation}
          onDelete={onDeleteEducation}
        />
      </Section>
      <Section name="Work Experience">
        <Experience
          experience={cv.experience}
          onChange={onChangeExperience}
          onAdd={onAddExperience}
          onDelete={onDeleteExperience}
        />
      </Section>
    </div>
  );
};

export default CVForm;
