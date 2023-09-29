import React, { useEffect } from 'react'
import { DataTable } from 'simple-datatables'

interface Employee {
  name: string;
  position: string;
  office: string;
  age: string;
  startDate: string;
  salary: string;
}

const dataTwo: Employee[] = [
  {
    name: 'Brielle Kuphal',
    position: 'Senior Javascript Developer',
    office: 'Edinburgh',
    age: '25',
    startDate: '2012/03/29',
    salary: '$433,060',
  },
  {
    name: 'Barney Murray',
    position: 'Senior Backend Developer',
    office: 'amsterdam',
    age: '29',
    startDate: '2010/05/01',
    salary: '$424,785',
  },
  {
    name: 'Ressie Ruecker',
    position: 'Senior Frontend Developer',
    office: 'Jakarta',
    age: '27',
    startDate: '2013/07/01',
    salary: '$785,210',
  },
  {
    name: 'Teresa Mertz',
    position: 'Senior Designer',
    office: 'New Caledonia',
    age: '25',
    startDate: '2014/05/30',
    salary: '$532,126',
  },
  {
    name: 'Chelsey Hackett',
    position: 'Product Manager',
    office: 'NewYork',
    age: '26',
    startDate: '2011/09/30',
    salary: '$421,541',
  },
  {
    name: 'Tatyana Metz',
    position: 'Senior Product Manager',
    office: 'NewYork',
    age: '28',
    startDate: '2009/09/30',
    salary: '$852,541',
  },
  {
    name: 'Oleta Harvey',
    position: 'Junior Product Manager',
    office: 'California',
    age: '25',
    startDate: '2015/10/30',
    salary: '$654,444',
  },
  {
    name: 'Bette Haag',
    position: 'Junior Product Manager',
    office: 'Carolina',
    age: '29',
    startDate: '2017/12/31',
    salary: '$541,111',
  },
  {
    name: 'Meda Ebert',
    position: 'Junior Web Developer',
    office: 'Amsterdam',
    age: '27',
    startDate: '2015/10/31',
    salary: '$651,456',
  },
  {
    name: 'Elissa Stroman',
    position: 'Junior React Developer',
    office: 'Kuala Lumpur',
    age: '29',
    startDate: '2008/05/31',
    salary: '$566,123',
  },
  {
    name: 'Sid Swaniawski',
    position: 'Senior React Developer',
    office: 'Las Vegas',
    age: '29',
    startDate: '2009/09/01',
    salary: '$852,456',
  },
  {
    name: 'Madonna Hahn',
    position: 'Senior Vue Developer',
    office: 'New York',
    age: '27',
    startDate: '2006/10/01',
    salary: '$456,147',
  },
  {
    name: 'Waylon Kihn',
    position: 'Senior HTML Developer',
    office: 'Amsterdam',
    age: '23',
    startDate: '2017/11/01',
    salary: '$321,254',
  },
  {
    name: 'Jaunita Lindgren',
    position: 'Senior Backend Developer',
    office: 'Jakarta',
    age: '25',
    startDate: '2018/12/01',
    salary: '$321,254',
  },
  {
    name: 'Lenora MacGyver',
    position: 'Junior HTML Developer',
    office: 'Carolina',
    age: '27',
    startDate: '2015/09/31',
    salary: '$852,254',
  },
  {
    name: 'Edyth McCullough',
    position: 'Senior Javascript Developer',
    office: 'Edinburgh',
    age: '25',
    startDate: '2012/03/29',
    salary: '$433,060',
  },
  {
    name: 'Ibrahim Stroman',
    position: 'Senior Backend Developer',
    office: 'amsterdam',
    age: '29',
    startDate: '2010/05/01',
    salary: '$424,785',
  },
  {
    name: 'Katelynn Reichert',
    position: 'Senior Frontend Developer',
    office: 'Jakarta',
    age: '27',
    startDate: '2013/07/01',
    salary: '$785,210',
  },
  {
    name: 'Logan Kiehn',
    position: 'Senior Designer',
    office: 'New Caledonia',
    age: '25',
    startDate: '2014/05/30',
    salary: '$532,126',
  },
  {
    name: 'Rogers Stanton',
    position: 'Product Manager',
    office: 'NewYork',
    age: '26',
    startDate: '2011/09/30',
    salary: '$421,541',
  },
  {
    name: 'Alanis Torp',
    position: 'Senior Product Manager',
    office: 'NewYork',
    age: '28',
    startDate: '2009/09/30',
    salary: '$852,541',
  },
  {
    name: 'Jarvis Bauch',
    position: 'Junior Product Manager',
    office: 'California',
    age: '25',
    startDate: '2015/10/30',
    salary: '$654,444',
  },
  {
    name: 'Trey Ritchie',
    position: 'Junior Product Manager',
    office: 'Carolina',
    age: '29',
    startDate: '2017/12/31',
    salary: '$541,111',
  },
  {
    name: 'Ronny Dietrich',
    position: 'Junior Web Developer',
    office: 'Amsterdam',
    age: '27',
    startDate: '2015/10/31',
    salary: '$651,456',
  },
  {
    name: 'Isabella Christiansen',
    position: 'Junior React Developer',
    office: 'Kuala Lumpur',
    age: '29',
    startDate: '2008/05/31',
    salary: '$566,123',
  },
];

const DataTableTwo: React.FC = () => {
  useEffect(() => {
    const dataTableTwo = new DataTable('#dataTableTwo', {
      perPageSelect: [5, 10, 15, ['All', -1]],
    });
    dataTableTwo;
  });

  return (
    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="data-table-common data-table-two max-w-full overflow-x-auto">
        <table className="table w-full table-auto" id="dataTableTwo">
          <thead>
            <tr>
              <th>
                <div className="flex items-center justify-between gap-1.5">
                  <p>Name</p>
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
                <div className="flex items-center justify-between gap-1.5">
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
              <th>
                <div className="flex items-center justify-between gap-1.5">
                  <p>Office</p>
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
                <div className="flex items-center justify-between gap-1.5">
                  <p>Age</p>
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
                <div className="flex items-center justify-between gap-1.5">
                  <p>Start Date</p>
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
                <div className="flex items-center justify-between gap-1.5">
                  <p>Salary</p>
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
            {dataTwo.map((employee, index) => {
              return (
                <tr key={index}>
                  <td>{employee.name}</td>
                  <td>{employee.position}</td>
                  <td>{employee.office}</td>
                  <td>{employee.age}</td>
                  <td>{employee.startDate}</td>
                  <td>{employee.salary}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DataTableTwo;
