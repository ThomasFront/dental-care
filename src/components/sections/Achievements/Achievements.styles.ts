import styled from "styled-components";

export const Wrapper = styled.section`
  background-color: #02adbe;
`

export const ItemContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin: 0 auto;
  padding: 10px;
  width: 100%;
  max-width: 1200px;
`

export const Title = styled.h2`
  padding-top: 20px;
  margin-bottom: 15px;
  text-align: center;
  text-transform: uppercase;

  @media (min-width: 576px){
    margin-bottom: 30px;
  }
`