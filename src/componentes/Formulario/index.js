import { useState } from 'react'
import CampoTexto from '../CampoTexto'
import './Formulario.css'
import Botao from '../Botao'


const Formulario = (props) => {
    const[email, setEmail] = useState('')
    const[senha, setSenha] = useState('')

    const aoSalvar = (event) => {
        event.preventDefault() //ESSE MÉTODO PREVINE O COMPORTAMENTO PADRÃO, ELE NÃO VAI RECARREGAR O SITE
        props.aoColaboradorCadastrado({
            email,
            senha,
        })
        //ISSO VAI SERVIR PARA LIMPAR O FORMULÁRIO DEPOIS DE CRIAR
        setEmail('')
        setSenha('')
    }

    return (

        <div className='centro'>
            <div className='lado-direito'>
                <h1 className='boas-vindas'>Bem-vindo</h1>
                <h2 style={{fontWeight: 'bold', fontSize: '28px', marginBottom: '2px'}}>Crie sua conta</h2>
                <p style={{fontWeight: 'bold', fontSize :'15px'}}>Faça seu cadastro agora</p>
                <button className='cadastrar'>Cadastrar</button>
            </div>
            <section className='lado-esquerdo'>
                <form onSubmit={aoSalvar}>
                <h2 style={{paddingBottom: '60px', fontWeight: 'bold', fontSize: '24px', color: '#FC5364'}}>Faça o seu login</h2>
                <CampoTexto obrigatorio={true}
                placeholder="E-mail"
                valor={email}/>
                <CampoTexto obrigatorio={true}
                placeholder="Senha"
                />
                <Botao texto="Entrar" />
                </form>
                <div className='logo-pequena'>
                <img src='/imagens/logoVoxel2.PNG' alt='Logo pequena da Voxel'/>
                </div>
            </section>
        </div>
    )
}

export default Formulario