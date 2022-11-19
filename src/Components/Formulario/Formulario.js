import './Formulario.css'
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import Botao from '../Botao'

export const Formulario = (props) => {

  const times = [
    'Programação', 'Front-end', 'Data Science',
    'Devops', 'UX & Desing', 'Mobile', 'Inovação e Gestão'
  ]

  const aoSalvar = (evento)=>{
    evento.preventDefault()
    console.log('Formulário submetido')
  }

  return (
    <section className='formulario'>
      <form onSubmit={aoSalvar}>
      <h2>Preencha os dados para criar o card do colaborador:</h2>
        <CampoTexto label="Nome" placeholder="Digite seu nome" obrigatorio={true}/>
        <CampoTexto label="Cargo" placeholder="Digite seu cargo" obrigatorio={true}/>
        <CampoTexto label="Imagem" placeholder="Digite o endereço da imagem" />
        <ListaSuspensa label="Time" itens={times} obrigatorio={true}/>
        <Botao>
          Criar card
        </Botao>
      </form>
    </section>
  );
};
