import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0px 10px 0px 0px;
  height: 60vh;
  width: 90%;
  height: 70vh;
  margin: 25px auto;

  .pin {
    width: 50px;
  }

  .img {
    width: 600px;
  }

  .ImgDiv {
    background: rgba(0, 0, 0, 0.2);
    height: 100%;
    width: 100%;
    position: absolute;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;

    div {
      header {
        display: flex;
        justify-content: flex-end;

        button {
          padding: 2px 2px;
          margin-bottom: 2px;
          border: none;
          background: none;

          border-radius: 5px;
          svg {
            height: 100%;
          }
        }
      }
    }
  }
`;