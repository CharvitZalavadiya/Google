import StartPage from "./components/startPage";
import axios from "axios";



function App() {

  axios.defaults.baseURL = "http://localhost:4040"

  return (
    <>
      <StartPage />
    </>
  )
}

export default App