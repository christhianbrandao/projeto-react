


const Filtro = (props) => {
    const { ordem, barraPesquisa, handleInputpesquisa, handleInputOrdem, limparFiltro, valueMaxMin, handleInputValue } = props

    console.log(valueMaxMin);

    return (
        <div>
            <h2>Busca</h2>
            <input type="text" value={barraPesquisa} onChange={handleInputpesquisa} />

            <h3>Ordenar</h3>

            <select name="" id="" value={ordem} onChange={handleInputOrdem}>
                <option value=""></option>
                <option value="asc">Crescente</option>
                <option value="desc">Decresente</option>
            </select>

            <h3>valor máximo e mínimo</h3>
            <select name="" id="" value={valueMaxMin} onChange={handleInputValue}>
                <option value=""></option>
                <option value="max">valor mínimo</option>
                <option value="min">valor máximo</option>
            </select>

            <div>
                <button onClick={() => limparFiltro()}>limpar filtros</button>
            </div>


        </div>

    )
}
export default Filtro