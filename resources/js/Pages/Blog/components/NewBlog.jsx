import React, { useState } from 'react'
import { useForm, usePage, router } from '@inertiajs/react';
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"    
const NewBlog = ({ onClose, blogdata, id }) => {
  // const [img,setImg] = useState();
  const { errors } = usePage().props;

  function imageview() {
    if (blogdata) {
      const image = `/storage/${blogdata.images[0].path}`;
      return (image);
    } else { return "" }
  }


  const { data, setData, post, processing, error, reset } = useForm({
    editingId: id ? id : "",
    img: "",
    title: blogdata ? blogdata.title : "",
    content: blogdata ? blogdata.content : "",
    url: imageview(),
  })

  function imgUpload(e) {
    setData('img', e.target.files[0]);
    setData('url', URL.createObjectURL(e.target.files[0]))

  }
  function handleSubmit(e) {
    e.preventDefault()
    router.post('publish', data, { onSuccess: onClose })
  }

  function handleClose() {
    reset();
    onClose();
  };

  return (
    <div className='overlay'>
      <form onSubmit={handleSubmit}>
        <div className="input_card popup">
          <button className="close-btn" type="button" onClick={handleClose}>×</button>
          <div className="" > <Button action='submit'>Publish</Button></div>

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

            <input type="text" maxLength={100} placeholder='Enter Title here.. ' onChange={(e) => { setData('title', e.target.value) }} value={data.title} required />
            <hr />
            {errors.title && <div className='bg-red-600'>{errors.title}</div>}</div>

          <div className="blog_wrapper p-8">
            {errors.text && <div className='bg-red-600'>{errors.content}</div>}
            <Textarea  placeholder='enter deatails here ' maxLength={1000} onChange={(e) => { setData('content', e.target.value) }} value={data.content} required/>
          </div>
        </div>
      </form>
    </div>
  )
}

export default NewBlog
