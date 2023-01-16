import CardCarrinho from "./cardCarrinho/CardCarrinho"
import { MeuCarrin, Titulo } from "./cardCarrinho/carrin"


const Carrinho = (props) => {
    const { name, price, qnt, produtCarinho } = props
    
    

    const renderCarrinho = produtCarinho.map(prod =>{
       
    
        return (
            <CardCarrinho
            // key={prod.id}
            // image={prod.image}
            price={prod.price}
            name={prod.name}
            // product={produ}
            // name={prod.name}
            // price={prod.price}
            qnt={prod.qnt}


            />
        )
    }
    )
    return (
        <MeuCarrin>
            <Titulo>CARRINHO</Titulo>
            {renderCarrinho}
        </MeuCarrin>
    )
}
export default Carrinho