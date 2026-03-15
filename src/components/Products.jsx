import useFetch from "../hooks/useFetch";

function Products() {
  const { data, loading, error } = useFetch(
    "https://api.escuelajs.co/api/v1/products"
  );

  if (loading) return <h2>Loading...</h2>;
  if (error) return <h2>{error}</h2>;

  return (
    <div className="grid">
      {data.slice(0, 8).map((item) => (
        <div key={item.id} className="card">
          <img src={item.images[0]} alt={item.title} />
          <p>{item.title}</p>
        </div>
      ))}
    </div>
  );
}

export default Products;