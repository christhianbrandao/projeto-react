import Carrinho from "../carrinho/Carrinho"
import Filtro from "../filtro/Filtro"
import Header from "../header/Header"
import { Lateraldireita, Lateralesqueda, Conteudo, Cabecalho, MainConteiner } from "./style"
import { produtos } from '../../data/data'
import Card from "../cards/cards"
import { useState } from "react"


const HomePage = () => {
    const [produ , setProd]= useState(produtos)
    const [produtCarinho, setProdutCarrinho]= useState([])



    const addToCarrinho = (product) =>{
        const verifSeExiste = produtCarinho.find((item)=>item.id===product.id)
        // console.log(verifSeExiste);
        if(verifSeExiste===undefined){
               
        setProdutCarrinho([... produtCarinho, {...product, qnt:1}])
        // console.log(verifSeExiste)
        }
        else{
            
            const newcart = produtCarinho.map((item)=>{
                if(item.id === product.id){
                   
                    return{...verifSeExiste, qnt:verifSeExiste.qnt+1}
                    
                    
                }else{
                    return (item)
                }
                
            })
            // console.log(newcart)
            setProdutCarrinho(newcart)
        }

        
    }
    // console.log(produtCarinho);
    const render = produ.map((prod) =>{
       
    
        return (
            <Card
            key={prod.id}
            image={prod.image}
            price={prod.price}
            name={prod.name}
            produ={prod}
            addToCarrinho={addToCarrinho}

            />

        )
    })

    

    
    
    return (

        <div>
            <Cabecalho>
                <Header />
            </Cabecalho>
            
            <Conteudo>

                <Lateralesqueda>
                <Carrinho produtCarinho={produtCarinho}/>
                </Lateralesqueda>

                <MainConteiner>
                    {render}
                </MainConteiner>

                <Lateraldireita>
                    <Filtro />
                </Lateraldireita>

            </Conteudo>
        </div>
    )
}

export default HomePage