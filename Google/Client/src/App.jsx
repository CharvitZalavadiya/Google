import StartPage from "./components/startPage";
import axios from "axios";



function App() {

  axios.defaults.baseURL = "https://google-home.onrender.com/"

  return (
    <>
      <StartPage />
    </>
  )
}

export default App