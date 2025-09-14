



// from this video https://www.youtube.com/watch?v=maXqEICuPIE


import React from 'react'

const AdminPage = () => {

    const handleFileUpload = async (e) => {

        const file = e.target.files[0];

        const data = new FormData()
        data.append("file", file)
        data.append("upload_preset", "Testing_Cloudinary_for_Books")// from Cloudinary, NAME
        data.append("cloud_name", "dtam0kqa6")// from Cloudinary, Cloud name

        //https://support.cloudinary.com/hc/en-us/articles/23687620947730-How-To-Find-the-API-Base-URL
       const res = await fetch("https://api.cloudinary.com/v1_1/dtam0kqa6/image/upload", {
           method: "POST",
           body: data
        })

        const uploadImageURL = await res.json()
        console.log("IMAGE data ===> ", uploadImageURL)
        console.log("Image itself ===> ", uploadImageURL.url)
        
        console.log("file/image from admin page ===>", file)

    }

  return (
    <div className='admin-page'>
     <h4>  ADMIN Page </h4>

     <section className='admin-fileupload'>
        <input type="file" onChange={handleFileUpload} />
     </section>
    </div>
  )
}

export default AdminPage
