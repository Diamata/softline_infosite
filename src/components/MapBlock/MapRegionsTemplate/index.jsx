import React, {useRef, useState} from 'react';
import "./style.scss";
import {AiOutlineCaretDown} from "react-icons/ai";
import {useClose} from "../../../hooks/useClose";

const MapRegionsTemplate = ({name, children}) => {
  const closeRef = useRef();

  useClose(closeRef, () => setIsOpen(false));

  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen)
  }

  return (
      <div ref={closeRef} className="drop-menu__region">
        <div className="drop-menu__dropper" onClick={toggleOpen}>
          <div className={isOpen ? "drop-menu__region-name colored" : "drop-menu__region-name"}>{name}</div>
          <AiOutlineCaretDown className={isOpen ? "drop-menu__arrow reversed" : "drop-menu__arrow"}/>
        </div>
          <ul className={isOpen ? "drop-menu__cities active" : "drop-menu__cities"}>
            {children}
          </ul>
      </div>
  );
};

export default MapRegionsTemplate;
