const PersonalPreview = ({ personalInfo }) => {
  const { firstName, lastName, address, email, phone } = personalInfo;
  return (
    <div className="personal-preview">
      <h2 className="flex-item personal-title">{`${firstName} ${lastName}`}</h2>
      <div className="flex-item">
        <p>{address}</p>
        <p>{email}</p>
        <p>{phone}</p>
      </div>
    </div>
  );
};

export default PersonalPreview;
