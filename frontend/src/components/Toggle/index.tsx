import React, { useState } from "react";

import { Container, ToggleSelector, ImagemDiaOuNoite } from "./styles";

import IconLua from "../../Logo/iconLogoLua.svg";
import IconSol from "../../Logo/iconeSol.svg";

const Toggle: React.FC = () => {
  const [online, setOnline] = useState(false);
  return (
    <React.Fragment>
      <Container>
        <ImagemDiaOuNoite src={IconSol} />{" "}
        <ToggleSelector
          checked={online}
          checkedIcon={false}
          uncheckedIcon={false}
          onChange={() => setOnline(!online)}
        />{" "}
        <ImagemDiaOuNoite src={IconLua} />
      </Container>
    </React.Fragment>
  );
};
export default Toggle;
