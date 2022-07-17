
import './App.css';
import AddSercices from './components/addservices/AddSercices';
import Area from './components/area/Area';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Pricing from './components/pricing/Pricing';
import TestImonials from './components/testImonials/TestImonials';
import Updates from './components/updates/Updates';
import Work from './components/work/Work';

function App() {
  return (
    <div className="App">
     <Header />
     <Work />
     <Pricing />
     <AddSercices />
     <Updates />
     <TestImonials />
     <Area />
     <Footer />


    </div>
  );
}

export default App;
