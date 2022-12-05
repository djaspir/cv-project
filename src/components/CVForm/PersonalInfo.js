import Input from "../Utility/Input";

const PersonalInfo = ({ personalInfo, onChange }) => {
  return (
    <>
      <div className="grid-2-container">
        <Input
          label="First Name"
          id="first-name"
          name="firstName"
          className="text-input"
          value={personalInfo.firstName}
          onChange={(e) => onChange(e)}
        />
        <Input
          label="Last Name"
          id="last-name"
          name="lastName"
          className="text-input"
          value={personalInfo.lastName}
          onChange={(e) => onChange(e)}
        />
      </div>
      <div className="grid-1-container">
        <Input
          label="Address"
          id="address-id"
          name="address"
          className="text-input"
          value={personalInfo.address}
          onChange={(e) => onChange(e)}
        />
      </div>
      <div className="grid-2-container">
        <Input
          label="Email"
          id="email-id"
          name="email"
          className="text-input"
          value={personalInfo.email}
          onChange={(e) => onChange(e)}
        />
        <Input
          label="Phone Number"
          id="phone-id"
          name="phone"
          className="text-input"
          value={personalInfo.phone}
          onChange={(e) => onChange(e)}
        />
      </div>
    </>
  );
};

export default PersonalInfo;
