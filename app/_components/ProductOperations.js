import SortBy from "./SortBy";

function ProductOperations() {
  return (
    <div>
      <SortBy
        options={[
          { value: "price-asc", label: "Price (Low to High)" },
          { value: "price-desc", label: "Price (High to Low)" },
          { value: "rating-asc", label: "Rating (Low to High)" },
          { value: "rating-desc", label: "Rating (High to Low)" },
        ]}
      />
    </div>
  );
}

export default ProductOperations;