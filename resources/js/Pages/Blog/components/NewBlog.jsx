import React from 'react'

const NewBlog = ({onClose}) => {
  return (
    <div className='overlay'>
             
      <div className="input_card popup">
         <button className="close-btn" onClick={onClose}>×</button>
            <div className="image_wrapper p-8">
              <label htmlFor="fileInput" style={{
                display: "inline-block",
                padding: "10px 20px",
                backgroundColor: "#007bff",
                color: "light blue",
                borderRadius: "5px",
                cursor: "pointer"
              }}>
                Add Image
              </label>
              <input type="file" placeholder='add image' style={{ display: "none" }} id="fileInput" /></div>
            <div className="title_wrapper p-8 "> <input type="text" placeholder='Enter title here....' /> <hr /></div>
            <div className="blog_wrapper p-8">  <textarea name="" id="" placeholder='enter deatails here '/></div>
          </div>
    </div>
  )
}

export default NewBlog
