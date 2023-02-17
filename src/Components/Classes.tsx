
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
    const [firstYear, setClassFirstYear] = useState<any>([])
    const [secondYear, setClassSecondYear] = useState<any>([])
    const [thirdYear, setClassThirdYear] = useState<any>([])

    useQ

    useEffect(() => {
        getClasses()
    }, [])

    async function getClasses() {
        const response = await axios.post('/api/classes/', { classId: -1 })
        setData(response.data)
        
        separateClassByYear()
    }

    function separateClassByYear() {
        data.classData?.map((dat, io) => {
            if(dat.year === 1) {
                setClassFirstYear((dataYear: any)  => ([...dataYear, dat]))
            } else if(dat.year === 2) {
                setClassSecondYear((dataYear: any)  => ([...dataYear, dat]))
            } else if(dat.year === 1) {
                setClassThirdYear((dataYear: any)  => ([...dataYear, dat]))
            }
        })
        
        
    }
    

    return (
        <ol className='list-group list-group-numbered'>
            <button
                className='list-group-item list-group-item-action'
                data-bs-toggle="collapse"
                data-bs-target={`#collapse1`}
                aria-expanded="false"
                aria-controls={`collapse1`}
            >
                1 Ano
            </button>
            {firstYear && firstYear.map(({ year, course, id }: ClassesType, index: React.Key | null | undefined) => {
                return (
                    <>
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
            <button
                className='list-group-item list-group-item-action'
                data-bs-toggle="collapse"
                data-bs-target={`#collapse2`}
                aria-expanded="false"
                aria-controls={`collapse2`}
            >
                2 Ano
            </button>
            {secondYear && secondYear.map(({ year, course, id }: ClassesType, index: React.Key | null | undefined) => {
                return (
                    <>
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
            <button
                className='list-group-item list-group-item-action'
                data-bs-toggle="collapse"
                data-bs-target={`#collapse3`}
                aria-expanded="false"
                aria-controls={`collapse3`}
            >
                3 Ano
            </button>
            {thirdYear && thirdYear.map(({ year, course, id }: ClassesType, index: React.Key | null | undefined) => {
                return (
                    <>
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