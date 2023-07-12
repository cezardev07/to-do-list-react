import { styled } from "styled-components"

export const TagMain = styled.main`
  max-width: 1200px;
  margin: 0 auto;
  margin-top: 90px;
  padding: 0 20px;
  .context-wrap{
    padding: 20px 0;
    border-bottom: solid 2px #ececf1;
  
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    .status{
      p{
        width: 148px;
        font-size: 18px;
      }
    }
    .context{
      width: 100%;
      text-align: center;
      p{
        font-size: 20px;
      }
    } 
    .remove-task{
      display: flex;
      flex-direction: row;
      gap: 10px;
      align-items: center;
      justify-content: center;
      button.concluida{
        padding: 10px 20px;
        color: rgb(15, 197, 124);
      
        font-size: 20px;
        background: transparent;
        border: solid 2px rgb(15, 197, 124);
        cursor: pointer;
        text-transform: capitalize;
        border-radius: 5px;
        transition: all .3s ease;
      }
      button.concluida:hover{
        background: rgba(15, 197, 124, 0.285);
        color: #ececf1;
        border-color: #ececf1;
      }
      
      button.delete{
        padding: 10px 20px;
        color: rgb(211, 55, 122);
      
        font-size: 20px;
        background: transparent;
        border: solid 2px rgb(228, 18, 109);
        cursor: pointer;
        text-transform: capitalize;
        border-radius: 5px;
        transition: all .3s ease;
      }
      button.delete:hover{
        background: rgba(228, 18, 109, 0.105);
        color: #ececf1;
        border-color: #ececf1;
      }
    }
  }

  @media (max-width: 700px) {
    .context-wrap{
      flex-direction: column;
      .context{
        width: 100%;
        max-height: 300px;
        text-align: start;

        overflow: scroll;
          p{
            font-size: 18px;
          }
      } 
    }
  }

  @media (max-width: 547px) {
    margin-top: 140px;
  }
  @media (max-width: 430px) {
    margin-top: 195px;
  }
`