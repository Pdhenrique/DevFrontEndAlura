import Header from "components/Header";
import Container from "components/Container";
import Footer from "components/Footer";
import FavoriteProvider from "context/Favorite";
import { Outlet } from "react-router-dom";

function BasePage(){
    return(
        <main>
            <Header/>
            <FavoriteProvider>
                <Container>
                    <Outlet/>
                </Container>
            </FavoriteProvider>
            <Footer/>
        </main>

    )
}

export default BasePage;