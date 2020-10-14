import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import Modal from '@material-ui/core/Modal';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import './App.css';

import Loader from './components/Loader';
import InfiniteScroll from 'react-infinite-scroll-component'

function App() {
  const [image, setImage] = useState([])
  const [open, setOpen] = useState(false)
    let [count, setCount] = useState(0)
    useEffect(() => {
        getImg()
    }, [])
  
    let getImg = async function (count=10) {
        let res = await Axios.get(`https://api.unsplash.com/photos/random?client_id=9B1eVPDG6Xmqy_Mk9ZcteFxgO1IrB4qZysq_KNvZfy8&count=${count}`);
        setImage([...image , ...res.data])
    }

  console.log(count)
  return (
    <div className="app">
    
      


      <InfiniteScroll className="gallery"
        dataLength={image.length}
        next={getImg}
        hasMore={true}
        loader={<Loader />}>
        {image.map(x => (
         <>   
          <img onClick={e => {
            setOpen(true);
            setCount(image.indexOf(x))
          }} className="image" src={x.urls.small} key={x.id} />

        <Modal
        open={open}
              onClose={e => setOpen(false)}
              
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
              <div className="modal">
                <div className="close__modal">
                  <button onClick={e=>setOpen(false)}>X</button>   
                </div>
                <div className="modal__row">
                  
                  <SkipPreviousIcon onClick={() => setCount(count - 1)} />
                  <SkipNextIcon onClick={()=>setCount(count+1)}/>
                  <img src={image[count].urls.regular}/>           
            
          </div>
              </div>
              
      </Modal>

      </>      
      
      ))}
        </InfiniteScroll>
    
      
    </div>
  );
}

export default App;
