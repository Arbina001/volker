import {Contectusbutton,
    Buttontextstyled,
    Financecontainer,
    Financedisccription,
    Financeinnerwrapper,
    Financeleftbox,
    Financerightbox,
    Financesection,
    Financeheading,
    Financewrapper,
    Headingstyled,
    Advicecomponent,
    Headingbox,
    HeadingGradient,
    Servicebox,
    Servicediscription,
    Serviceleftbox,
    ServiceleftboxImage,
    Servicerightbox,
    Servicewrapper,
    Verticalline,} from './finance.styled';

import Headelsimage from "../assets/service.png";
import Exellentimage from "../assets/exellent.png";
export function Financepage() {
return (
  <>
    <Financesection>
      <Financecontainer>
        <Financewrapper>
          <Financeinnerwrapper>
            <Financeleftbox>
              <Financeheading>Competence for your finances</Financeheading>
              <HeadingGradient />
              <Financedisccription>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English
              </Financedisccription>
              <Contectusbutton>
                <Buttontextstyled>Contact</Buttontextstyled>
              </Contectusbutton>
            </Financeleftbox>
            <Financerightbox>
              <Headingbox>
                <Advicecomponent />
                <Headingstyled>EXCELLENT ADVICE</Headingstyled>
              </Headingbox>
              <Servicewrapper>
                <Servicebox>
                  <Serviceleftbox>
                    <ServiceleftboxImage
                      src={Headelsimage}
                      alt="headelsimg"
                    />
                  </Serviceleftbox>
                  <Verticalline />
                  <Servicerightbox>
                    <ServiceleftboxImage
                      src={Exellentimage}
                      alt="exellentimg"
                    />
                  </Servicerightbox>
                </Servicebox>
                <Servicediscription>
                  We are regularly recognized by independent institutes for
                  our quality in customer advice and service.
                </Servicediscription>
              </Servicewrapper>
            </Financerightbox>
          </Financeinnerwrapper>
        </Financewrapper>
      </Financecontainer>
    </Financesection>
  </>
);
}