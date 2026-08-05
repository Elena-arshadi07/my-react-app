import coffeeData from "../data/coffeeData";
import ProductCard from "../components/ProductCard";

function Products() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-6">
      {coffeeData.map((item) => (
        <ProductCard key={item.id} product={item} />
      ))}
    </div>
  );
}

export default Products;