import "./Formulario.css";
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import Botao from "../Botao";
import { useState } from "react";

export const Formulario = (props) => {
  const times = [
    "",
    "Programação",
    "Front-end",
    "Data Science",
    "Devops",
    "UX & Desing",
    "Mobile",
    "Inovação e Gestão",
  ];

  const aoSalvar = (evento) => {
    evento.preventDefault();

    props.aoColaboradorCadastrado({
      nome, cargo, imagem, time
    })
  };

  const [nome, setNome] = useState('');
  const [cargo, setCargo] = useState("Visitante");
  const [imagem, setImagem] = useState('');
  const [time, setTime] = useState('');

  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card do colaborador:</h2>
        <CampoTexto
          label="Nome"
          placeholder="Digite seu nome"
          obrigatorio={true}
          valor={nome}
          aoAlterado={(valor) => setNome(valor)}
        />
        <CampoTexto
          label="Cargo"
          placeholder="Digite seu cargo"
          obrigatorio={true}
          valor={cargo}
          aoAlterado={(valor) => setCargo(valor)}
        />
        <CampoTexto
          label="Imagem"
          placeholder="Digite o endereço da imagem"
          valor={imagem}
          aoAlterado={(valor) => setImagem(valor)}
        />
        <ListaSuspensa
          label="Time"
          itens={times}
          obrigatorio={true}
          valor={time}
          aoAlterado={(valor) => setTime(valor)}
        />
        <Botao>Criar card</Botao>
      </form>
    </section>
  );
};
