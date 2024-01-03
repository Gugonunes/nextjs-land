import Button from './botao'

const Form = () => {
  let inputClass = 'px-2 rounded-2xl w-full h-[32px] p-1'

  const makeApiRequest = async () => {
    try {
      const response = await fetch('/api/hello')
      const users = await response.json()
    } catch (error) {
      console.error('Error fetching users:', error)
    } finally {
      alert('Cadastro realizado com sucesso!')
    }
  }
  if (typeof document !== 'undefined') {
    console.log('teste')
    let form = document.getElementById('form')
    form?.addEventListener('submit', (form) => {
      form.preventDefault()

      let nome = (document.getElementById('username') as HTMLInputElement).value
      let email = (document.getElementById('email') as HTMLInputElement).value
      let phone = (document.getElementById('phone') as HTMLInputElement).value
      let city = (document.getElementById('city') as HTMLInputElement).value
      let respostaPergunta = (document.getElementById('respostaPergunta') as HTMLInputElement).value
      if(respostaPergunta !== '12') {
        alert('A resposta da pergunta está errada!')
        return false
      }
      handleSubmit(nome, email, phone, city)
      return true
    })
  }

  const handleSubmit = (nome: any, email: any, phone:any, city: any) => {
    console.log('Cadastro realizado com sucesso' + nome + email + phone + city)
  }

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
          <b>Qual é a sua cidade?</b>
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
          <Button tipo='secondary' label="Chama no zap!" onClick={makeApiRequest} extraClasses='text-lg rounded-[20px] w-full' />
      </div>
      </form>
    </div>
  )
}

export default Form
