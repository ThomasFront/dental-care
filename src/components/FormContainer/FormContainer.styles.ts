import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  margin: 20px 15px 60px;
  padding: 20px;
  box-shadow: 0 0 15px rgba(50, 50, 50, 0.3);
  border-radius: 6px;
  max-width: 500px;
  width: 100%;
  background-color: #fff;

  form {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    
    p {
      color: crimson;
      font-size: 12px;
      margin-bottom: 10px;
      text-align: center;
    }
  }

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