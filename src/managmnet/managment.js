import { Container } from "../App.style";
import {
    Managmentsection,
    Managmentwrapper,
    Managmentinnerwrapper,
    Managmentrightbox,
    Managmentbox,
    Managmentgradient,
    Distributiondiscription,
    Buttonwrapper,
    Buttontxtstyled,
    Contactusbuttonwrapper,
  } from "./managment.styled";
  export function Managmentpage() {
    return (
      <>
        <Managmentsection>
          <Container> 
            <Managmentwrapper>
              <Managmentinnerwrapper>
                <Managmentrightbox>
                  <Managmentbox>Asset management</Managmentbox>
                  <Managmentgradient />
                  <Distributiondiscription>
                    It is a long established fact that a reader will be distracted
                    by the readable content of a page when looking at its layout.
                    The point of using Lorem Ipsum is that it has a more-or-less
                    normal distribution
                  </Distributiondiscription>
                  <Buttonwrapper>
                    <Buttontxtstyled>Contact Us</Buttontxtstyled>
                  </Buttonwrapper>
                </Managmentrightbox>
              </Managmentinnerwrapper>
            </Managmentwrapper>
            <Contactusbuttonwrapper>
              <Buttontxtstyled>Contact Us</Buttontxtstyled>
            </Contactusbuttonwrapper>
            </Container>
        </Managmentsection>
      </>
    );
  }
  