import './App.css'
import Footer from './Components/Footer'
import Header from './Components/Header'
import Shop from './Components/Shop';

import { ContextProvider} from './Context/context'


function App() {
  return (
    <>
      <Header />
      <ContextProvider>
        <Shop />
      </ContextProvider>
      <Footer />
    </>
  );
}

export default App;
