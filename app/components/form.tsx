import Button from './botao'
import { useEffect } from 'react'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Form = () => {
  let inputClass = 'px-2 rounded-2xl w-full h-[32px] p-1'

  const makeApiRequest = async (nome: string, email: string, phone: string, city: string) => {
    try {
      const response = await fetch('/api/apiRequest')
      const users = await response.json()
    } catch (error) {
      toast.error('Erro ao cadastrar! Tente novamente')
      return false
    } finally {
      toast.success('Cadastro realizado com sucesso!')
    }
  }
  useEffect(() => {
    const handleFormSubmit = (event: { preventDefault: () => void }) => {
      event.preventDefault();

      let nome = (document.getElementById('username') as HTMLInputElement).value;
      let email = (document.getElementById('email') as HTMLInputElement).value;
      let phone = (document.getElementById('phone') as HTMLInputElement).value;
      let city = (document.getElementById('city') as HTMLInputElement).value;
      let respostaPergunta = (document.getElementById('respostaPergunta') as HTMLInputElement).value;

      if (respostaPergunta !== '12') {
        toast.error('A resposta da pergunta está errada! Tente novamente');
        return false;
      }

      makeApiRequest(nome, email, phone, city);
      return true;
    };

    if (typeof document !== 'undefined') {
      let form = document.getElementById('form');
      form?.addEventListener('submit', handleFormSubmit);
    }

    return () => {
      // quando o componente é desmontado, retiramos o eventlistener
      if (typeof document !== 'undefined') {
        let form = document.getElementById('form');
        form?.removeEventListener('submit', handleFormSubmit);
      }
    };
  }, []);

  return (
    <div className="max-w-[360px] mx-auto">
      <h2 className="text-2xl text-center"><b>Preencha seus dados ou</b> chama no zap</h2>
      <form className="lg:w-[360px] mx-auto" id="form">
        <label >
          <b>Nome *</b>
          <br />
          <input className={inputClass} type="text" id="username" required/>
        </label>
        <br />
        <label >
          <b>E-mail *</b>
          <br />
          <input className={inputClass} type="email" id="email" required/>
        </label>
        <br />
        <label>
          <b>Telefone Whatsapp(DDD + número) *</b>
          <br />
          <input className={inputClass} id="phone" required/>
        </label>
        <br />
        <label>
          <b>Qual é a sua cidade? *</b>
          <br />
          <input className={inputClass} id="city" required/>
        </label>
        <br />
        <label>
          <b>Quanto é 10 + 2? *</b>
          <br />
          <input className="px-2 rounded-2xl w-full h-[32px] p-1" type="text" id="respostaPergunta" required/>
        </label>
        <div className="max-w-[280px] mx-auto grid gap-3 mt-4">
          <Button tipo='primary' label="Me cadastrar" extraClasses='text-lg font-bold rounded-[20px] px-4 w-full' />
          <Button tipo='secondary' label="Chama no zap!" extraClasses='text-lg rounded-[20px] w-full' />
      </div>
      </form>
    </div>
  )
}

export default Form
