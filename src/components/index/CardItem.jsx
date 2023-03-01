import"./style/cardItem.css";


export const Carditem = ({name, descripcion}) => {
    return(
        <div className='card animate__animated animate__backInDown'>
        <label>{name}</label>
        <br />
        <label>{descripcion}</label>
        <br />
        <small>Amigos</small>
        </div>
        )

}