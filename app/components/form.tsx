import Button from './button'

const Form = () => {
  const handleClick = () => {
    alert('Botão clicado!');
  };

  let inputClass = 'px-2 rounded-2xl'

  return (
    <div>
      <h1>Preencha seus dados ou chama no zap</h1>
      <form>
        <label >
          Nome:
          <br />
          <input className={inputClass} type="text" name="username" />
        </label>
        <br />
        <label >
          E-mail:
          <br />
          <input className={inputClass} type="email" name="email" />
        </label>
        <br />
        <label>
          Telefone Whatsapp(DDD + número):
          <br />
          <input className={inputClass} type="password" name="password" />
        </label>
        <br />
        <label>
          Qual é a sua cidade?
          <br />
          <input className={inputClass} type="password" name="password" />
        </label>
        <Button type='primary' label="Assine agora!" onClick={handleClick} />
        <Button type='secondary' label="Chama no zap!" onClick={handleClick} />
      </form>
    </div>
  );
};

export default Form;