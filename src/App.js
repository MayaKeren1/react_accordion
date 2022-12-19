import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';
function App() {
  const[qustions,steQustions]=useState(data);
  return(
    <main>
      <div className='container'>
        <h3>qustions and answers about login</h3>
        <section className='info'>
          {
            qustions.map((question)=>{
              return <SingleQuestion key={question.id} {...question}/>;
            })};
        </section>
      </div>
    </main>

  );
}

export default App;
