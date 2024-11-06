import {ReactComponent as IconeGithub} from '../../assets/img/gitHub.svg'
import './styles.css';
function Navbar () {
    return(
        <header>
      <nav className='container'>
        <div className='movies-nav-content'>
          <h1>
           Página de filmes arturffotenele
            </h1>
              <a href="https://github.com/arturffotenele">
              <div  className='movies-repository-container'>
                <IconeGithub />
                <p className='movies-repository-link'>/gitHub</p>
              </div>
              </a>
        </div>
      </nav>
    </header>
    );
}

export default Navbar;