import styled from "styled-components";

export const ContainerCard = styled.div`


/*  height: 500.69px;     */
 
  display: flex;
  flex-wrap: wrap;
  margin-top: 109.85px;
  justify-content: space-between;
  margin: auto;
 
`;

export const Wrapper = styled.div`
  height: 136.86px;
  width: 31.3%;
  background: #f6f7f9;
  border-radius: 8px;
  display: flex;
  align-content: center;
  box-shadow: 4px 4px 4px 0px #212121 10%;
  margin: 1%;
  &:nth-child(3n) {
    margin-right: 0;
  }

  &:nth-child(3n + 1) {
    margin-left: 0;
  }
`;

export const Column = styled.div`
width:60%;

 overflow-x: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;

  & > h3 {
    height: 27.977222442626953px;
    width: 149.1907196044922px;
    left: 0px;
    top: 0px;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 21px;
    color: #212121;
    text-shadow: 4px 4px 4px rgba(33, 33, 33, 0.1);
    margin-left:  70px;
    margin-top: 10px;
  }
   
`;

export const Skill = styled.div`
  display: flex;
  height: 51.53152847290039px;
  width: 88.87910461425781px;
  left: 25.9453125px;
  top: 45.3671875px;
  border-radius: 0px;
`;

export const Attack = styled.div`
  display: flex;
  flex-direction: column;
  & > span {
    height: 36.04155349731445px;
    width: 37.9530029296875px;
    border-radius: 80px;
    border: 3px solid #212121;
    box-sizing: border-box;
    padding: 4px;
    margin-left: 6px;
    margin-right: 6px;
    font-size: 14px;
    text-align: center;
    line-height: 18px;
    display: flex;
    align-content: center;
    justify-content: center;
  }

  & > p {
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 14px;
    letter-spacing: 0em;
    font-style: normal;
    color: #4b4b4b;
    padding-top: 5px;
  }
`;

export const Defese = styled.div`
  display: flex;
  flex-direction: column;
  & > span {
    height: 36px;
    width: 37.9px;
    border-radius: 80px;
    border: 3px solid #212121;
    box-sizing: border-box;
    padding: 4px;
    margin-left: 6px;
    margin-right: 6px;
    font-size: 14px;
    text-align: center;
    line-height: 18px;
    display: flex;
    align-content: center;
    justify-content: center;
  }

  & > p {
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 14px;
    letter-spacing: 0em;
    font-style: normal;
    color: #4b4b4b;
    padding-top: 5px;
  }
`;

export const Grass = styled.div`
width:80%;
  display: flex;
  align-items: center;
  height: 15.87896728515625px;
  width: 132.97434997558594px;
  margin-left: 25.9453125px;
  top: 108.8828125px;
  border-radius: 0px;
  margin-top: 10px;

  & > span {

    height: 15.87896728515625px;
    width: 60.00061798095703px;
   
    background: #73d677;
    box-shadow: inset 0px -2px 0px rgba(0, 0, 0, 0.18);
    border-radius: 11px;
    margin-top: 10px;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 14px;
    text-align: center;
    color: rgb(0, 0, 0);
    margin-right: 13px;
    margin-left:4px;
    margin-bottom:8px;
  }
  & > span {
  
    height: 15.87896728515625px;
    width: 60.00061798095703px;
    left: 0px;
    top: 0px;
    background: #07d6f2;
    box-shadow: inset 0px -2px 0px rgba(0, 0, 0, 0.18);
    border-radius: 11px;
    margin-top: 8px;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 14px;
    text-align: center;
    color: rgb(0, 0, 0);
  }
`;
export const Image = styled.div`
  background-image: url("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/11.png");
  height: 136.86154174804688px;
  width: 232.25103759765625px;
  left: 0px;
  top: 0px;
  border-radius: 0px 8px 8px 0px;
  display: flex;
  align-items: center;

  & > img {
    height: 156.52120971679688px;
    width: 167.8395538330078px;
    left: 0.8125px;
    top: -9.828125px;
    border-radius: 0px;
  }
`;
