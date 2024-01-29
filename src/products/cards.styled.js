import styled from "styled-components";
import { Theme } from "../theme";

export const Cardcontainer = styled.li`
  width: 100%;
  max-width: 256px;
  height: 313px;
  margin: 33px 5px 31px 17px;
  padding: 20px 17px 39px 25px;
  border-radius: 20px;
  border: solid 1px ${Theme.offwhite};
  background-color: ${Theme.white};
  position: relative;

  &:hover {
    background-color: #000000;
    color: #ffffff;

    &::before {
      position: absolute;
      content: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable EnglishLorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English";
      color: ${Theme.white};
      font-size: 16px;
      padding: 10px;
      box-sizing: border-box;
      transform: rotatex(360deg);
      transition: transform 1s ease;
    }
    & > * {
      pointer-events: none;
      opacity: 0;
    }
  }
`;

export const CardimageBox = styled.div``;

export const Detailsimagebox = styled.img`
  position: relative;
  max-width: 22px;
  left: 238px;
  margin: 0 0 0 -19px;

  @media (max-width: 991px) {
    left: 218px;
  }
`;

export const Cardimage = styled.img`
  position: relative;
  width: 120px;
  left: 69px;
`;

export const Contactusbutton = styled.div`
  margin: 40px;
  width: 159px;
  height: 31px;
  text-align: center;
  font-size: 15px;
  padding: 13px 0px 0px 0px;
  border-radius: 10px;
  background-color: ${Theme.offwhite};
  text-shadow: 4px 4px 10px ${Theme.white};
`;

export const Carddiscription = styled.div`
  padding: 36px 14px 20px 23px;
  font-size: 13px;
  text-align: center;
`;

export const Cardsbox = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  max-width: 990px;
  margin: 0 auto;
  list-style: none;

  @media (max-width: 991px) {
    max-width: 305px;
    padding: 0px;
  }
`;

export const Carddetails = styled.div`
  display: flex;
  flex-direction: column;
`;

