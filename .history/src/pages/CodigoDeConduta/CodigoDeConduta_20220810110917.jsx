import React from "react";
import Empresa from "../../components/empresa/empresa";
import PdfView from "../../components/pdf/pdf";
import ArrowImage from "../../assets/icons/Aback.svg";
import Header from "../../components/header/header";
import BoxText from "../../components/boxText/boxText";
import Title from "../../components/titleDownload/titleDownload";
import Dwonload from "../../assets/icons/download.svg";
import { Container } from "../../components/Container/index";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const CodigoDeConduta = () => {
  return (
    <div>
      <div className="background-lair">
        <div className="blur">
          <Header image={ArrowImage} />
          <Empresa />

          <Title image={Dwonload} />
          {/* <BoxText
          title="L Í D E R B R A S I L D I S T R I B U I D O R A"
            text="
          
            PRINCÍPIOS GERAIS

            O Código foi construído com a participação da empresa e de seu consultor o CEO da
            empresa e a Gerência. Todas as ações que adotamos no exercício de nossas funções de
            trabalho devem ser baseados em princípios éticos norteadores, no relacionamento com
            nossos clientes internos e externos, fornecedores, prestadores de serviços, comunidade,
            mídia, e demais partes interessadas e relacionadas.

            A QUEM O CÓDIGO SE APLICA
            
            As normas deste Código de Conduta e Ética se aplicam aos seus colaboradores:
            empregados (sem distinção de cargo ou função), aos aprendizes, aos estagiários, aos
            assessores, aos Administradores (Conselheiros e Diretores), ainda que transitoriamente
            e sem remuneração, por eleição, nomeação, designação, contratação ou qualquer outra
            forma de investidura ou vínculo com a Líder Brasil. Sujeitam-se ainda, no que
            couberem, os contratados terceirizados e prestadores de serviços.

            A LÍDER BRASIL COMPROMETE-SE A:
            
            Cumprir e promover o cumprimento deste Código de Conduta e Ética mediante
            dispositivos de gestão, divulgando-o permanentemente no intuito de esclarecer dúvidas
            e acolher sugestões, bem como submeter as suas práticas a processos de avaliação
            periódica;

            Garantir segurança e saúde no trabalho, disponibilizando as condições e equipamentos
            necessários. Manter os programas de Saúde e Segurança do Trabalho, visando à higiene
            ocupacional e prevenção de acidentes e doenças ocupacionais, de forma a proporcionar
            um local de trabalho seguro e saudável;

            Assegurar a disponibilidade e transparência das informações que afetam os seus
            empregados, preservando os direitos de privacidade no manejo de informações médicas,
            funcionais e pessoais a eles pertinentes;

            Reconhecer o direito de livre associação de seus empregados, respeitar e valorizar sua
            participação no sindicato e não praticar ou permitir qualquer tipo de discriminação com
            relação a seus empregados, sindicalizado ou não;

            Respeitar e promover a diversidade e combater todas as formas de preconceito e
discriminação, por meio de política transparente de admissão, treinamento, promoção na
carreira, ascensão a cargos e na aplicação de penalidades. Nenhum colaborador ou
potencial colaborador receberá tratamento discriminatório em conseqüência de sua raça,
cor de pele, origem étnica, nacionalidade, posição social, idade, religião, gênero,
orientação sexual, estética pessoal, condição física, mental ou psíquica, estado civil,
opinião, convicção política, ou qualquer outro fator de diferenciação individual;
Promover igualdade de oportunidades para todos os empregados, em todas as políticas,
práticas e procedimentos, assegurando a aplicação do princípio da isonomia nas relações
de trabalho;
Promover de forma ampla e transparente a divulgação das normas internas da Líder
Brasil;
Desenvolver uma cultura organizacional que valoriza o intercâmbio e a disseminação de
conhecimentos, promovendo a capacitação contínua de seus empregados através do
projeto #EUSOLIDER
Respeitar os Estatutos e os Códigos de Ética que disciplinam e regulamentam a
profissão dos seus empregados;
Garantir que recursos humanos e materiais disponíveis, sob sua responsabilidade, sejam
aplicados com a máxima eficiência, de forma sustentável, na execução das atividades da
Líder Brasil.
SÃO DEVERES DOS COLABORADORES:
Observar e respeitar as políticas, regulamentos e procedimentos corporativos, o disposto
neste Código de Conduta e Ética e demais normas vigentes;
Ser assíduo e pontual;
Comunicar e justificar ao superior hierárquico os casos de atraso, esquecimentos do
crachá e, registro do ponto quando obrigatório;
Portar-se com respeito, correção e presteza de acordo com os bons costumes, enquanto
estiver a serviço da Líder Brasil;
Exercer com zelo e dedicação as atribuições do seu cargo/função;
Tratar as pessoas com urbanidade, sem discriminação, seja por cor, etnia, classe social,
convicção política, naturalidade, sexo, identidade de gênero, orientação sexual, credo, 
          
          
          "
          /> */}

          <PdfView />
          <center>
            <Container triggerText="Li e aceito os " />
          </center>
          {/*  onSubmit={onSubmit} */}
        </div>
      </div>
    </div>
  );
};

export default CodigoDeConduta;
