import React from 'react'
import { FaHeadSideCough, FaPhoneVolume } from 'react-icons/fa'
import "./sectionseven.css"

function Sectionseven() {
  return (
    <>
    <div className="sectionseven">
        <div className="sectionseven-cards">
            <div className="sectionseven-card">
                <img src="https://preview.colorlib.com/theme/banker/images/hero_1.jpg" alt="" />
                <div className="seven-texts">
                    <div className="seven-text">
                        <div className="seven-icons"><FaPhoneVolume/></div>
                        <div className="text-sev">
                       <h2>Bank Loan</h2>
                       <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                       <button>Learn More</button>
                       </div></div>
                    <div className="seven-text">
                    <div className="seven-icons"><FaPhoneVolume/></div>
                       <div className="text-sev">
                       <h2>Bank Loan</h2>
                       <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                       <button>Learn More</button>
                       </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    </>
  )
}

export default Sectionseven