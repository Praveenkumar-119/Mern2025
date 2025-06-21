import React from 'react';
import { Link } from 'react-router-dom';

const Hooks = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      <Link to="/state">useState</Link>
      <Link to="/effect">useEffect</Link>
      <Link to="/effect2">useEffect2</Link>
      <Link to="/ref">useRef</Link>
    </div>
  );
};

export default Hooks;
