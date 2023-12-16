import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header.tsx';
import Footer from './components/Footer.tsx';
import {
  HomeScreen,
  AboutUsScreen,
  ProjectsScreen,
  TeamScreen,
  ContactUsScreen,
} from './screens/ExportScreens.ts';

function App() {
  return (
    <>
      <BrowserRouter basename='/enactus-main'>
        <Header />
        <Routes>
          <Route index={true} path='/' element={<HomeScreen />} />
          <Route path='/about' element={<AboutUsScreen />} />
          <Route path='/projects' element={<ProjectsScreen />} />
          <Route path='/team' element={<TeamScreen />} />
          <Route path='/contact' element={<ContactUsScreen />} />
        </Routes>
        <Footer />
        <ToastContainer />
      </BrowserRouter>
    </>
  );
}

export default App;
