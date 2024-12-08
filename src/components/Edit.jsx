import React, { useContext, useEffect, useState } from "react";
import { Productcontext } from "../utils/Context";
import { useNavigate, useParams } from "react-router-dom";

const Edit = () => {
  const [products, setProducts] = useContext(Productcontext);
  const navigate = useNavigate();
  const { id } = useParams();

  // Initialize the product state with default values
  const [product, setProduct] = useState({
    title: "",
    image: "",
    category: "",
    price: 0,
    description: "",
  });

  const [loading, setLoading] = useState(true); // Track loading state

  useEffect(() => {
    // Find the product by id
    const productToEdit = products.find((p) => p.id === id);
    if (productToEdit) {
      setProduct(productToEdit); // Set the product state with the product to edit
      setLoading(false); // Set loading to false once data is found
    } else {
      setLoading(false); // If product is not found, stop loading
    }
  }, [id, products]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduct({
      ...product,
      [name]: value, // Dynamically update the corresponding field in the product state
    });
  };

  const editProductHandler = (e) => {
    e.preventDefault();
    const { title, image, category, description } = product;

    // Validation
    if (
      title.trim().length < 5 ||
      image.trim().length < 5 ||
      category.trim().length < 5 ||
      description.trim().length < 5
    ) {
      alert("All fields must be at least 5 characters long");
      return;
    }

    // Update the product in the list
    const updatedProducts = products.map(
      (p) => (p.id === id ? { ...p, ...product } : p) // Update the product with the matching id
    );

    setProducts(updatedProducts); // Update the context with the updated product list
    localStorage.setItem("products", JSON.stringify(updatedProducts)); // Store updated list in localStorage

    navigate("/"); // Navigate to home page after updating the product
  };

  // Display loading spinner while data is being fetched
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <form
      onSubmit={editProductHandler}
      className="flex flex-col items-center p-[5%] w-screen h-screen"
    >
      <h1 className="mb-5 text-xl w-1/2">Edit Product</h1>
      <input
        type="text"
        name="image"
        placeholder="Image Link"
        className="text-xl bg-zinc-300 rounded w-1/2 mb-3 p-3"
        onChange={handleInputChange}
        value={product.image} // Set the value to the product's image
      ></input>
      <input
        type="text"
        name="title"
        placeholder="Title"
        className="text-xl bg-zinc-300 rounded w-1/2 mb-3 p-3"
        onChange={handleInputChange}
        value={product.title} // Set the value to the product's title
      ></input>
      <div className="w-1/2 flex justify-between">
        <input
          type="text"
          name="category"
          placeholder="Category"
          className="text-xl bg-zinc-300 rounded w-[45%] mb-3 p-3"
          onChange={handleInputChange}
          value={product.category} // Set the value to the product's category
        ></input>
        <input
          type="number"
          name="price"
          placeholder="Price"
          className="text-xl bg-zinc-300 rounded w-[45%] mb-3 p-3"
          onChange={handleInputChange}
          value={product.price} // Set the value to the product's price
        ></input>
      </div>
      <textarea
        className="text-xl bg-zinc-300 rounded w-1/2 mb-3 p-3 h-[150px]"
        rows="10"
        name="description"
        placeholder="Enter Description Here..."
        onChange={handleInputChange}
        value={product.description} // Set the value to the product's description
      ></textarea>
      <div className="w-1/2">
        <button className="self-start py-2 px-6 border rounded border-blue-200 text-blue-300 hover:text-black hover:bg-blue-300 hover:scale-105 transition-all">
          Update Product
        </button>
      </div>
    </form>
  );
};

export default Edit;
