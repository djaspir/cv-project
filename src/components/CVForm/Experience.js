import Button from "../Utility/Button";
import Input from "../Utility/Input";

const Experience = () => {
  return (
    <>
      <div className="grid-2-container">
        <Input label="Company Name" id="companyName" className="text-input" />
        <Input
          label="Position Title"
          id="positionTitle"
          className="text-input"
        />
      </div>
      <div className="grid-2-container">
        <Input label="Main Task" id="mainTas" className="text-input" />
        <Input label="Date of Work" id="dateOfWork" className="text-input" />
      </div>
      <Button className="success" text="Add Experience" />
    </>
  );
};

export default Experience;
