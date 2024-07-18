import React,{useState} from 'react'
import Table from './Table';
import Pagination from './Pagination';


const data = [
    {
      caseId: "#3066",
      startDate: "Jan 6, 2022",
      dueDate: "Feb 6, 2022",
      status: "Pending",
      customer: {
        name: "Arthur Melo",
        email: "authurmelo@example.com",
        avatar:
          "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
      },
    },
    {
      caseId: "#3065",
      startDate: "Jan 5, 2022",
      dueDate: "Feb 5, 2022",
      status: "Closed",
      customer: {
        name: "Andi Lane",
        email: "andi@example.com",
        avatar:
          "https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
      },
    },
    {
      caseId: "#3064",
      startDate: "Jan 5, 2022",
      dueDate: "Feb 5, 2022",
      status: "In Progress",
      customer: {
        name: "Kate Morrison",
        email: "kate@example.com",
        avatar:
          "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=761&q=80",
      },
    },
    {
      caseId: "#3063",
      startDate: "Jan 4, 2022",
      dueDate: "Feb 4, 2022",
      status: "Pending",
      customer: {
        name: "Candice Wu",
        email: "candice@example.com",
        avatar:
          "https://images.unsplash.com/photo-1506863530036-1efeddceb993?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1344&q=80",
      },
    },
    {
      caseId: "#3062",
      startDate: "Jan 4, 2022",
      dueDate: "Feb 4, 2022",
      status: "Closed",
      customer: {
        name: "Orlando Diggs",
        email: "orlando@example.com",
        avatar:
          "https://images.unsplash.com/photo-1528892952291-009c663ce843?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=644&q=80",
      },
    },
    {
      caseId: "#3061",
      startDate: "Jan 6, 2022",
      dueDate: "Feb 6, 2022",
      status: "In Progress",
      customer: {
        name: "Arthur Melo",
        email: "authurmelo@example.com",
        avatar:
          "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
      },
    },
    {
      caseId: "#3075",
      startDate: "Jan 5, 2022",
      dueDate: "Feb 5, 2022",
      status: "Closed",
      customer: {
        name: "Andi Lane",
        email: "andi@example.com",
        avatar:
          "https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
      },
    },
    {
      caseId: "#3074",
      startDate: "Jan 5, 2022",
      dueDate: "Feb 5, 2022",
      status: "Pending",
      customer: {
        name: "Kate Morrison",
        email: "kate@example.com",
        avatar:
          "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=761&q=80",
      },
    },
    {
      caseId: "#3073",
      startDate: "Jan 4, 2022",
      dueDate: "Feb 4, 2022",
      status: "In Progress",
      customer: {
        name: "Candice Wu",
        email: "candice@example.com",
        avatar:
          "https://images.unsplash.com/photo-1506863530036-1efeddceb993?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1344&q=80",
      },
    },
    {
      caseId: "#3072",
      startDate: "Jan 4, 2022",
      dueDate: "Feb 4, 2022",
      status: "Closed",
      customer: {
        name: "Orlando Diggs",
        email: "orlando@example.com",
        avatar:
          "https://images.unsplash.com/photo-1528892952291-009c663ce843?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=644&q=80",
      },
    },
    {
      caseId: "#3086",
      startDate: "Jan 6, 2022",
      dueDate: "Feb 6, 2022",
      status: "In Progress",
      customer: {
        name: "Arthur Melo",
        email: "authurmelo@example.com",
        avatar:
          "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
      },
    },
    {
      caseId: "#3085",
      startDate: "Jan 5, 2022",
      dueDate: "Feb 5, 2022",
      status: "Closed",
      customer: {
        name: "Andi Lane",
        email: "andi@example.com",
        avatar:
          "https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
      },
    },
    {
      caseId: "#3084",
      startDate: "Jan 5, 2022",
      dueDate: "Feb 5, 2022",
      status: "In Progress",
      customer: {
        name: "Kate Morrison",
        email: "kate@example.com",
        avatar:
          "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=761&q=80",
      },
    },
    {
      caseId: "#3263",
      startDate: "Jan 4, 2022",
      dueDate: "Feb 4, 2022",
      status: "Pending",
      customer: {
        name: "Candice Wu",
        email: "candice@example.com",
        avatar:
          "https://images.unsplash.com/photo-1506863530036-1efeddceb993?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1344&q=80",
      },
    },
    {
      caseId: "#3262",
      startDate: "Jan 4, 2022",
      dueDate: "Feb 4, 2022",
      status: "Closed",
      customer: {
        name: "Orlando Diggs",
        email: "orlando@example.com",
        avatar:
          "https://images.unsplash.com/photo-1528892952291-009c663ce843?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=644&q=80",
      },
    },
  ];






  const DataTable = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [searchQueries, setSearchQueries] = useState({
      caseId: '',
      startDate: '',
      dueDate: '',
      status: '',
      customerName: '',
      customerEmail: '',
    });
  
    const itemsPerPage = 6;
  
    const handlePageChange = (pageNumber) => {
      setCurrentPage(pageNumber);
    };
  
    const handleSearchChange = (e) => {
      setSearchQueries({
        ...searchQueries,
        [e.target.name]: e.target.value,
      });
    };
  
    const filteredData = data.filter((item) => {
      return (
        item.caseId.toLowerCase().includes(searchQueries.caseId.toLowerCase()) &&
        item.startDate.toLowerCase().includes(searchQueries.startDate.toLowerCase()) &&
        item.dueDate.toLowerCase().includes(searchQueries.dueDate.toLowerCase()) &&
        item.status.toLowerCase().includes(searchQueries.status.toLowerCase()) &&
        item.customer.name.toLowerCase().includes(searchQueries.customerName.toLowerCase()) &&
        item.customer.email.toLowerCase().includes(searchQueries.customerEmail.toLowerCase())
      );
    });
  
    const paginatedData = filteredData.slice(
      (currentPage - 1) * itemsPerPage,
      currentPage * itemsPerPage
    );
  
    return (
      <section className="py-4">
        <Table data={paginatedData} onSearchChange={handleSearchChange} searchQueries={searchQueries} />
        <div className='px-20'>
          <Pagination
            totalItems={filteredData.length}
            itemsPerPage={itemsPerPage}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        </div>
      </section>
    );
  };
  
  export default DataTable;