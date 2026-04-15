import Header from "./components/Header";
import StringProp from "./components/StringProp";
import NumberState from "./components/NumberState";
import StringState from "./components/StringState";
import BooleanState from "./components/BooleanState";
import InputState from "./components/InputState";
import ToDo from "./components/ToDo";
import RenderList from "./components/list-array/RenderList";
import ObjectList from "./components/list-array/ObjectList";
import HomeWork1 from "./components/homeWorks/HomeWork1";

function App() {
  //const firstName = "ensar";
  //const lastName = "aliu";
  return (
    <div>
      <Header />
      {/* <StringProp firstName={firstName} lastName={lastName} /> */}
      {/* <NumberState /> */}
      {/* <StringState /> */}
      {/* <BooleanState/> */}
      {/* <InputState /> */}
      {/* <ToDo /> */}
      {/* <RenderList /> */}
      {/* <ObjectList /> */}
      <HomeWork1 /> 
    </div>
  )
}


export default App
