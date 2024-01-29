import styled from "styled-components";
import { Theme } from "../theme";

export const Financesection = styled.section``;

export const Financewrapper = styled.div`
  margin: 0 26px 0 58px;
  padding: 27px 80px 0px 112px;

  @media (max-width: 991px) {
    margin: 0;
    padding: 0 10px;
  }
`;

export const Financeinnerwrapper = styled.div`
  display: flex;
  gap: 50px;

  @media (max-width: 991px) {
    flex-direction: column;
    gap: 0;
  }
`;

export const Financeleftbox = styled.div`
  width: 100%;
  max-width: 50%;

  @media (max-width: 991px) {
    max-width: 700px;
  }
`;

export const Financerightbox = styled.div`
  width: 100%;
  max-width: 50%;

  @media (max-width: 991px) {
    max-width: 252px;
  }
`;

export const Financeheading = styled.div`
  width: 100%;
  max-width: 370px;
  position: relative;
  margin: 0 0 68px 0;
  font-family: Nunito-Bold;
  font-size: 50px;
  line-height: 50px;
  color:${Theme.darkblue};

  @media (max-width: 991px) {
    max-width: 256px;
    font-size: 30px;
    line-height: 34px;
    margin: 3px 0px 14px 0px;
  }
  &::before {
    content: "";
    position: absolute;
    width: 100%;
    max-width: 377px;
    height: 72px;
    object-fit: contain;
    z-index: -1;
    background: linear-gradient(to bottom, #f8e9ed, #fbfbfb);
  }
`;

export const Financediscription = styled.p`
  color: ${Theme.lightgreay};
  width: 100%;
  max-width: 500px;
  font-family: Nunito-Regular;
  line-height: 28px;

  @media (max-width: 991px) {
    line-height: 17px;
    font-size: 12px;
  }
`;

export const Contectusbutton = styled.button`
  width: 100%;
  max-width: 200px;
  height: 60px;
  border-radius: 10px;
  border: none;
  background-color: ${Theme.offwhite};
  margin: 32px 0px;
`;

export const Buttontextstyled = styled.p`
  color: #14183e;
  text-shadow: 4px 4px 20px ${Theme.white};
  font-size: 16px;
  font-family: Nunito-Bold;
`;

export const Headingstyled = styled.p`
  width: 100%;
  max-width: 263px;
  height: 33px;
  margin: 2px 0px 0px 0px;
  font-family: Nunito-Bold;
  font-size: 24px;
  line-height: 34px;
  text-align: left;
  color: ${Theme.darkblue};

  @media (max-width: 991px) {
    font-size: 14px;
  }
`;

export const Headingbox = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 20px;

  @media (max-width: 991px) {
    gap: 15px;
  }
`;

export const Servicewrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 400px;
  height: 328px;
  border-radius: 23px;
  border: 1px solid ${Theme.offwhite};
  background-color: ${Theme.white};
  margin: 42px 0px 0px 0px;

  @media (max-width: 991px) {
    margin: 0;
    padding: 0px 29px 0px 26px;
    height: 262px;
  }
`;

export const Servicebox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Serviceleftbox = styled.div``;

export const ServiceleftboxImage = styled.img`
  width: 100%;
  max-width: 100px;
`;

export const Servicerightbox = styled.div`
  width: 100%;
  max-width: 100px;
`;

export const Verticalline = styled.div`
  width: 0;
  height: 141px;
  margin: 1px 44px 48px;
  border: 0.5px solid ${Theme.offwhite};

  @media (max-width: 991px) {
    margin: 1px 40px 15px;
  }
`;

export const Servicediscription = styled.div`
  width: 100%;
  max-width: 320px;
  text-align: center;
  font-size: 14px;
  color: ${Theme.darkgreay};
`;
