

// Option 1
// ORIGINAL CODE start, it WORKs =============================================================================
import React from 'react'
import { useState } from 'react'

const HomePage = () => {

  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [price, setPrice] = useState('')
  //const [image, setImage] = useState(null)



  // for images
  //const [imagePreview, setImagePreview] = useState(null);



  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission

    //const bookData = { title, author, price, image }; ORIGINAL
    const bookData = { title, author, price };

    try {
      //const response = await fetch('https://books-auth2-backend-2.vercel.app/api/products', {
        const response = await fetch('http://localhost:8080/api/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bookData),
      });

      console.log('Response Status ======> ', response.status);

      if (!response.ok) {
        throw new Error('44444 Network response was not ok');
      }

      const data = await response.json();
      console.log('Book created:', data);
      // Optionally reset the form
      setTitle('');
      setAuthor('');
      setPrice('');

      //setImage(null)
      //setImagePreview(null);

    } catch (error) {
      console.error('Error creating book:', error);
    }
  };






  return (
    <div className='home-page'>
      {/* <h2>Authentication</h2> */}
      <h4>
        HOME Page
      </h4>

      <section className='books-form-section'>
        <form action=" " onSubmit={handleSubmit} >
          <input className='input-field' type="text" value={title} placeholder='title'
            onChange={(e) => setTitle(e.target.value)}
          />
          <br />
          <input className='input-field' type="text" value={author} placeholder='author'
            onChange={(e) => setAuthor(e.target.value)}
          />
          <br />
          <input className='input-field' type="number" value={price} placeholder='price'
            onChange={(e) => setPrice(e.target.value)}
          />

          <br />



          {/* <div>
            <label>Image:</label>
            <input type="file" name="image" accept="image/*"
              onChange={(e) => setImage(e.target.value[0])}   //ORIGINAL
              onChange={(e) => setImage(URL.createObjectURL(e.target.value[0])}
            />
          </div> */}



        {/* THIS WORKS, it is FOR IMAGES */}
        {/* https://www.geeksforgeeks.org/reactjs/how-to-upload-image-and-preview-it-using-reactjs/ */}
        {/* <div">
            <h2>Add Image:</h2>
            <input type="file" onChange={(e) =>  setImage(URL.createObjectURL(e.target.files[0]))} />
            {image && <img src={image} alt="Uploaded preview" />}
        </div> */}



          {/* <br />
               <input className='input-field' type="text" placeholder='image'
                 onChange={(e) => setImage(e.target.value)}
                /> */}

          <button type='submit'>send</button>

        </form>
      </section>


    </div>
  )
}
export default HomePage
// ORIGINAL CODE end, it WORKs ==================================================================================










// OPTION 2 DOES NOT WORK ======================================================
// import React, { useState } from 'react';

// const HomePage = () => {
//     const [bookData, setBookData] = useState({ title: '', author: '', price: '', image: null });
//     const [imagePreview, setImagePreview] = useState(null); // State for image preview

//     const handleChange = (e) => {
//         const { name, value, type, files } = e.target;
//         if (type === 'file') {
//             setBookData({ ...bookData, [name]: files[0] }); // Store the file object
//             setImagePreview(URL.createObjectURL(files[0])); // Create a preview URL for the image
//         } else {
//             setBookData({ ...bookData, [name]: value });
//         }
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         const formData = new FormData();
//         formData.append('title', bookData.title);
//         formData.append('author', bookData.author);
//         formData.append('price', bookData.price);
//         formData.append('image', bookData.image); // Append the image file

//         try {
//             const response = await fetch('http://localhost:8080/api/products', {
//                 method: 'POST',
//                 body: formData, // Send the FormData object
//             });

//             console.log('Response Status ======> ', response.status);

//             if (!response.ok) {
//                 throw new Error('Network response was not ok');
//             }

//             const data = await response.json();
//             console.log('Book created:', data);
//             // Optionally reset the form
//             setBookData({ title: '', author: '', price: '', image: null }); // Reset the form
//             setImagePreview(null); // Reset the image preview
//         } catch (error) {
//             console.error('Error creating book:', error);
//         }
//     };

//     return (
//         <div className='home-page'>
//             <h4>HOME Page</h4>
//             <section className='books-form-section'>
//                 <form onSubmit={handleSubmit}>
//                     <div>
//                         <label>Title:</label>
//                         <input
//                             className='input-field'
//                             type="text"
//                             name="title"
//                             value={bookData.title}
//                             onChange={handleChange}
//                             required
//                         />
//                     </div>
//                     <div>
//                         <label>Author:</label>
//                         <input
//                             className='input-field'
//                             type="text"
//                             name="author"
//                             value={bookData.author}
//                             onChange={handleChange}
//                             required
//                         />
//                     </div>
//                     <div>
//                         <label>Price:</label>
//                         <input
//                             className='input-field'
//                             type="number"
//                             name="price"
//                             value={bookData.price}
//                             onChange={handleChange}
//                             required
//                         />
//                     </div>
//                     <div>
//                         <label>Image:</label>
//                         <input
//                             className='input-field'
//                             type="file"
//                             name="image"
//                             accept="image/*"
//                             onChange={handleChange}
//                             required
//                         />
//                     </div>
//                     {imagePreview && (
//                         <div>
//                             <h3>Image Preview:</h3>
//                             <img src={imagePreview} alt="Preview" style={{ width: '100px', height: 'auto' }} />
//                         </div>
//                     )}
//                     <button type="submit">Send</button>
//                 </form>
//             </section>
//         </div>
//     );
// };

// export default HomePage;
// OPTION 2======================================================================








//OPTION 3 does not work ================================================================
// import React, { useState } from 'react';

// const HomePage = () => {
//     const [bookData, setBookData] = useState({ title: '', author: '', price: '', image: null });
//     const [imagePreview, setImagePreview] = useState(null); // State for image preview

//     const handleChange = (e) => {
//         const { name, type, files } = e.target;
//         if (type === 'file') {
//             const file = files[0];
//             setBookData({ ...bookData, [name]: file }); // Store the file object
//             setImagePreview(URL.createObjectURL(file)); // Create a preview URL for the image
//         } else {
//             setBookData({ ...bookData, [name]: e.target.value });
//         }
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         const formData = new FormData();
//         formData.append('title', bookData.title);
//         formData.append('author', bookData.author);
//         formData.append('price', bookData.price);
//         formData.append('image', bookData.image); // Append the image file

//         try {
//             const response = await fetch('http://localhost:8080/api/products', {
//                 method: 'POST',
//                 body: formData, // Send the FormData object
//             });

//             if (!response.ok) {
//                 throw new Error('Network response was not ok');
//             }

//             const data = await response.json();
//             console.log('Data received from server:', data);
//             setBookData({ title: '', author: '', price: '', image: null }); // Reset the form
//             setImagePreview(null); // Reset the image preview
//         } catch (error) {
//             console.error('Error creating book:', error);
//         }
//     };

//     return (
//         <form onSubmit={handleSubmit}>
//             <div>
//                 <label>Title:</label>
//                 <input 
//                     className='input-field' 
//                     type="text" 
//                     name="title" 
//                     value={bookData.title} 
//                     onChange={handleChange} 
//                     required 
//                 />
//             </div>
//             <div>
//                 <label>Author:</label>
//                 <input 
//                     className='input-field' 
//                     type="text" 
//                     name="author" 
//                     value={bookData.author} 
//                     onChange={handleChange} 
//                     required 
//                 />
//             </div>
//             <div>
//                 <label>Price:</label>
//                 <input 
//                     className='input-field' 
//                     type="number" 
//                     name="price" 
//                     value={bookData.price} 
//                     onChange={handleChange} 
//                     required 
//                 />
//             </div>
//             <div>
//                 <label>Image:</label>
//                 <input 
//                     className='input-field' 
//                     type="file" 
//                     name="image" 
//                     accept="image/*" 
//                     onChange={handleChange} 
//                     required 
//                 />
//             </div>
//             {imagePreview && (
//                 <div>
//                     <h3>Image Preview:</h3>
//                     <img src={imagePreview} alt="Preview" style={{ width: '100px', height: 'auto' }} />
//                 </div>
//             )}
//             <button type="submit">Create Book</button>
//         </form>
//     );
// };

// export default HomePage;
//OPTION 3======================================================================

















//value={email}
//value={password}



// const handleSubmit = async (e) => {
//   e.preventDefault(); // Prevent the default form submission

//   const bookData = { title, author, price };

//   try {
//       const response = await fetch('http://localhost:8080/api/products', {
//           method: 'POST',
//           headers: {
//               'Content-Type': 'application/json',
//           },
//           body: JSON.stringify(bookData),
//       });

//       if (!response.ok) {
//           throw new Error('Network response was not ok');
//       }

//       const data = await response.json();
//       console.log('Book created:', data);
//       // Optionally reset the form
//       setTitle('');
//       setAuthor('');
//       setPrice('');
//   } catch (error) {
//       console.error('Error creating book:', error);
//   }
// };


