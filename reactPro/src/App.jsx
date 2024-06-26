import Hello from "./components/Hello";

// props makes components dynamic
function App() {
  return (
    <div className="App">
      {/* props are passed in a similar way as html attributes */}
      <Hello name="Rob" />
      <Hello name="Jessica" />
      <Hello message="Howdy" name="Mark" />
      <Hello name="Tom" message="Hello" />
    </div>
  );
}

export default App;
