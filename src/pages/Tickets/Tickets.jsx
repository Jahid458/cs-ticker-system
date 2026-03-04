import React, { use, useState } from 'react'
import { FaCalendarAlt } from 'react-icons/fa';

const Tickets = ({ticketPromise}) => {
    const ticketLists = use(ticketPromise);
    console.log(ticketPromise);

    const [tickets, setTickets] = useState(ticketLists || []);



  return (
    <div className='max-w-7xl mx-auto p-6 px-5 lg:px-10 flex flex-col lg:flex-row gap-10'>

     <div className="lg:w-2/3">
  <h2 className="text-2xl font-bold mb-6">Customer Tickets</h2>

  <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
    {tickets.map((ticket) => (
      <div
        key={ticket.id}
        className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-md transition-all cursor-pointer"
      >
        {/* Top Section */}
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-lg font-semibold text-gray-800">
              {ticket.title}
            </h3>
            <p className="text-sm text-gray-500 mt-2 max-w-2xl">
              {ticket.description}
            </p>
          </div>


          <span className={`flex items-center gap-2 ${ticket.status.toLowerCase() === 'open' ? 'bg-green-100  text-green-700' : 'bg-yellow-100 text-yellow-700'}  px-4 py-1 rounded-full 
          text-sm font-medium whitespace-nowrap`}>
            <span className={`w-2.5 h-2.5 ${ticket.status.toLowerCase() === 'open' ? 'bg-green-500' : 'bg-yellow-500'}  rounded-full`}></span>
            {ticket.status}
          </span>
        </div>

        <div className="flex justify-between items-center mt-6 text-sm text-gray-500">
          
          <div className="flex items-center gap-4">
            <span className="text-gray-400 font-medium">
              #{ticket.id}
            </span>
            <span className="text-red-500 font-semibold">
              {ticket.priority}
            </span>
          </div>

          <div className="flex items-center gap-6">
            <span>{ticket.customer}</span>
            <span className="flex items-center gap-2">
              <FaCalendarAlt className="text-gray-400" />
              {ticket.createdAt}
            </span>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>

    </div>
  )
}

export default Tickets