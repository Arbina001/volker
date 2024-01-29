import {
    Aboutwrapper,
    Managmentcontact,
    Hadercontainer,
    Headerasset,
    Whyassets,
    Assetsimagebox,
    Hadersection,
    Haederwrapper,
    ContactButton,
    navigationbar,
    Navigationwrapper,
    Whyassetmanagmentbox,
  } from "./header.styled";
  import Headermanagment from "../assets/volker-munko.png";
import { Container } from "../App.style";
  export function Header() {
    return (
      <>
        <Hadersection>
          <Container>  
            <Haederwrapper>
              <Headerasset>
                <Assetsimagebox>
                  <Whyassets
                    src={Headermanagment}
                    alt="volkermunko"
                  />
                </Assetsimagebox>
                <Navigationwrapper>
                  <Whyassetmanagmentbox>Why asset management</Whyassetmanagmentbox>
                  <Aboutwrapper>About us</Aboutwrapper>
                  <ContactButton>
                    <Managmentcontact>contact</Managmentcontact>
                  </ContactButton>
                  <navigationbar
                    src="https://cdn.zeplin.io/5fedbd677b1a145df349f5a4/assets/a22a9827-da86-48f7-8526-38cf0d7e4c92.svg"
                    alt="navigation menu"
                  />
                </Navigationwrapper>
              </Headerasset>
            </Haederwrapper>
            </Container>
        </Hadersection>
      </>
    );
  }
  