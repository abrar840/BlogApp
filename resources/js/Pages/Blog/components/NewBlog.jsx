import React, { useState } from 'react'
import { useForm, usePage } from '@inertiajs/react';
const NewBlog = ({ onClose }) => {
  // const [img,setImg] = useState();
  const { errors } = usePage().props;

  const { data, setData, post, processing, error } = useForm({
    img: '',
    title: '',
    content: '',
    url: '',
  })

  function imgUpload(e) {
    setData('img', e.target.files[0]);
    setData('url', URL.createObjectURL(e.target.files[0]))

  }
  function handleSubmit(e) {
    e.preventDefault()
    post('/publish')
  }



  return (
    <div className='overlay'>
      <form onSubmit={handleSubmit}>
        <div className="input_card popup">
          <button className="close-btn" onClick={onClose}>×</button>
          <div className="submit-btn"><button action="submit">Publish</button></div>
          <div className="image_wrapper p-8">

            <label htmlFor="fileInput" style={{
              display: "inline-block",
              padding: "10px 20px",
              backgroundColor: "#007bff",
              color: "white",
              borderRadius: "5px",
              cursor: "pointer"
            }}>
              {data.url ? "Change Image" : "Add Image (Optional)"}
            </label>

            <input type="file" accept="image/*" onChange={imgUpload} placeholder='add image' style={{ display: "none" }} id="fileInput" /></div>
          <div className="preview">   {data.url && <img src={data.url} alt="uploded image" className='preview-img' />}</div>

          <div className="title_wrapper p-8 ">

            <input type="text" placeholder='Enter title here....' maxLength={100} onChange={(e) => { setData('title', e.target.value) }} required />
            <hr />
            {errors.title && <div className='bg-red-600'>{errors.title}</div>}</div>
          <div className="blog_wrapper p-8">
            {errors.text && <div className='bg-red-600'>{errors.content}</div>}
            <textarea name="" id="" placeholder='enter deatails here ' maxLength={1000} onChange={(e) => { setData('content', e.target.value) }} required />

          </div>

        </div>

      </form>
    </div>
  )
}

export default NewBlog
