import {Nav, Navbar} from 'react-bootstrap';


const NavBar = () => {
    return (
        <Navbar bg="dark" variant="dark">Task
            <Navbar.Brand href="/">TaskBar</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="/dashboard">TaskDashboard</Nav.Link>
                <Nav.Link href="/creation">Task Creation</Nav.Link>
            </Nav>
        </Navbar>
    );
}


export default NavBar;