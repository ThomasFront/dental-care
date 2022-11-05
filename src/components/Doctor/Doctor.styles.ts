import styled from "styled-components";
import { TbDental } from 'react-icons/tb'
import { BsFacebook, BsTwitter, BsLinkedin } from 'react-icons/bs'

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #f2f2f2;
  margin: 0 20px;
  height: 400px;
  border-radius: 6px;
  padding: 10px;

  img {
    margin-bottom: 40px;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    object-fit: cover;
    transition: transform 0.2s;
    box-shadow: 0 0 5px #02adbe;
  }

  h2 {
    text-align: center;
    color: #02adbe;
    font-size: 30px;
  }

  p {
    margin-top: 20px;
    font-size: 14px;
    text-align: center;
  }

  &:hover img {
    transform: scale(1.05);
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