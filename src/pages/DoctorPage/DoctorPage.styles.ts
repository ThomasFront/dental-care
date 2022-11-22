import styled from "styled-components";
import { HiInformationCircle } from 'react-icons/hi'
import { BsFacebook, BsTwitter, BsLinkedin } from 'react-icons/bs'
import { motion } from "framer-motion";

export const Wrapper = styled.section`
  margin: 120px 0;
  min-height: 100vh;
`

export const Container = styled(motion.div)`
  position: relative;
  overflow: hidden;
  z-index: 0;
  padding: 20px;
  background-color: #f2f2f2;
  box-shadow: 0 0 15px rgba(50, 50, 50, 0.3);
  width: 100%;
  max-width: 900px;
  border-radius: 6px;

  @media (min-width: 768px){
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

export const MiddleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 5px;

  @media (min-width: 375px){
    margin: 0 15px;
  }
`

export const DoctorContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  img {
    height: 220px;
    width: 220px;
    object-fit: cover;
    border-radius: 6px;
    box-shadow: 0 0 15px rgba(50, 50, 50, 0.3);

    @media (min-width: 768px){
      height: 300px;
      width: 300px;
    }
  }

  h2 {
    margin-bottom: 10px;
    text-align: center;
  }

  @media (min-width: 768px){
    margin-right: 40px;
  }
`

export const InfoContainer = styled.div`
`

export const DescriptionsText = styled.h3`
  font-weight: normal;
`

export const Title = styled.h3`
  margin: 15px 0 10px;
  color: #02adbe;
  text-align: center;
`

export const DecorativeCircle = styled.div`
  display: none;

  @media (min-width: 768px){
    left: -200px;
    display: block;
    z-index: -1;
    position: absolute;
    width: 600px;
    height: 600px;
    background-color: rgba(2, 174, 190, 0.7);
    border-radius: 50%;
  }

  @media (min-width: 1024px){
    left: -210px;
  }
`

export const InfoSvg = styled(HiInformationCircle)`
  display: none;

  @media (min-width: 360px){
    display: block;
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 40px;
    color: #02adbe;
    animation: moveIcon 3s ease-in-out infinite;

    @keyframes moveIcon {
      0% { top: 10px}
      50% { top: 5px }
      100% { top: 10px }
    }
  }
`

export const SocialMediaWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    font-size: 28px;
    padding: 5px;
    margin: 0 5px;
    cursor: pointer;
    transition: transform 0.2s;

    &:hover {
      transform: scale(1.1);
    }
  }
`

export const FbIcon = styled(BsFacebook)`
  color: #3b5998;
`

export const TwitterIcon = styled(BsTwitter)`
  color: #1da1f2;
`

export const LinkedIcon = styled(BsLinkedin)`
  color: #0e76a8;
`