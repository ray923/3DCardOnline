import React, { useEffect } from 'react';

export default function Animation3Dcard () {

  useEffect(()=> {
    const script =document.createElement('script');
    script.src = "/jslib/animation.js";
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    }
  });

  return (
      <div class="card">
        <div class="sneaker">
          <div class="circle"></div>
          <img src="airforce1.png" alt="airforce1" />
        </div>
        <div class="info">
          <h1 class="title">Air Force one</h1>
          <h3>FUTURE-READY TRAINERS WITH wRAPPED BOOST FOR EXCEPTION COMFORT.</h3>
          <div class="sizes">
            <button>39</button>
            <button>40</button>
            <button class="active">41</button>
            <button>42</button>
          </div>
          <div class="purchase">
            <button>Purchase</button>
          </div>
        </div>
      </div>
  );
};