import React from 'react';
import {
  Footercontainer,
  Footerdiscription,
  Footerend,
  FooterHorizontal,
  FooterLogo,
  Footerinnerwrapper,
  Footerwrapper,
  Footersection,
  Rightsection,
  Verticalline,
} from "./footer.styled";
import Volkermunko from "../assets/volkermunko.png";

export function Footerpage() {
  return (
    <Footersection>
      <Footercontainer>
        <Footerwrapper>
          <Footerinnerwrapper>
            <FooterLogo src={Volkermunko} alt="volker-munko" />
            <Footerdiscription>
              It is a long established fact that a reader will be distracted
              by the readable content of a page when looking at its layout.
              The point of using Lorem Ipsum is that it has a more-or-less
              normal distribution of letters
            </Footerdiscription>
          </Footerinnerwrapper>
        </Footerwrapper>
        <FooterHorizontal />
        <Footerend>
            @2020 Volker Munko
          <ul>
            <Rightsection>
              <li>Privacy policy</li>
              <Verticalline />
              <li>Imprint</li>
              <Verticalline />
              <li>Cookie Policy</li>
            </Rightsection>
          </ul>
        </Footerend>
      </Footercontainer>
    </Footersection>
  );
}
