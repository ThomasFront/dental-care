import styled from "styled-components";
import { TbDental } from 'react-icons/tb'
import { BsFacebook, BsTwitter, BsLinkedin } from 'react-icons/bs'
import { Link } from "react-router-dom";

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #f2f2f2;
  margin: 0 20px;
  height: 450px;
  border-radius: 6px;
  padding: 10px;
  text-decoration: none;
  color: black;
  cursor: pointer;

  img {
    margin-bottom: 25px;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    object-fit: cover;
    transition: transform 0.2s;
    border: 1px solid #02adbe;

    @media (min-width: 768px){
      margin-bottom: 30px;
      width: 200px;
      height: 200px;
    }
  }

  h2 {
    text-align: center;
    color: #02adbe;
    font-size: 24px;
  }

  p {
    margin-top: 10px;
    font-size: 14px;
    text-align: center;

    @media (min-width: 768px){
      margin-top: 20px;
    }
  }

  &:hover img {
    transform: scale(1.03);
  }

  div {
    position: absolute;
    bottom: -40px;
    left: 50%;
    transform: translate(-50%);
    display: flex;
    justify-content: center;
    align-items: center;
    transition: bottom 0.2s;
  }

  &:hover div {
    bottom: 5px;
  }

  a {
    font-size: 22px;
  }
`

export const ToothIcon = styled(TbDental)`
  position: absolute;
  top: 5px;
  right: 5px;
  font-size: 25px;
  color: #02adbe;
`

export const FbIcon = styled(BsFacebook)`
  color: #3b5998;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.1);
  }
`

export const TwitterIcon = styled(BsTwitter)`
  margin: 0 10px;
  color: #1DA1F2;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.1);
  }
`

export const LinkedIcon = styled(BsLinkedin)`
  transition: transform 0.2s;
  color: #0e76a8;

  &:hover {
    transform: scale(1.1);
  }
`