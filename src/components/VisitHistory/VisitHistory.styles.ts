import styled from "styled-components";

export const TitleBox = styled.div`
  margin-bottom: 20px;

  p {
    text-align: center;
    color: #02adbe;
  }
`

export const Container = styled.div`
`

export const VisitInformation = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;

  p {
    margin: 0 2px;
    color: gray;
    width: 25%;
    text-align: center;
  }
`

export const AllVisitsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const EmptyVisitsText = styled.p`
  text-align: center;
  text-transform: uppercase;
  font-weight: 300;
`