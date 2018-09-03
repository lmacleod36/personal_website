// tslint:disable:jsx-boolean-value
import * as React from 'react';
import {
    Collapse,
    Nav,
    Navbar,
    NavbarBrand,
    NavbarToggler,
    NavItem,
    NavLink
} from 'reactstrap';

class AppNavbar extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.state = {
            collapsed: true
        };
    }

    public toggleNavbar() {
        this.setState({
            collapsed: !this.state.collapsed
        });
    }


    public render() {
        return (
            <Navbar
                className="App-header"
                color="primary"
                light
            >
                <NavbarBrand href="/">Laura</NavbarBrand>
                <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
                <Collapse isOpen={!this.state.collapsed} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem className="active">
                            <NavLink href="/#About">About</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/#Publications">Publications</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/#Resume">Resume</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        );
    }
}

export default AppNavbar;