import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import Images from './components/Images';
import Loader from './components/Loader';
import InfiniteScroll from 'react-infinite-scroll-component'

function App() {
      const [image, setImage] = useState([])
    useEffect(() => {
        getImg()
    }, [])
    let getImg = async function () {
        let res = await Axios.get('https://api.unsplash.com/photos/random?client_id=FrlHfD0uGY4qmeEipBh_52qhYx4TX6t53xxcmPTfAJ0&count=10');
        setImage([...image , ...res.data])
    }
  return (
    <div className="App">
      <Header />
      
      <InfiniteScroll dataLength={image.length} next={getImg} hasMode={true} loader={<Loader />}>
          {image.map(x => (
        <Images className="images" url={x.urls.small} key={x.id} />
      ))}
        </InfiniteScroll>
      
      
    </div>
  );
}

export default App;
