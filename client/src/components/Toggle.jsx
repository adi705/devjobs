import { Form, redirect } from 'react-router-dom';
import React, { useState } from 'react';
import { useEffect } from 'react';

const Toggle = ({ isToggled ,setIsToggled }) => {
  
   /* useeffect hook to ensure coordination of backfoundtheme across all the pages when it is 
    loaded first based on the state value of "isToggled" */
   useEffect(() => {

    const singleDiv = document.querySelector('.job-heading');
    const myDivs = document.querySelectorAll('.jobcontainer'); 
    const apply = document.querySelectorAll('.apply-container');
    const body = document.body;
   
    /* isTogled could also be checked in a outer if loop*/ 

    if(isToggled){
        body.style.color = 'white';
    }else{
        body.style.color = 'black';
    }

    if (singleDiv){
        if (isToggled) {
            
        
            singleDiv.style.backgroundColor = 'var(--clr--dark-blue)';
        }else{
            singleDiv.style.backgroundColor = 'white'; 
            
        }
    }

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

    if(apply){
        if(isToggled){
            apply.forEach((div) => {
                div.style.backgroundColor =  'var(--clr--dark-blue)';
            });

        }else{
            apply.forEach((div) => {
                div.style.setProperty('background-color', 'white');
            });
        }

    }
  
  }, []); // The empty dependency array means this effect runs once on component is loaded

   

    const handleDivClick = () => {
        /*toggle the color of different html components*/ 
        toggleBodyStyles();
        setIsToggled(!isToggled);
      };
    
      const toggleBodyStyles = () => {

        const body = document.body;
        const myDivs = document.querySelectorAll('.jobcontainer'); 
        const singleDiv = document.querySelector('.job-heading');
        const apply = document.querySelectorAll('.apply-container');
       

        if (isToggled) {
           
           
            body.style.backgroundColor = 'var(--clr-light-white)';
            if(myDivs){ myDivs.forEach((div) => {
                     div.style.setProperty('background-color', 'white');
                 });}
            body.style.color = 'black';  

            if(singleDiv){singleDiv.style.backgroundColor = 'white';  }  
            
            if(apply){ apply.forEach((div) => {
                div.style.setProperty('background-color', 'white');
            });}
            
            
           

            
          } else {
            
           
            body.style.backgroundColor = 'var(--clr--midnight)';
            if(myDivs){myDivs.forEach((div) => {
                div.style.backgroundColor =  'var(--clr--dark-blue)';
               
            });}
            body.style.color = 'white';

            if(singleDiv){singleDiv.style.backgroundColor = 'var(--clr--dark-blue)';}

           

            if(apply){ apply.forEach((div) => {
                div.style.setProperty('background-color', 'var(--clr--dark-blue)');
            });}
            


            
          }
        
        };  
   

    return (
        
      <>
        <div className='sun-container'>  <img src="/assets/desktop/icon-sun.svg" alt="sun" /></div>
            <div className={`container ${isToggled ? 'toggled' : ''}`} onClick={handleDivClick}>
                <div className={`circle ${isToggled ? 'right' : 'left'}`}></div>
        </div>
        <div className='moon-container'> <img src="/assets/desktop/icon-moon.svg" alt="moon" /></div>
      </>
    );
   
  };
  
export default Toggle;
  