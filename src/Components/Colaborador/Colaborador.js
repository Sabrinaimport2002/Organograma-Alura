import './Colaborador.css'

export const Colaborador = ({nome, cargo, imagem, corDeFundo}) => {

    const corCss = {
        background: corDeFundo
    }

    return(
        <div className='colaborador'>
            <div className='cabecalho' style={corCss}>
                <img src={imagem} alt={nome}/>
            </div>
            <div className='rodape'>
                <h4>{nome}</h4>
                <h5>{cargo}</h5>
            </div>
        </div>
    )
}