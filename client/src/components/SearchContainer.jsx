import { Form, useSubmit, Link } from 'react-router-dom';
import FormRow from './FormRow';

import { useAlljobsContext } from '../pages/alljobs';



const SearchContainer = () =>{

    const { searchValues } = useAlljobsContext();
   
    const {search} = searchValues;
    const submit = useSubmit();

   // <Link to='/'>Reset search paramaters</Link>
  
    return (
        <>
    
       

        <Form>
        <FormRow  type='search' placeholder="search by comapny,position,contract type" name='search' value={search}
        onChange= {(e)=>{submit(e.currentTarget.form)}} />
       
        
        
        
        </Form>
    
       </>
    );

}

export default SearchContainer;