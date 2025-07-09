import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const ListProduct = (products ) => {
    console.log(products);
    return (
        <div>
            {products.children}
        </div>
    )
}

export default ListProduct;