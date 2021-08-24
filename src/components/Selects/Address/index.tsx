// import React, { useState, FC } from "react";
// import { SelectContainer, RedSelect, NormalSelect } from "../selects.styles";
// import chevronDown from "../../../images/icon-chev-down.png";

// const Address: FC = () => {
//   const [clicked, setClicked] = useState(false);
//   return (
//     <>
//       {!clicked && (
//         <SelectContainer onClick={() => setClicked(true)}>
//           <p>Your address</p>
//           <RedSelect>
//             Please choose...
//             <img src={chevronDown} alt="" />
//           </RedSelect>
//         </SelectContainer>
//       )}
//       {clicked && (
//         <SelectContainer>
//           <p>Your address</p>
//           <NormalSelect>
//             1 Example Road, Edinburgh <img src={chevronDown} alt="" />
//           </NormalSelect>
//         </SelectContainer>
//       )}
//     </>
//   );
// };

// export default Address;

import React, { useState, FC } from "react";
import {
  SelectContainer,
  RedSelect,
  NormalSelect,
  SelectorContainer,
} from "../selects.styles";
import chevronDown from "../../../images/icon-chev-down.png";

interface AddressProps {
  state?: number;
  setState: any;
}

const Address: FC<AddressProps> = ({ state, setState }) => {
  const [address, setAddress] = useState("Please choose...");

  const clickFunc = (titleString: string) => {
    setAddress(titleString);
  };
  return (
    <>
      {state === 0 && (
        <SelectContainer onClick={() => setState(1)}>
          <p>Your address</p>
          <RedSelect>
            {address}
            <img src={chevronDown} alt="" />
          </RedSelect>
        </SelectContainer>
      )}
      {state === 1 && (
        <SelectContainer onClick={() => setState(2)}>
          <p>Your address</p>
          <SelectorContainer>
            <NormalSelect>
              {address} <img src={chevronDown} alt="" />
            </NormalSelect>
            <button onClick={() => clickFunc("1 Example Road, Edinburgh")}>
              1 Example Road, Edinburgh
            </button>
          </SelectorContainer>
        </SelectContainer>
      )}

      {state === 2 && (
        <SelectContainer onClick={() => setState(1)}>
          <p>Your address</p>
          <NormalSelect>
            {address} <img src={chevronDown} alt="" />
          </NormalSelect>
        </SelectContainer>
      )}
    </>
  );
};

export default Address;
