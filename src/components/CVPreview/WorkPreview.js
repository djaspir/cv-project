import PreviewContainer from "../Utility/PreviewContainer";

const WorkPreview = () => {
  return (
    <PreviewContainer title="Work Experience">
      <div className="work-container">
        <p>
          <strong className="position-title">Position Title</strong>Date of Work
        </p>
        <p>
          <i>Company Name</i>
        </p>
      </div>
      <ul>
        <li>Main Task</li>
      </ul>
    </PreviewContainer>
  );
};

export default WorkPreview;
