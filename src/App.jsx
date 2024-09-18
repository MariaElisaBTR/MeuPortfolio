import Header from './components/Header/Header';
import FaixaAnimada from './components/FaixaAnimada/FaixaAnimada'
import Projetos from './components/Projetos/Projetos'
import Habilidades from './components/Habilidades/Habilidades'
import Sobre from './components/Sobre/Sobre'
import Formacao from './components/Formacao/Formacao'
import Experiencias from './components/Experiencias/Experiencias'
import Footer from './components/Footer/Footer';

import './App.css'


function App() {


  return (
    <>
      <Header />
      <FaixaAnimada />
      <Sobre />
      <Formacao />
      <Habilidades />
      <Experiencias />
      {/* <Projetos /> */}
      <Footer />

    </>
  )
}

export default App
