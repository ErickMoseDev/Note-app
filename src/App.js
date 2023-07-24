import "./App.css";
import Form from "./components/form/Form";
import Todo from "./components/todo/Todo";
function App() {
  return (
    <div className="w-full h-screen grid grid-cols-[400px_auto] max-w-screen-xl mx-auto gap-x-5 overflow-hidden">
      <div>
        <Form />
      </div>
      <div className="bg-gray-200"></div>
    </div>
  );
}

export default App;
