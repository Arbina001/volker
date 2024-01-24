import styled from "styled-components";

export const Productssection = styled.section``;

export const Productscontainer = styled.div`
  width: 100%;
  max-width: 1500px;
  margin: 0 auto;
  background-image: url(https://cdn.zeplin.io/5fedbd677b1a145df349f5a4/assets/4c70244a-b294-4264-9b08-d933a2910183.svg);

  @media (max-width: 991px) {
    max-width: max-content;
  }
`;

export const Productswrapper = styled.div`
  width: 100%;
  max-width: 1328px;

  @media (max-width: 991px) {
    max-width: 1000px;
  }
`;

export const Producatsinnerwrapper = styled.div`
  background-image: url(https://cdn.zeplin.io/5fedbd677b1a145df349f5a4/assets/3d6d0a6f-f719-4002-a7c4-07a720563dbe.svg);
  margin: 0 0 19px 20px;
  padding: 10px 88px 0px 77px;

  @media (max-width: 991px) {
    margin: 0;
    padding: 0 10px;
  }
`;

export const Productstitlewrapper = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
`;

export const Productstitle = styled.p`
  width: 100%;
  max-width: 472px;
  height: 64px;
  font-family: Quicksand;
  font-size: 42px;
  font-weight: bold;
  line-height: 34px;
  text-align: center;
  color: #14183e;

  @media (max-width: 991px) {
    font-size: 20px;
    height: 13px;
  }
`;

export const Productscontent = styled.p`
  width: 100%;
  max-width: 1000px;
  height: 64px;
  font-family: Quicksand, sans-serif;
  text-align: center;
  color: #14183e;

  @media (max-width: 991px) {
    font-size: 15px;
    padding: 0px 0px 27px 0px;
  }
`;

export const Corporateprivate = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Privatebuttonbox = styled.div`
  width: 100%;
  max-width: 244px;
  height: 41px;
  border-radius: 36px;
  background-color: #474748;

  @media (max-width: 991px) {
    height: 34px;
  }
`;

export const Privatebuttontitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding: 10px 0px;
  color: #ffffff;
  margin: 0;
  text-shadow: 4px 4px 20px #ffffff;

  @media (max-width: 991px) {
    font-size: 9px;
    padding: 6px 0px;
  }
`;

export const Corporateprivatetitle = styled.div`
  display: flex;
  width: 100%;
  max-width: 493px;
  height: 41px;
  border-radius: 36px;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.03);
  border: solid 1px #eee0e4;
  background-color: #ffffff;

  @media (max-width: 991px) {
    max-width: 331px;
    font-size: 12px;
    height: 34px;
  }
`;

export const Productbuttonslogo = styled.img`
  width: 100%;
  max-width: 13px;
`;

export const Corporatetitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding: 9px 23px;
  color: #000000;
  margin: 0;
  text-shadow: 4px 4px 20px #ffffff;
`;
