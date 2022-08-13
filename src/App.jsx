import Landing from './components/Landing/Landing';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="container max-w-screen-xl mx-auto py-6 px-12 md:py-12 md:px-24 min-h-screen">
      <Navbar />
      <Landing />
    </div>
  );
}

export default App;
