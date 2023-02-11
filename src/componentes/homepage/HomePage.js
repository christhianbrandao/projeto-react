import Carrinho from "../carrinho/Carrinho"
import Filtro from "../filtro/Filtro"
import Header from "../header/Header"
import { Lateraldireita, Lateralesqueda, Conteudo, Cabecalho, MainConteiner, Tela } from "./style"
import { produtos } from '../../data/data'
import Card from "../cards/card"
import { useState } from "react"


const HomePage = () => {

    const [produ, setProd] = useState(produtos)
    const [produtCarinho, setProdutCarrinho] = useState([])
    const [barraPesquisa, setBarraPesquisa] = useState('')
    const [ordem, setOrdem] = useState('')
    const [valueMaxMin, SetValueMaxMin] = useState('')
    const [valorTotal, setValorTotal] = useState(0)
    
    
    const handleInputpesquisa = (event) => setBarraPesquisa(event.target.value)
    const handleInputOrdem = (event) => setOrdem(event.target.value)
    const handleInputValue = (event) => SetValueMaxMin(event.target.value)
    
    
    



    const addToCarrinho = (product) => {
        const verifSeExiste = produtCarinho.find((item) => item.id === product.id)
        // console.log(verifSeExiste);
        if (verifSeExiste === undefined) {

            setProdutCarrinho([...produtCarinho, { ...product, qnt: 1 }])
            setValorTotal(product.price + valorTotal)
            // console.log(verifSeExiste)
        }
        else {

            const newcart = produtCarinho.map((item) => {
                if (item.id === product.id) {

                    return { ...verifSeExiste, qnt: verifSeExiste.qnt + 1 }
                    


                } else {
                    return (item)
                }

            })
            // console.log(newcart)
            setProdutCarrinho(newcart)
            setValorTotal(product.price + valorTotal)
        }
    }


    const delet = (product) => {
        const prod = produtCarinho.find((item)=> product.id === item.id)
        if(prod.qnt>1){


            const newcart = produtCarinho.map((item) => {
                if (item.id === product.id) {
                    alert('gfgh')
                    return { ...prod, qnt: prod.qnt - 1 }


                } else {

                    return (item)

                }


            })

            setProdutCarrinho(newcart)


        } else {
            const newCarrinho = produtCarinho.filter((item) => {
                return item.id !== product.id
            })
            setProdutCarrinho(newCarrinho)
        }
    }



    // console.log(produtCarinho);
    const render = produ
    .filter(prod => barraPesquisa === '' || prod.name.toLowerCase().includes(barraPesquisa))
    
    .sort(( a, b )=> ordem === '' || ordem === 'desc' && a.name > b.name ? 1 : -1)
    
    .sort(( a, b )=> ordem === '' || ordem === 'asc' && a.name > b.name ? -1 : 1)
    
    .sort(( a, b )=> valueMaxMin === ''|| valueMaxMin==='max' && a.price > b.price ? 1 : -1 )

    .sort(( a, b )=> valueMaxMin === ''|| valueMaxMin ==='min' && a.price > b.price ? -1 : 1 )
    
    .map((prod) => {


        return (
            <Card
                key={prod.id}
                image={prod.image}
                price={prod.price}
                name={prod.name}
                produtos={prod}
                addToCarrinho={addToCarrinho}

            />

        )
    })

    const limparFiltro = ()=>{
        setOrdem('')
        setBarraPesquisa('')
        SetValueMaxMin('')
        return(
            render(produ)
        )

    }






    return (

        <Tela>
            <Cabecalho>
                <Header />
            </Cabecalho>

            <Conteudo>

                <Lateralesqueda>
                    <Carrinho
                        valorTotal={valorTotal}
                        produtCarinho={produtCarinho}
                        button={delet}
                    />
                </Lateralesqueda>

                <MainConteiner>
                    {render}
                </MainConteiner>

                <Lateraldireita>
                    <Filtro
                    ordem={ordem}
                    barraPesquisa={barraPesquisa}
                    handleInputpesquisa={handleInputpesquisa}
                    handleInputOrdem={handleInputOrdem}
                    limparFiltro={limparFiltro}
                    valueMaxMin={valueMaxMin}
                    handleInputValue={handleInputValue}

                    />
                </Lateraldireita>

            </Conteudo>
        </Tela>
    )

}
export default HomePage