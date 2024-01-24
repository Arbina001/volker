import {
    Mapscontainer,
    Mapssection,
    Mapswrapper,
    Mapsinnerwrapper,
    MapsBox,
    Mapsdiscription,
    ContactAssetBox,
    VolkerMunko,
    Mapsiconwrapper,
    Mapsicon,
    StyledMapIframe,
  } from "./maps.styled";
  import Mapssearchlogo from "../assets/searchpin.png";
  import Contactlogo from "../assets/contact.png";
  import Emaillogo from "../assets/email.png";
  
  export function Mapspage() {
    return (
      <>
        <Mapssection>
          <Mapscontainer>
            <Mapswrapper>
              <Mapsinnerwrapper>
                <MapsBox>
                  <StyledMapIframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.811733323151!2d73.12992577388097!3d22.285120379697574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc7dd361f0625%3A0x59326ccefe144813!2sAdrixus%20Tech%20Studio%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1705559938492!5m2!1sen!2sin"
                    alt="maps"
                  />
                </MapsBox>
                <Mapsdiscription>
                  <ContactAssetBox>CONTACT</ContactAssetBox>
                  <VolkerMunko>Volker Munko</VolkerMunko>
                  <Mapsiconwrapper>
                    <Mapsicon src={Mapssearchlogo} alt="searchpinimg" />
                    Office for Allfinanz German investment advice On the heath 8
                    32602 Vlotho
                  </Mapsiconwrapper>
                  <Mapsiconwrapper>
                    <Mapsicon src={Contactlogo} alt="contactimg" />
                    25753 12354
                  </Mapsiconwrapper>
                  <Mapsiconwrapper>
                    <Mapsicon src={Emaillogo} alt="emailimg" />
                    Volker.Munko@allfinanz.ag
                  </Mapsiconwrapper>
                </Mapsdiscription>
              </Mapsinnerwrapper>
            </Mapswrapper>
          </Mapscontainer>
        </Mapssection>
      </>
    );
  }