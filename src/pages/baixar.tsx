import * as C from "../components/Baixar/style";
import * as Home from "../components/Home/style";

// Imagens
import PrimeiraImagem from "../assets/baixar/baixar-imagem-01.png";
import SegundaImagem from "../assets/baixar/baixar-imagem-02.png";
import TerceiraImagem from "../assets/baixar/baixar-imagem-03.png";

function Baixar(){
    return(
        <>
        <C.CorpoBaixar>
            <Home.TextoPrincipal tamanho_titulo="48px">Spotify for Linux</Home.TextoPrincipal>
            <Home.TextoParagrafo negrito="" tamanho_paragrafo="19px">Here you can find different ways of installing Spotify for Linux. Spotify for Linux is a labor of love from our engineers that wanted to listen to Spotify on their Linux development machines. They work on it in their spare time and it is currently not a platform that we actively support. The experience may differ from our other Spotify Desktop clients, such as Windows and Mac. You can tell us what you think and ask other users for help at the Desktop (Linux) board in The Spotify Community forum.</Home.TextoParagrafo>

            <Home.TextoPrincipal tamanho_titulo="32px">Install on Ubuntu</Home.TextoPrincipal>
            <Home.TextoParagrafo negrito="" tamanho_paragrafo="19px">Go to Spotify in Ubuntu Software and click install. If the link doesn’t work, open Ubuntu Software and search for Spotify.</Home.TextoParagrafo>

            <Home.TextoPrincipal tamanho_titulo="32px">Install via command line</Home.TextoPrincipal>
            <Home.TextoPrincipal tamanho_titulo="24px">Snap</Home.TextoPrincipal>


            <Home.TextoParagrafo negrito="" tamanho_paragrafo="19px">If you don’t have access or don’t want to use Ubuntu Software, it is possible to install Spotify from the command line with snap. Run the following command in your terminal:</Home.TextoParagrafo>

            <Home.HomeImagem src={PrimeiraImagem} width="100%"/>

            <Home.TextoParagrafo negrito="" tamanho_paragrafo="19px">If you run another Linux distribution than Ubuntu, first see https://snapcraft.io/ for how to install snap, then run the command above.</Home.TextoParagrafo>

            <Home.TextoPrincipal tamanho_titulo="24px">Debian/Ubuntu</Home.TextoPrincipal>
            <Home.TextoParagrafo negrito="" tamanho_paragrafo="19px">Spotify for Linux is also released as a Debian package. Our aim is that it should work with the latest Long Term Support release of Ubuntu, but we will try to make it work for other releases of Ubuntu and Debian as well.</Home.TextoParagrafo>

            <Home.TextoParagrafo negrito="" tamanho_paragrafo="19px">You will first need to configure our debian repository:</Home.TextoParagrafo>

            <Home.HomeImagem src={SegundaImagem} width="100%"/>

            <Home.TextoParagrafo negrito="" tamanho_paragrafo="19px">Then you can install the Spotify client:</Home.TextoParagrafo>

            <Home.HomeImagem src={TerceiraImagem} width="100%"/>
            
        </C.CorpoBaixar>
        </>
    );
}

export default Baixar;