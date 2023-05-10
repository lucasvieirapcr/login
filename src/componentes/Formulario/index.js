import './Formulario.css'
import Botao from '../Botao'
import { useState } from 'react'

const Formulario = () => {
    const[form, setForm] = useState({
        email: "",
        senha: ""
    })

    const[emptyValue, setEmptyValue] = useState(false)
    const[validEmail, setValidEmail] = useState(false)

    const handleChange = (event) => {
        let newProp = form
        setValidEmail(true)
        newProp[event.target.name] = event.target.value
        setForm({...newProp})
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        let emptyValues = Object.values(form).some(obj => obj === "")
        setEmptyValue(emptyValues)

        let validEmail = form["email"].toLocaleLowerCase().match(/^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
        setValidEmail()

        if(!emptyValues && validEmail){
            window.alert("Login feito com sucesso")
            fetch("http://localhost:3000", {method: 'POST', body: JSON.stringify(form)});
            event.currentTarget.submit()
        }
    }

    return (

        <div className='centro'>
            <div className='lado-direito'>
                <h1 className='boas-vindas'>Bem-vindo</h1>
                <div>
                    <h2 style={{fontWeight: 'bold', fontSize: '28px', marginBottom: '2px'}}>Crie sua conta</h2>
                    <p style={{fontWeight: 'bold', fontSize :'15px'}}>Faça seu cadastro agora</p>
                    <button style={{boxSizing: 'border-box'}} className='cadastrar'>Cadastrar</button>
                </div>
                
            </div>
            <section className='lado-esquerdo'>

                <div className='fundoErro'>

                    { (emptyValue && form["email"] === "") || (emptyValue && form["senha"]  === "") ? <div className='message'><h1>Preencha os campos para a validação</h1></div> : ""}
                    { !validEmail && form["email"] !== ""  ? <div className='message'><h1>Por favor, insira um e-mail válido</h1></div> : ""}
                </div> 
                
                <form onSubmit={(event) => {handleSubmit(event)}}>

                <h2 style={{paddingBottom: '60px', fontWeight: 'bold', fontSize: '24px', color: '#FC5364'}}>Faça o seu login</h2>
                

                    <input onBlur={(event) => handleChange(event)}  placeholder="E-mail" name='email' type='text'/>
                    
                    <br/>

                    <input onBlur={(event) => handleChange(event)} placeholder="Senha" name='senha' type='password'/>
                    
                <Botao type="submit"/>
                
                </form>
                
                <div className='logo-pequena'>
                    <img src='/imagens/logoVoxel2.PNG' alt='Logo pequena da Voxel'/>
                </div>
                
            </section>
        </div>
    )
}

export default Formulario