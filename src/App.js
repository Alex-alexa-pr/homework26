import Button from "./components/Button";
import OpenAlert from "./components/OpenAlert";


function App() {
  return (
    <div>
      <Button color="primary">Primary button</Button>
      <Button color="primary" size="large">Primary large button</Button>
      <Button color="secondary">Secondary button</Button>
      <Button color="primary" disabled>Disabled button</Button>
      <div> <OpenAlert/>
        </div>
    </div>
  );
}

export default App;
