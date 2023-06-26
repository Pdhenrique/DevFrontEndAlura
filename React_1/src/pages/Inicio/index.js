import Titulo from "components/Titulo";
import Banner from "components/Banner";
import Cabecalho from "components/Cabecalho";
import Rodape from "components/Rodape";
import Card from "components/Card";

function Inicio() {
    return (
        <>
            <Cabecalho />
            <Banner imagem="home" />
            <Titulo>
                <h1>Um lugar para guardar seus vídeos e filmes!</h1>
            </Titulo>
            <Card id="1" titulo="Filme 1" capa="https://picsum.photos/200/300" />
            <Rodape />
        </>
    )
}

export default Inicio;