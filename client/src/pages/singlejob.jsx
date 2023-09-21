import { Form, redirect } from 'react-router-dom';
import { useLoaderData, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import customFetch from '../utils/customFetch';
import Toggle from '../components/Toggle';
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../context';

export const loader = async ({ params, request }) => {

    try {
        
        const { data } = await customFetch.get(`/jobs/${params.id}`);
        console.log(data)
        return data;
      } catch (error) {
        toast.error(error?.response?.data?.msg);
        return redirect('/');
      }
   
};


const SingleJob = () => {

    const {job} = useLoaderData();
    const { isToggled,setIsToggled } = useGlobalContext();
    
    const {_id,company, position, contract, location, logo, logoBackground} = job;
    console.log(`.${logo}`);
    const divStyle = {
        backgroundColor: logoBackground, // Replace with your desired color
        
      };

    return (
        
      <>

    <div className='headerimg-container'>
        <img src="../assets/mobile/bg-pattern-header.svg" alt="no image" />
    </div>
    <Link to="/"><h1 className='header'>Devjobs</h1></Link>
    <Toggle isToggled={isToggled} setIsToggled={setIsToggled}/>


      <div className='job-heading'>

         
         
         <div className='simg-container' style={divStyle}>
           
           <img src={`.${logo}`} alt="logo" />
        </div>
        
         <div className='job-info'> 
            <h2>{job.company}</h2>
            <p>{job.company}.com</p>
         </div>
        
         <p className='company-site'>Company Site</p>
      </div>
      

       <div className='jobcontainer extra-container'>
           
           <div className='job-intro-container'>
                <div className='job-info-container'>           
                    <p className='contract'>{job.contract}</p>
                    <h2>{job.position}</h2>
                    <p className='hidden'>{job.company}</p>
                    <p className='location'>{job.location}</p>
                </div> 
                <div className='apply-container upper-apply'>
                    <p className='apply-now upper-now'>Apply Now</p>
                </div>
            </div>

            <p>{job.description}</p>
            <h3>Requirements</h3>
            <p className='requirements'>{job.requirements.content}</p>

            <ul>
            {job.requirements.items.map((item)=>{
                
                return ( <li>{item}</li>)
            })  
            
            }   
            </ul>

            <h2>What you will do</h2>
            <p>{job.role.content}</p>

            <ul>
            {job.role.items.map((item)=>{
                
                return ( <li>{item}</li>)
            })  
            
            }   
            </ul>

            
             
        </div>
        <div className='apply-container'>
          <p className='job-pos'>{job.position}</p>
          <p className='apply-now extra-apply'>Apply Now</p>
        </div>   
        
     </>
    );
   
  };
  
export default SingleJob;
  