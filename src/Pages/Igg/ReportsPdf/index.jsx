import LogoEncibra from "../../../assets/Logo.svg";
import LogoSetran from "../../../assets/LogoSetran.png";
import indiceGravidadeIndividualIMG from "../../../assets/indiceGravidadeIndividual.png";
import TabelaIgiIMG from "../../../assets/TableIGG.png";
import frequenciaRelativaIMG from "../../../assets/frequenciarelativa.png";
import {
  CapaRelatorio,
  CalculoIGG,
  FormulaCalculoIGG,
  InventarioIGG,
  InventarioImage,
} from "./style";
import { useLocation, useParams } from "react-router-dom";
import { useContext } from "react";
import { UserContextRoad } from "../../../Context/useContextRoad";
import { useEffect } from "react";

export function ReportsPdf() {
  const params = useParams();
  const { Roads, dataRoad, setIdReloadRoad } = useContext(UserContextRoad);
  const { pathname } = useLocation();
  let totalPaginas = 0;
  let totalPaginasPhoto = 0;
  let totalIgg = 0;

  useEffect(() => {
    Roads(params.id);
    setIdReloadRoad(params.id);
  }, [pathname]);

  const DataIgg = dataRoad.iggs?.filter((igg) => igg.id === Number(params.igg));
  const DataVideo = dataRoad.videos?.filter(
    (video) => video.id === Number(DataIgg[0].videoId)
  );
  const DataPatology = dataRoad.patology
    ?.filter((patologys) => patologys.videoId === DataVideo[0].id)
    .sort((a, b) => a.km - b.km);

  // função para mostrar o array em lista de 14 items
  function splitArrayforTen() {
    var resultado = [];
    var grupo = 0;

    if (DataPatology) {
      for (var i = 0; i < DataPatology.length; i++) {
        if (resultado[grupo] === undefined) {
          resultado[grupo] = [];
        }

        resultado[grupo].push(DataPatology[i]);

        if ((i + 1) % 14 === 0) {
          grupo = grupo + 1;
        }
      }
    }

    if (DataPatology) {
      totalPaginas = DataPatology.length / 10;
    }

    return resultado[0];
  }

  // função para mostrar o array em lista de 4 items
  function splitArrayforFour() {
    var resultado = [];
    var data2 = [];
    var grupo = 0;

    DataPatology?.map((item) => {
      if (item.screenshotUrl !== "") {
        data2.push(item);
      }
    });

    if (DataPatology) {
      for (let i = 0; i < data2.length; i++) {
        if (resultado[grupo] === undefined) {
          resultado[grupo] = [];
        }

        resultado[grupo].push(
          data2.sort(function (a, b) {
            return a.km < b.km ? -1 : a.km > b.km ? 1 : 0;
          })[i]
        );

        if ((i + 1) % 4 === 0) {
          grupo = grupo + 1;
        }
      }
    }
    totalPaginasPhoto = data2.length / 4;
    return resultado[0];
  }

  // soma os item do inventario
  const somaSags = DataPatology?.reduce(
    (acc, patology) => {
      const sags = JSON.parse(patology.sags);

      if (!patology.observation) {
        if (sags.ATP === true) {
          acc.ATP += 1;
          acc.total += 1;
          acc.totalAlpAtp += 1;
        }

        if (sags.ALP === true) {
          acc.ALP += 1;
          acc.total += 1;
          acc.totalAlpAtp += 1;
        }

        if (sags.ALC === true) {
          acc.ALC += 1;
          acc.total += 1;
          acc.totalAlcAtc += 1;
        }

        if (sags.ATC === true) {
          acc.ATC += 1;
          acc.total += 1;
          acc.totalAlcAtc += 1;
        }
      }
      return acc;
    },
    {
      ATP: 0,
      ALP: 0,
      ALC: 0,
      ATC: 0,
      totalAlpAtp: 0,
      totalAlcAtc: 0,
      total: 0,
    }
  );

  const somaCracks = DataPatology?.reduce(
    (acc, patology) => {
      const cracks = JSON.parse(patology.cracks);

      if (!patology.observation) {
        if (cracks.FI === true) {
          acc.FI += 1;
          acc.total += 1;
        }
        if (cracks.J === true) {
          acc.J += 1;
          acc.total += 1;
          acc.totalTrincasInterligadasSemErosao += 1;
        }

        if (cracks.JE === true) {
          acc.JE += 1;
          acc.total += 1;
          acc.totalTrincasInterligadasComErosao += 1;
        }

        if (cracks.TB === true) {
          acc.TB += 1;
          acc.total += 1;
          acc.totalTrincasInterligadasSemErosao += 1;
        }

        if (cracks.TBE === true) {
          acc.TBE += 1;
          acc.total += 1;
          acc.totalTrincasInterligadasComErosao += 1;
        }

        if (cracks.TLC === true) {
          acc.TLC += 1;
          acc.total += 1;
          acc.totalTrincasIsoladas += 1;
        }

        if (cracks.TLL === true) {
          acc.TLL += 1;
          acc.total += 1;
          acc.totalTrincasIsoladas += 1;
        }

        if (cracks.TRR === true) {
          acc.TRR += 1;
          acc.total += 1;
        }

        if (cracks.TTC === true) {
          acc.TTC += 1;
          acc.total += 1;
          acc.totalTrincasIsoladas += 1;
        }

        if (cracks.TTL === true) {
          acc.TTL += 1;
          acc.total += 1;
          acc.totalTrincasIsoladas += 1;
        }
      }
      return acc;
    },
    {
      FI: 0,
      J: 0,
      JE: 0,
      TB: 0,
      TBE: 0,
      TLC: 0,
      TLL: 0,
      TRR: 0,
      TTC: 0,
      TTL: 0,
      totalTrincasIsoladas: 0,
      totalTrincasInterligadasSemErosao: 0,
      totalTrincasInterligadasComErosao: 0,
      total: 0,
    }
  );

  const somaOtherDefects = DataPatology?.reduce(
    (acc, patology) => {
      const otherDefects = JSON.parse(patology.otherDefects);
      if (!patology.observation) {
        if (otherDefects.D === true) {
          acc.D += 1;
          acc.total += 1;
        }
        if (otherDefects.E === true) {
          acc.E += 1;
          acc.total += 1;
        }

        if (otherDefects.EX === true) {
          acc.EX += 1;
          acc.total += 1;
        }

        if (otherDefects.O === true) {
          acc.O += 1;
          acc.total += 1;
        }

        if (otherDefects.P === true) {
          acc.P += 1;
          acc.total += 1;
        }

        if (otherDefects.R === true) {
          acc.R += 1;
          acc.total += 1;
          acc.totalTrincasIsoladas += 1;
        }
      }
      return acc;
    },
    {
      D: 0,
      E: 0,
      EX: 0,
      O: 0,
      P: 0,
      R: 0,
      total: 0,
    }
  );

  // quantitade de intems do inventario
  const amountStation = DataPatology?.reduce(
    (acc, patology) => {
      if (!patology.observation) {
        acc.total += 1;
      }
      return acc;
    },
    {
      total: 0,
    }
  );

  // frequencia relativa

  function RelativeFrequency(fa) {
    return (fa * 100) / amountStation.total;
  }

  function IndividualIGGCalculation(fr, fp) {
    let valor = fr * fp;
    totalIgg = totalIgg + valor;
    return valor;
  }

  function ConteiIGG(concept) {
    if (+concept <= 20) {
      return "Ótimo";
    } else if (+concept > 20 && +concept <= 40) {
      return "Bom";
    } else if (+concept > 40 && +concept <= 80) {
      return "Regular";
    } else if (+concept > 80 && +concept <= 160) {
      return "Ruim";
    } else if (+concept > 160) {
      return "Pessimo";
    }
  }
  console.log("Data", dataRoad);
  console.log("Data igg", DataIgg);

  if (DataPatology) {
    return (
      <section className="bg-white h-screen w-screen">
        <CapaRelatorio>
          <header>
            <img src={LogoEncibra} alt="" />
            <img src={LogoSetran} alt="" />
          </header>
          <h1 className="font-bold">{dataRoad.acronym}</h1>
          <h4>{DataIgg[0].description}</h4>
        </CapaRelatorio>

        <CalculoIGG>
          <div>
            <div className="logo">
              <img src={LogoEncibra} alt="" />
              <img src={LogoSetran} alt="" />
            </div>
            <h3>PLANILHA DE CÁLCULO DO ÍNDICE DE GRAVIDADE GLOBAL - IGG</h3>

            <div className="dadosPrincipais">
              <ul>
                <li className="dados">
                  <div>
                    <strong>
                      Rodovia: <p>Teste</p>
                    </strong>
                    <strong>
                      Trecho: <p>Teste</p>
                    </strong>
                    <strong>
                      Extensão: <p>12 km</p>
                    </strong>
                  </div>
                  <div>
                    <strong>
                      Núcleo Regional: <p>01</p>
                    </strong>
                    <strong>
                      Revestimento: <p>CBUQ</p>
                    </strong>
                  </div>
                </li>
                <li className="data">
                  <ul>
                    <li>DATA: 12/12/12</li>
                    <li>ESTACA/KM: 12 KM</li>
                  </ul>
                </li>
                <li className="folhaEstacao">
                  <ul>
                    <li style={{ color: "#fff" }}>.</li>
                    <li>ESTACA/KM: 12 KM</li>
                  </ul>
                </li>
              </ul>
            </div>

            <table>
              <thead>
                <tr>
                  <th>Item</th>
                  <th>Natureza do Defeito</th>
                  <th>Frequência Absoluta</th>
                  <th>
                    Frequência Absoluta <br /> considerada
                  </th>
                  <th>Frequência Relativa</th>
                  <th>Fator de Ponderação </th>
                  <th>
                    Índice de Gravidade <br /> Individual (IGI){" "}
                  </th>
                  <th>Observações</th>
                </tr>
              </thead>
              <tbody>
                {/**linha 1*/}
                <tr>
                  <td>1</td>
                  <td>
                    <ul>
                      <li>Fissuras</li>
                      <li>
                        Trincas Isoladas, atribuidas a fadiga: TTC, TTL, TLC,
                        TLL
                      </li>
                      <li>Trincas Isoladas não atribuidas a fadiga: TRR</li>
                    </ul>
                  </td>
                  <td>
                    <ul className="FrequenciaAbsoluta">
                      <li>{somaCracks?.FI}</li>
                      <li className="TricasFadigas">
                        {somaCracks.totalTrincasIsoladas}
                      </li>
                      <li>{somaCracks.TRR}</li>
                    </ul>
                  </td>
                  <td>
                    <ul className="FrequenciaAbsoluta">
                      <li>{somaCracks?.FI}</li>
                      <li className="TricasFadigas">
                        {somaCracks.totalTrincasIsoladas}
                      </li>
                      <li>{somaCracks.TRR}</li>
                    </ul>
                  </td>
                  <td className="frenquenciaRelativa">
                    <ul className="FrequenciaAbsoluta">
                      <li>
                        {RelativeFrequency(somaCracks?.FI).toLocaleString()}
                      </li>
                      <li className="TricasFadigas">
                        {RelativeFrequency(
                          somaCracks.totalTrincasIsoladas
                        ).toLocaleString()}
                      </li>
                      <li>
                        {RelativeFrequency(somaCracks.TRR).toLocaleString()}
                      </li>
                    </ul>
                  </td>
                  <td>
                    <ul className="FrequenciaAbsoluta">
                      <li>0,2</li>
                      <li className="TricasFadigas">0,2</li>
                      <li>0,2</li>
                    </ul>
                  </td>
                  <td>
                    <ul className="FrequenciaAbsoluta">
                      <li>
                        {IndividualIGGCalculation(
                          RelativeFrequency(somaCracks?.FI),
                          0.2
                        ).toLocaleString()}
                      </li>
                      <li className="TricasFadigas">
                        {IndividualIGGCalculation(
                          RelativeFrequency(somaCracks.totalTrincasIsoladas),
                          0.2
                        ).toLocaleString()}
                      </li>
                      <li>
                        {IndividualIGGCalculation(
                          RelativeFrequency(somaCracks.TRR),
                          0.2
                        ).toLocaleString()}
                      </li>
                    </ul>
                  </td>
                  <td>
                    <ul className="FrequenciaAbsoluta">
                      <li>{"."}</li>
                      <li className="TricasFadigas">{"."}</li>
                      <li>{"."}</li>
                    </ul>
                  </td>
                  {/** */}
                </tr>

                {/**linha 2*/}
                <tr className="item2">
                  <td>2</td>
                  <td>Trincas Interligadas, sem erosão: (FC-2) J, TB</td>
                  <td>{somaCracks.totalTrincasInterligadasSemErosao}</td>
                  <td>{somaCracks.totalTrincasInterligadasSemErosao}</td>
                  <td className="FrenquenciaRelativa">
                    {RelativeFrequency(
                      somaCracks.totalTrincasInterligadasSemErosao
                    ).toLocaleString()}
                  </td>
                  <td>0,5</td>
                  <td>
                    {IndividualIGGCalculation(
                      RelativeFrequency(
                        somaCracks.totalTrincasInterligadasSemErosao
                      ),
                      0.5
                    ).toLocaleString()}
                  </td>
                  <td>{""}</td>
                </tr>

                {/**linha 3*/}
                <tr className="item2">
                  <td>3</td>
                  <td>Trincas Interligadas, com erosão: (FC-3) JE, TBE</td>
                  <td>{somaCracks.totalTrincasInterligadasComErosao}</td>
                  <td>{somaCracks.totalTrincasInterligadasComErosao}</td>
                  <td>
                    {RelativeFrequency(
                      somaCracks.totalTrincasInterligadasComErosao
                    ).toLocaleString()}
                  </td>
                  <td>0,8</td>
                  <td>
                    {IndividualIGGCalculation(
                      RelativeFrequency(
                        somaCracks.totalTrincasInterligadasComErosao
                      ),
                      0.8
                    ).toLocaleString()}
                  </td>
                  <td>{""}</td>
                </tr>

                {/**linha 4*/}
                <tr>
                  <td>4</td>
                  <td>
                    <ul>
                      <li>
                        Afundamento Plástico Local (ALP) e Afundamento Plástico
                        da Trilha (ATP)
                      </li>
                      <li>
                        Afundamento de Consolidação Local (ALC) e Afundamento de
                        Consolidação da Trilha (ATC)
                      </li>
                    </ul>
                  </td>

                  <td>
                    <ul className="FrequenciaAbsoluta">
                      <li className="linha4LiTop">
                        <p>{somaSags.totalAlpAtp}</p>
                      </li>
                      <li className="linha4LiBottom">
                        <p>{somaSags.totalAlcAtc}</p>
                      </li>
                    </ul>
                  </td>

                  <td style={{ background: "#5B5B5B", color: "#5B5B5B" }}>
                    <ul className="FrequenciaAbsoluta">
                      <li className="linha4LiTop">
                        <p>{"."}</p>
                      </li>
                      <li className="linha4LiBottom">
                        <p>{"."}</p>
                      </li>
                    </ul>
                  </td>

                  <td>
                    <ul className="FrequenciaAbsoluta">
                      <li className="linha4LiTop">
                        <p>
                          {RelativeFrequency(
                            somaSags.totalAlpAtp
                          ).toLocaleString()}
                        </p>
                      </li>
                      <li className="linha4LiBottom">
                        <p>
                          {RelativeFrequency(
                            somaSags.totalAlcAtc
                          ).toLocaleString()}
                        </p>
                      </li>
                    </ul>
                  </td>

                  <td>
                    <ul className="FrequenciaAbsoluta">
                      <li className="linha4LiTop">
                        <p>0,9</p>
                      </li>
                      <li className="linha4LiBottom">
                        <p>0,9</p>
                      </li>
                    </ul>
                  </td>
                  <td>
                    <ul className="FrequenciaAbsoluta">
                      <li className="linha4LiTop">
                        <p>
                          {" "}
                          {IndividualIGGCalculation(
                            RelativeFrequency(somaSags.totalAlpAtp),
                            0.9
                          ).toLocaleString()}
                        </p>
                      </li>
                      <li className="linha4LiBottom">
                        <p>
                          {IndividualIGGCalculation(
                            RelativeFrequency(somaSags.totalAlcAtc),
                            0.9
                          ).toLocaleString()}
                        </p>
                      </li>
                    </ul>
                  </td>
                  <td>
                    <ul className="FrequenciaAbsoluta">
                      <li className="linha4LiTop">
                        <p>{"."}</p>
                      </li>
                      <li className="linha4LiBottom">
                        <p>{"."}</p>
                      </li>
                    </ul>
                  </td>
                </tr>

                {/**linha 5*/}
                <tr>
                  <td>5</td>

                  <td>
                    <ul>
                      <li>Ondulação / corrugação - O</li>
                      <li>Panelas (buracos) - P</li>
                      <li>Escorregamento do revestimento betuminoso - E</li>
                    </ul>
                  </td>

                  <td>
                    <ul className="FrequenciaAbsoluta">
                      <li>{somaOtherDefects.O}</li>
                      <li>{somaOtherDefects.P}</li>
                      <li>{somaOtherDefects.E}</li>
                    </ul>
                  </td>

                  <td>
                    <ul
                      style={{ background: "#5B5B5B", color: "#5B5B5B" }}
                      className="FrequenciaAbsoluta"
                    >
                      <li>
                        <p>{"."}</p>
                      </li>
                      <li>
                        <p style={{ background: "#5B5B5B", color: "#5B5B5B" }}>
                          {"."}
                        </p>
                      </li>
                      <li>
                        <p style={{ background: "#5B5B5B", color: "#5B5B5B" }}>
                          {"."}
                        </p>
                      </li>
                    </ul>
                  </td>
                  <td>
                    <ul className="FrequenciaAbsoluta">
                      <li>
                        {RelativeFrequency(somaOtherDefects.O).toLocaleString()}
                      </li>
                      <li>
                        {RelativeFrequency(somaOtherDefects.P).toLocaleString()}
                      </li>
                      <li>
                        {RelativeFrequency(somaOtherDefects.E).toLocaleString()}
                      </li>
                    </ul>
                  </td>
                  <td>
                    <ul className="FrequenciaAbsoluta">
                      <li>1,0</li>
                      <li>1,0</li>
                      <li>1,0</li>
                    </ul>
                  </td>
                  <td>
                    <ul className="FrequenciaAbsoluta">
                      <li>
                        {" "}
                        {IndividualIGGCalculation(
                          RelativeFrequency(somaOtherDefects.O),
                          0.1
                        ).toLocaleString()}
                      </li>
                      <li>
                        {IndividualIGGCalculation(
                          RelativeFrequency(somaOtherDefects.P),
                          0.1
                        ).toLocaleString()}
                      </li>
                      <li>
                        {IndividualIGGCalculation(
                          RelativeFrequency(somaOtherDefects.E),
                          0.1
                        ).toLocaleString()}
                      </li>
                    </ul>
                  </td>
                  <td>
                    <ul className="FrequenciaAbsoluta">
                      <li>{"."}</li>
                      <li>{"."}</li>
                      <li>{"."}</li>
                    </ul>
                  </td>
                  {/** */}
                </tr>

                {/**linha 6*/}
                <tr className="item2">
                  <td>6</td>
                  <td>Exsudação do ligante betuminoso no revestimento - Ex</td>
                  <td>{somaOtherDefects.EX}</td>
                  <td style={{ background: "#5B5B5B", color: "#5B5B5B" }}>
                    {"."}
                  </td>
                  <td>
                    {RelativeFrequency(somaOtherDefects.EX).toLocaleString()}
                  </td>
                  <td>0,5</td>
                  <td>
                    {IndividualIGGCalculation(
                      RelativeFrequency(somaOtherDefects.EX),
                      0.5
                    ).toLocaleString()}
                  </td>
                  <td>{""}</td>
                </tr>

                {/**linha 7*/}
                <tr className="item2">
                  <td>7</td>
                  <td>Desgaste acentuado do pavimento - D</td>
                  <td>{somaOtherDefects.D}</td>
                  <td style={{ background: "#5B5B5B", color: "#5B5B5B" }}>
                    12
                  </td>
                  <td>
                    {RelativeFrequency(somaOtherDefects.D).toLocaleString()}
                  </td>
                  <td>0,3</td>
                  <td>
                    {IndividualIGGCalculation(
                      RelativeFrequency(somaOtherDefects.D),
                      0.3
                    ).toLocaleString()}
                  </td>
                  <td>{""}</td>
                </tr>

                {/**linha 8*/}
                <tr className="item2">
                  <td>8</td>
                  <td>Remendos - R</td>
                  <td>{somaOtherDefects.R}</td>
                  <td style={{ background: "#5B5B5B", color: "#5B5B5B" }}>
                    12
                  </td>
                  <td>0</td>
                  <td>0,6</td>
                  <td>0</td>
                  <td>{""}</td>
                </tr>

                {/**linha 9*/}
                <tr className="item2">
                  <td>9</td>
                  <td>
                    Média aritmética dos valores médios das flechas medidas em
                    mm nas TRI e TRE
                  </td>
                  <td className="tdItmeTre">
                    {" "}
                    <p>TRE=</p>
                  </td>
                  <td className="tdItmeTre">
                    <p>TRI=</p>
                  </td>
                  <td className="tdItmeTre">
                    <p>FV=</p>
                  </td>
                  <td className="position1A1B">
                    <p>1A ( )</p>
                    <p>1B ( )</p>
                  </td>
                  <td></td>
                  <td></td>
                </tr>

                {/**linha 10*/}
                <tr className="item2">
                  <td>10</td>
                  <td>
                    Média aritmética das variâncias das flechas medidas em ambas
                    as trilhas.
                  </td>
                  <td className="tdItmeTre">
                    <p>TREv=</p>
                  </td>
                  <td className="tdItmeTre">
                    <p>TRIv=</p>
                  </td>
                  <td className="tdItmeTre">
                    <p>Fv=</p>
                  </td>
                  <td className="position1A1B">
                    <p>2A ( )</p>

                    <p>2B ( )</p>
                  </td>
                  <td className="tdItmeTre"> </td>
                  <td></td>
                </tr>

                {/**linha 11*/}
                <tr className="footer">
                  <td></td>
                  <td>
                    <h4>Nº TOTAL DE ESTAÇÕES</h4>
                  </td>
                  <td>{amountStation.total}</td>
                  <td>
                    <h4>∑ IGI = INDICE DE GRAVIDADE GLOBAL</h4>
                  </td>
                  <td></td>
                  <td></td>
                  <td>
                    <h4 style={{ color: "white" }}>IGG</h4>
                  </td>
                  <td>
                    <h4 style={{ color: "white" }}>CONCEITO</h4>
                  </td>
                </tr>

                {/**resultado igg */}
                <tr className="ResultadoIGG ">
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>
                    <h4>{totalIgg.toLocaleString().toUpperCase()}</h4>
                  </td>
                  <td style={{ color: "black" }}>
                    <h4>{ConteiIGG(totalIgg)}</h4>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </CalculoIGG>

        <FormulaCalculoIGG>
          <div>
            <div className="logo">
              <img src={LogoEncibra} alt="" />
              <img src={LogoSetran} alt="" />
            </div>
            <h3>
              FÓRMULAS USADAS NO CÁLCULO DO ÍNDICE DE GRAVIDADE GLOBAL - IGG
            </h3>

            <div className="formulas">
              <ul>
                <li>
                  <h4>Fórmula Frequência Relativa</h4>
                  <img className="w-64" src={frequenciaRelativaIMG} alt="" />
                </li>
                <li>
                  <h4 className="mb-5">
                    Fórmula Índice de Gravidade Individual (IGI)
                  </h4>
                  <div className="IDGIN flex gap-10">
                    <span className="border-2 border-gray-400">
                      <img
                        className="img-none"
                        src={indiceGravidadeIndividualIMG}
                        alt=""
                      />
                    </span>
                    <span className="border-2 border-gray-400">
                      <img src={TabelaIgiIMG} alt="" />
                    </span>
                  </div>
                </li>
                <li>
                  <h4 className="mt-5">
                    {" "}
                    Conceitos de degradação do pavimento em função do IGG{" "}
                  </h4>
                  <table>
                    <tr className="border">
                      <th>Conceitos</th>
                      <th>Limites</th>
                    </tr>
                    <tr className="border">
                      <td>Otimo</td>
                      <td>0 {"< IGG <="} 20 </td>
                    </tr>
                    <tr className="border">
                      <td>Bom</td>
                      <td>20 {"< IGG <="} 40 </td>
                    </tr>
                    <tr className="border">
                      <td>Regular</td>
                      <td>40 {"< IGG <="} 80 </td>
                    </tr>
                    <tr className="border">
                      <td>Ruim</td>
                      <td>80 {"< IGG <="} 160 </td>
                    </tr>
                    <tr className="border">
                      <td>Péssimo</td>
                      <td>{" IGG >"} 160 </td>
                    </tr>
                  </table>
                </li>
              </ul>
            </div>
          </div>
        </FormulaCalculoIGG>

        <InventarioIGG>
          <div>
            <div className="logo">
              <img src={LogoEncibra} alt="" />
              <img src={LogoSetran} alt="" />
            </div>

            <h3>INVENTÁRIO DO ESTADO DA SUPERFÍCIE DO PAVIMENTO</h3>
            <div className="dadosPrincipais">
              <ul style={{ fontWeight: "bold" }}>
                <li className="dados">
                  <div>
                    <strong>
                      Rodovia: <p>teste</p>
                    </strong>
                    <strong>
                      Trecho: <p>teste</p>
                    </strong>
                    <strong>
                      Extensão: <p>12 km</p>
                    </strong>
                  </div>
                  <div>
                    <strong>
                      Núcleo Regional: <p>12</p>
                    </strong>
                    <strong>
                      Revestimento: <p>CBUQ</p>
                    </strong>
                  </div>
                </li>
                <li className="data">
                  <ul>
                    <li>DATA: 12</li>
                    <li>ESTACA/KM: 21 KM</li>
                  </ul>
                </li>
                <li className="folhaEstacao">
                  <ul>
                    <li>FOLHA: 21</li>
                    <li>ESTACA/KM: 12 KM</li>
                  </ul>
                </li>
              </ul>
            </div>

            <table>
              <thead>
                <tr>
                  <th colSpan={4}></th>
                  <th colSpan={10}>TRINCAS</th>

                  <th colSpan={4}>AFUNDAMENTOS</th>
                  <th colSpan={6}>OUTROS DEFEITOS</th>
                  <th colSpan={2}>TRINCAS RODAS</th>
                  <th></th>
                </tr>
                <tr>
                  <th colSpan={4}></th>
                  <th colSpan={6}>ISOLADAS</th>
                  <th colSpan={4}>INTERLIGADAS</th>
                  <th colSpan={2}>PLASTICAS</th>
                  <th colSpan={2}>CONSOLIDADAS</th>
                  <th colSpan={6}></th>
                  <th colSpan={2}></th>
                  <th colSpan={2}></th>
                </tr>
                <tr>
                  <th>Nº</th>
                  <th>
                    <p>Estaca ou km</p>
                  </th>
                  <th>Lado</th>
                  <th>Seção Terrap</th>
                  <th>FI</th>
                  <th>TTC</th>
                  <th>TTL</th>
                  <th>TLC</th>
                  <th>TLL</th>
                  <th>TRR</th>
                  <th>J</th>
                  <th>TB</th>
                  <th>JE</th>
                  <th>TBE</th>
                  <th>ALP</th>
                  <th>ATP</th>
                  <th>ALC</th>
                  <th>ATC</th>
                  <th>O</th>
                  <th>P</th>
                  <th>E</th>
                  <th>EX</th>
                  <th>D</th>
                  <th>R</th>
                  <th>TRI</th>
                  <th>TRE</th>
                  <th>OBSERVAÇÃO</th>
                </tr>
              </thead>
              <tbody>
                {splitArrayforTen()?.map((patology) => {
                  const roadSide = JSON.parse(patology.roadSide);
                  const cracks = JSON.parse(patology.cracks);
                  const sags = JSON.parse(patology.sags);
                  const otherDefects = JSON.parse(patology.otherDefects);
                  return (
                    <tr>
                      <td>12</td>
                      <td>
                        {Intl.NumberFormat("pt-br", {
                          minimumFractionDigits: 3,
                          maximumFractionDigits: 3,
                        })
                          .format(patology.km)
                          .replace(/,/g, ".")}
                      </td>
                      <td>
                        {(roadSide.BD && "BD") ||
                          (roadSide.BE && "BE") ||
                          (roadSide.EIXO && "EIXO") ||
                          (roadSide.PISTA && "PISTA")}
                      </td>
                      <td>{}</td>
                      <td className="tdCinza espaco">{cracks.FI && "X"}</td>
                      <td className="tdCinza espaco">{cracks.TTC && "X"}</td>
                      <td className="tdCinza espaco">{cracks.TTL && "X"}</td>
                      <td className="tdCinza espaco">{cracks.TLC && "X"}</td>
                      <td className="tdCinza espaco">{cracks.TLL && "X"}</td>
                      <td className="tdCinza espaco">{cracks.TRR && "X"}</td>
                      <td className="espaco">{cracks.J && "X"}</td>
                      <td className="espaco">{cracks.TB && "X"}</td>
                      <td className="tdCinza espaco">{cracks.JE && "X"}</td>
                      <td className="tdCinza espaco">{cracks.TBE && "X"}</td>
                      <td className="espaco">{sags.ALP && "X"}</td>
                      <td className="espaco">{sags.ATP && "X"}</td>
                      <td className="espaco">{sags.ALC && "X"}</td>
                      <td className="espaco">{sags.ATC && "X"}</td>
                      <td className="tdCinza espaco">
                        {otherDefects.O && "X"}
                      </td>
                      <td className="tdCinza espaco">
                        {otherDefects.P && "X"}
                      </td>
                      <td className="tdCinza espaco">
                        {otherDefects.E && "X"}
                      </td>
                      <td className="espaco">{otherDefects.EX && "X"}</td>
                      <td className="tdCinza espaco">
                        {otherDefects.D && "X"}
                      </td>
                      <td className="espaco">{otherDefects.R && "X"}</td>
                      <td className="tdLaranja espaco"></td>
                      <td className="tdLaranja espaco"></td>
                      <td>{patology.observation}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </InventarioIGG>

        <InventarioImage>
          <div className="logo">
            <img src={LogoEncibra} alt="" />
            <img src={LogoSetran} alt="" />
          </div>
          <h3>INVENTÁRIO DO ESTADO DA SUPERFÍCIE DO PAVIMENTO</h3>
          <div className="dadosPrincipais">
            <ul style={{ fontWeight: "bold" }}>
              <li className="dados">
                <div>
                  <strong>
                    Rodovia: <p>teste</p>
                  </strong>
                  <strong>
                    Trecho: <p>teste</p>
                  </strong>
                  <strong>
                    Extensão: <p>12 km</p>
                  </strong>
                </div>
                <div>
                  <strong>
                    Núcleo Regional: <p>01</p>
                  </strong>
                  <strong>
                    Revestimento: <p>CBUQ</p>
                  </strong>
                </div>
              </li>
              <li className="data">
                <ul>
                  <li>12/12/12</li>
                  <li>ESTACA/KM: 12 KM</li>
                </ul>
              </li>
              <li className="folhaEstacao">
                <ul>
                  <li>FOLHA: 12</li>
                  <li>ESTACA/KM: 12 KM</li>
                </ul>
              </li>
            </ul>
          </div>
          <ul className="divPhoto">
            {splitArrayforFour()?.map((image) => {
              return (
                <li>
                  <header>
                    <h3>Foto 12</h3>
                    <ul className="title">
                      <li>
                        {image?.observation ? "Observação:" : "Patologias:"}
                      </li>
                      <li>{image.descrption}</li>
                    </ul>
                  </header>
                  <img src={image?.screenshotUrl} alt="teste" />
                </li>
              );
            })}
          </ul>
        </InventarioImage>
      </section>
    );
  }
}
