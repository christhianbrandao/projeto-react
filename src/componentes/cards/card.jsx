import { CardConteiner } from "./style"


const Card = (props) =>{
    const  {name, price, image, produtos, addToCarrinho, } = props
    return (

        <CardConteiner>
           
            <img src={ image } alt="" />
            <h2>{ name }</h2>
            <h2>R$ { price }</h2>
            <button onClick={() => addToCarrinho( produtos )}>Adicionar ao carrinho</button>
          
        </CardConteiner>
        
    )
}
export default Card