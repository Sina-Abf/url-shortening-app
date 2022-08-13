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
    </div>
  );
}

export default App;
