import Hero from './components/Section/Hero';
import Navbar from './components/Section/Navbar';
import AppLayout from './layout/AppLayout';

function App() {
  return (
    <AppLayout>
      <Navbar />
      <Hero />
    </AppLayout>
  );
}

export default App;
