import { count } from "console";
import { title } from "process";
import "./styles.css";

function Form() {
  const movies = {
    id: 1,
    image:
      "https://media.themoviedb.org/t/p/w220_and_h330_face/6rr7r6cMWMYlgJFBGyPkSHEBDkk.jpg",
    title: "Alien: Romulus",
    count: 2,
    score: 4.0,
  };

  return (
    <div className="movies-form-container">
      <img className= 'movies-card-image' src={movies.image} alt="Aliens: Romulus" />
      <div className="movies-card-bottom-container">
        <h3>Aliens: Romulus</h3>
        <form className="movies-form">
          <div className="form-group movies-form-group">
            <label htmlFor="email">informe seu e-mail</label>
            <input className="form-control" type="email" id="emai" />
          </div>
          <div className="form-group movies-form-group">
            <label htmlFor="score">informe sua avaliação</label>
            <select className="form-control" id="score">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>
          <div className="movies-form-btn-container" >
          <button className="btn movies-btn" type="submit">
            SALVAR
          </button>
          </div>
        </form>

        <button className="btn movies-btn mt-3">CANCELAR</button>
      </div>
    </div>
  );
}

export default Form;
