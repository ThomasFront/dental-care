import styled from "styled-components";

export const Wrapper = styled.div`
  min-height: 100vh;
`

export const ContentContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  margin: 60px 15px 0;
  padding: 20px;
  box-shadow: 0 0 15px rgba(50, 50, 50, 0.3);
  border-radius: 6px;
  max-width: 500px;
  width: 100%;
  background-color: #fff;
`

export const WelcomeContainer = styled.div`
  margin: 10px 0 20px;

  span {
   font-weight: bold;
  }
  
`

export const CategoriesContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 80%;
`

export const CategoryInformation = styled.div`
  margin-top: 40px;
`