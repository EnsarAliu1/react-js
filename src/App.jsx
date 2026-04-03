import Header from "./components/Header";
import StringProp from "./components/StringProp";

function App() {
  const firstName = "ensar";
  const lastName = "aliu";
  return (
    <div>
      <Header />
      <StringProp firstName={firstName} lastName={lastName } />
    </div>
  )
}


export default App
