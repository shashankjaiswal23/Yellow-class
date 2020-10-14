import React from 'react'
function Images({url, key}) {
    return (
        <div>
             <img src={url} key={key} alt={key} />           
        </div>
    )
}

export default Images
