import { ProduCarrinhos } from "./style"


const CardCarrinho = (props) =>{
const { name, price, qnt } = props

    return(
        <ProduCarrinhos>
           {name}
           <p>preço:</p>{price}
           <p>quantidade:</p>{qnt}
        </ProduCarrinhos>
    )
}
export default CardCarrinho