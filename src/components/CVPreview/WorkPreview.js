import PreviewContainer from "../Utility/PreviewContainer";

const WorkPreview = ({ experience }) => {
  const experienceItems = experience.map((experienceItem) => (
    <div className="work-container" key={experienceItem.id}>
      <p>
        <strong className="position-title">
          {experienceItem.positionTitle}
        </strong>
        {`(${experienceItem.dateOfWork})`}
      </p>
      <p>
        <i>{experienceItem.companyName}</i>
      </p>
      <ul>
        <li>{experienceItem.mainTask}</li>
      </ul>
    </div>
  ));

  return (
    <PreviewContainer title="Work Experience">
      {experienceItems}
    </PreviewContainer>
  );
};

export default WorkPreview;
