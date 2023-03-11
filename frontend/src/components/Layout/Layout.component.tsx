import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { GlobalStyle } from "./../../styles/GlobalStyle";
import { Nav } from "../Nav/Nav.component";
import { Social } from "../Social/Social.component";
import Footer from "../Footer/Footer.component";
import { Props } from "./Layout.types";
import { Loader } from "../Loader/Loader.component";
import { Email } from "../Email/Email.component";

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const Layout: React.FC<Props> = ({ children }) => {
  // TODO Remove hardcode here
  const isHome = true;
  const [isLoading, setIsLoading] = useState(isHome);

  return (
    <>
      {/* TODO Here need to add seo info component */}

      <div id="root">
        <GlobalStyle />

        <a className="skip-to-content" href="#content">
          Skip to Content
        </a>

        {isLoading && isHome ? (
          <Loader finishLoading={() => setIsLoading(false)} />
        ) : (
          <StyledContent>
            <Nav isHome={isHome} />
            <Social isHome={isHome} />
            <Email isHome={isHome} />

            <div id="content">
              {children}
              <Footer />
            </div>
          </StyledContent>
        )}
      </div>
    </>
  );
};