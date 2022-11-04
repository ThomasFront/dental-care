import styled from "styled-components";

export const HeaderWrapper = styled.header`
  position: relative;
  height: 92vh;
  width: 100vw;

  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

export const Shadow = styled.div`
  top: 0;
  left: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.75);
`

export const TextWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-width: 250px;

  @media (min-width: 576px){
    min-width: 400px;
  }

  h1 {
    font-size: 25px;
    text-align: center;
    color: #ffffff;

  @media (min-width: 576px){
    font-size: 28px;
  }
  }

  h2 {
    font-size: 20px;
    text-align: center;
    color: #ffffff;
    font-weight: lighter;

    span{
      color: #02adbe;
      font-weight: 300;
    }

  @media (min-width: 576px){
    font-size: 22px;
  }
  }

  button {
    margin: 20px auto 0;
    /* color: white; */
    background-color: #02adbe;
    border: none;
    padding: 6px 12px;
    border-radius: 6px;
    transition: transform 0.2s, background-color 0.2s;
    cursor: pointer;

  @media (min-width: 576px){
    font-size: 16px;
    padding: 8px 16px;
  }

    &:hover {
      transform: scale(1.03);
      background-color: rgb(2, 188, 207);
    }
  }
`