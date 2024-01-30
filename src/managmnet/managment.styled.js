import styled from "styled-components";
import { Theme } from "../theme";
import volkermanagement from "../assets/volkermanagement.png";
export const Managementsection = styled.section``;

export const Managementwrapper = styled.div`
  background: url(${volkermanagement}) no-repeat right 20px bottom 10px;
  background-size: 660px 640px;
  height: 652px;

  @media (max-width: 991px) {
    background-size: 350px 350px;
  }
`;

export const Managementinnerwrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  @media (max-width: 991px) {
    flex-direction: column;
  }
`;

export const Managementgradient = styled.div`
  width: 100%;
  max-width: 427px;
  height: 68px;
  position: relative;
  top: -73px;
  z-index: 0;
  background-image: linear-gradient(to bottom, #f8e9ed, #fbfbfb);

  @media (max-width: 991px) {
    max-width: 250px;
    top: -33px;
    height: 44px;
  }
`;

export const LeftBox = styled.div`
  width: 100%;
  max-width: 40%;

  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

export const Managementrightbox = styled.div`
  width: 100%;
  max-width: 1000px;

  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

export const LeftBoxImage = styled.img`
  width: 100%;
  max-width: 406px;
  height: 386px;
  align-items: left;

  @media (max-width: 991px) {
    max-width: 350px;
    height: 346px;
  }
`;

export const Managementbox = styled.div`
  width: 100%;
  max-width: 300px;
  font-family: Nunito-Regular;
  font-size: 54px;
  font-weight: bold;
  text-align: right;
  color: ${Theme.darkblue};
  z-index: 1;
  position: relative;

  &::before {
    content: "";
    width: 100%;
    max-width: 200px;
    height: 65px;
    position: absolute;
    z-index: -1;
    background-image: linear-gradient(to bottom, #f8e9ed, #fbfbfb);

    @media (max-width: 991px) {
      max-width: 250px;
      height: 44px;
    }
  }

  @media (max-width: 991px) {
    font-size: 30px;
  }
`;

export const HomePageBox = styled.div``;

export const Distributiondiscription = styled.p`
  width: 100%;
  max-width: 485px;
  height: 86px;
  font-size: 16px;
  line-height: 33px;
  text-align: left;
  color: ${Theme.greay};

  @media (max-width: 991px) {
    line-height: 20px;
    text-align: left;
    font-size: 14px;
  }
`;

export const Buttonwrapper = styled.button`
  width: 100%;
  max-width: 207px;
  height: 58px;
  border-radius: 10px;
  border: none;
  background-color: ${Theme.darkgreay};
  margin: 70px 0 0 0;

  @media (max-width: 991px) {
    margin: 0;
  }
`;

export const Contactusbuttonwrapper = styled.button`
  width: 100%;
  height: 60px;
  border-radius: 10px;
  border: none;
  background-color: ${Theme.lightgreay};

  @media (max-width: 991px) {
    max-width: 160px;
    margin: 16px 0 0 48px;
  }
`;

export const Buttontxtstyled = styled.p`
  font-family: Nunito-Regular;
  font-size: 16px;
  font-weight: 600;
  color: ${Theme.white};
  text-shadow: 4px 4px 20px ${Theme.white};
`;
