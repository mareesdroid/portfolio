import React, {useRef, useEffect} from "react";
import ssn from '../assets/images/ssn.svg'
import gnc from '../assets/images/gnc.svg'
import kvs from '../assets/images/kvs.svg'
import { usePortfolioUpdate } from "../MyContext";

const Education = () => {
    let educationRef = useRef(null);
    const updatePortfolio = usePortfolioUpdate()
    useEffect(() => {
      if(educationRef.current){
        updatePortfolio({educationRef}, 'refs')
      }
    }, [educationRef])

    return (
    <>
    <div ref={educationRef} className="container mt-28">
        <p className="text-lg mb-10 uppercase tracking-widest text-emerald-600 font-black">Education</p>
        <div className="divide-y divide-solid">
            <div className="flex justify-between pl-2 pt-2 pb-4 md:pl-10 md:pt-10 md:pb-10 relative">
                <div className="flex flex-1 flex-col gap-4">
                <p className="text-sm md:text-xl mb-1">SSN College Of Engineering, Chennai.</p>
                <p className="text-sm md:text-lg indent-4">— Master's in Computer Application</p>
                </div>
                <p className="text-sm flex-1.5 md:text-sm">2015 - 2017</p>
                <img className="origin-bottom-right	absolute right-0 bottom-2 scale-25 md:scale-50" src={ssn} alt='ssn' />
            </div>
            <div className="flex justify-between pl-2 pt-2 pb-2 md:pl-10 md:pt-10 md:pb-10 relative">
                <div className="flex flex-1 flex-col gap-4">
                <p className="text-sm md:text-xl mb-1">Gurunanak College Of Arts & Science, Chennai.</p>
                <p className="text-sm md:text-lg indent-4">— Bachelorette in Computer Science</p>
                </div>
                <p className="text-sm flex-1.5 md:text-sm">2012 - 2015</p>
                <img className="origin-bottom-right	absolute right-0 bottom-2 scale-25 md:scale-50" src={gnc} alt='gnc' />
            </div>
            <div className="flex justify-between pl-2 pt-2 pb-2 md:pl-10 md:pt-10 md:pb-10 relative">
                <div className="flex flex-1 flex-2 flex-col gap-4">
                <p className="text-sm md:text-lg md:text-xl mb-1">KVS Higher Secondary School, Virudhunagar.</p>
                <p className="text-sm md:text-lg indent-4">— Higher Secondary</p>
                </div>

                <p className="text-sm flex-1.5 md:text-sm">2011 - 2012</p>
                <img className="origin-bottom-right absolute -right-2 bottom-2 scale-25 md:scale-50" src={kvs} alt='kvs' />
            </div>
        </div>
    </div>
    </>
    )
}

export default Education;