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

export function ReportsPdf() {
  return (
    <section className="bg-white h-screen w-screen">
      <CapaRelatorio>
        <header>
          <img src={LogoEncibra} alt="" />
          <img src={LogoSetran} alt="" />
        </header>
        <h1>Teste TEste 40</h1>
        <h4>Trecho</h4>
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
                      Trincas Isoladas, atribuidas a fadiga: TTC, TTL, TLC, TLL
                    </li>
                    <li>Trincas Isoladas não atribuidas a fadiga: TRR</li>
                  </ul>
                </td>
                <td>
                  <ul className="FrequenciaAbsoluta">
                    <li>12</li>
                    <li className="TricasFadigas">12</li>
                    <li>12</li>
                  </ul>
                </td>
                <td>
                  <ul className="FrequenciaAbsoluta">
                    <li>23</li>
                    <li className="TricasFadigas">23</li>
                    <li>23</li>
                  </ul>
                </td>
                <td className="frenquenciaRelativa">
                  <ul className="FrequenciaAbsoluta">
                    <li>12</li>
                    <li className="TricasFadigas">12</li>
                    <li>12</li>
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
                    <li>12</li>
                    <li className="TricasFadigas">12</li>
                    <li>12</li>
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
                <td>12</td>
                <td>12</td>
                <td className="FrenquenciaRelativa">12</td>
                <td>0,5</td>
                <td>12</td>
                <td>{""}</td>
              </tr>

              {/**linha 3*/}
              <tr className="item2">
                <td>3</td>
                <td>Trincas Interligadas, com erosão: (FC-3) JE, TBE</td>
                <td>12</td>
                <td>12</td>
                <td>12</td>
                <td>0,8</td>
                <td>12</td>
                <td>{""}</td>
              </tr>

              {/**linha 4*/}
              <tr>
                <td>4</td>
                <td>
                  <ul>
                    <li>
                      Afundamento Plástico Local (ALP) e Afundamento Plástico da
                      Trilha (ATP)
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
                      <p>12</p>
                    </li>
                    <li className="linha4LiBottom">
                      <p>12</p>
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
                      <p>12</p>
                    </li>
                    <li className="linha4LiBottom">
                      <p> 21</p>
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
                      <p>21</p>
                    </li>
                    <li className="linha4LiBottom">
                      <p>12</p>
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
                    <li>12</li>
                    <li>12</li>
                    <li>12</li>
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
                    <li>12</li>
                    <li>12</li>
                    <li>12</li>
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
                    <li>12</li>
                    <li>12</li>
                    <li>12</li>
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
                <td>12</td>
                <td style={{ background: "#5B5B5B", color: "#5B5B5B" }}>
                  {"."}
                </td>
                <td>12</td>
                <td>0,5</td>
                <td>12</td>
                <td>{""}</td>
              </tr>

              {/**linha 7*/}
              <tr className="item2">
                <td>7</td>
                <td>Desgaste acentuado do pavimento - D</td>
                <td>12</td>
                <td style={{ background: "#5B5B5B", color: "#5B5B5B" }}>12</td>
                <td>12</td>
                <td>0,3</td>
                <td>12</td>
                <td>{""}</td>
              </tr>

              {/**linha 8*/}
              <tr className="item2">
                <td>8</td>
                <td>Remendos - R</td>
                <td>12</td>
                <td style={{ background: "#5B5B5B", color: "#5B5B5B" }}>12</td>
                <td>
                  {/**FrenquenciaRelativa(countRtotal).toLocaleString() */}0
                </td>
                <td>0,6</td>
                <td>
                  {/**calculoIGGIndividual(
                                  FrenquenciaRelativa(countRtotal),
                                  0.6
                                ).toLocaleString() */}
                  0
                </td>
                <td>{""}</td>
              </tr>

              {/**linha 9*/}
              <tr className="item2">
                <td>9</td>
                <td>
                  Média aritmética dos valores médios das flechas medidas em mm
                  nas TRI e TRE
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
                <td>12</td>
                <td>
                  <h4>∑ IGI = INDICE DE GRAVIDADE GLOBAL</h4>
                </td>
                <td></td>
                <td></td>
                <td>
                  <h4 style={{ color: "white" }}>IGG</h4>
                </td>
                <td>
                  <h4>CONCEITO</h4>
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
              <tr>
                <td>12</td>
                <td>001</td>
                <td>BD</td>
                <td>{}</td>
                <td className="tdCinza espaco">FI</td>
                <td className="tdCinza espaco">TTC</td>
                <td className="tdCinza espaco">TTL</td>
                <td className="tdCinza espaco">TLC</td>
                <td className="tdCinza espaco">TLL</td>
                <td className="tdCinza espaco">TRR</td>
                <td className="espaco">J</td>
                <td className="espaco">TB</td>
                <td className="tdCinza espaco">JE</td>
                <td className="tdCinza espaco">TBE</td>
                <td className="espaco">ALP</td>
                <td className="espaco">ATP</td>
                <td className="espaco">ALC</td>
                <td className="espaco">ATC</td>
                <td className="tdCinza espaco">O</td>
                <td className="tdCinza espaco">P</td>
                <td className="tdCinza espaco">E</td>
                <td className="espaco">EX</td>
                <td className="tdCinza espaco">D</td>
                <td className="espaco">R</td>
                <td className="tdLaranja espaco">TRI</td>
                <td className="tdLaranja espaco">TRE</td>
                <td>teste</td>
              </tr>
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
          <li>
            <header>
              <h3>Foto 12</h3>
              <ul className="title">
                <li>teste</li>
                <li>teste</li>
              </ul>
            </header>
            <img src="" alt="teste" />
          </li>
        </ul>
      </InventarioImage>
    </section>
  );
}
