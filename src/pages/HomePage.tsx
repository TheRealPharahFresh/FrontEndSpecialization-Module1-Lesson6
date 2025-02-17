//Home-page.tsx
import { Col, Container } from "react-bootstrap";
import LoginButton from "../components/LoginButton";
import LogoutButton from "../components/LogoutButton";

const HomePage: React.FC = () => {
  return (
    <Container>
      <Col>
        <h1>Hello Welcome To The Task Dashboard Login Page</h1>
        <p><em>Please Login Or Out Below</em></p>
        <LoginButton />
        <LogoutButton />
      </Col>
    </Container>
  );
};

export default HomePage;