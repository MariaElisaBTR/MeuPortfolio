import './ExperienciasStyle.css'

function Experiencias() {
    return (
        <section className='experiencias' id='experiencias' aria-label="Experiência">
            <div className='container'>
                <h2 className="subtitulo">Experiências</h2>
                <div className="experiencias__container ">
                    <div className="experiencias__empresa">
                        <h3 className="experiencias__titulo">Autônoma | Ago/24 - Atualmente</h3>
                        <ul className="experiencias__habilidades">
                            <li>DESENVOLVEDORA DE APLICAÇÕES</li>
                        </ul>
                        <p className="experiencias__paragrafo">Atualmente estou me dedicando a pesquisas e estudos de novas tecnologias e aprimoramento das que já trabalho! Chego em Portugal ainda em setembro de 2024, estou pesquisando o mercado e buscando entender como posso estar me integrando para que consiga uma oportunidade!
                        </p>
                    </div>
                    <div className="experiencias__empresa">
                        <h3 className="experiencias__titulo">EY - Ernest & Young | Dez/22 - Jul/2024</h3>
                        <ul className="experiencias__habilidades">
                            <li>ANALISTA PLENO DE DESENVOLVIMENTO DE SOLUÇÕES DE TI </li>
                        </ul>
                        <p className="experiencias__paragrafo ">Atuei com Análise e Desenvolvimento de aplicações Frontend nas tecnologias: React, JavaScript, TypeScript. Diariamente lidava com metodologias ágeis fazendo uso das ferramentas: jira, jenkins, sonnar e checkmarx. E colaborava ativamente com o desenvolvimento de conteúdos compartilhados entre os colegas como: escrita de artigos, sharepoint's, e-book's entre outros. Solicitei desligamento voluntário em julho deste ano pois estou imigrando para Portugal!
                        </p>
                    </div>
                    <div className="experiencias__empresa">
                        <h3 className="experiencias__titulo">Secretaria Municipal de Educação em Tupã-SP | Ago/18 - nov/22</h3>
                        <ul className="experiencias__habilidades">
                             <li>ESPECIALISTA EM EDUCAÇÃO (PEDAGOGA)</li>
                        </ul>
                        <p className="experiencias__paragrafo ">Atuei como pedagoga no planejamento, análise e desenvolvimento de projetos e planos de aulas em parceria com educadores de modalidades de robótica e tecnologia, auxiliando no preparo de conteúdos e roteiros para aplicação em sala de aula. Atuar como pedagoga em escolas contribuiu muito para uma comunicação mais assertiva, e o despertar da escrita. Estou organizando um projeto para desenvolvimento de um livro didático voltado ao ensino de tecnologia nas escolas.
                        </p>
                    </div>
                    <div className="experiencias__empresa">
                        <h3 className="experiencias__titulo">Instituição Financeira Coorporativa Sicredi | Mai/15 - Jan/2017</h3>
                        <ul className="experiencias__habilidades">
                            <li>ASSISTENTE DE ATENDIMENTO E SUPORTE TÉCNICO</li>
                        </ul>
                        <p className="experiencias__paragrafo">Assistente de Atendimento à Clientes e Suporte Técnico nas áreas Administrativa, internas e de Negócios. Atuei ativamnte no apoio as rotinas que exigiam atualizações das máquinas e equipamentos além de todo suporte com qualquer tecnologia que fosse necessário de uso dos demais colaboradores da instituição.</p>
                    </div>
                    <div className="experiencias__empresa">
                        <h3 className="experiencias__titulo">GSA Soluções | Jan/13 - Jun/13</h3>
                        <ul className="experiencias__habilidades">
                            <li>DESENVOLVEDORA DE SISTEMAS ACADÊMICOS</li>
                        </ul>
                        <p className="experiencias__paragrafo ">Programação, Análise e Desenvolvimento de novas aplicações acadêmicas e suporte as aplicações já existentes na empresa, além do suporte a usuários, em tecnologias Delphi e PHP.</p>
                    </div>
                    <div className="experiencias__empresa">
                        <h3 className="experiencias__titulo">Prefeitura Municipal de Bastos | Ago/07 - Dez/09</h3>
                        <ul className="experiencias__habilidades">
                            <li>ANALISTA DE SISTEMAS / ASSISTÊNCIA TÉNICA EM TECNOLOGIA</li>
                        </ul>
                        <p className="experiencias__paragrafo ">Manutenção de servidores e firewall, desenvolvimento e análise de projetos, implementação de sistemas (PHP, C#, com bancos MYSQL e SQL Server), manutenção dos sistemas de base da prefeitura (folha de pagamento e RH, tributação, tesouraria, contabilidade, finanças e jurídico) e suporte a tecnologias implantadas (como projetos de implantação de redes sem fio e internet grátis para todos na cidade). Suporte aos usuários de todos os setores.</p>
                    </div>
                </div>
                {/* <div className="voluntario">
                    <h3 className="voluntario__titulo">Trabalho Voluntário</h3>
                    <div className="experiencias__empresa">
                        <h3 className="experiencias__titulo">Código Certo Coders - Dev. Front-End</h3>
                        <ul className="experiencias__habilidades">
                            <li>Ago/24 - Atualmente</li>
                        </ul>
                        <p className="experiencias__habilidades">Atuação como desenvolvedora front-end, utilizando React, CSS e Figma
                            para criar interfaces responsivas e intuitivas. Participação em reuniões semanais para
                            alinhamento das tarefas e acompanhamento do progresso dos projetos.
                        </p>
                    </div>
                </div> */}
            </div>
        </section>
    )
}

export default Experiencias;