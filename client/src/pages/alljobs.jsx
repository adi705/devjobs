import customFetch from '../utils/customFetch';
import { toast } from 'react-toastify';
import { useLoaderData, useParams, Form, Link } from 'react-router-dom';
import { redirect } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useContext, createContext } from 'react';
import { slice } from 'lodash';
import React, { useState, useEffect } from 'react'
import SearchContainer from '../components/SearchContainer';
import Toggle from '../components/Toggle';
import { useGlobalContext } from '../context';

// this function is called first when the page is loaded , similar functality to useeffect hook
export const loader = async ({ request }) => {

    const params = Object.fromEntries([
        ...new URL(request.url).searchParams.entries(),
      ]);

      try {
          const { data } = await customFetch.get('/jobs', {
              params,
          });
          
          if(Object.keys(params).length == 0){
              params.search = "";
            }
          const searchValues = {...params};
          return {data, searchValues};
       
      } catch (error) {
          toast.error(error?.response?.data?.msg);
          return error;
      }  
   
};

const AlljobsContext = createContext();

const Alljobs = () => {

    const {data, searchValues} = useLoaderData(); // this is the data that is recieved after call to loader()
    const jobs = data.jobs; // array of jobs  
    const { isToggled,setIsToggled } = useGlobalContext(); // Access the isToggled state from the context
    const [isCompleted, setIsCompleted] = useState(false)
    const [index, setIndex] = useState(6)
    const initialJobs = slice(jobs, 0, index)

    // this useeffect is to ensure that the homepage theme is in sync with the single page
    useEffect(() => {
        const myDivs = document.querySelectorAll('.jobcontainer'); 
        if(myDivs){
            if(isToggled){
                myDivs.forEach((div) => {
                    div.style.backgroundColor =  'var(--clr--dark-blue)';
                });
    
            }else{
                myDivs.forEach((div) => {
                    div.style.setProperty('background-color', 'white');
                });
            }
    
        }
    }, [initialJobs]);

    const loadMore = () => {
          setIndex(index + 6)
          if (index > jobs.length) {
            setIsCompleted(true)
          } else {
            setIsCompleted(false)
          }
    }

return (
    <>
    <div className='headerimg-container'>
        <img src="./assets/mobile/bg-pattern-header.svg" alt="no image" />
    </div>
    
    <AlljobsContext.Provider value={{ data, searchValues }}>
    
        <h1 className='header'>Devjobs</h1>
        <Toggle isToggled={isToggled} setIsToggled={setIsToggled}/>

        <SearchContainer/>

        <div className='main-container'>
        { initialJobs.map((job) =>{
            const {_id,company, position, contract, location, logo, logoBackground} = job;
            const divStyle = {
                backgroundColor: logoBackground, 
                
              };
            return (
              <article key={_id} >
                
                <div className='jobcontainer'>
              
                    <div className='img-container' style={divStyle}>
                      <img src={logo} alt="logo" />
                    </div>
                    <p className='contract'>{contract}</p>
                    <Link to={`/single-job/${_id}`}><h2>{position}</h2></Link>
                    <p>{company}</p>
                    <p className='location'>{location}</p>
                    
                </div>
              </article>
            );
        }) }
        </div>

    </AlljobsContext.Provider>

    {
      jobs.length > 0 && 

        <div className='btn-container'>
            {isCompleted ? (
              <button
                onClick={loadMore}
                type="button"
                className="btn"
              >
                That's all we got!
              </button>
            ) : (
              <button onClick={loadMore} type="button" className="btn">
                Load More 
              </button>
            )}
        </div>

    }    
      
    </>
  );
};


export const useAlljobsContext = () => useContext(AlljobsContext);

export default Alljobs;
