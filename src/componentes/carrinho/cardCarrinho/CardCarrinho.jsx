import { ProduCarrinhos, meuuuBotao } from "./style"


const CardCarrinho = (props) => {
    const { name, price, qnt, button, produtCarinho, } = props

    console.log(produtCarinho);



    return (
        <ProduCarrinhos>
            {name}
            <p>preço:{price}</p>
            <p>quantidade:{qnt}</p>
            <button onClick={() => button(produtCarinho)}>Excluir item</button>
            
        </ProduCarrinhos>
    )
}
export default CardCarrinho