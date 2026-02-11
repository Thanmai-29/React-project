function Hello(props) {
    let dis=props.price>=30000?<p><h3>5% discount</h3></p>:null
    return (
      <div className="card">
        <h3>{props.name}</h3>
        <p>{props.price}</p>
        <p>{props.details}</p>
        <p>{dis}</p>
            
      </div>
    );
}
export default Hello;