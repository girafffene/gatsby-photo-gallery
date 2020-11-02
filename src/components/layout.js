//imported dependencies
import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
//imported styles
import { Grid } from "semantic-ui-react"
import { Menu } from "semantic-ui-react"
import "../styles/layout.scss"
//imported components
import SideMenu from "../components/SideMenu"

const Layout = ({ children }) => {
  return (
    <section className="app">
      {/* Top Menu */}
      <Menu fixed="top" inverted>
        <Menu.Item as={Link} to="/" header>IPerez</Menu.Item>
        <Menu.Menu position="right">
          <Menu.Item style={{color: "grey"}}>© {new Date().getFullYear()}</Menu.Item>
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
    </section>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout