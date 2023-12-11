import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header.tsx';
import Footer from './components/Footer.tsx';
import HomeScreen from './screens/HomeScreen.tsx';

function App() {
  return (
    <>
      <BrowserRouter basename='/enactus-main'>
        <Header />
        <Routes>
          <Route index={true} path='/' element={<HomeScreen />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
