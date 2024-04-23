// import React, { useState, useEffect } from 'react';
// import Loading from './Loading';
// import Tours from './Tours';
// // ATTENTION!!!!!!!!!!
// // I SWITCHED TO PERMANENT DOMAIN
// const url = 'https://www.course-api.com/react-tours-project';

// function App() {
//   const [loading, setLoading] = useState(true);
//   const [tours, setTours] = useState([]);

//   const removeTour = id => {
//     const newTours = tours.filter(tour => tour.id !== id);
//     setTours(newTours);
//   };

//   const fetchTours = async () => {
//     setLoading(true);
//     try {
//       const response = await fetch(url);
//       const tours = await response.json();
//       setLoading(false);
//       setTours(tours);
//     } catch (error) {
//       setLoading(false);
//       console.log(error);
//     }
//   };
//   useEffect(() => {
//     fetchTours();
//   }, []);

//   if (loading) {
//     return (
//       <main>
//         <Loading />
//       </main>
//     );
//   }
//   if (tours.length === 0) {
//     return (
//       <main>
//         <div className='title'>
//           <h2>no tours left</h2>
//           <button className='btn' onClick={() => fetchTours()}>
//             refresh
//           </button>
//         </div>
//       </main>
//     );
//   }
//   return (
//     <main>
//       <Tours tours={tours} removeTour={removeTour} />
//     </main>
//   );
// }

// export default App;

// vezba
import React, { useEffect, useState } from 'react';
import Loading from './Loading';
import Tours from './Tours';

const url = 'https://www.course-api.com/react-tours-project';

function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const removeTours = id => {
    const newTours = tours.filter(tour => tour.id !== id);
    setTours(newTours);
  };
  const fetchTours = async () => {
    const response = await fetch(url);
    const tours = await response.json();
    setLoading(false);
    setTours(tours);
  };

  useEffect(() => {
    fetchTours();
  }, []);

  if (loading) {
    <main>
      <Loading />
    </main>;
  }

  return (
    <main>
      <Tours tours={tours} removeTours={removeTours} />
    </main>
  );
}
export default App;
