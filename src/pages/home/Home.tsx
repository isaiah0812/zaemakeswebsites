import { useContext } from "react"
import { MessageContext } from "../../App";

function Home() {
  const { messages, messagePosition } = useContext(MessageContext);

  return (
    <h1>{messages[messagePosition]}</h1>
  )
}

export default Home;