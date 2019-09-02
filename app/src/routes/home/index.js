import React, {Component} from "react";
import ProductsGrid from "../../components/layouts/widgets/productGrid";
import ColorPicker from "../../components/layouts/widgets/ColorPicker";
import SizePicker from "../../components/layouts/widgets/SizePicker";

class HomePage extends Component {

    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-2">
                            <div className="swatches">
                                <SizePicker/>
                                <ColorPicker/>
                            </div>
                        </div>
                        <div className="col-md-10">
                            <ProductsGrid/>
                        </div>
                    </div>
                    <hr/>
                </div>
            </div>
        )
    }
}

export default HomePage;