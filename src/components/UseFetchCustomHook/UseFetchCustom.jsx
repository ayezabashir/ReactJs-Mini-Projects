import useFetch from "./useFetch";

const UseFetchCustomHook = () => {
  const { data, loading } = useFetch("https://dummyjson.com/products", {});

  return (
    <div>
      <h1>UseFetch Custom Hook</h1>
      <div>
        {loading ? <h4>Loading products...</h4> : null}
        {data && data.products && data.products.length
          ? data.products.map((item) => <p key={item.key}>${item.title}</p>)
          : null}
      </div>
    </div>
  );
};

export default UseFetchCustomHook;
