//imported dependencies
import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import styled from "styled-components"
//imported styles
import { Grid } from "semantic-ui-react"
import { Menu } from "semantic-ui-react"
import "../styles/layout.scss"
//imported components
import SideMenu from "../components/SideMenu"
//imported svg
import waves from "../styles/wave.svg"

const Layout = ({ children }) => {
  return (
    <Wrapper className="app">
      {/* Top Menu */}
      <Menu fixed="top" inverted style={{backgroundColor: "palevioletred", height: "3.5rem"}}>
        <Menu.Item as={Link} to="/" header>IPerez</Menu.Item>
        <Menu.Menu position="right">
          <Menu.Item style={{color: "maroon"}}>© {new Date().getFullYear()}</Menu.Item>
        </Menu.Menu>
      </Menu>
      {/* End of Top Menu */}
      <Grid style={{marginTop: "1em"}}>
        <Grid.Column width={4}>
          <SideMenu />
        </Grid.Column>

        <Grid.Column width={12}>
          <main>{children}</main>{/* Main Content */}
        </Grid.Column>
      </Grid>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  background-image: url(${waves});
  background-repeat: no-repeat;
  background-position: bottom;
  background-size: contain;
`

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout