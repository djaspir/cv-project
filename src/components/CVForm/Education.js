import Button from "../Utility/Button";
import Input from "../Utility/Input";

const Education = () => {
  return (
    <>
      <div className="grid-3-container">
        <Input label="School Name" id="schoolName" className="text-input" />
        <Input label="Title of Study" id="studyTitle" className="text-input" />
        <Input label="Date of Study" id="dateOfStudy" className="text-input" />
      </div>
      <Button className="success" text="Add Education" />
    </>
  );
};

export default Education;
