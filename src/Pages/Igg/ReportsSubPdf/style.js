import styled from "styled-components";
import image from "../../../assets/CapaRelatorio.png";

export const CapaRelatorio = styled.section`
  max-height: 810px;
  height: 790px;

  background-image: url(${image});
  background-repeat: no-repeat;
  background-size: cover;

  img {
    width: 100%;
    height: 794px;
  }

  header {
    display: flex;
    justify-content: space-between;
    padding: 0px 40px;
    img {
      width: 300px;
      height: 50px;
      margin: 10px 20px;
    }
  }

  h1 {
    width: 400px;
    font-size: 2.5rem;
    position: relative;
    top: 70%;
    left: 60%;
    text-shadow: -2px -2px 0px #fff,
      // bora no texto
      -2px 2px 0px #fff,
      2px -2px 0px #fff, 2px 0px 0px #fff;
    margin: 0px;
  }

  h4 {
    width: 420px;
    font-size: 1.35rem;
    position: relative;
    top: 70%;
    left: 60%;
    text-shadow: -2px -2px 0px #fff,
      // bora no texto
      -2px 2px 0px #fff,
      2px -2px 0px #fff, 2px 0px 0px #fff;
    margin: 0px;
  }
`;

export const CalculoIGG = styled.section`
  height: 780px;
  background: var(--white);
  font-size: 12px;
  line-height: 16px;
  font-weight: 600;

  > div {
    width: 1094px;
    margin: 0 auto;
    padding: 0px 10px 0px 60px;
    background: var(--white);

    h3 {
      background: var(--white);
      width: 100%;
      background: #958671;
      color: #000000;
      padding: 5px 0px;
      text-align: center;
      border: 1px solid #958671;
    }
    .logo {
      width: 100%;
      display: flex;
      justify-content: space-between;
      margin-top: 0px;
      margin-bottom: 10px;
      padding: 10px 0px 0px 0px;
      img {
        width: 200px;
      }
    }

    .dadosPrincipais {
      border: 1px solid #000000;
      width: 100%;
      ul {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;

        li {
          padding:0px 5px;
          strong {
            display: flex;
            padding: 5px 0px;

            p {
              margin-left: 10px;
            }
          }
        }
      }
    }

    .dados {
      padding: 10px;
      grid-column: 1 / 5;
      display: flex;
      div {
        width: 80%;
      }
    }

    .data {
      border: 1px solid #000;
      border-top: none;
      border-bottom: none;
      padding: 0px 0px;
      ul {
        display: block;
        li {
          height: 100%;
          div {
            width: 100px;
            padding: 0px;
          }
          padding-top: 10px;
          padding-bottom: 10px;
          padding-left: 0px;
        }
      }
    }

    .folhaEstacao {
      border: 1px solid #000;
      border-top: none;
      border-bottom: none;
      border-right: none;
      border-left: none;
      padding: 0px 0px;
      ul {
        display: block;
        li {
          height: 100%;
          padding-top: 10px;
          padding-bottom: 10px;
        }
      }
    }

    table {
      width: 100%;
      text-align: center;
      border-collapse: collapse; // tira o espaço entra a colonas
      thead {
        width: 100%;
        background: #958671;
        th {
          text-align: center;
          border: 1px solid #000;
          padding: 2px 2px;
        }
      }

      td {
        text-align: center;
        padding: 0px 0px;
        border: 1px solid #000000;
        ul {
          li {
            text-align: left;
            padding: 5px 5px;
            border-bottom: 1px solid #000;
          }

          li:last-child {
            border-bottom: none;
          }
        }

        .FrequenciaAbsoluta {
          li {
            text-align: center;
          }
        }
      }

      td:last-child {
        color: var(--white);
      }
      td:nth-child(4) {
        width: 150px;
      }

      td:nth-child(8) {
        width: 150px;
      }

      .item2 {
        td {
          text-align: left;
          padding: 5px 5px;
          text-align: center;
          ul {
            li {
              text-align: left;
              padding: 10px 5px;
              border-bottom: 1px solid #000;
            }

            li:last-child {
              border-bottom: none;
            }
          }
        }

        td:nth-child(2) {
          text-align: left;
        }

        .tdItmeTre {
          p {
            position: relative;
            top: -8px;
            right: 28px;
            font-size: 10px;
          }
        }

        .position1A1B {
          padding: 2px 0px;
          p:first-child {
            padding: 4px 0px;
            border-bottom: 1px solid black;
          }
        }
      }

      .multiItem {
        td {
          text-align: left;
          text-align: center;
          ul {
            li {
              text-align: center;
              padding: 10px 5px;
              border-bottom: 1px solid #000;
            }

            li:last-child {
              border-bottom: none;
            }
          }
        }
        td:nth-child(2) {
          ul {
            text-align: left;
          }
        }
      }

      .footer {
        background: #958671;
        td:nth-child(1) {
          border-right: none;
        }
        td:nth-child(2) {
          border-left: none;
          h4 {
            padding: 2px 0px;
          }
        }

        td:nth-child(3) {
          background: #c4bd97;
        }
        td:nth-child(4) {
          border-right: none;
          z-index: 1;
          max-width: 130px;
          h4 {
            padding: 2px 0px;
            position: relative;
            z-index: 100;
            width: 250px;
            left: 50%;
          }
        }
        td:nth-child(5) {
          border-left: none;
          border-right: none;
          h4 {
            padding: 2px 0px;
          }
        }

        td:nth-child(6) {
          border-right: none;
          border-left: none;
          h4 {
            padding: 2px 0px;
          }
        }
      }

      .ResultadoIGG {
        td:nth-child(1) {
          border-right: none;
          border-bottom: none;
          border-left: none;
        }
        td:nth-child(2) {
          border-left: none;
          border-right: none;
          border-bottom: none;
        }

        td:nth-child(3) {
          border-right: none;
          border-left: none;
          border-bottom: none;
        }
        td:nth-child(4) {
          border-right: none;
          border-left: none;
          border-bottom: none;
        }
        td:nth-child(5) {
          border-left: none;
          border-right: none;
          border-bottom: none;
        }

        td:nth-child(6) {
          border-right: none;
          border-left: none;
          border-bottom: none;
          color: var(--white);
        }

        td:nth-child(7) {
          h4 {
            padding: 2px 0px;
            font-size: 1rem;
          }
        }

        td:nth-child(8) {
          h4 {
            padding: 10px 0px;
            font-size: 1rem;
          }
        }
      }
    }

    .formula {
      padding: 0px;
      img {
        padding: 5px;
        position: relative;
        top: -38px;
        border: 3px solid var(--gray-400);
      }
    }
    .tdCinza {
      background: #c9c6c6;
    }
    .tdLaranja {
      background: #d1a894;
    }

    .espaco {
      width: 47px;
    }
  }
  .TricasFadigas {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 1224px) {
    .linha4LiTop {
      p {
        position: relative;
        top: -7px;
      }
    }

    .linha4LiBottom {
      p {
        position: relative;
        top: 7px;
      }
    }
  }
`;

export const FormulaCalculoIGG = styled.section`
  height: 770px;
  background: var(--white);
  font-size: 12px;
  // margin-top: 40px;
  div {
    width: 1094px;

    margin: 0 auto;
    padding: 0px 10px 0px 60px;
    background: var(--white);
    .logo {
      width: 100%;
      display: flex;
      justify-content: space-between;
      margin-top: 0px;
      margin-bottom: 20px;
      padding: 10px 0px 0px 0px;
      img {
        width: 200px;
      }
    }

    h3 {
      background: var(--white);
      width: 100%;
      background: #958671;
      color: #000000;
      padding: 5px 0px;
      text-align: center;
      border: 1px solid #958671;
    }

    .formulas {
      width: 100%;
      ul {
        margin-top: 20px;
        li {
          font-size: 1.125rem;
          margin-bottom: 10px;

          div {
            padding: 0px;
            width: 95vw;
            img {
              margin-right: 20px;
              max-width: 250px;
            }
          }
          .IDGIN {
            width: 900px;
            margin: 0px;
          }

          table {
            margin-top: 20px;
            border: 1px solid var(--gray-400);
            tr {
              th {
                width: 150px;
                text-align: center;
                border: 1px solid var(--gray-400);
              }

              td {
                text-align: center;
                border: 1px solid var(--gray-400);
                padding: 2px;
              }
            }
          }
        }

        .tableIGG {
          max-width: 320px;
          border: none;
        }
      }
    }
  }
`;

export const InventarioIGG = styled.section`
  height: 780px;
  background: var(--white);
  font-size: 12px;

  > div {
    width: 1094px;
    margin: 0 auto;
    padding: 0px 10px 0px 60px;
    background: var(--white);

    h3 {
      background: var(--white);
      width: 100%;
      background: #958671;
      color: #000000;
      padding: 5px 0px;
      text-align: center;
      border: 1px solid #958671;
    }
    .logo {
      width: 100%;
      display: flex;
      justify-content: space-between;
      margin-top: 0px;
      margin-bottom: 20px;
      padding: 10px 0px 0px 0px;
      img {
        width: 200px;
      }
    }

    .dadosPrincipais {
      border: 1px solid #000000;
      width: 100%;
      padding: 0px 10px;
      ul {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;

        li {
          padding: 5px;
          strong {
            display: flex;
            padding: 5px 0px;

            p {
              margin-left: 10px;
            }
          }
        }
      }
    }

    .dados {
      padding: 10px;
      grid-column: 1 / 5;
      display: flex;
      div {
        width: 80%;
      }
    }

    .data {
      border: 1px solid #000;
      border-top: none;
      border-bottom: none;
      padding: 0px 0px;
      ul {
        display: block;
        li {
          height: 100%;
          div {
            width: 100px;
            padding: 0px;
          }
          padding-top: 10px;
          padding-bottom: 10px;
          padding-left: 0px;
        }
      }
    }

    .folhaEstacao {
      border: 1px solid #000;
      border-top: none;
      border-bottom: none;
      border-right: none;
      border-left: none;
      padding: 0px 0px;
      ul {
        display: block;
        li {
          height: 100%;
          padding-top: 10px;
          padding-bottom: 10px;
        }
      }
    }

    .rotulo {
      width: 100%;
      padding: 0px;
      ul {
        display: grid;
        grid-template-columns: 1.17fr 1fr 1fr 1fr 1fr;

        li {
        }
      }
    }

    table {
      width: 100%;
      text-align: center;
      border-collapse: collapse; // tira o espaço entra a colonas
      margin: 0 auto;
      thead {
        width: 100%;
        background: #958671;
        th {
          text-align: center;
          border: 1px solid #000;
          padding: 3px;
          font-size: 10px;
        }
      }

      td {
        text-align: center;
        padding: 5px;
        font-size: 10px;
        height: 35.53px;
        border: 1px solid #000000;
      }
    }
    .tdCinza {
      background: #c9c6c6;
    }
    .tdLaranja {
      background: #d1a894;
    }

    .espaco {
      width: 47px;
    }

    .CollumObservaçao {
      z-index: 1000;
      position: relative;
      background: red;
      padding: 2px;
      right: 800px;
      top: 10px;
    }

    .legendasTeste {
      width: 100%;
      padding: 10px 0px;
      display: flex;
      gap: 20px;
      ul {
        width: 350px;
        border: 1px solid var(--gray-400);
        h4 {
          font-size: 12px;
          text-align: center;
          padding: 2px;
          border-bottom: 1px solid var(--gray-400);
        }
        div {
          width: 100%;
          display: flex;
          justify-content: space-between;
          padding: 0px;
          li {
            font-size: 14px;
            width: 100%;

            h5 {
              padding-top: 2px;
              font-size: 10px;
              text-align: center;
              border-bottom: 1px solid var(--gray-400);
            }
            div {
              width: 100%;

              margin-top: 0px;
            }
            p {
              height: 100%;
              width: 100%;
              padding: 2px;
              text-align: center;
              padding: 5px 5px;
              border-right: 1px solid var(--gray-400);
              font-size: 10px;
            }

            p:last-child {
              border-bottom: none;
              border-right: none;
              text-align: center;
            }
          }

          li:first-child {
            border-right: 1px solid var(--gray-400);
          }

          li:last-child {
            div {
              display: flex;
              width: 100%;
              text-align: center;
              span {
                width: 100%;
                border-right: 1px solid var(--gray-400);
                text-align: center;
                text-align: center;
                h5 {
                  margin: 0px 0px;
                }
                div {
                  justify-content: center;
                  text-align: center;
                }
              }
              span:last-child {
                border-right: none;
              }
            }
          }
        }
      }
    }
  }
`;

export const InventarioImage = styled.section`
  height: 780px;
  background: var(--white);
  font-size: 12px;
  width: 1094px;
  margin: 0 auto;
  padding: 0px 10px 0px 60px;
  background: var(--white);
  > div {
    padding: 0px 10px 0px 60px;
  }

  h3 {
    background: var(--white);
    width: 100%;
    background: #958671;
    color: #000000;
    padding: 5px 0px;
    text-align: center;
    border: 1px solid #958671;
  }

  .logo {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: 0px;
    margin-bottom: 20px;
    padding: 10px 0px 0px 0px;
    img {
      width: 200px;
    }
  }

  .dadosPrincipais {
    border: 1px solid #000000;
    width: 100%;
    padding: 0px 10px;
    ul {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;

      li {
        padding: 5px;
        strong {
          display: flex;
          padding: 5px 0px;

          p {
            margin-left: 10px;
          }
        }
      }
    }
  }

  .dados {
    padding: 10px;
    grid-column: 1 / 5;
    display: flex;
    div {
      width: 80%;
    }
  }

  .data {
    border: 1px solid #000;
    border-top: none;
    border-bottom: none;
    padding: 0px 0px;
    ul {
      display: block;
      li {
        height: 100%;
        div {
          width: 100px;
          padding: 0px;
        }
        padding-top: 10px;
        padding-bottom: 10px;
        padding-left: 0px;
      }
    }
  }

  .folhaEstacao {
    border: 1px solid #000;
    border-top: none;
    border-bottom: none;
    border-right: none;
    border-left: none;
    padding: 0px 0px;
    ul {
      display: block;
      li {
        height: 100%;
        padding-top: 10px;
        padding-bottom: 10px;
      }
    }
  }

  .divPhoto {
    background: var(--white);
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-bottom: 60px;
    //  border: 1px solid #000;
    li {
      width: 100%;
      border: 1px solid #000;
      header {
        width: 100%;
        border: none;

        border-left: none;

        h3 {
          background: #958671;
          width: 100%;
          font-size: 12px;
        }
        ul {
          display: flex;
          //    border-bottom: 1px solid #000;
          li {
            padding: 2px 6px;
            border: none;
            border-bottom: 1px solid #000;
            height: 34px;
          }
          li:nth-child(1) {
            width: 70px;
          }
        }
      }
      img {
        width: 100%;
        height: 220px;
        padding: 5px;
      }
    }
  }
`;
