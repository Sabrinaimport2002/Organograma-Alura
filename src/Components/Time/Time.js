import Colaborador from "../Colaborador";
import "./Time.css";

export const Time = (props) => {
  const cssCorSecudaria = { backgroundColor: props.corSecundaria };
  const cssCorPrimaria = { borderColor: props.corPrimaria };

  return (
    (props.colaboradores.length > 0) ?
    <section className="time" style={cssCorSecudaria}>
      <h3 style={cssCorPrimaria}>{props.nome}</h3>
      <div className="colaboradores">
        {props.colaboradores.map((colaborador) => (
          <Colaborador
            nome={colaborador.nome}
            cargo={colaborador.cargo}
            imagem={colaborador.imagem}
          />
        ))}
      </div>
    </section>
    : ''
  );
};
