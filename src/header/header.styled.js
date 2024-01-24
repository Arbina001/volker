import styled from "styled-components";
export const Hadersection = styled.section``;

export const Hadercontainer = styled.div`
  width: 100%;
  max-width: 1366px;
  margin: 0 auto;
  background-color: #f9f9f9;
`;

export const Haederwrapper = styled.div`
  margin: 0 19px 20px;
  padding: 33px 120px 0 118px;

  @media (max-width: 991px) {
    margin: 0;
    padding: 0;
  }
`;

export const Headerasset = styled.header`
  display: flex;
  justify-content: space-between;
`;

export const Assetsimagebox = styled.div`
  width: 100%;
  max-width: 440px;
  height: 71px;
  object-fit: contain;

  @media (max-width: 991px) {
    margin: 12px 71px 6px 12px;
  }
`;

export const Whyassets = styled.img`
  width: 100%;
  max-width: 108px;
  height: 63px;
  position: relative;
`;

export const Whyassetmanagmentbox = styled.div`
  width: 100%;
  max-width: 272px;
  height: 27px;
  margin: 22px 24px 19px 1px;
  font-family: "Nunito-SemiBold";
  font-size: 20px;
  line-height: 12px;
  letter-spacing: 2px;
  text-align: left;
  color: #37415c;

  @media (max-width: 991px) {
    display: none;
  }
`;

export const Aboutwrapper = styled.div`
  width: 100%;
  max-width: 110px;
  height: 27px;
  margin: 27px 13px 4px 3px;
  font-family: "Nunito-SemiBold";
  font-size: 20px;
  line-height: 2px;
  text-align: left;
  color: #37415c;

  @media (max-width: 991px) {
    display: none;
  }
`;

export const ContactButton = styled.button`
  width: 100%;
  max-width: 136px;
  height: 50px;
  border-radius: 10px;
  background-color: #fff;
  border: none;
  margin: 5px 0px;

  @media (max-width: 991px) {
    display: none;
  }
`;

export const Managmentcontact = styled.p`
  font-family: "Nunito-SemiBold";
  font-size: 16px;
  font-weight: bold;
  line-height: 3px;
  color: #3b3b3c;

  @media (max-width: 991px) {
    display: none;
  }
`;

export const Smallnavigation = styled.img`
  display: none;

  @media (max-width: 991px) {
    display: block;
    width: 100%;
    max-width: 40px;
    height: 63px;
    position: absolute;
  }
`;

export const Navigationwrapper = styled.div`
  display: flex;
  width: 100%;

  @media (max-width: 991px) {
    max-width: 67px;
  }
`;
