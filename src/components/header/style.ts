import { styled } from "styled-components"

export const TagHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;

  background: #202123;
  z-index: 1;
  nav{
    max-width: 1200px;
    margin: 0 auto;

    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;

    padding: 20px;
    form {
      display: flex;
      gap: 10px;
      input{
        padding: 10px 20px;
        border: solid 2px #ececf1a9;
        background: transparent;
        outline: none;
        border-radius: 4px;
        font-size: 16px;
      }
      button{
        padding: 10px 20px;
        border: solid 2px #ececf1a9;
        font-size: 18px;
        cursor: pointer;
        background: rgb(15, 197, 124);
        color: #202123;
        border-radius: 4px;
        text-transform: capitalize;
      }
    }
  }

  @media (max-width: 547px) {
    nav{
      flex-direction: column;
    }
  }
  @media (max-width: 430px) {
    form{
      flex-direction: column;
    }
  }
`