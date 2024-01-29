import styled from "styled-components";
import House from "../assets/house.png";
import Housebackground from "../assets/designs.png";
import { Theme } from "../theme";

export const Wealthsection = styled.section`
  position: relative;
  background: url(${Housebackground});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center top;

  &:before {
    content: "";
    position: absolute;
    background: url(${House});
    background-repeat: no-repeat;
    background-position: center top;
    background-size: 500px 500px;
    width: 100%;
    max-width: 560px;
    height: 528px;
    top: 167px;
    right: 0;

    @media (max-width: 991px) {
      width: 100%;
      max-width: 270px;
      height: 290px;
      background-size: 270px 290px;
      top: 230px;
    }
  }
`;

export const Wealthwrapper = styled.div`
  width: 100%;
  max-width: 1050px;
  margin: 0 auto;
`;

export const Wealthinnerwrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 180px 0;

  @media (max-width: 991px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 140px 0 70px;
  }
`;

export const Wealthleftsection = styled.div`
  max-width: 530px;
  width: 100%;
`;

export const Wealthleftbox = styled.div``;

export const Wealthheading = styled.div`
  position: relative;
  max-width: 565px;
  width: 100%;
  font-family: Nunito-Bold;
  font-size: 52px;
  font-weight: 500;
  line-height: 70px;
  color: ${Theme.white};
  top: -80px;
  padding: 62px 0 0 0;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    bottom: -44px;
    padding: 0 0 2px 0;
    width: 190px;
    background: ${Theme.white};
  }

  @media (max-width: 991px) {
    font-size: 23px;
    line-height: 30px;
    margin: 0 0 30px 0;
    padding: 0;

    &::before {
      width: 95px;
      height: 3px;
      bottom: -28px;
    }
  }
`;

export const Wealthpropertieswrapper = styled.ul`
  list-style: none;

  @media (max-width: 991px) {
    margin: 300px 0 0;
  }
`;

export const Wealthdetailsdata = styled.li`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  max-width: 490px;
  width: 100%;
  margin: 0;
  font-family: Nunito-Regular;

  @media (max-width: 991px) {
    margin: 0 0px 20px -30px;
  }
`;

export const Data = styled.div`
  margin: 30px 30px 0 0;
`;

export const Wealthrightsideinnerbox = styled.div`
  height: 100%;
`;

export const Wealthdetails = styled.p`
  font-family: Nunito-Regular;
  font-size: 20px;
  font-weight: 400;
  line-height: 24px;
  color: ${Theme.white};

  @media (max-width: 991px) {
    font-size: 14px;
  }
`;

export const Wealthrightside = styled.div`
  max-width: 500px;
  width: 100%;
  margin: 0 0 0 30px;
  height: 800px;

  @media (max-width: 991px) {
    max-width: 344px;
  }
`;

export const Wealthrightboxdata = styled.ul`
  display: flex;
  flex-flow: column;
  align-items: end;
  justify-content: end;
  list-style: none;
  height: 100%;

  @media (max-width: 991px) {
    margin: 0 0 0 20px;
    justify-content: flex-start;
  }
`;
