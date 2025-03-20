import Notification from "../Notification/notification";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/footer";
import Menu from "../Menu/menu";
import { RiDeleteBinLine } from "react-icons/ri";

const Products = ({ products }) => {

  const handleDeleteProduct = (id) => {
    const updatedProducts = products.filter((item) => item.id !== id);
    setProducts(updatedProducts);
      };
  

  return (
    <div className="pb-5 dark:bg-black overflow-hidden">
      <Notification />
      <Navbar />
      <Menu />

      <div className="flex justify-between gap-5 flex-wrap my-10 w-[92%] m-auto">
        {products.length > 0 ? (
          products.map((item) => (
            <div key={item.id} className="border-2 border-white w-full md:w-[45%] lg:w-[25%] p-4 rounded-xl bg-white">
              <img src={item.image} alt="Product" className="rounded-xl w-full h-[30vh] object-cover" />
              <h4 className="text-black font-bold">{item.name}</h4>
             <div className="flex items-center justify-between">
             <p className="text-gray-600 font-bold">{item.price}</p>
              <button
              className="mt-2 text-black px-3 py-1 rounded"
              onClick={() => handleDeleteProduct(item.id)}
            >
              <RiDeleteBinLine />
            </button>
              </div> 
            </div>
          ))
        ) : (
          <p className="text-white text-center w-full mt-10">No products available.</p>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Products;