import {
    Contactusbutton,
    Cardcontainer,
    Carddiscription,
    Cardimage,
    CardimageBox,
    Detailsimagebox,
    Cardsbox,
    Carddetails,
  } from "./cards.styled";
  import isvgimage from "../assets/i-button.png";
  import { Details } from "./cardsdata";
  export function Cardspage() {
    const Discriptionproduct = Details.map((data) => (
      <>
        <Cardcontainer>
          <Detailsimagebox src={isvgimage} alt="detailsimg" />
          <Carddetails>
            <CardimageBox>
              <Cardimage src={data.url} alt="cardsimg" />
            </CardimageBox>
            <Carddiscription>{data.title}</Carddiscription>
            <Contactusbutton>contact</Contactusbutton>
          </Carddetails>
        </Cardcontainer>
      </>
    ));
    return (
      <>
        <Cardsbox>{Discriptionproduct}</Cardsbox>
      </>
    );
  }