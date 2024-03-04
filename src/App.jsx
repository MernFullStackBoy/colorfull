import { useRef, useState } from "react"
import "./App.css"

const App = () => {

  const [color, setColor] = useState("to left bottom, red, orange")

  return (
    <div style={{
      width: "300px",
      margin: "0 auto",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      marginTop: 50
    }}>
      <form>
        <input onChange={(e) => setColor(e.target.value)} placeholder="Enter color" style={{ width: "280px", height: "35px", outline: 'none', border: "none", background: "black", color: "white", padding: "0 10px", fontSize: 18, borderRadius: 10 }} type="text" />
        <div style={{
          width: "290px",
          height: "290px",
          background: `linear-gradient(${color})`,
          marginTop: 20,
          borderRadius: 20,
        }}></div>
      </form>
    </div>
  )
}

export default App