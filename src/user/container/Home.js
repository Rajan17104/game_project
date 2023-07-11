import React from 'react';
import { H2, H4, H6 } from '../component/UI/Heading/heading.style';
import { Title } from '../component/UI/Subtitel/subtitel.style';
import Card from '../component/UI/Card/Card';

function HOme(props) {
    return (
        <div>
            <div className="main-banner">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 align-self-center">
                            <div className="caption header-text">
                                <H6>Welcome to lugx</H6>
                                <H2>BEST GAMING SITE EVER!</H2>
                                <Title>LUGX Gaming is free Bootstrap 5 HTML CSS website template for your gaming websites. You can download and use this layout for commercial purposes. Please tell your friends about TemplateMo.</Title>
                                <div className="search-input">
                                    <form id="search" action="#">
                                        <input type="text" placeholder="Type Something" id="searchText" name="searchKeyword" onkeypress="handle" />
                                        <button role="button">Search Now</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 offset-lg-2">
                            <div className="right-image">
                                <img src="assets/images/banner-image.jpg" alt />
                                <span className="price">$22</span>
                                <span className="offer">-40%</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="features">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <a href="#">
                                <div className="item">
                                    <div className="image">
                                        <img src="assets/images/featured-01.png" alt style={{ maxWidth: 44 }} />
                                    </div>
                                    <H4>Free Storage</H4>
                                </div>
                            </a>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <a href="#">
                                <div className="item">
                                    <div className="image">
                                        <img src="assets/images/featured-02.png" alt style={{ maxWidth: 44 }} />
                                    </div>
                                    <H4>User More</H4>
                                </div>
                            </a>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <a href="#">
                                <div className="item">
                                    <div className="image">
                                        <img src="assets/images/featured-03.png" alt style={{ maxWidth: 44 }} />
                                    </div>
                                    <H4>Reply Ready</H4>
                                </div>
                            </a>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <a href="#">
                                <div className="item">
                                    <div className="image">
                                        <img src="assets/images/featured-04.png" alt style={{ maxWidth: 44 }} />
                                    </div>
                                    <H4>Easy Layout</H4>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section trending">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="section-heading">
                                <H6>Trending</H6>
                                <H2>Trending Games</H2>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="main-button">
                                <a href="shop.html">View All</a>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <Card className="item">
                                <div className="thumb">
                                    <a href="product-details.html"><img src="assets/images/trending-01.jpg" alt /></a>
                                    <span className="price"><em>$28</em>$20</span>
                                </div>
                                <div className="down-content">
                                    <span className="category">Action</span>
                                    <H4>Assasin Creed</H4>
                                    <a href="product-details.html"><i className="fa fa-shopping-bag" /></a>
                                </div>
                            </Card>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <Card className="item">
                                <div className="thumb">
                                    <a href="product-details.html"><img src="assets/images/trending-02.jpg" alt /></a>
                                    <span className="price">$44</span>
                                </div>
                                <div className="down-content">
                                    <span className="category">Action</span>
                                    <H4>Assasin Creed</H4>
                                    <a href="product-details.html"><i className="fa fa-shopping-bag" /></a>
                                </div>
                            </Card>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <Card className="item">
                                <div className="thumb">
                                    <a href="product-details.html"><img src="assets/images/trending-03.jpg" alt /></a>
                                    <span className="price"><em>$64</em>$44</span>
                                </div>
                                <div className="down-content">
                                    <span className="category">Action</span>
                                    <H4>Assasin Creed</H4>
                                    <a href="product-details.html"><i className="fa fa-shopping-bag" /></a>
                                </div>
                            </Card>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <Card className="item">
                                <div className="thumb">
                                    <a href="product-details.html"><img src="assets/images/trending-04.jpg" alt /></a>
                                    <span className="price">$32</span>
                                </div>
                                <div className="down-content">
                                    <span className="category">Action</span>
                                    <H4>Assasin Creed</H4>
                                    <a href="product-details.html"><i className="fa fa-shopping-bag" /></a>
                                </div>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section most-played">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="section-heading">
                                <H6>TOP GAMES</H6>
                                <H2>Most Played</H2>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="main-button">
                                <a href="shop.html">View All</a>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6 col-sm-6">
                            <div className="item">
                                <div className="thumb">
                                    <a href="product-details.html"><img src="assets/images/top-game-01.jpg" alt /></a>
                                </div>
                                <div className="down-content">
                                    <span className="category">Adventure</span>
                                    <H4>Assasin Creed</H4>
                                    <a href="product-details.html">Explore</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6 col-sm-6">
                            <div className="item">
                                <div className="thumb">
                                    <a href="product-details.html"><img src="assets/images/top-game-02.jpg" alt /></a>
                                </div>
                                <div className="down-content">
                                    <span className="category">Adventure</span>
                                    <H4>Assasin Creed</H4>
                                    <a href="product-details.html">Explore</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6 col-sm-6">
                            <div className="item">
                                <div className="thumb">
                                    <a href="product-details.html"><img src="assets/images/top-game-03.jpg" alt /></a>
                                </div>
                                <div className="down-content">
                                    <span className="category">Adventure</span>
                                    <H4>Assasin Creed</H4>
                                    <a href="product-details.html">Explore</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6 col-sm-6">
                            <div className="item">
                                <div className="thumb">
                                    <a href="product-details.html"><img src="assets/images/top-game-04.jpg" alt /></a>
                                </div>
                                <div className="down-content">
                                    <span className="category">Adventure</span>
                                    <H4>Assasin Creed</H4>
                                    <a href="product-details.html">Explore</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6 col-sm-6">
                            <div className="item">
                                <div className="thumb">
                                    <a href="product-details.html"><img src="assets/images/top-game-05.jpg" alt /></a>
                                </div>
                                <div className="down-content">
                                    <span className="category">Adventure</span>
                                    <H4>Assasin Creed</H4>
                                    <a href="product-details.html">Explore</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6 col-sm-6">
                            <div className="item">
                                <div className="thumb">
                                    <a href="product-details.html"><img src="assets/images/top-game-06.jpg" alt /></a>
                                </div>
                                <div className="down-content">
                                    <span className="category">Adventure</span>
                                    <H4>Assasin Creed</H4>
                                    <a href="product-details.html">Explore</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section categories">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <div className="section-heading">
                                <H6>Categories</H6>
                                <H2>Top Categories</H2>
                            </div>
                        </div>
                        <div className="col-lg col-sm-6 col-xs-12">
                            <div className="item">
                                <H4>Action</H4>
                                <div className="thumb">
                                    <a href="product-details.html"><img src="assets/images/categories-01.jpg" alt /></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg col-sm-6 col-xs-12">
                            <div className="item">
                                <H4>Action</H4>
                                <div className="thumb">
                                    <a href="product-details.html"><img src="assets/images/categories-05.jpg" alt /></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg col-sm-6 col-xs-12">
                            <div className="item">
                                <H4>Action</H4>
                                <div className="thumb">
                                    <a href="product-details.html"><img src="assets/images/categories-03.jpg" alt /></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg col-sm-6 col-xs-12">
                            <div className="item">
                                <H4>Action</H4>
                                <div className="thumb">
                                    <a href="product-details.html"><img src="assets/images/categories-04.jpg" alt /></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg col-sm-6 col-xs-12">
                            <div className="item">
                                <H4>Action</H4>
                                <div className="thumb">
                                    <a href="product-details.html"><img src="assets/images/categories-05.jpg" alt /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section cta">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="shop">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="section-heading">
                                            <H6>Our Shop</H6>
                                            <H2>Go Pre-Order Buy &amp; Get Best <em>Prices</em> For You!</H2>
                                        </div>
                                        <Title>Lorem ipsum dolor consectetur adipiscing, sed do eiusmod tempor incididunt.</Title>
                                        <div className="main-button">
                                            <a href="shop.html">Shop Now</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 offset-lg-2 align-self-end">
                            <div className="subscribe">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="section-heading">
                                            <H6>NEWSLETTER</H6>
                                            <H2>Get Up To $100 Off Just Buy <em>Subscribe</em> Newsletter!</H2>
                                        </div>
                                        <div className="search-input">
                                            <form id="subscribe" action="#">
                                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Your email..." />
                                                <button type="submit">Subscribe Now</button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default HOme;