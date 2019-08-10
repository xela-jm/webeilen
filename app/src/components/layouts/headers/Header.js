import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import CurrencyProvider from "./CurrencyProvider";
import SearchBox from "./SearchBox";

class Header extends React.Component {
    render() {
        return (
            <React.Fragment>
                <CssBaseline />
                <Container maxWidth="lg">
                    <Button size="small">Sign In</Button>
                    <Button size="small">Sign Up</Button>
                    <CurrencyProvider></CurrencyProvider>
                    <SearchBox />
                    <div>
                        number of items: 1
                    </div>
                    <div>
                        total prise: 144
                    </div>
                </Container>
            </React.Fragment>
        );
    }
}

export default Header;