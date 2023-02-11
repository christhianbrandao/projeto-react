
import { useState } from "react"
import CardCarrinho from "./cardCarrinho/CardCarrinho"
import { MeuCarrin, Titulo } from "./cardCarrinho/carrin"


const Carrinho = (props) => {
    const { produtCarinho, button, valorTotal, product } = props
    console.log(valorTotal);




    const renderCarrinho = produtCarinho.map(prod => {


        return (
            <CardCarrinho
                produtCarinho={produtCarinho}
                button={button}
                price={prod.price}
                name={prod.name}
                qnt={prod.qnt}
                key={prod.id}


            />
        )
    }
    )
    return (
        <>
            <MeuCarrin>
                <Titulo>CARRINHO</Titulo>
                {renderCarrinho}
            </MeuCarrin>
            <h2>valor total:{valorTotal}</h2>
        </>
    )
}
export default Carrinho