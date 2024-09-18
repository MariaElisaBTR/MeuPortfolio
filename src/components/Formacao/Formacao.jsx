import './FormacaoStyle.css'

function Formacao() {
    return (
        <section className='formacao' id='formacao' aria-label="Formação">
            <div className='container'>
                <h2 className="subtitulo">Formação Acadêmica</h2>
                <p className="formacao__texto">
                    Sou formada em Tecnologia em Processamento de Dados pela UNIFAI - Centro Universitário de Adamantina desde dezembro de 2012. Devido a oportunidade de atuar em uma experiência em escolas em julho de 2022, concluí a formação em Licenciatura em Pedagogia pelo Claretiano Centro Universitário. Atualmente, estou dedicando meus estudos voltando um pouco os conhecimentos para área de dados com Python e aprimorando as tecnologias: React, TypeScript e JavaScript, além de buscar um melhor desenvolvimento do meu inglês.</p>
                <div className="formacao__container">
                    <div className="formacao__faculdade">
                        <p className="formacao__faculdade-curso">Tecnologia em Processamento de Dados</p>
                        <h3 className="formacao__faculdade-tipo">Ensino Superior</h3>
                        <ul className="formacao__faculdade-conclusao">
                            <li>Concluído em Dez/12</li>
                            <li>UNIFAI - Centro Universitário</li>
                        </ul>
                    </div>
                    <div className="formacao__faculdade">
                        <p className="formacao__faculdade-curso">Licenciatura em Pedagogia</p>
                        <h3 className="formacao__faculdade-tipo">Ensino Superior</h3>
                        <ul className="formacao__faculdade-conclusao">
                            <li>Concluído em Jul/22</li>
                            <li>Claretiano - Centro Universitário</li>
                        </ul>
                    </div>
                </div>
                <div className="formacao__extra">
                    <div className="formacao__extra-cursos">
                        <h3>Outros Estudos & Cursos</h3>
                        <ul>
                            <li>Cronograma dos Fluentes [Estudos de Inglês]<span>Professor Matheus Werner - Em Andamento</span></li>
                            <li>Semana Do Programador 7X OutSystems<span>Acadêmia Rafa OutSystems - 2024</span></li>
                            <li>Formação Básica - Mainframe IBM - Desenvolvedor COBOL<span>Portal do Treinamento - 2023</span></li>
                            <li>Fundamentos e Semana de Gestão de Projetos<span>Mário Trentim - 2023</span></li>
                            <li>Trilhas Conectar - Fundamentar - Especializar<span>RocketSeat - 2022</span></li>
                        </ul>
                    </div>
                </div>
                <div className="idiomas">
                    <h3>Idiomas</h3>
                    <ul>
                        <li>Inglês<span> - Básico (Boa Compreensão de Leitura e Escrita, Fluência na Conversação em Estudo)</span></li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Formacao;