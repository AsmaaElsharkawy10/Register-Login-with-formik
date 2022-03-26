import React from 'react'
import AboutComponent from './components/About/About';
import Footer from './components/Footer/Footer';
import HomeComponent  from './components/Home/Home';
import PortifolioComponent from './components/Portifolio/Portifolio';
import SkillsComponent from './components/Skills/Skills';
function App() {
return(

    <div className='App'>
        <HomeComponent/>
        <AboutComponent/>
        <SkillsComponent/>
        <PortifolioComponent/>
        <Footer/>
    </div>
)
}
 
    

export default App;