import Cabecalho from '../../components/cabecalho'
import './index.scss'


export default function Contatos() {


    return (
        <div className='pagina-contatos'>
            <Cabecalho />
            <div className='conteudo'>
                <div className='redes'>
                    <h1>Entre em contato :</h1>
                    <a href="https://i.pinimg.com/236x/03/40/7b/03407bd97f2e6bd44173a4b212b44092.jpg"><div className='bt'><img src="/images/insta.png" alt="" /><p>Instagram</p></div></a>
                    <a href="https://pt.quizur.com/_image?href=https://img.quizur.com/f/img64e930a0a27d74.34118580.jpeg?lastEdited=1693003954&w=600&h=600&f=webp"><div className='bt'><img src="/images/whats.png" alt="" /><p>Whatsapp</p></div></a>
                </div>
                <div className='img'>
                <img src="/images/fundo.png" alt="" />
                </div>
            </div>
        </div>
    )
}