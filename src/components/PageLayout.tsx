//PageLayout.tsx
import { Col, Container } from "react-bootstrap";

type PageLayoutProps = {
  children?: React.ReactNode;
};

const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  return (
    <Container>
      <Col>
      </Col>
      <h1>User Profile</h1>
      {children}
      <footer>
      </footer>
    </Container>
  );
};

export default PageLayout;