import './index.scss'
import Cabecalho from '../../components/cabecalho'

export default function Inicio() {


    return (
        <div className='sim'>
            <Cabecalho />
            <div className='pagina-inicio'>
                <div className='conteudo'>
                    <div className='titulo'>
                        <div><h1>Bem-vindos à <span>Chococal</span></h1></div>
                        <h1 className='ponto'>!</h1>
                    </div>
                    <p>Somos apaixonados por chocolate e dedicados a transformar os melhores ingredientes em experiências únicas. Nossos produtos são criados com cuidado, tradição e inovação para adoçar o seu dia e celebrar os momentos mais especiais. Descubra o sabor inesistivel e a qualidade que fazem do nosso chocolate a escolha perfeita para quem busca o melhor.</p>
                </div>
            </div>
        </div>
    )
}