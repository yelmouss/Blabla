import React, { useEffect, useState } from 'react'
import CountUp from 'react-countup'
import { useNavigate, Link } from 'react-router-dom'
function NotFound({ dark, updateDark }) {

    const [title, setTitle] = useState();

    useEffect(() => {
      setTitle("Yelmouss - 404");
      document.title = title;
    }, [title]);
    return (
        <main
            className={`d-flex flex-column col-12 home pb-5 pt-5 mt-5 ${dark ? "text-dark" : " bg-dark"
                }`}
        >
            <div className='container-fluid h-100 d-flex flex-column text-center p-5 col-12'>
                <h1 className='fw-bold border p-2 rounded'>
                    <CountUp end={404} duration={5} /> Page Not Found
                </h1>
            </div>
            <div className="container mt-5 p-5 text-center blob">
                <div className="mt-5 p-5">
                    <div className="container">
                        <Link to={'/'} className={`btn col-lg-3 fw-bold  ${dark ? "btn-light" : "btn-dark"}`}> Back To Home</Link>

                    </div>
                </div>

            </div>

        </main>

    )
}

export default NotFound