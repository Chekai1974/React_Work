import Life from "./Life";
import Info from "./Info";
import Achievements from "./Achievements";
function App() {
  const attention = "Информация взята из интернета"
  const styleForAttention = {
    color: "red",
  }
  const stylesForDivs = {
    width: "1000px",
    textAlign: "center",
    border: "2px solid black",
    display: "flex",
    flexDirection: "column",
    margin: "0 auto",
    padding: "10px",
    marginBottom: "5px"
  }
  
  return (
    <>
      <Info attention={attention} styles={styleForAttention} stylesForDivs={stylesForDivs}></Info>
      <Life attention={attention} styles={styleForAttention} stylesForDivs={stylesForDivs}></Life>
      <Achievements attention={attention} styles={styleForAttention} stylesForDivs={stylesForDivs}></Achievements>
    </>
  );
}

export default App;
