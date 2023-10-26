import { Form, useSubmit, Link } from 'react-router-dom';
import FormRow from './FormRow';

// jobs context to retrive search values form the user
import { useAlljobsContext } from '../pages/alljobs';



const SearchContainer = () =>{

    const { searchValues } = useAlljobsContext();
    const {search} = searchValues;
    const submit = useSubmit();

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