import Cabecalho from '../../components/cabecalho'
import './index.scss'
import ChocolateCard from '../../components/cards/leite.jsx'
import BrancoCard from '../../components/cards/branco.jsx'
import AmargoCard from '../../components/cards/amargo.jsx'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'



export default function Chocolates() {

    const slides = [ChocolateCard, BrancoCard, AmargoCard]

    return (
        <div className='pagina-chocolates' id='chocolates'>
            
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                navigation
                pagination
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                style={{
                    "--swiper-navigation-color": "#f1f1f1",
                    "--swiper-pagination-color": "#f1f1f1"
                }}

               
            >
                {slides.map(slide => (
                    <SwiperSlide  className='an'>
                        {slide}
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}