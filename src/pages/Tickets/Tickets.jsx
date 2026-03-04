import React, { use, useState } from "react";
import { FaCalendarAlt } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import Banner from "../Banner/Banner";

const Tickets = ({ ticketPromise }) => {
  const ticketLists = use(ticketPromise);
  console.log(ticketPromise);

  const [tickets, setTickets] = useState(ticketLists || []);
  const [inProgress, setInProgress] = useState([]);
  const [resolvedTasks, setResolvedTasks] = useState([]);

  const addToProgress = (ticket) => {
    const isExits = inProgress.find((item) => item.id === ticket.id);
    if (!isExits) {
      setInProgress([...inProgress, ticket]);
      toast.success("Ticket added to In-Progress!");
    } else {
      toast.warning("Ticket already in progress!");
    }
  };

  const handleComplete = (task) => {
    setInProgress(inProgress.filter((item) => item.id !== task.id));

    setResolvedTasks([...resolvedTasks, task]);
    setTickets(tickets.filter((item) => item.id !== task.id));

    toast.success("Ticket Resolved Sucessfully!");
  };

  return (
    <div className="bg-[#F8FAFC]">
      <Banner
        inProgress={inProgress.length}
        resolvedTasks={resolvedTasks.length}
      />

      <ToastContainer position="top-right" />
      <div className="max-w-7xl mx-auto p-6 px-5 lg:px-10 flex flex-col lg:flex-row gap-10">
        <div className="lg:w-2/3">
          <h2 className="text-2xl font-bold mb-6">Customer Tickets</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {tickets.map((ticket) => (
              <div
                onClick={() => addToProgress(ticket)}
                key={ticket.id}
                className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-md transition-all cursor-pointer"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">
                      {ticket.title}
                    </h3>
                    <p className="text-sm text-gray-500 mt-2 max-w-2xl">
                      {ticket.description}
                    </p>
                  </div>

                  <span
                    className={`flex items-center gap-2 ${ticket.status.toLowerCase() === "open" ? "bg-green-100  text-green-700" : "bg-yellow-100 text-yellow-700"}  px-4 py-1 rounded-full 
          text-sm font-medium whitespace-nowrap`}
                  >
                    <span
                      className={`w-2.5 h-2.5 ${ticket.status.toLowerCase() === "open" ? "bg-green-500" : "bg-yellow-500"}  rounded-full`}
                    ></span>
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

        <div className="lg:w-1/3 space-y-10 ">
          <div>
            <h2 className="text-2xl font-bold mb-6">Task Status</h2>
            {inProgress.map((task) => (
              <div key={task.id} className="bg-white p-5 rounded-lg  mb-4">
                <p className="font-semibold text-gray-500 mb-3">{task.title}</p>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleComplete(task);
                  }}
                  className="btn bg-[#02A53B] btn-sm w-full text-white"
                >
                  Complete
                </button>
              </div>
            ))}
          </div>

          <div>
            <h2 className="text-xl text-gray-600 font-bold mb-4">
              Resolved Tasks
            </h2>
            {resolvedTasks.map((task) => (
              <div key={task.id} className="bg-[#e0e7ff] p-5 rounded-lg  mb-4">
                <h1 className="text-black">{task.title}</h1>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tickets;
