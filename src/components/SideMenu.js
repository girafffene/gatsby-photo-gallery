import React from "react"
import { Link } from "gatsby"
import { Menu } from "semantic-ui-react"

const SideMenu = () => {
  return (
    <Menu pointing secondary vertical>
      <Menu.Item name="Overview" as={Link} to="/" activeClassName="active" />
      <Menu.Item name="Animals" as={Link} to="/animals" activeClassName="active" />
      <Menu.Item name="Astronomy" as={Link} to="/astronomy" activeClassName="active" />
      <Menu.Item name="Flowers" as={Link} to="/flowers" activeClassName="active" />
    </Menu>
  )
}

export default SideMenu