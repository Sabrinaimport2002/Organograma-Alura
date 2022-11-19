import "./ListaSuspensa.css";

export const ListaSuspensa = (props) => {
  return (
    <div className="lista-suspensa">
      <label>{props.label}</label>
      <select>
        {props.itens.map(item => {
          return <option key={item} required={props.obrigatorio}>{item}</option>;
        })}
      </select>
    </div>
  );
};
