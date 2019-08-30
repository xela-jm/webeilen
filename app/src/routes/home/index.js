import {Component} from "react";
import React from "react";

class HomePage extends Component{

    render() {
        return(
            <div>
                <div className="container">
                    <h3 className="h3">shopping Demo-1 </h3>
                    <div className="row">
                        <div className="col-md-3 col-sm-6">
                            <div className="product-grid">
                                <div className="product-image">
                                    <a href="#">
                                        <img className="pic-1" src="/centaur.gif" />
{/*                                        <img className="pic-2" src="http://bestjquery.com/tutorial/product-grid/demo9/images/img-2.jpg" />*/}
                                    </a>
                                    <ul className="social">
                                        <li><a href data-tip="Quick View"><i className="fa fa-search" /></a></li>
                                        <li><a href data-tip="Add to Wishlist"><i className="fa fa-shopping-bag" /></a></li>
                                        <li><a href data-tip="Add to Cart"><i className="fa fa-shopping-cart" /></a></li>
                                    </ul>
                                </div>
                                <div className="product-content">
                                    <h3 className="title"><a href="#">Women's Blouse</a></h3>
                                    <div className="price">$16.00
                                        <span>$20.00</span>
                                    </div>
                                    <a className="add-to-cart" href>+ Add To Cart</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="product-grid">
                                <div className="product-image">
                                    <a href="#">
                                        <img className="pic-1" src="http://bestjquery.com/tutorial/product-grid/demo9/images/img-3.jpg" />
                                        <img className="pic-2" src="http://bestjquery.com/tutorial/product-grid/demo9/images/img-4.jpg" />
                                    </a>
                                    <ul className="social">
                                        <li><a href data-tip="Quick View"><i className="fa fa-search" /></a></li>
                                        <li><a href data-tip="Add to Wishlist"><i className="fa fa-shopping-bag" /></a></li>
                                        <li><a href data-tip="Add to Cart"><i className="fa fa-shopping-cart" /></a></li>
                                    </ul>
                                    <span className="product-new-label">Sale</span>
                                    <span className="product-discount-label">50%</span>
                                </div>
                                <ul className="rating">
                                    <li className="fa fa-star" />
                                    <li className="fa fa-star" />
                                    <li className="fa fa-star" />
                                    <li className="fa fa-star" />
                                    <li className="fa fa-star" />
                                </ul>
                                <div className="product-content">
                                    <h3 className="title"><a href="#">Men's Plain Tshirt</a></h3>
                                    <div className="price">$5.00
                                        <span>$10.00</span>
                                    </div>
                                    <a className="add-to-cart" href>+ Add To Cart</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="product-grid">
                                <div className="product-image">
                                    <a href="#">
                                        <img className="pic-1" src="http://bestjquery.com/tutorial/product-grid/demo9/images/img-5.jpg" />
                                        <img className="pic-2" src="http://bestjquery.com/tutorial/product-grid/demo9/images/img-6.jpg" />
                                    </a>
                                    <ul className="social">
                                        <li><a href data-tip="Quick View"><i className="fa fa-search" /></a></li>
                                        <li><a href data-tip="Add to Wishlist"><i className="fa fa-shopping-bag" /></a></li>
                                        <li><a href data-tip="Add to Cart"><i className="fa fa-shopping-cart" /></a></li>
                                    </ul>
                                    <span className="product-new-label">Sale</span>
                                    <span className="product-discount-label">50%</span>
                                </div>
                                <ul className="rating">
                                    <li className="fa fa-star" />
                                    <li className="fa fa-star" />
                                    <li className="fa fa-star" />
                                    <li className="fa fa-star" />
                                    <li className="fa fa-star" />
                                </ul>
                                <div className="product-content">
                                    <h3 className="title"><a href="#">Men's Plain Tshirt</a></h3>
                                    <div className="price">$5.00
                                        <span>$10.00</span>
                                    </div>
                                    <a className="add-to-cart" href>+ Add To Cart</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="product-grid">
                                <div className="product-image">
                                    <a href="#">
                                        <img className="pic-1" src="http://bestjquery.com/tutorial/product-grid/demo9/images/img-7.jpg" />
                                        <img className="pic-2" src="http://bestjquery.com/tutorial/product-grid/demo9/images/img-8.jpg" />
                                    </a>
                                    <ul className="social">
                                        <li><a href data-tip="Quick View"><i className="fa fa-search" /></a></li>
                                        <li><a href data-tip="Add to Wishlist"><i className="fa fa-shopping-bag" /></a></li>
                                        <li><a href data-tip="Add to Cart"><i className="fa fa-shopping-cart" /></a></li>
                                    </ul>
                                    <span className="product-new-label">Sale</span>
                                    <span className="product-discount-label">50%</span>
                                </div>
                                <ul className="rating">
                                    <li className="fa fa-star" />
                                    <li className="fa fa-star" />
                                    <li className="fa fa-star" />
                                    <li className="fa fa-star" />
                                    <li className="fa fa-star" />
                                </ul>
                                <div className="product-content">
                                    <h3 className="title"><a href="#">Men's Plain Tshirt</a></h3>
                                    <div className="price">$5.00
                                        <span>$10.00</span>
                                    </div>
                                    <a className="add-to-cart" href>+ Add To Cart</a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <hr />
            </div>
        )
    }
}

export default HomePage;