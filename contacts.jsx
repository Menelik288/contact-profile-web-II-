function Contact(props){
  return (<div className="div">
    <img src={props.img}></img>
    <h1>{props.name}</h1>
    <h2>{props.email}</h2>
    <h3>{props.phone}</h3>
  </div>)
}
export default Contact;