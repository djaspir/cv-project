import { FaHome, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
const PersonalPreview = ({ personalInfo }) => {
  const { firstName, lastName, address, email, phone } = personalInfo;
  return (
    // TODO ALIGN REACT ICONS
    <div className="personal-preview">
      <h2 className="flex-item personal-title">{`${firstName} ${lastName}`}</h2>
      <div className="flex-item">
        <p>
          <FaHome />
          {address}
        </p>
        <p>
          <FaEnvelope />
          {email}
        </p>
        <p>
          <FaPhoneAlt />
          {phone}
        </p>
      </div>
    </div>
  );
};

export default PersonalPreview;
