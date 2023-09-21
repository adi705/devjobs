import mongoose from 'mongoose';

const JobSchema = new mongoose.Schema({

  company: {
    type: String,
    },   
  logo: {
    type: String,
    },   
  logoBackground: {
    type: String,
    },  
  position: {
    type: String,
    }, 
  postedAt: {
    type: String,
    },    
  contract: {
    type: String,
    },    
  location: {
    type: String,
    }, 
  website: {
    type: String,
    },    
  apply: {
    type: String,
    },  
  description: {
      type: String,
    },   
  
  requirements: {
      
    items: {
      type: [String],
    },

    content: {
      type: String,
    },   
      
    },
    
  role: {
      
    items: {
      type: [String],
    },
  
    content: {
      type: String,
    },   
        
    },  

  })
  
  export default mongoose.model('Job', JobSchema);
  
  
