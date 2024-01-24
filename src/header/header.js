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
    Smallnavigation,
    Navigationwrapper,
    Whyassetmanagmentbox,
  } from "./header.styled";
  import Headermanagment from "../assets/volker-munko.png";
  export function Header() {
    return (
      <>
        <Hadersection>
          <Hadercontainer>
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
                  <Smallnavigation
                    src="https://cdn.zeplin.io/5fedbd677b1a145df349f5a4/assets/a22a9827-da86-48f7-8526-38cf0d7e4c92.svg"
                    alt="navigation menu"
                  />
                </Navigationwrapper>
              </Headerasset>
            </Haederwrapper>
          </Hadercontainer>
        </Hadersection>
      </>
    );
  }
  