"use client";
import Form from "./components/form";
import Card from "./components/card";
import Relato from "./components/relato";
import Button from "./components/button";
import RedeSocialButton from "./components/redeSocialButton";
const LoginPage = () => {
  return (
    <div className="mx-auto w-3/4 border border-solid border-black">
      <section className="bg-e6">
        <div>
          <img src="images/logogrande.png"></img>
          <Button type="primary" label="Assine agora!" />
          <Button type="secondary" label="Chama no zap!" />
        </div>
      </section>
      <section className="bg-e6 flex">
        <div className="w-1/2">
          <h2>
            Procurando o melhor plano de internet, com maior velocidade e
            estabilidade na conexão? Com o nosso COMBO você vai ter acesso aos
            melhores filmes e séries utilizando a melhor internet da região.
          </h2>
          <div>
            <img src="images/1gb.png"></img>
            <img src="images/500mb.png"></img>
          </div>
        </div>
        <div className="w-1/2">
          <Form></Form>
        </div>
      </section>
      <section className="bg-black">
        <h3 className="text-white">
          A Opyt não para de crescer e já somos mais de:
        </h3>
        <div className="flex">
          <div className="flex-1">
            <Card text="18.000 MIL CLIENTES ATIVOS" image="images/trofeu.png" />
          </div>
          <div className="flex-1">
            <Card text="4.000 KM DE FIBRA" image="images/estrela.png" />
          </div>
          <div className="flex-1">
            <Card text="7 CIDADES ATENDIDAS" image="images/casa.png" />
          </div>
        </div>
        <Button type="secondary" label="Chama no zap!" />
      </section>
      <section className="bg-e6">
        <div>
          <h3>Planos</h3>
          <div className="flex">
            <div className="flex-1">
              <Relato
                name="Ana Júlia"
                score="images/estrelas.png"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc est odio, lobortis quis odio et, consequat fringilla enim. Sed massa mauris, mattis nec pellentesque vitae, blandit sed mi. Curabitur eleifend fringilla nunc sit amet consequat. Nulla at rutrum nisl. Nulla hendrerit orci a purus lacinia, at egestas augue hendrerit. Donec iaculis est non felis aliquet maximus."
                image="images/ana-julia.png"
              />
            </div>
            <div className="flex-1">
              <Relato
                name="Rúlio"
                score="images/estrelas.png"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc est odio, lobortis quis odio et, consequat fringilla enim. Sed massa mauris, mattis nec pellentesque vitae, blandit sed mi. Curabitur eleifend fringilla nunc sit amet consequat. Nulla at rutrum nisl. Nulla hendrerit orci a purus lacinia, at egestas augue hendrerit. Donec iaculis est non felis aliquet maximus."
                image="images/rulio.png"
              />
            </div>
            <div className="flex-1">
              <Relato
                name="Luiz Alcantra"
                score="images/estrelas.png"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc est odio, lobortis quis odio et, consequat fringilla enim. Sed massa mauris, mattis nec pellentesque vitae, blandit sed mi. Curabitur eleifend fringilla nunc sit amet consequat. Nulla at rutrum nisl. Nulla hendrerit orci a purus lacinia, at egestas augue hendrerit. Donec iaculis est non felis aliquet maximus."
                image="images/luiz.png"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-black">
        <div>
          <img src="images/logo.png"></img>
          <h3 className="text-white">
            © 2023 Opyt LTDA. Todos os direitos reservados
          </h3>
          <div className="flex">
            <RedeSocialButton label="facebook" icon="images/facebook.png" />
            <RedeSocialButton label="instagram" icon="images/instagram.png" />
            <RedeSocialButton label="linkedin" icon="images/linkedin.png" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default LoginPage;
