import { Suspense } from 'react';
import './App.css'
import Footer from './pages/Footer/Footer'
import Navbar from './pages/Navbar/Navbar'
import Tickets from './pages/Tickets/Tickets';




const ticketFetch = async() => {
  const res   = await fetch('/data.json') ;
  return res.json();

}


function App() {

  const ticketPromise = ticketFetch();



  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      
      <Navbar />

      <main className="grow">
        <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
          <Tickets ticketPromise={ticketPromise} />
        </Suspense>
      </main>

      <Footer />

    </div>
  )
}

export default App