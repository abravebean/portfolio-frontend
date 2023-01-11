import Loader from 'react-loaders'
import { RotatingSquare } from 'react-loader-spinner'

function Home(props) {
    return (
      <div>
          <h1>Home</h1>;
      <RotatingSquare
  height="80"
  width="80"
  radius="9"
  color="#48FFF9"
  ariaLabel="loading"
  wrapperStyle
  wrapperClass/>
<Loader type="pacman" className='pacman'/>
      </div>

)  }
  
  export default Home;