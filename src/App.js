import styled from "styled-components";
import Logo from "./components/Logo";
import logo1 from "./components/logo1.png";
import marvel from "./components/marvel.png";

export default function App() {
  return (
    <Wrapper className="App">
      <LogoContainer>
        <img
          src={logo1}
          alt="logo"
          style={{ position: "absolute", left: "500px" }}
        />
      </LogoContainer>
      <MarvelContainer>
        <img src={marvel} alt="Marvel" />
      </MarvelContainer>
      <StyledContainer>
        <spline-viewer url="https://prod.spline.design/v1pWTlAi-Abb3k6c/scene.splinecode"></spline-viewer>
      </StyledContainer>
    </Wrapper>
  );
}

// Wrapper with full viewport height
const Wrapper = styled.div`
  background: rgb(147, 0, 10); // Background color
  width: 100%;
  height: 100vh; // Full viewport height
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  margin: 0;
  overflow: hidden;
  position: relative; // Added for positioning child elements
`;

const LogoContainer = styled.div`
  position: absolute;
  top: 20px;
  left: 600px;

  img {
    width: 50px;
    height: 70px;
  }

  @media (max-width: 1024px) {
    top: 10px;
    left: 50px;
  }

  @media (max-width: 768px) {
    top: 5px;
    left: 30px;
    img {
      width: 40px;
      height: 50px;
    }
  }

  @media (max-width: 480px) {
    top: 5px;
    left: 20px;
    img {
      width: 30px;
      height: 40px;
    }
  }
`;

const MarvelContainer = styled.div`
  position: absolute;
  top: 10px;
  left: 20px;

  img {
    width: 90px;
    height: auto;
  }

  @media (max-width: 1024px) {
    top: 5px;
    left: 10px;
  }

  @media (max-width: 768px) {
    top: 3px;
    left: 5px;
    img {
      width: 70px;
    }
  }

  @media (max-width: 480px) {
    top: 3px;
    left: 5px;
    img {
      width: 50px;
    }
  }
`;

const StyledContainer = styled.div`
  width: 100%;
  height: 100%;

  @media (max-width: 1024px) {
    width: 70%;
    height: 70%;
  }

  @media (max-width: 768px) {
    width: 60%;
    height: 60%;
  }

  @media (max-width: 480px) {
    width: 50%;
    height: 50%;
  }

  spline-viewer {
    width: 100%;
    height: 100%;
  }
`;
