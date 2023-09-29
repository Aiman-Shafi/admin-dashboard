import React, { useEffect } from "react";
import { DataTable } from "simple-datatables";

interface Employee {
  id: string;
  name: string;
  position: string;
  duration: string;
  birthDate: string;
  email: string;
  phone: string;
  address: string;
  status: string;
}

const dataOne: Employee[] = [
  {
    id: "155",
    name: "Brielle Kuphal",
    position: "Designer",
    duration: "3 years",
    birthDate: "25 Nov, 1977",
    email: "Brielle45@gmail.com",
    phone: "+323(29)-232-44-74",
    address: "Block A, Demo Park",
    status: "Full-time",
  },
  {
    id: "156",
    name: "Barney Murray",
    position: "Developer",
    duration: "3 years",
    birthDate: "25 Nov, 1966",
    email: "Barney@gmail.com",
    phone: "+323(29)-232-75-44",
    address: "Block A, Demo Park",
    status: "Part-time",
  },
  {
    id: "157",
    name: "Ressie Ruecker",
    position: "Designer",
    duration: "3 years",
    birthDate: "25 Nov, 1955",
    email: "Ressie@gmail.com",
    phone: "+323(29)-785-44-44",
    address: "Block A, Demo Park",
    status: "Full-time",
  },
  {
    id: "158",
    name: "Teresa Mertz",
    position: "Designer",
    duration: "3 years",
    birthDate: "25 Nov, 1979",
    email: "Teresa@gmail.com",
    phone: "+323(29)-232-15-44",
    address: "Block A, Demo Park",
    status: "Part-time",
  },
  {
    id: "159",
    name: "Chelsey Hackett",
    position: "Designer",
    duration: "3 years",
    birthDate: "25 Nov, 1969",
    email: "Chelsey@gmail.com",
    phone: "+323(29)-232-56-89",
    address: "Block A, Demo Park",
    status: "Full-time",
  },
  {
    id: "160",
    name: "Tatyana Metz",
    position: "Designer",
    duration: "3 years",
    birthDate: "25 Nov, 1989",
    email: "Tatyana@gmail.com",
    phone: "+323(29)-789-42-23",
    address: "Block A, Demo Park",
    status: "Part-time",
  },
  {
    id: "161",
    name: "Oleta Harvey",
    position: "Designer",
    duration: "3 years",
    birthDate: "25 Nov, 1979",
    email: "Oleta@gmail.com",
    phone: "+323(29)-852-63-95",
    address: "Block A, Demo Park",
    status: "Full-time",
  },
  {
    id: "162",
    name: "Bette Haag",
    position: "Designer",
    duration: "3 years",
    birthDate: "25 Nov, 1979",
    email: "Bette@gmail.com",
    phone: "+323(29)-852-23-01",
    address: "Block A, Demo Park",
    status: "Part-time",
  },
  {
    id: "163",
    name: "Meda Ebert",
    position: "Designer",
    duration: "3 years",
    birthDate: "25 Nov, 1945",
    email: "Meda@gmail.com",
    phone: "+323(29)-232-15-23",
    address: "Block A, Demo Park",
    status: "Full-time",
  },
  {
    id: "164",
    name: "Elissa Stroman",
    position: "Designer",
    duration: "3 years",
    birthDate: "25 Nov, 2000",
    email: "Elissa@gmail.com",
    phone: "+323(29)-756-25-63",
    address: "Block A, Demo Park",
    status: "Part-time",
  },
  {
    id: "165",
    name: "Sid Swaniawski",
    position: "Designer",
    duration: "3 years",
    birthDate: "25 Nov, 1999",
    email: "Sid@gmail.com",
    phone: "+323(29)-859-52-12",
    address: "Block A, Demo Park",
    status: "Full-time",
  },
  {
    id: "166",
    name: "Madonna Hahn",
    position: "Designer",
    duration: "3 years",
    birthDate: "25 Nov, 1965",
    email: "Madonna@gmail.com",
    phone: "+323(29)-896-52-13",
    address: "Block A, Demo Park",
    status: "Part-time",
  },
  {
    id: "167",
    name: "Waylon Kihn",
    position: "Designer",
    duration: "3 years",
    birthDate: "25 Nov, 1975",
    email: "Waylon@gmail.com",
    phone: "+323(29)-420-45-65",
    address: "Block A, Demo Park",
    status: "Full-time",
  },
  {
    id: "168",
    name: "Jaunita Lindgren",
    position: "Designer",
    duration: "3 years",
    birthDate: "25 Nov, 1945",
    email: "Jaunita@gmail.com",
    phone: "+323(29)-789-45-89",
    address: "Block A, Demo Park",
    status: "Part-time",
  },
  {
    id: "169",
    name: "Lenora MacGyver",
    position: "Designer",
    duration: "3 years",
    birthDate: "25 Nov, 1998",
    email: "Lenora@gmail.com",
    phone: "+323(29)-789-12-75",
    address: "Block A, Demo Park",
    status: "Full-time",
  },
  {
    id: "159",
    name: "Chelsey Hackett",
    position: "Designer",
    duration: "3 years",
    birthDate: "25 Nov, 1968",
    email: "Chelsey@gmail.com",
    phone: "+323(29)-963-14-52",
    address: "Block A, Demo Park",
    status: "Part-time",
  },
  {
    id: "160",
    name: "Tatyana Metz",
    position: "Designer",
    duration: "3 years",
    birthDate: "25 Nov, 1984",
    email: "Tatyana@gmail.com",
    phone: "+323(29)-856-75-12",
    address: "Block A, Demo Park",
    status: "Full-time",
  },
  {
    id: "161",
    name: "Oleta Harvey",
    position: "Designer",
    duration: "3 years",
    birthDate: "25 Nov, 1989",
    email: "Oleta@gmail.com",
    phone: "+323(29)-963-15-95",
    address: "Block A, Demo Park",
    status: "Part-time",
  },
  {
    id: "163",
    name: "Meda Ebert",
    position: "Designer",
    duration: "3 years",
    birthDate: "25 Nov, 1988",
    email: "Meda@gmail.com",
    phone: "+323(29)-258-62-32",
    address: "Block A, Demo Park",
    status: "Part-time",
  },
  {
    id: "164",
    name: "Elissa Stroman",
    position: "Designer",
    duration: "3 years",
    birthDate: "25 Nov, 1998",
    email: "Elissa@gmail.com",
    phone: "+323(29)-856-41-44",
    address: "Block A, Demo Park",
    status: "Full-time",
  },
  {
    id: "165",
    name: "Sid Swaniawski",
    position: "Designer",
    duration: "3 years",
    birthDate: "25 Nov, 1997",
    email: "Sid@gmail.com",
    phone: "+323(29)-147-75-56",
    address: "Block A, Demo Park",
    status: "Part-time",
  },
  {
    id: "166",
    name: "Madonna Hahn",
    position: "Designer",
    duration: "3 years",
    birthDate: "25 Nov, 1964",
    email: "Madonna@gmail.com",
    phone: "+323(29)-863-25-13",
    address: "Block A, Demo Park",
    status: "Full-time",
  },
  {
    id: "167",
    name: "Waylon Kihn",
    position: "Designer",
    duration: "3 years",
    birthDate: "25 Nov, 1945",
    email: "Waylon@gmail.com",
    phone: "+323(29)-896-75-25",
    address: "Block A, Demo Park",
    status: "Part-time",
  },
  {
    id: "168",
    name: "Jaunita Lindgren",
    position: "Designer",
    duration: "3 years",
    birthDate: "25 Nov, 1989",
    email: "Jaunita@gmail.com",
    phone: "+323(29)-789-12-45",
    address: "Block A, Demo Park",
    status: "Full-time",
  },
  {
    id: "169",
    name: "Lenora MacGyver",
    position: "Designer",
    duration: "3 years",
    birthDate: "25 Nov, 1985",
    email: "Lenora@gmail.com",
    phone: "+323(29)-856-75-12",
    address: "Block A, Demo Park",
    status: "Part-time",
  },
];

const DataTableOne: React.FC = () => {
  useEffect(() => {
    const dataTable = new DataTable("#dataTableOne", {
      perPageSelect: [5, 10, 15, ["All", -1]],
      tableRender: (_data, table, type) => {
        if (type === "print") {
          return table;
        }
        // @ts-ignore
        const tHead = table.childNodes[0];
        const filterHeaders = {
          nodeName: "TR",
          // @ts-ignore
          childNodes: tHead.childNodes[0].childNodes.map((_th, index) => ({
            nodeName: "TH",
            childNodes: [
              {
                nodeName: "INPUT",
                attributes: {
                  class: "datatable-input",
                  type: "search",
                  "data-columns": `[${index}]`,
                },
              },
            ],
          })),
        };
        // @ts-ignore
        tHead.childNodes.push(filterHeaders);
        return table;
      },
    });
    dataTable;
  });

  return (
    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="data-table-common data-table-one max-w-full overflow-x-auto">
        <table className="table w-full table-auto" id="dataTableOne">
          <thead>
            <tr>
              <th>
                <div className="flex items-center gap-1.5">
                  <p>Name/ID</p>
                  <div className="inline-flex flex-col space-y-[2px]">
                    <span className="inline-block">
                      <svg
                        className="fill-current"
                        width="10"
                        height="5"
                        viewBox="0 0 10 5"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M5 0L0 5H10L5 0Z" fill="" />
                      </svg>
                    </span>
                    <span className="inline-block">
                      <svg
                        className="fill-current"
                        width="10"
                        height="5"
                        viewBox="0 0 10 5"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5 5L10 0L-4.37114e-07 8.74228e-07L5 5Z"
                          fill=""
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              </th>
              <th>
                <div className="flex items-center gap-1.5">
                  <p>Position</p>
                  <div className="inline-flex flex-col space-y-[2px]">
                    <span className="inline-block">
                      <svg
                        className="fill-current"
                        width="10"
                        height="5"
                        viewBox="0 0 10 5"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M5 0L0 5H10L5 0Z" fill="" />
                      </svg>
                    </span>
                    <span className="inline-block">
                      <svg
                        className="fill-current"
                        width="10"
                        height="5"
                        viewBox="0 0 10 5"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5 5L10 0L-4.37114e-07 8.74228e-07L5 5Z"
                          fill=""
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              </th>
              <th data-type="date" data-format="YYYY/DD/MM">
                <div className="flex items-center gap-1.5">
                  <p>BDay</p>
                  <div className="inline-flex flex-col space-y-[2px]">
                    <span className="inline-block">
                      <svg
                        className="fill-current"
                        width="10"
                        height="5"
                        viewBox="0 0 10 5"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M5 0L0 5H10L5 0Z" fill="" />
                      </svg>
                    </span>
                    <span className="inline-block">
                      <svg
                        className="fill-current"
                        width="10"
                        height="5"
                        viewBox="0 0 10 5"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5 5L10 0L-4.37114e-07 8.74228e-07L5 5Z"
                          fill=""
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              </th>
              <th>
                <div className="flex items-center gap-1.5">
                  <p>Email/Phone</p>
                  <div className="inline-flex flex-col space-y-[2px]">
                    <span className="inline-block">
                      <svg
                        className="fill-current"
                        width="10"
                        height="5"
                        viewBox="0 0 10 5"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M5 0L0 5H10L5 0Z" fill="" />
                      </svg>
                    </span>
                    <span className="inline-block">
                      <svg
                        className="fill-current"
                        width="10"
                        height="5"
                        viewBox="0 0 10 5"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5 5L10 0L-4.37114e-07 8.74228e-07L5 5Z"
                          fill=""
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              </th>
              <th>
                <div className="flex items-center gap-1.5">
                  <p>Address</p>
                  <div className="inline-flex flex-col space-y-[2px]">
                    <span className="inline-block">
                      <svg
                        className="fill-current"
                        width="10"
                        height="5"
                        viewBox="0 0 10 5"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M5 0L0 5H10L5 0Z" fill="" />
                      </svg>
                    </span>
                    <span className="inline-block">
                      <svg
                        className="fill-current"
                        width="10"
                        height="5"
                        viewBox="0 0 10 5"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5 5L10 0L-4.37114e-07 8.74228e-07L5 5Z"
                          fill=""
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              </th>
              <th>
                <div className="flex items-center gap-1.5">
                  <p>Status</p>
                  <div className="inline-flex flex-col space-y-[2px]">
                    <span className="inline-block">
                      <svg
                        className="fill-current"
                        width="10"
                        height="5"
                        viewBox="0 0 10 5"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M5 0L0 5H10L5 0Z" fill="" />
                      </svg>
                    </span>
                    <span className="inline-block">
                      <svg
                        className="fill-current"
                        width="10"
                        height="5"
                        viewBox="0 0 10 5"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5 5L10 0L-4.37114e-07 8.74228e-07L5 5Z"
                          fill=""
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {dataOne.map((employee, index) => {
              return (
                <tr key={index}>
                  <td>{`${employee.name}/${employee.id}`}</td>
                  <td>{employee.position}</td>
                  <td>{employee.birthDate}</td>
                  <td>{employee.email}</td>
                  <td>{employee.address}</td>
                  <td>{employee.status}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DataTableOne;
