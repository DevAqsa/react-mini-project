import Navbar from './Components/Navbar'
import Footer from "./Components/Footer"
import Card from "./Components/Card"

function App() {
 
  const imageSources = [
    {
    title : "Programming", 
    desc : "Programming is the process of creating a set of instructions that tell a computer how to perform a task.",  
    img : "https://images.unsplash.com/photo-1621839673705-6617adf9e890?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },

  {
    title : "Analysis", 
    desc : "Analysis involves examining data or information systematically to understand its underlying patterns, trends, or insights.", 
    img : 'https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },

  {
    title : "Standups", 
    desc : "A stand-up is a short, daily meeting that is used to keep teams on track and working together effectively.", 
    img : 'https://plus.unsplash.com/premium_photo-1683147779719-7455d190c982?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },

  {
    title : "Market-Adds", 
    desc : " A marketing add is a paid form of communication from an identifiable source, delivered through a communication channel.", 
    img : "https://images.unsplash.com/photo-1509395176047-4a66953fd231?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },

  {
    title : "UXUI", 
    desc : " User experience (UX) design is the process design teams use to create products that provide meaningful and relevant experiences to users.", 
    img : "https://images.unsplash.com/photo-1576595580361-90a855b84b20?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },

  
  {
    title : "Marketing", 
    desc : " Marketing refers to activities a company undertakes to promote the buying or selling of a product or service.", 
    img : "https://images.unsplash.com/photo-1542744095-0d53267d353e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },

  
  {
    title : "E-commerce", 
    desc : " E-commerce is the buying and selling of goods and services over the internet.",  
    img : "https://images.unsplash.com/photo-1481487196290-c152efe083f5?q=80&w=1924&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },

  {
    title : "Web-development", 
    desc : " Web development is the work involved in developing a website for the Internet or an intranet.utilizing various technologies such as HTML, CSS, and JavaScript.", 
    img : "https://images.unsplash.com/photo-1541176447985-6bb45fb77a14?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },

]
  
  return (
    <>
    <Navbar/>
    <div className='cardContainer'>
     {/* Render a card for each image source */}
   {imageSources.map((source, index) => (
    <Card key={index} imageSources={source.img} title={source.title}  desc={source.desc}/>
  ))}

  
  
   </div>
    <Footer/>
    </>
  )
}

export default App
