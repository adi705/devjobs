import { Form, redirect } from 'react-router-dom';
import { useLoaderData, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import customFetch from '../utils/customFetch';
import Toggle from '../components/Toggle';
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../context';



const Justest = ({rom}) => {

    const { isToggled} = useGlobalContext(); // Access the isToggled state from the context


    return (
        
      <>
      <p>{isToggled}</p>
      <p>{rom}</p>
   
     <h1>test</h1>
      
     </>
    );
   
  };
  
export default Justest;
  