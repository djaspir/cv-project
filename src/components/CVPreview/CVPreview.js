import EducationPreview from "./EducationPreview";
import PersonalPreview from "./PesonalPreview";
import WorkPreview from "./WorkPreview";

const CVPreview = () => {
  return (
    <div className="cv-page cv-height cv-no-flex ">
      <PersonalPreview />
      <EducationPreview />
      <WorkPreview />
    </div>
  );
};

export default CVPreview;
