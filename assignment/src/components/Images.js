import React, { useState } from 'react'
import Modal from '@material-ui/core/Modal';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';

function Images({ url, key, image }) {
    const [open, setOpen] = useState(false)
    let [count, setCount] = useState(0)
    const handleOpen = () => {
        setOpen(true)
    }
    console.log(count+ "     count")
    return (
        <div>
            <Modal
               open={open}
               onClose={e=>setOpen(false)}
               aria-labelledby="simple-modal-title"
               aria-describedby="simple-modal-description"
            >
                <div className="modal">
                    <div className="modal__image">
                        <SkipPreviousIcon />
                        
                        <SkipNextIcon onClick={setCount(count+1)}/>
                    </div>
                 </div>
  
            </Modal>
             <img onClick={e=>setOpen(true)} src={url} key={key} alt={key} />           
        </div>
    )
}

export default Images
