import Input from "../Utility/Input";

const PersonalInfo = ({ personalInfo, onChange }) => {
  return (
    <>
      <div className="grid-2-container">
        <Input
          label="First Name"
          id="firstName"
          className="text-input"
          value={personalInfo.firstName}
          onChange={onChange}
        />
        <Input
          label="Last Name"
          id="lastName"
          className="text-input"
          value={personalInfo.lastName}
          onChange={onChange}
        />
      </div>
      <div className="grid-1-container">
        <Input
          label="Address"
          id="address"
          className="text-input"
          value={personalInfo.address}
          onChange={onChange}
        />
      </div>
      <div className="grid-2-container">
        <Input
          label="Email"
          id="email"
          className="text-input"
          value={personalInfo.email}
          onChange={onChange}
        />
        <Input
          label="Phone Number"
          id="phone"
          className="text-input"
          value={personalInfo.phone}
          onChange={onChange}
        />
      </div>
    </>
  );
};

export default PersonalInfo;
