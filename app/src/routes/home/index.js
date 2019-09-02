import React, {Component} from "react";
import ProductsGrid from "../../components/layouts/widgets/productGrid";
import ColorPicker from "../../components/layouts/widgets/ColorPicker";

class HomePage extends Component {

    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-2">
                            <div className="swatches">
                                <div className="swatch clearfix" data-option-index={0}>
                                    <div className="header">Size</div>
                                    <div data-value="M" className="swatch-element plain m available">
                                        <input id="swatch-0-m" type="checkbox" name="option-0" defaultValue="M" defaultChecked />
                                        <label htmlFor="swatch-0-m">
                                            M
                                            <img className="crossed-out" src="//cdn.shopify.com/s/files/1/1047/6452/t/1/assets/soldout.png?10994296540668815886" />
                                        </label>
                                    </div>
                                    <div data-value="L" className="swatch-element plain l available">
                                        <input id="swatch-0-l" type="checkbox" name="option-0" defaultValue="L" />
                                        <label htmlFor="swatch-0-l">
                                            L
                                            <img className="crossed-out" src="//cdn.shopify.com/s/files/1/1047/6452/t/1/assets/soldout.png?10994296540668815886" />
                                        </label>
                                    </div>
                                    <div data-value="XL" className="swatch-element plain xl available">
                                        <input id="swatch-0-xl" type="checkbox" name="option-0" defaultValue="XL" />
                                        <label htmlFor="swatch-0-xl">
                                            XL
                                            <img className="crossed-out" src="//cdn.shopify.com/s/files/1/1047/6452/t/1/assets/soldout.png?10994296540668815886" />
                                        </label>
                                    </div>
                                    <div data-value="XXL" className="swatch-element plain xxl available">
                                        <input id="swatch-0-xxl" type="checkbox" name="option-0" defaultValue="XXL" />
                                        <label htmlFor="swatch-0-xxl">
                                            XXL
                                            <img className="crossed-out" src="//cdn.shopify.com/s/files/1/1047/6452/t/1/assets/soldout.png?10994296540668815886" />
                                        </label>
                                    </div>
                                </div>
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