import React from "react"
import { Link } from "gatsby"
import { Menu } from "semantic-ui-react"
import styled from "styled-components"

const SideMenu = () => {
  return (
    <Wrapper>
    <Menu pointing secondary vertical>
      <Menu.Item name="Favorites" as={Link} to="/" activeClassName="active" />
      <Menu.Item name="Animals" as={Link} to="/animals" activeClassName="active" />
      <Menu.Item name="Astronomy" as={Link} to="/astronomy" activeClassName="active" />
      <Menu.Item name="Flowers" as={Link} to="/flowers" activeClassName="active" />
    </Menu>
    </Wrapper>

  )
}

const Wrapper = styled.section`
  .ui.secondary.vertical.pointing.menu .active.item {
    border-color: palevioletred;
    color: maroon;
  }

  @media (max-width: 678px) {
    .ui.vertical.menu {
      width: 6rem;
    }
    .item {
      font-size: 12px;
    }
  }
`

export default SideMenu