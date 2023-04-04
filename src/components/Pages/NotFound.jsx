import React from 'react'
import CountUp from 'react-countup'

function NotFound({ dark, updateDark }) {
    return (
        <main
            className={`d-flex flex-column flex-shrink-0 home pb-5 pt-5 mt-5 ${dark ? "text-dark" : " bg-dark"
                }`}
        >
            <div>
                <h1>
                    <CountUp end={404} duration={5}  />


                </h1>
            </div>
        </main>

    )
}

export default NotFound