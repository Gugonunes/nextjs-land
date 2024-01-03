"use client";
import Form from "./components/form"
import Card from "./components/card"
import Relato from "./components/relato"
import Botao from "./components/botao"
import RedeSocialBotao from "./components/redeSocialBotao"
import { ToastContainer } from "react-toastify";

const LoginPage = () => {
  return (
    <div>
      <section className="bg-e6 py-2">
        <div className="lg:flex lg:justify-center lg:gap-x-20 items-center mx-auto lg:w-[960px] w-[320px] grid justify-items-center gap-y-4 p-2">
          <div >
            <a href="https://www.opyt.net.br/" target="_blank">
              <img src="images/logogrande.png" alt="Logo OPYT, escrito OPYT em branco"></img>
            </a>
          </div>
          <div >
            <a  href="https://www.opyt.net.br/Trindade/planos" target="_blank">
              <Botao tipo="primary" label="Assine agora!" extraClasses="text-lg" />
            </a>
          </div>
          <div >
            <Botao tipo="secondary" label="Chama no zap!" extraClasses="text-lg" />
          </div>
        </div>
      </section>
      <section className="bg-e6 flex py-[40px]">
        <div className="mx-auto lg:w-[960px] w-[320px] lg:flex items-end p-2">
          <div className="lg:w-1/2 flex-1 w-full">
            <h2>
              Procurando o <b>melhor plano de internet</b>, com maior velocidade e
              estabilidade na conexão? Com o nosso <b>COMBO</b> você vai ter acesso aos
              melhores filmes e séries utilizando a <b>melhor internet da região.</b>
            </h2>
            <div className="grid gap-y-3 mt-[20px]">
              <img src="images/1gb.png" className="mx-auto lg:max-w-[403px]" alt="imagem apresentando o Plano 1 GB + HBO max + Estádio TNT por apenas 124,90 reais"></img>
              <img src="images/500mb.png" className="mx-auto lg:max-w-[403px]" alt="imagem apresentando o Plano 500 MB + HBO max + Estádio TNT por apenas 114,90 reais"></img>
            </div>
          </div>
          <div className="lg:w-1/2 flex-1 w-full mt-[20px]">
            <Form></Form>
          </div>
        </div>
      </section>
      <section className="bg-black py-[40px]">
        <div className="mx-auto lg:w-[960px] w-[320px] p-2">
          <h3 className="text-white font-bold text-4xl text-center">
            A Opyt não para de crescer e já somos mais de:
          </h3>
          <div className="lg:flex">
            <div className="flex-1">
              <Card texto="18.000 MIL CLIENTES ATIVOS" imagem="images/trofeu.png" />
            </div>
            <div className="flex-1">
              <Card texto="4.000 KM DE FIBRA" imagem="images/estrela.png" />
            </div>
            <div className="flex-1">
              <Card texto="7 CIDADES ATENDIDAS" imagem="images/casa.png" />
            </div>
          </div>
          <Botao tipo="secondary" label="Chama no zap!" extraClasses="lg:text-3xl text-2xl rounded-[40px] lg:w-1/2 mx-auto block"/>
        </div>
      </section>
      <section className="bg-e6 py-[40px]">
        <div className="mx-auto lg:w-[960px] w-[320px] md:w-[720px] p-2">
          <img src="images/planos.png" alt="imagem de um jovem mexendo no celular com o texto 'Planos de internet feitos pra te conectar com tudo' "></img>
          <Botao tipo="secondary" label="Chama no zap!" extraClasses="text-3xl md:w-full mt-[20px] mx-auto block"/>
        </div>
      </section>
      <section className="bg-e6 py-[40px]">
        <div className="mx-auto lg:w-[960px] w-[320px]">
          <div className="lg:flex items-center">
            <div className="flex-1">
              <Relato
                nome="Ana Júlia"
                nota="images/estrelas.png"
                texto="Wow, mal posso acreditar na velocidade épica dessa conexão! Minhas partidas nunca foram tão suaves. É como se eu estivesse jogando em modo Deus, sem lag ou quedas. Sério, meu provedor de internet é tipo o MVP do meu setup. A latência é tão baixa que parece que estou teleportando meu personagem. É como se tivessem upado minha conexão para um nível de elite! Vocês são os verdadeiros heróis, mantendo minha jornada gamer sem percalços. GG, provedor de internet, GG!"
                imagem="images/ana-julia.png"
              />
            </div>
            <div className="flex-1">
              <Relato
                nome="Rúlio"
                nota="images/estrelas.png"
                texto="Sou cliente Opyt desde a época da Nemesis e estou muito satisfeito quanto a velocidade/estabilidade da internet, mas também em relação ao atendimento que sempre recebi da empresa/funcionários. Sério, nunca imaginei que poderia transmitir minhas partidas com tanta suavidade. A velocidade é tipo turbo, zero lag, e a qualidade da transmissão é tão nítida que dá para ver cada detalhe do meu gameplay"
                imagem="images/rulio.png"
              />
            </div>
            <div className="flex-1">
              <Relato
                nome="Luiz Alcantra"
                nota="images/estrelas.png"
                texto="A estabilidade e a velocidade da sua rede são notáveis, proporcionando uma experiência online fluida e sem interrupções. É evidente que o seu compromisso com a qualidade e o serviço ao cliente é notável e faz uma diferença significativa na vida de seus usuários. Parabéns pela excelência em fornecer um serviço tão confiável e de alta qualidade."
                imagem="images/luiz.png"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-black py-[20px]">
        <div className="mx-auto lg:w-[960px] w-[320px] lg:flex items-center grid justify-items-center gap-y-4">
          <a href="https://www.opyt.net.br/" target="_blank">
            <img src="images/logo.png" className="flex-1 max-w-[72px] max-h-[37px]" alt="Logo OPYT, escrito OPYT em branco"></img>
          </a>
          <h3 className="text-white flex-1 ml-[20px]">
            © 2023 Opyt LTDA. Todos os direitos reservados
          </h3>
          <div className="grid grid-cols-3 gap-x-3 flex-1 justify-items-center max-w-[250px]">
            <RedeSocialBotao label="facebook" icone="images/facebook.png" link="https://www.facebook.com/opytnet/" />
            <RedeSocialBotao label="instagram" icone="images/instagram.png" link="https://www.instagram.com/opytnet/" />
            <RedeSocialBotao label="linkedin" icone="images/linkedin.png" link="https://www.linkedin.com/company/opyt/"/>
          </div>
        </div>
      </section>
      <ToastContainer />
    </div>
  )
}

export default LoginPage
