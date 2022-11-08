import styled from "styled-components";
import { BsFillPersonFill } from 'react-icons/bs'

export const Wrapper = styled.div`
  background-color: #02adbe;
  min-height: 100vh;
`

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  margin: 0 15px;
  padding: 20px;
  box-shadow: 0 0 15px rgba(50, 50, 50, 0.3);
  border-radius: 6px;
  max-width: 500px;
  width: 100%;
  background-color: #fff;

  h1 {
    margin-bottom: 40px;
    font-size: 22px;
  }

  input {
    margin-bottom: 10px;
    padding: 8px 16px;
    border: 1px solid #02adbe;
    border-radius: 6px;

    &:focus {
      outline: 1px solid #02adbe;
      background-color: #eeeeee;
    }

    @media (min-width: 375px){
      width: 60%;
    }

    @media (min-width: 768px){
      padding: 12px 24px;
    }
  }

  button {
    margin: 20px 0;
    border: none;
    padding: 8px 16px;
    border-radius: 6px;
    cursor: pointer;
    background-color: #02adbe;
    transition: transform 0.2s, background-color 0.2s;

    @media (min-width: 375px){
      padding: 10px 20px;
    }

    &:hover {
      transform: scale(1.03);
      background-color: rgb(2, 188, 207);
    }
  }
`

export const ContentWrapper = styled.div`

  p {
    text-align: center;
    font-size: 14px;

    @media (min-width: 768px){
      font-size: 17px;
    }
  }

  button {
    position: relative;
    font-size: 14px;
    color: #02adbe;
    font-weight: bold;
    border: none;
    background-color: transparent;
    cursor: pointer;
    padding: 0px;

    &::before {
      position: absolute;
      content: '';
      bottom: 0;
      left: 0;
      right: 0;
      height: 1px;
      background-color: #02adbe;
      transform: scale(0);
      transition: transform 0.2s;
    }

    &:hover::before {
      transform: scale(1);
    }

    &:hover {
      transform: scale(1);
      background-color: transparent;
    }
    @media (min-width: 768px){
      font-size: 17px;
    }
  }
  
`

export const DecorativePerson = styled.div`
  position: absolute;
  top: -60px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  height: 80px;
  width: 80px;
`

export const PersonIcon = styled(BsFillPersonFill)`
  font-size: 70px;
`