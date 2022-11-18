import './CampoTexto.css'

export const CampoTexto = (props) => {
  console.log(props.label)

  const placeholderModificado = `${props.placeholder}...`;

  return (
    <div className="campo-texto">
        <label>{props.label}</label>
        <input placeholder={placeholderModificado}/>
    </div>
  );
};


