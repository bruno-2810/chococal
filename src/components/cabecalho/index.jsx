import './index.scss'
import { Link } from 'react-router-dom'

export default function Cabecalho() {


    return (
        
        <div className='cabecalho'>
            <img src="https://cdn.discordapp.com/attachments/1209127677060186172/1312574606745534484/46_Sem_Titulo_20241130212203.png?ex=674cfddc&is=674bac5c&hm=df247b9f9fbbcfafb32058e9e033a326f134b2afee6335839c8fd5db314d82d8&" alt="" />    
            <div className='nav'>
                <Link to='/' className='link'>Inicio</Link>
                <Link to='/sobre' className='link'>Sobre</Link>
                <Link to='/chocolates' className='link'>Chocolates</Link>
                <Link to='/contato' className='link'>Contato</Link>
            </div>
            <div></div>
        </div>

    )
}