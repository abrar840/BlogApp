import React, { useState } from 'react';
import { useForm, usePage, router } from '@inertiajs/react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

const NewBlog = ({ onClose, blogdata, id }) => {
  const { errors } = usePage().props;

  const imageview = () => {
    return blogdata ? `/storage/${blogdata.images[0].path}` : "";
  };

  const { data, setData, post, processing, reset } = useForm({
    editingId: id || "",
    img: "",
    title: blogdata ? blogdata.title : "",
    content: blogdata ? blogdata.content : "",
    url: imageview(),
  });

  const imgUpload = (e) => {
    const file = e.target.files[0];
    setData("img", file);
    setData("url", URL.createObjectURL(file));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    router.post("Blog", data, { onSuccess: onClose });
  };

  const handleClose = () => {
    reset();
    onClose();
  };

  return (
    <div className="overlay">
      <form onSubmit={handleSubmit}>
        <Card className="input_card popup">
          <CardHeader>
            <div className="flex items-center justify-between">

              <CardTitle>{data.editingId ?"Edit Mode":"Create a New Blog"}</CardTitle>
              <button className="close-btn ml-4" type="button" onClick={handleClose}>×</button>
            </div>
          </CardHeader>

          <CardContent>
            <div className="image_wrapper p-8">
              <Label htmlFor="fileInput" className="cursor-pointer bg-blue-500 text-white rounded-md px-4 py-2">
                {data.url ? "Change Image" : "Add Image (Optional)"}
              </Label>
              <input type="file" accept="image/*" id="fileInput" onChange={imgUpload} style={{ display: "none" }} />
            </div>

            <div className="preview">
              {data.url && <img src={data.url} alt="uploaded" className="preview-img" />}
            </div>

            <div className="title_wrapper p-8">
              <Input
                className="w-full"
                type="text"
                maxLength={100}
                placeholder="Enter Title here..."
                value={data.title}
                onChange={(e) => setData("title", e.target.value)}
                required
              />
              {errors.title && <div className="bg-red-600 text-white mt-1 p-1 rounded">{errors.title}</div>}
            </div>

            <div className="blog_wrapper p-8">
              <Textarea
                placeholder="Enter details here..."
                maxLength={1000}
                value={data.content}
                onChange={(e) => setData("content", e.target.value)}
                required
              />
              {errors.content && <div className="bg-red-600 text-white mt-1 p-1 rounded">{errors.content}</div>}
            </div>
          </CardContent>

          <CardFooter className="flex justify-end gap-2">
            <Button type="submit" disabled={processing}>
              {id ? "Update Blog" : "Publish"}
            </Button>
            <Button type="button" variant="outline" onClick={handleClose}>
              Cancel
            </Button>
          </CardFooter>
        </Card>
      </form>
    </div>
  );
};

export default NewBlog;
