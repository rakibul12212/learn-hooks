"use client";
import { useQuery, gql } from "@apollo/client";
const GET_PRODUCTS = gql`
  query {
    products {
      totalItems
      items {
        id
        name
        description
      }
    }
  }
`;

const GetDataFromDb = () => {
  const { loading, error, data } = useQuery(GET_PRODUCTS);
  console.log(`data :` + data);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <>
      {data.products.items.slice(1, 5).map(({ id, name, description }) => (
        <div className="grid grid-row-4 gap-4" key={id}>
          
            <p className="font-semibold text-xl p-4">{name}</p>
            <p className="p-4">{description}</p>
          
        </div>
      ))}
    </>
  );
};

export default GetDataFromDb;
