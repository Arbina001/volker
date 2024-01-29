import { Container } from "../App.style";
import {
    Managementsection,
    Managementwrapper,
    Managementinnerwrapper,
    Managementrightbox,
    Managementbox,
    Distributiondiscription,
    Buttonwrapper,
    Buttontxtstyled,
    Contactusbuttonwrapper,
    
  } from "./managment.styled";
  export function Managmentpage() {
    return (
      <>
        <Managementsection>
          <Container> 
            <Managementwrapper>
              <Managementinnerwrapper>
                <Managementrightbox>
                  <Managementbox>Asset management</Managementbox>
                  <Distributiondiscription>
                    It is a long established fact that a reader will be distracted
                    by the readable content of a page when looking at its layout.
                    The point of using Lorem Ipsum is that it has a more-or-less
                    normal distribution
                  </Distributiondiscription>
                  <Buttonwrapper>
                    <Buttontxtstyled>Contact Us</Buttontxtstyled>
                  </Buttonwrapper>
                </Managementrightbox>
              </Managementinnerwrapper>
            </Managementwrapper>
            <Contactusbuttonwrapper>
              <Buttontxtstyled>Contact Us</Buttontxtstyled>
            </Contactusbuttonwrapper>
            </Container>
        </Managementsection>
      </>
    );
  }
  