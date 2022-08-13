import Landing from './components/Landing/Landing';
import Navbar from './components/Navbar/Navbar';
import Url from './components/Url/Url';

function App() {
  return (
    <div className="container max-w-screen-2xl mx-auto py-6 px-12 md:py-12 md:px-24 min-h-screen">
      <Navbar />
      <Landing />
      <Url />
    </div>
  );
}

export default App;
