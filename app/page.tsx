"use client";
import Form from "./components/form";
import Card from "./components/card";

const LoginPage = () => {
  return (
    <div className="mx-auto w-3/4 border border-solid border-black">
      <section className="bg-grey">
        <div>
          <h1>Logo</h1>
        </div>
      </section>
      <section className="bg-grey flex">
        <div className="w-1/2">
          <h2>Lorem Ipsum</h2>
        </div>
        <div className="w-1/2">
          <Form></Form>
        </div>
      </section>
      <section className="bg-black">
        <div>
          <h3 className="text-white">Patchon</h3>
          <Card text="Lorem Ipsum" image="images/trofeu.png" />
        </div>
      </section>
      <section className="bg-grey">
        <div>
          <h3>Planos</h3>
        </div>
      </section>
      <section className="bg-black">
        <div>
          <h3 className="text-white">Contato</h3>
        </div>
      </section>
    </div>
  );
};

export default LoginPage;
