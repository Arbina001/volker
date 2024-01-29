import styled from "styled-components";
import { Theme } from "../theme";

export const Managmentsection = styled.section``;

export const Managmentwrapper = styled.div`
background: url(https://cdn.zeplin.io/5fedbd677b1a145df349f5a4/assets/315bba66-2840-4652-bca2-8c3ccf59bcb2.png) no-repeat right 20px bottom 10px;
background-size: 660px 640px;
height: 652px;

 @media (max-width: 991px) {
 background-size: 350px 350px;
 }
`;

export const Managmentinnerwrapper = styled.div`
 display: flex;
 align-items: center;
 justify-content: center;
 width: 100%;

 @media (max-width: 991px) {
  flex-direction: column;
 }
`;

export const Managmentgradient = styled.div`
 width: 100%;
 max-width: 427px;
 height: 68px;
 position: relative;
 top: -73px;
 z-index: 0;
 background-image: linear-gradient(to bottom, #F8E9ED, #FBFBFB);

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

export const Managmentrightbox = styled.div`
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

export const Managmentbox = styled.div`
 width: 100%;
 max-width: 20px;
 font-family: Nunito-Regular;
 font-size: 54px;
 font-weight: bold;
 text-align: right;
 color:${Theme.darkblue};
 z-index: 1;
 position: relative;

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
 color: ${Theme.lightgreay};

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
 background-color: ${Theme.lightgreay};
 margin: 70px 0 0 0;

 @media (max-width: 991px) {
  margin: 0;
 }
`;

export const Contactusbuttonwrapper = styled.button`
 display: none;
 width: 100%;
 height: 60px;
 border-radius: 10px;
 border: none;
 background-color: ${Theme.lightgreay};

 @media (max-width: 991px) {
    max-width: 160px;
    margin: 16px 0px 0px 49px
 }
`;

export const Buttontxtstyled = styled.p`
 font-family: Nunito-Regular;
 font-size: 16px;
 font-weight: 600;
 color: ${Theme.white};
 text-shadow: 4px 4px 20px ${Theme.white};
`;
