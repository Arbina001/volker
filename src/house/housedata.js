import React from "react";
import { Wealthdetailsdata, Data, Wealthdetails } from "./house.styled";
export const Wealthmanagmentprops = (props) => {
  return (
    <>
      <Wealthdetailsdata>
        <Data>
          <img src={props.svg} alt="correct" />
        </Data>
        <Wealthdetails>{props.Title}</Wealthdetails>
      </Wealthdetailsdata>
    </>
  );
};
