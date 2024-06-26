const name = "Tobby";

function displayMessage() {
  return "Wow";
}

// props makes components dynamic, we make the Hello function below to say hi to different people(names) by making it accept props
// components are regular fns which return jsx , we pass props as arguments
// props is like this

function Hello(props) {

  // return <h1>Hello from component {displayMessage()}</h1>;
  return (
    <div>
      <h1>Hello Mike {props.name}</h1> 
      <h1>Hello {props.name}</h1> 
      <h1>{props.message}  {props.name}</h1>   
    </div>
  );
}

export default Hello;
