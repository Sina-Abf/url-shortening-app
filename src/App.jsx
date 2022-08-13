import Boost from './components/Boost/Boost';
import Footer from './components/Footer/Footer';
import Landing from './components/Landing/Landing';
import Navbar from './components/Navbar/Navbar';
import Statistics from './components/Statistics/Statistics';
import Url from './components/Url/Url';

function App() {
  return (
    <div className="container max-w-screen-2xl mx-auto  min-h-screen">
      <Navbar />
      <Landing />
      <Url />
      <Statistics />
      <Boost />
      <Footer />
    </div>
  );
}

export default App;
