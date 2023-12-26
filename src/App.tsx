import Button from "./components/Button";
import Input from "./components/Input";

function App() {
  return (
    <main>
      <p>
        <Button el="button">A Button</Button>
      </p>
      <p>
        <Button el="anchor" href="www.google.com">
          A Link
        </Button>
      </p>
    </main>
  );
}

export default App;
