import React from "react";
import { useNavigate } from "react-router-dom";
import { FaFilePdf } from "react-icons/fa6";



const Table = ({ data, onSearchChange, searchQueries }) => {

  const navigate = useNavigate()

  const handleClick = () => {
     navigate('/cases')
  }
    

  return (
    <div className="flex flex-col lg:px-20">
      <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8 ">
        <div className="inline-block min-w-full py-2 align-middle md:px-6 ">
          <div className="overflow-hidden border border-gray-200 md:rounded-lg bg-white">
            <table className="min-w-full divide-y divide-gray-200 ">
              <thead className="bg-white divide-y">
                <tr>
                  <th className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-slate-600">
                    <span className="text-lg uppercase px-5">Case Id</span>
                  </th>
                  <th className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-slate-600 flex flex-col">
                    <span className="text-lg uppercase px-1">Start Date</span>
                  </th>
                  <th className="px-8 py-3.5 text-sm font-normal text-left  text-slate-600">
                    <span className="text-lg uppercase px-5">Name/Email</span>
                  </th>
                  <th className="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-slate-600">
                    <span className="text-lg uppercase">End Date</span>
                  </th>
                  <th className="px-8 py-3.5 text-sm font-normal text-left rtl:text-right text-slate-600">
                    <span className="text-lg uppercase px-5">Status</span>
                  </th>
                  <th className="px-4 py-3.5 text-sm font-normal text-center text-slate-600">
                    <span className="text-lg">ACTION</span>
                  </th>
                  <th scope="col" className="relative py-3.5 px-4">
                    <span className="sr-only">Actions</span>
                  </th>
                </tr>
                <tr className="">
                  <th className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-700">
                   
                      <input
                        type="text"
                        name="caseId"
                        value={searchQueries.caseId}
                        onChange={onSearchChange}
                        placeholder="case id"
                        className="ml-2 border rounded px-2 py-1 block "
                      />
                    
                  </th>
                  <th className=" py-3.5 text-sm font-normal text-center rtl:text-right text-slate-600 flex flex-col  ">
                    <input
                      type="text"
                      name="startDate"
                      value={searchQueries.startDate}
                      onChange={onSearchChange}
                      placeholder="search start-date"
                      className="ml-2 border rounded px-2 py-1 "
                    />
                  </th>
                  <th className="pe-[-80px] py-3.5 text-sm font-normal text-center  text-slate-600">
                    <input
                      type="text"
                      name="customerName"
                      value={
                        searchQueries.customerName ||
                        searchQueries.customerEmail
                      }
                      onChange={onSearchChange}
                      placeholder="search name or email"
                      className="ml-2 border rounded px-2 py-1 "
                    />
                  </th>
                  <th className=" py-3.5 text-sm font-normal text-center rtl:text-right text-slate-600">
                    <input
                      type="text"
                      name="dueDate"
                      value={searchQueries.dueDate}
                      onChange={onSearchChange}
                      placeholder="search end-date"
                      className="ml-2 border rounded px-2 py-1 "
                    />
                  </th>
                  <th className=" py-3.5 text-sm font-normal text-center rtl:text-right text-slate-600">
                    <input
                      type="text"
                      name="status"
                      value={searchQueries.status}
                      onChange={onSearchChange}
                      placeholder="search status"
                      className="ml-2 border rounded px-2 py-1 "
                    />
                  </th>
                  <th className=" py-3.5 text-sm font-normal text-center text-slate-600 flex justify-center items-center">
                    <span className="text-2xl cursor-pointer">
                    <FaFilePdf/>
                    </span>
                  </th>
                  <th scope="col" className="relative py-3.5 px-4">
                    <span className="sr-only">
                     
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {data.map((item) => (
                  <tr key={item.caseId}>
                    <td className="px-4 py-4 text-lg font-medium whitespace-nowrap">
                      <div className="flex items-center gap-x-3">
                        <span>{item.caseId}</span>
                      </div>
                    </td>
                    <td className="px-4 py-4 text-lg whitespace-nowrap">
                      <span>{item.startDate}</span>
                    </td>
                    <td className="px-4 py-4 text-sm whitespace-nowrap">
                      <div className="flex items-center gap-x-2">
                        <img
                          className="object-cover w-8 h-8 rounded-full"
                          src={item.customer.avatar}
                          alt={item.customer.name}
                        />
                        <div>
                          <h2 className="text-lg font-medium text-gray-800">
                            {item.customer.name}
                          </h2>
                          <p className="text-md font-normal text-gray-600">
                            {item.customer.email}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-12 py-4 text-lg font-medium whitespace-nowrap">
                      <span>{item.dueDate}</span>
                    </td>
                    <td className="px-4 py-4 text-sm whitespace-nowrap flex justify-center items-center">
                      <div
                        className={`inline-flex items-center px-3 py-1 w-28 rounded-full gap-x-2 text-slate-600 ${
                          item.status === "Closed"
                            ? "bg-red-100/60"
                            : item.status === "In Progress"
                            ? "bg-blue-300/60"
                            : "bg-emerald-100/60"
                        }`}
                      >
                        <span
                          className={`h-1.5 w-1.5 rounded-full ${
                            item.status === "Closed"
                              ? "bg-red-500"
                              : item.status === "In Progress"
                              ? "bg-blue-500"
                              : "bg-emerald-500"
                          }`}
                        ></span>
                        <h2 className="text-lg font-normal">{item.status}</h2>
                      </div>
                    </td>
                    <td className="px-4 py-4 text-sm whitespace-nowrap">
                      <div className="flex items-center justify-center">
                        <button onClick={handleClick} className="inline-flex items-center justify-center rounded-full border-[1px] border-blue-600 py-1 px-6 font-dm text-balance text-blue-600 font-medium transition-transform duration-200 ease-in-out hover:scale-[1.02]">
                          View
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
