import { useEffect, useRef, useState } from 'react';
import axios from 'axios';

const Protected = ({ token }) => {
  const isRun = useRef(false);

  const [data, setData] = useState(null);

  useEffect(() => {
    if (isRun.current) return;
    
    isRun.current = true;
    
    const config = {
      headers: {
        authorization: `Bearer ${token}`,
      },
    }

    axios
      .get('/documents', config)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      {data ? (
        data.map((rec, i) => <h3 key={i}>{rec}</h3>)
      ) : (
        <div className='div'>Page Protected</div>
      )}
    </div>
  );
};

export default Protected;
