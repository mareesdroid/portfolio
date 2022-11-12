import {useEffect, useRef} from "react";
import { usePortfolioUpdate } from "../MyContext";
import { useMediaQuery } from 'react-responsive'
import Proficiency from "./Proficiency";

const Skills = () => {
    let skillContainer = useRef(null);
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 984px)' })
    const updatePortfolio = usePortfolioUpdate()

    function importAll(r) {
        return r.keys().map(r);
      }
      const images = importAll(require.context('../assets/images/icons', false, /\.(svg)$/));
      let skillRef = useRef(null);

      useEffect(() => {
        if(skillRef.current){
          updatePortfolio({skillRef}, 'refs')
        }
      }, [skillRef])

      useEffect(() => {
        if (skillContainer) {
            skillContainer.current.childNodes.forEach((e, i) => {
                e.removeAttribute('id');
               });
            const obs = new IntersectionObserver(
                function (entries) {
                  const ent = entries[0];
                  if (ent.isIntersecting === true) {

                    setTimeout(() => {
                        skillContainer.current.childNodes.forEach((e, i) => {
                          e.setAttribute('id', `icon-${i}`);
                        });
                      }, 500);
                  }
                },
                {
                  // In the viewport
                  root: null,
                  threshold: 0,
                  rootMargin: isTabletOrMobile ? '-180px' :"-250px",
                }
              );
              obs.observe(skillContainer.current);
        }
      }, [skillContainer]);
    return (
        <div ref={skillRef} className="bg-emerald-50 mt-28 px-6 py-2">
            <div className="md:container  mx-auto   flex flex-col md:flex-row">
                <div className="flex flex-col w-full md:w-1/2 ">
                <p className="text-lg mb-10 uppercase tracking-widest text-emerald-600 font-black">Skills</p>
                <div className="flex sm:flex-col md:flex-row">
                <div className="flex flex-col gap-y-4">
                    <p className="text-3xl mb-3 tracking-widest text-center md:text-left md:text-3xl font-light md:font-bold">A modern tech stack integration</p>
                    <p className="text-lg text-darkGrayishBlue leading-8 text-justify tracking-normal">Web development is evolving at a breakneck speed every passing year.
                        I discover regularly to explore new ways of innovation to foresee these changes and quickly adapt to the latest technologies.</p>
                </div>
                </div>                
                </div>
                <div ref={skillContainer} className="w-full md:w-1/2 p-0 m-0 h-96 relative">
                    {images.map((e, i) => <img id={`icon-${i}`} className="icon scale-25 md:scale-50" src={e} alt='icon' />)}
                    {/* <img src={icon1} alt='icon' /> */}
                </div>
            </div>

        </div>
    )
}

export default Skills