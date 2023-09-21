const FormRow = ({ type, name, labelText, defaultValue, onChange, placeholder  }) => {
    return (
      <div >
       
        <label htmlFor={name} className='form-label'>
        {labelText}
        </label>
        <input
        type= {type}
       
        name={name}
        className='form-input'
        defaultValue={defaultValue }
        onChange={onChange}
        
       placeholder = {placeholder}
       
        
       
      />
      </div>
    );
  };
  export default FormRow;