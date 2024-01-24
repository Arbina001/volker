import React from "react";
import {
  Cardcontainer,
  Contentstyled,
  Discriptionstyled,
  Headingstyled,
  Imagewrapper,
  Advantageinerwrapper,
  Advantageleftside,
  Advantagesection,
  Advantagewrapper,
  Advantagerightside,
  Detailsbox,
  Numberslogo,
  Numbersdetails,
} from "./advantages.styled";
import Whyassetsmanagment from "../assets/advantages.png";

export function Advantagespage() {
  return (
    <>
      <Advantagesection>
        <Advantagewrapper>
          <Advantageinerwrapper>
            <Cardcontainer>
              <Advantagerightside>
                <Imagewrapper
                  src={Whyassetsmanagment}
                  alt="advantages"
                ></Imagewrapper>
              </Advantagerightside>
              <Advantageleftside>
                <Headingstyled>Your advantages at a glance</Headingstyled>
                <Discriptionstyled>
                  It is a long established fact that a reader will be distracted
                </Discriptionstyled>
                <Contentstyled>
                  <Detailsbox>
                    <Numberslogo>
                      <Numbersdetails>1</Numbersdetails>
                    </Numberslogo>
                    You take center stage
                  </Detailsbox>
                  <Detailsbox>
                    <Numberslogo>
                      <Numbersdetails>2</Numbersdetails>
                    </Numberslogo>
                    You take center stage
                  </Detailsbox>
                  <Detailsbox>
                    <Numberslogo>
                      <Numbersdetails>3</Numbersdetails>
                    </Numberslogo>
                    You take center stage
                  </Detailsbox>
                </Contentstyled>
              </Advantageleftside>
            </Cardcontainer>
          </Advantageinerwrapper>
        </Advantagewrapper>
      </Advantagesection>
    </>
  );
}
