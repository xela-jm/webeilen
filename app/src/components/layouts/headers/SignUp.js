import React, {Component} from "react";
import IconButton from "@material-ui/core/IconButton/IconButton";
import Popover from "@material-ui/core/Popover/Popover";
import {MDBBtn, MDBContainer, MDBModal} from "mdbreact";

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.confirmationDialog = React.createRef();
        this.state = {
            anchorEl: null,
        };
    }

    //Define function for open dropdown
    handleClick = event => {
        this.setState({
            anchorEl: event.currentTarget,
        });
    };

    //Define function for close dropdown
    handleClose = () => {
        this.setState({
            anchorEl: null,
        });
    };

    render() {

        const {anchorEl} = this.state;
        const open = Boolean(anchorEl);
        const {cart} = this.props;

        return (
            <div className="iron-cart-wrap">
                !!!!!!!!!!!!!!!!!!!
                <IconButton
                    color="inherit"
                    aria-haspopup="true"
                    variant="contained"
                    className="icon-btn mr-10"
                    aria-label="Cart"
                    onClick={this.handleClick}
                >
                </IconButton>


                <MDBContainer>
                    {/* BUTTON */}
                    <MDBBtn color="info" onClick={this.handleClick}>Click</MDBBtn>
                    {/* MODAL */}
                    <MDBModal isOpen={open} size="lg" full-height position="top">
                        <div className="card">
                            <header className="card-header test1">
                                <h5 className="modal-title">Register</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={this.handleClose}>
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </header>
                            <article className="card-body">
                                <form>
                                    <div className="form-row">
                                        <div className="col form-group">
                                            <label>First name </label>
                                            <input type="text" className="form-control" placeholder=""/>
                                        </div>

                                        <div className="col form-group">
                                            <label>Last name</label>
                                            <input type="text" className="form-control" placeholder=" "/>
                                        </div>

                                    </div>

                                    <div className="form-group">
                                        <label>Email address</label>
                                        <input type="email" className="form-control" placeholder=""/>
                                        <small className="form-text text-muted">We'll never share your email with anyone
                                            else.
                                        </small>
                                    </div>


                                    <div className="form-group">
                                        <label>Create password</label>
                                        <input className="form-control" type="password"/>
                                    </div>

                                    <div className="form-group">
                                        <button type="submit" className="btn btn-primary btn-block"> Register</button>
                                    </div>

                                    <small className="text-muted">By clicking the 'Sign Up' button, you confirm that you
                                        accept our <br/> Terms of use and Privacy Policy.
                                    </small>
                                </form>
                            </article>

                            <div className="border-top card-body text-center">Have an account? <a href="">Log In</a>
                            </div>
                        </div>

                    </MDBModal>
                </MDBContainer>
            </div>
        );
    }
}

export default SignUp;
