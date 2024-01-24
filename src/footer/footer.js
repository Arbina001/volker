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
import VMvolker from "../assets/volkermunko.png";
import { Container } from "../App.style";

export function Footerpage() {
  return (
    <>
      <Footersection>
        <Container>
          <Footerwrapper>
            <Footerinnerwrapper>
              <FooterLogo src={VMvolker} alt="volkermunko" />
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
            <Rightsection>
              Privacy policy
              <Verticalline />
              Imprint
              <Verticalline />
              Cookie Policy
            </Rightsection>
          </Footerend>
        </Container>
      </Footersection>
    </>
  );
}
