import Button from "../Utility/Button";
import Input from "../Utility/Input";

const Experience = ({ experience, onChange, onAdd, onDelete }) => {
  const experienceItems = experience.map((experienceItem) => (
    <div key={experienceItem.id}>
      <div className="grid-3-container">
        <Input
          label="Position Title"
          id="position-title"
          value={experienceItem.positionTitle}
          className="text-input"
          name="positionTitle"
          onChange={(e) => onChange(e, experienceItem.id)}
        />
        <Input
          label="Date of Work"
          id="date-of-work"
          value={experienceItem.dateOfWork}
          className="text-input"
          name="dateOfWork"
          onChange={(e) => onChange(e, experienceItem.id)}
        />
        <Input
          label="Company Name"
          id="company-name"
          value={experienceItem.companyName}
          className="text-input"
          name="companyName"
          onChange={(e) => onChange(e, experienceItem.id)}
        />
      </div>
      <div className="grid-1-container">
        <Input
          label="Main Task"
          id="main-task"
          value={experienceItem.mainTask}
          className="text-input"
          name="mainTasks"
          onChange={(e) => onChange(e, experienceItem.id)}
        />
      </div>
      <Button
        className="warning"
        text="Delete Experience"
        onClick={() => onDelete(experienceItem.id)}
      />
    </div>
  ));

  return (
    <>
      {experienceItems}
      <Button
        className="success"
        text="Add Experience"
        onClick={() => onAdd()}
      />
    </>
  );
};

export default Experience;
