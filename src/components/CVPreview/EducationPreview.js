import PreviewContainer from "../Utility/PreviewContainer";

const EducationPreview = ({ education }) => {
  const educationItems = education.map((educationItem) => (
    <div className="preview-items" key={educationItem.id}>
      <p>{educationItem.studyTitle}</p>
      <p>{educationItem.dateOfStudy}</p>
      <p>{educationItem.schoolName}</p>
    </div>
  ));

  return (
    <PreviewContainer title="Education">{educationItems}</PreviewContainer>
  );
};

export default EducationPreview;
