import Layout from "./layout/Layout"
import { ToastContainer } from "./Toastify/Toastify"


function App() {

  return (
    <>
      <Layout />
      <ToastContainer position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark" />
    </>
  )
}

export default App
