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
                <NavbarToggler onClick={this.toggleNavbar}/>
                <Collapse isOpen={!this.state.collapsed} navbar>
                    <Nav className="navbar-left" navbar>
                        <NavItem>
                            <NavLink href="/#About">About</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/#Publications">Publications</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/#Resume">Resume</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/#Contact">Contact</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        );
    }
}

export default AppNavbar;