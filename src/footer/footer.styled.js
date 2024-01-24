import styled from "styled-components";

export const Footersection = styled.section`
background-image: url(https://cdn.zeplin.io/5fedbd677b1a145df349f5a4/assets/b8ebc7b6-3e25-4f50-a136-6d9bbcc23102.svg);
  background-repeat: no-repeat;
  background-size: cover; 
`;

export const Footercontainer = styled.div`
  width: 100%;
  max-width: 1366px;
  margin: 0 auto;

  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

export const Footerwrapper = styled.div`
  margin: 0 19px 20px;
  padding: 16px 20px 0px 20px;

  @media (max-width: 991px) {
    margin: 0;
    padding: 0;
  }
`;

export const Footerinnerwrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;

export const FooterLogo = styled.img`
  padding: 94px 0px 0px 0px;
  width: 100%;
  max-width: 238px;
  height: 160px;

  @media (max-width: 991px) {
    max-width: 86px;
    height: 67px;
    padding: 90px 0px 0px 0px;
  }
`;

export const Footerdiscription = styled.div`
  padding: 12px 0px 0px 0px;
  text-align: center;
  color: #ffffff;
  line-height: 2;
`;

export const FooterHorizontal = styled.hr`
  margin: 20px 0px 0px 0px;
  background-color: #ffffff;
`;

export const Footerend = styled.footer`
  display: flex;
  justify-content: space-between;
  color: #ffffff;
  margin: 0 19px 20px;
  padding: 20px 20px 10px 20px;

  @media (max-width: 991px) {
    margin: 0;
    padding: 0;
    flex-direction: column;
  }
`;

export const Rightsection = styled.div`
  display: flex;
  list-style: none;
  
  @media (max-width: 991px) {
    padding: 0px 0px 0px 135px;
    margin: 16px 23px 0px 8px;
  }
`;

export const Verticalline = styled.div`
  height: 12px;
  width: 0;
  border: 0.5px solid  #ffffff;
  margin: 0px 12px 0px;
`;
