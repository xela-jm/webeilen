import React, {Component} from "react";
import ProductsGrid from "../../components/layouts/widgets/productGrid";

class HomePage extends Component {

    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-2">


{/*
                            <div id="colorPick"><span>Default palette:</span>
                                <div className="colorPickButton" hexvalue="#1abc9c" style={{background: '#1abc9c'}}/>
                                <div className="colorPickButton" hexvalue="#16a085" style={{background: '#16a085'}}/>
                                <div className="colorPickButton" hexvalue="#2ecc71" style={{background: '#2ecc71'}}/>
                                <div className="colorPickButton" hexvalue="#27ae60" style={{background: '#27ae60'}}/>
                                <div className="colorPickButton" hexvalue="#3498db" style={{background: '#3498db'}}/>
                                <div className="colorPickButton" hexvalue="#2980b9" style={{background: '#2980b9'}}/>
                                <div className="colorPickButton" hexvalue="#9b59b6" style={{background: '#9b59b6'}}/>
                                <div className="colorPickButton" hexvalue="#8e44ad" style={{background: '#8e44ad'}}/>
                                <div className="colorPickButton" hexvalue="#34495e" style={{background: '#34495e'}}/>
                                <div className="colorPickButton" hexvalue="#2c3e50" style={{background: '#2c3e50'}}/>
                                <div className="colorPickButton" hexvalue="#f1c40f" style={{background: '#f1c40f'}}/>
                                <div className="colorPickButton" hexvalue="#f39c12" style={{background: '#f39c12'}}/>
                                <div className="colorPickButton" hexvalue="#e67e22" style={{background: '#e67e22'}}/>
                                <div className="colorPickButton" hexvalue="#d35400" style={{background: '#d35400'}}/>
                                <div className="colorPickButton" hexvalue="#e74c3c" style={{background: '#e74c3c'}}/>
                                <div className="colorPickButton" hexvalue="#c0392b" style={{background: '#c0392b'}}/>
                                <div className="colorPickButton" hexvalue="#ecf0f1" style={{background: '#ecf0f1'}}/>
                                <div className="colorPickButton" hexvalue="#bdc3c7" style={{background: '#bdc3c7'}}/>
                                <div className="colorPickButton" hexvalue="#95a5a6" style={{background: '#95a5a6'}}/>
                                <div className="colorPickButton" hexvalue="#7f8c8d" style={{background: '#7f8c8d'}}/>
                                <span style={{marginTop: '5px'}}>Recent:</span>
                                <div className="colorPickButton" hexvalue="#f1c40f" style={{background: '#f1c40f'}}/>
                                <div className="colorPickButton" hexvalue="#2ecc71" style={{background: '#2ecc71'}}/>
                            </div>
*/}




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
                                <div className="swatch clearfix" data-option-index={1}>
                                    <div className="header">Color</div>
                                    <div data-value="Blue" className="swatch-element color blue-swatch available">
                                        <div className="tooltip">Blue</div>
                                        <input quickbeam="color" id="swatch-1-blue" type="checkbox" name="option-1" defaultValue="Blue" defaultChecked />
                                        <label htmlFor="swatch-1-blue" style={{borderColor: 'blue'}}>
                                            <img className="crossed-out" src="//cdn.shopify.com/s/files/1/1047/6452/t/1/assets/soldout.png?10994296540668815886" />
                                            <span style={{backgroundColor: 'blue'}} />
                                        </label>
                                    </div>
                                    <div data-value="Red" className="swatch-element color red-swatch available">
                                        <div className="tooltip">Red</div>
                                        <input quickbeam="color" id="swatch-1-red" type="checkbox" name="option-1" defaultValue="Red" />
                                        <label htmlFor="swatch-1-red" style={{borderColor: 'red'}}>
                                            <img className="crossed-out" src="//cdn.shopify.com/s/files/1/1047/6452/t/1/assets/soldout.png?10994296540668815886" />
                                            <span style={{backgroundColor: 'red'}} />
                                        </label>
                                    </div>
                                    <div data-value="Yellow" className="swatch-element color yellow-swatch available">
                                        <div className="tooltip">Yellow</div>
                                        <input quickbeam="color" id="swatch-1-yellow" type="checkbox" name="option-1" defaultValue="Yellow" />
                                        <label htmlFor="swatch-1-yellow" style={{borderColor: 'yellow'}}>
                                            <img className="crossed-out" src="//cdn.shopify.com/s/files/1/1047/6452/t/1/assets/soldout.png?10994296540668815886" />
                                            <span style={{backgroundColor: 'yellow'}} />
                                        </label>
                                    </div>
                                </div>
                                <div className="guide">
                                    <a>Size guide</a>
                                </div>
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