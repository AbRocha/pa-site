
import { Classes as ClassesType, User } from '@prisma/client';
import axios from 'axios';
import { GetServerSideProps } from 'next';
import React, { useEffect, useState } from 'react'

type ResponseData = {
    success?: boolean;
    classData?: ClassesType[],
    students?: User[]
}



function Classes() {
    const [data, setData] = useState<ResponseData>({})
    const [firstYear, setClassFirstYear] = useState([])
    const [secoundYear, setClassSecoundYear] = useState([])
    const [thirdYear, setClassThirdYear] = useState([])

    async function getClasses() {
        const response = await axios.post('/api/classes/', { classId: -1 })
        setData(response.data)
    }

    function separateClassByYear() {
        data.classData?.map((dat, io) => {

        })
    }

    useEffect(() => {
        getClasses()
    }, [])

    return (
        <ol className='list-group list-group-numbered'>

            {data.classData && data.classData.map(({ year, course, id }: ClassesType, index) => {
                
                return (
                    <>
                        <button
                            className='list-group-item list-group-item-action'
                            data-bs-toggle="collapse"
                            data-bs-target={`#collapse${year}`}
                            aria-expanded="false"
                            aria-controls={`collapse${year}`}
                        >
                            {year} Ano
                        </button>


                        <div key={index} className="collapse" id={`collapse${year}`}>
                            <li key={index} className="list-group-item d-flex justify-content-between align-items-start">
                                <div className="ms-2 me-auto">
                                    <div className="fw-bold">{course}</div>
                                </div>
                                <span className='badge bg-primary rounded-pill color-white'>1</span>
                            </li>
                        </div>
                    </>
                )
            })}
        </ol>
    )
}

/*

    <ol class="list-group list-group-numbered">
  <li className="list-group-item d-flex justify-content-between align-items-start">
    <div class="ms-2 me-auto">
      <div class="fw-bold">Subheading</div>
      Content for list item
    </div>
    <span class="badge bg-primary rounded-pill">14</span>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-start">
    <div class="ms-2 me-auto">
      <div class="fw-bold">Subheading</div>
      Content for list item
    </div>
    <span class="badge bg-primary rounded-pill">14</span>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-start">
    <div class="ms-2 me-auto">
      <div class="fw-bold">Subheading</div>
      Content for list item
    </div>
    <span class="badge bg-primary rounded-pill">14</span>
  </li>
</ol>
*/

export default Classes