import {
    Corporatetitle,
    Corporateprivatetitle,
    Privatebuttonbox,
    Privatebuttontitle,
    Productstitlewrapper,
    Producatsinnerwrapper,
    Productscontainer,
    Productssection,
    Productswrapper,
    Productbuttonslogo,
    Corporateprivate,
    Productscontent,
    Productstitle,
  } from "./products.styled";
  import ManIcon from "../assets/chair.png";
  import CorporateManIcon from "../assets/human.png";
  import { Cardspage } from "./cards";
  
  export function Productpage() {
    return (
      <>
        <Productssection>
          <Productscontainer>
            <Productswrapper>
              <Producatsinnerwrapper>
                <Productstitlewrapper>
                  <Productstitle>Product & Solutions</Productstitle>
                </Productstitlewrapper>
                <Productscontent>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters
                </Productscontent>
                <Corporateprivate>
                  <Corporateprivatetitle>
                    <Privatebuttonbox>
                      <Privatebuttontitle>
                        <Productbuttonslogo src={ManIcon} />
                        Private Customer
                      </Privatebuttontitle>
                    </Privatebuttonbox>
                    <Corporatetitle>
                      <Productbuttonslogo src={CorporateManIcon} />
                      Corporate Customers
                    </Corporatetitle>
                  </Corporateprivatetitle>
                </Corporateprivate>
                <Cardspage />
              </Producatsinnerwrapper>
            </Productswrapper>
          </Productscontainer>
        </Productssection>
      </>
    );
  }
  