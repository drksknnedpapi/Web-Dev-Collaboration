import banner from './banner_desktop_09e5f5a8-56d4-70bb-9fc1-9e30d3f1c337.jpeg'
import './App.css';

//import Cards from './components/cards';

function App() {
  return (
    <>
      <div className="App">
        <a href='/'><img src={banner} alt='deal-banner' className='banner-img' /></a>
      </div>

      <div className='page-content'>
        <h2>LIMITED TIME OFFERS</h2>
      </div>
      
    </>
  );
}

export default App;
