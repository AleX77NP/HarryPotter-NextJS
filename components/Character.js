
const Character = ({character}) => (

<div className="card" style={{height:540, marginBottom: 30}}>
  <img className="card-img-top" src={character.image} alt="Character" style={{height:450, width:"auto"}} />
  <div className="card-body">
    <h5 className="card-title">{character.name}</h5>
    <p className="card-text">{character.house}</p>
  </div>
</div>

)

export default Character