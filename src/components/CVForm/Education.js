import Button from "../Utility/Button";
import Input from "../Utility/Input";

const Education = ({ education, onChange, onAdd, onDelete }) => {
  const educationItems = education.map((educationItem) => (
    <div key={educationItem.id}>
      <div className="grid-3-container">
        <Input
          label="Title of Study"
          id="study-title"
          value={educationItem.studyTitle}
          name="studyTitle"
          className="text-input"
          onChange={(e) => onChange(e, educationItem.id)}
        />
        <Input
          label="Date of Study"
          id="date-of-study"
          value={educationItem.dateOfStudy}
          name="dateOfStudy"
          className="text-input"
          onChange={(e) => onChange(e, educationItem.id)}
        />
        <Input
          label="School Name"
          id="school-name"
          value={educationItem.schoolName}
          name="schoolName"
          className="text-input"
          onChange={(e) => onChange(e, educationItem.id)}
        />
      </div>
      <Button
        className="warning"
        text="Delete Education"
        onClick={() => onDelete(educationItem.id)}
      />
    </div>
  ));

  return (
    <>
      {educationItems}
      <Button
        className="success"
        text="Add Education"
        onClick={() => onAdd()}
      />
    </>
  );
};

export default Education;
