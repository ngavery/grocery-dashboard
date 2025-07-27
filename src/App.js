import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';

import LanguageToggle from './components/LanguageToggle';
import Hero from './components/Hero';
import DynamicChart from './components/DynamicChart';
import FoodTable from './components/FoodTable';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <LanguageToggle/>
      <Hero />
      <main>
        <Container>
          <DynamicChart />
          <FoodTable />
        </Container>

      </main>
      <Footer/>
    </div>
  );
}

export default App;