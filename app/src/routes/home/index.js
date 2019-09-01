import {Component} from "react";
import React from "react";
import ProductsGrid from "../../components/layouts/widgets/productGrid";

class HomePage extends Component{

    render() {
        return(
            <div>
                <ProductsGrid/>
                <hr />
            </div>
        )
    }
}

export default HomePage;