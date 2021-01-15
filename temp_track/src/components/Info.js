import React from 'react'

const Info = () => (
      <div>
           <form>
             <h2>Please enter your information</h2>
             <input
              type="text"
              placeholder="Your Name"
              />
              <input
              type="text"
              placeholder="Your Temp"
              />
              <button onSubmit>Enter</button>
           </form>
      </div>
    );

export default Info
