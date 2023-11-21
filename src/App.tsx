import ComingSoon from './components/ComingSoon/ComingSoon.tsx';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header.tsx';
import HomeScreen from './screens/HomeScreen.tsx';

const comingSoon = true;

function App() {
  return (
    <>
      {comingSoon ? (
        <ComingSoon />
      ) : (
        <BrowserRouter basename='/enactus-main'>
          <Header />
          <Routes>
            <Route index={true} path='/' element={<HomeScreen />} />
          </Routes>
        </BrowserRouter>
      )}
    </>
  );
}

export default App;
