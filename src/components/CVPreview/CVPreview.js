import EducationPreview from "./EducationPreview";
import PersonalPreview from "./PesonalPreview";

const CVPreview = () => {
  return (
    <div className="cv-page cv-height cv-no-flex ">
      <PersonalPreview />
      <EducationPreview />
    </div>
  );
};

export default CVPreview;
