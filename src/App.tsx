import Hero from './components/Hero';
import NavBar from './components/NavBar'
import './css/App.css'



type Link={
  name:string,
  link:string
}


function App() {
  const Links: Array<Link> = [
    { name: 'Home', link: '/' },
    { name: 'About', link: '/about' },
    { name: 'Featurs', link: '/Featers' },
    { name: 'Contact', link: '/contact' },
  ];
  return (
    <div className='w-full  sm:px-36 px-3 relative min-h-screen bg-white flex flex-col justify-start items-center'>
      <NavBar Links={Links} />
      <Hero />
    </div>
  );
}

export default App
