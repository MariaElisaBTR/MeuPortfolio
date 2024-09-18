import './SobreStyle.css';

function Sobre() {
    const anoAtual = new Date().getFullYear(); // Obtem o ano atual
    const anoNascimento = 1985; // Ano de nascimento
    const mesNascimento = 5; // Mês do aniversário
    const diaNascimento = 31; // Dia do aniversário
    const today = new Date(); // Data atual
    let idade = anoAtual - anoNascimento; // Cálculo da idade

    // Verificar se o aniversário já passou este ano
    if (today.getMonth() + 1 < mesNascimento || (today.getMonth() + 1 === mesNascimento && today.getDate() < diaNascimento)) {
        idade -= 1; // Se o aniversário ainda não passou este ano, subtrai 1
    }

    return (
        <section className='sobre' id='sobre' aria-label="Sobre">
            <div className='sobre__container'>
                <div className='sobre__textos'>
                    <h2 className='sobre__titulo-principal'><strong>Sobre Mim</strong></h2>
                    <p className='sobre__paragrafo'>Sou a Maria Elisa, tenho {idade} anos, moro Águeda em Portugal e sou formada em Tecnologia em Processamento de dados pela UNIFAI - Centro Universitário de Adamantina, e também sou graduada em Licenciatura em Pedagogia pela Claretiano Centro Universitário, essa segunda formação contribui muito para minha carreira, principalmente em ter uma comunicação assertiva, além de enriquecer meu embasamento acadêmico em meu projeto de escrita de livro didático para tecnologia. Apaixonada por tecnologia e em constante busca por aprendizado, pro ativa e focada em resultados. Busco soluções inovadoras e eficientes para os projetos os quais me envolvo, com o objetivo de evoluir como profissional e contribuir significativamente para o sucesso das empresas onde colaboro.</p>

                    <h3 className='sobre__titulo-secundario'>Por que escolhi ser dev?</h3>
                    <p>Escolhi ser desenvolvedora porque amo a combinação entre pegar uma ideia ou necessidade e transformar em uma aplicação ou ferramentas tecnológicas. É uma oportunidade atuar no desenvolvimento de projetos atraentes, profissionais e com inovações digitais. A tecnologia me desafia a aprender constantemente e superar expectativas.</p>

                    <a href="contato/curriculoMariaElisaBTR.pdf" target="_blank" rel="noreferrer">
                        <button className="button sobre__button" type="submit">Baixar CV</button>
                    </a>
                </div>
                <div className="sobre__img">
                    <img src="/secaoSobre-img.png" width="1080" height="1080" alt="Imagem de perfil Maria Elisa" />
                </div>
            </div>
        </section>
    );
}

export default Sobre;
