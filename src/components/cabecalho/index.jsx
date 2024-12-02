import './index.scss'


export default function Cabecalho() {


    return (
        
        <div className='cabecalho'>
            <img src="/images/logo.png" alt="" />    
            <div className='nav'>
                <a href="#inicio" className='link'>Inicio</a>
                <a href="#sobre" className='link'>Sobre</a>
                <a href="#chocolates" className='link'>Chocolates</a>
                <a href="#contatos" className='link'>Contatos</a>
            </div>
            <div></div>
        </div>

    )
}