import Input from "../Utility/Input";

const PersonalInfo = () => {
  return (
    <>
      <div className="grid-2-container">
        <Input label="First Name" id="firstName" className="text-input" />
        <Input label="Last Name" id="lastName" className="text-input" />
      </div>
      <div className="grid-1-container">
        <Input label="Address" id="address" className="text-input" />
      </div>
      <div className="grid-2-container">
        <Input label="Email" id="email" className="text-input" />
        <Input label="Phone Number" id="phone" className="text-input" />
      </div>
    </>
  );
};

export default PersonalInfo;
