import { Swiper, SwiperSlide } from 'swiper/react';
import { useState, useEffect } from 'react';
import './HabilidadesStyle.css'

function Habilidades() {
    const [slidesPerView, setSlidesPerView] = useState(7);

    useEffect(() => {
        function handleResize() {
            if (window.innerWidth <= 480) {
                setSlidesPerView(2);
            } else if (window.innerWidth > 480 && window.innerWidth <= 768) {
                setSlidesPerView(3);
            } else if (window.innerWidth > 768 && window.innerWidth <= 1024) {
                setSlidesPerView(5);
            } else {
                setSlidesPerView(6);
            }
        }

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return (
        <section className='habilidades container' id='habilidades' aria-label="Habilidades">
            <h2 className='habilidades__subtitulo'>Habilidades</h2>
            <Swiper
                spaceBetween={20}
                slidesPerView={slidesPerView}
                loop={true}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: true,
                }}
            >
                <SwiperSlide className='habilidades__tech'>
                    <img src='/habilidades/vscode.svg' alt='vscode' width='80' height='80' />
                    <span>VS Code</span>
                </SwiperSlide>
                <SwiperSlide className='habilidades__tech'>
                    <img src='/habilidades/html.svg' alt='HTML' width='80' height='80' />
                    <span>HTML</span>
                </SwiperSlide>
                <SwiperSlide className='habilidades__tech'>
                    <img src='/habilidades/css.svg' alt='CSS' width='80' height='80' />
                    <span>CSS</span>
                </SwiperSlide>
                <SwiperSlide className='habilidades__tech'>
                    <img src='/habilidades/javascript.svg' alt='JavaScript' width='80' height='80' />
                    <span>JavaScript</span>
                </SwiperSlide>
                <SwiperSlide className='habilidades__tech'>
                    <img src='/habilidades/git.svg' alt='git' width='80' height='80' />
                    <span>Git</span>
                </SwiperSlide>
                <SwiperSlide className='habilidades__tech'>
                    <img src='/habilidades/react.svg' alt='React' width='80' height='80' />
                    <span>React</span>
                </SwiperSlide>
                <SwiperSlide className='habilidades__tech'>
                    <img src='/habilidades/typescript.svg' alt='TypeScript' width='80' height='80' />
                    <span>TypeScript</span>
                </SwiperSlide>
                <SwiperSlide className='habilidades__tech'>
                    <img src='/habilidades/figma.svg' alt='figma' width='80' height='80' />
                    <span>Figma</span>
                </SwiperSlide>
                <SwiperSlide className='habilidades__tech'>
                    <img src='/habilidades/wordpress.svg' alt='wordpress' width='80' height='80' />
                    <span>WordPress</span>
                </SwiperSlide>
                <SwiperSlide className='habilidades__tech'>
                    <img src='/habilidades/vercel.svg' alt='vercel' width='80' height='80' />
                    <span>Plataforma da Vercel</span>
                </SwiperSlide>
            </Swiper>
            <h3 aria-label='Tecnologias em aprimoramento'>Tecnologias em Aprimoramento</h3>
            <ul className='habilidades__lista'>
                <li className='habilidades__lista__tech'>React</li>
                <li className='habilidades__lista__tech'>TypeScript</li>
                <li className='habilidades__lista__tech'>Styled Components</li>
                <li className='habilidades__lista__tech'>Redux</li>
                <li className='habilidades__lista__tech'>Python</li>
            </ul>
        </section>
    );
}

export default Habilidades;
