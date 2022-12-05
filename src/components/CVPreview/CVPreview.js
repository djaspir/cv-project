import EducationPreview from "./EducationPreview";
import PersonalPreview from "./PesonalPreview";
import WorkPreview from "./WorkPreview";

const CVPreview = ({ cv }) => {
  return (
    <div className="cv-page cv-height cv-no-flex ">
      <PersonalPreview personalInfo={cv.personalInfo} />
      <EducationPreview education={cv.education} />
      <WorkPreview />
    </div>
  );
};

export default CVPreview;
