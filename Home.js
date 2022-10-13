import React from "react";

export default function Home(props) {
  // const [names, setName] = useState("");
  // const [products, setProducts] = useState([
  //   { Name: "Shirt", Price: 1289.0, Preview: "shirt.jpeg", Stock: true },
  //   { Name: "T-Shirt", Price: 899.0, Preview: "tshirt.jpeg", Stock: false },
  //   { Name: "Casual-Shoes", Price: 2400.0, Preview: "shoes.jpg", Stock: false },
  //   { Name: "Shoes", Price: 700.0, Preview: "shoes1.jpg", Stock: true },
  // ]);

  // function Stock() {
  //   if (products[0].Stock == true) {
  //     ("Stock is Available");
  //   } else {
  //     console.log("Out of stock");
  //   }
  //   Stock();
  // let a = [10, 20, 30, 40, 50];
  // let b = "";
  // a.forEach((val) => {
  //   b += val + " ";
  // });
  // const handleChange = (lel) => {
  //   setName(lel.target.value);
  // };
  let names = " ";
  const handleChange = (e) => {
    names = e.target.value;
    console.log(e.target.value);
  };

  return (
    <div className="mt-4 d-flex justify-content-center">
      <h3 className="text-success">
        Hello Good Afternoon {props.person} and welcome to {props.place}.
      </h3>
      {/* <table
        className="table table-hover rounded rounded-circle table-responsive-md table-bordered w-25 h-50"
        border="1"
      >
        <thead className="bg-info text-white">
          <tr className="text-center">
            <th>Name</th>
            <th>&#8377; Price</th>
            <th>Preview</th>
            <th>Stock</th>
          </tr>
        </thead>
        <tbody className="m-3">
          {products.map((product) => (
            <tr key={product.Name}>
              <td style={{ backgroundColor: "powderblue", padding: 20 }}>
                {product.Name}
              </td>
              <td style={{ backgroundColor: "pink", padding: 20 }}>
                {product.Price}
              </td>
              <td>
                <img
                  className="my-1"
                  style={{ marginLeft: 70 }}
                  src={product.Preview}
                  height={100}
                  width={150}
                />
              </td>
              <td className="bg-light">
                <button onClick={Stock()} className="btn btn-success m-2">
                  Stock
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table> */}
      {/* {b} */}

      {/* <input type="text" onChange={handleChange} value={names} /> */}
    </div>
  );
}

Home.defaultProps = {
  person: "User",
  place: "NA",
};
