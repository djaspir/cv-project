import { useState } from "react";
import CVForm from "./CVForm/CVForm";
import CVPreview from "./CVPreview/CVPreview";
import InitState from "./Utility/InitState";

const Main = () => {
  const [cv, setCv] = useState(InitState);

  const handleChangePersonal = (e) => {
    const { id, value } = e.target;

    setCv((prevState) => ({
      ...prevState,
      personalInfo: {
        ...prevState.personalInfo,
        [id]: value,
      },
    }));
  };

  return (
    <main className="main">
      <CVForm cv={cv} onChangePersonal={handleChangePersonal} />
      <CVPreview />
    </main>
  );
};

export default Main;
