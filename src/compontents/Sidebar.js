import React from "react";
import { Menu } from "evergreen-ui";
import tw from "twin.macro";

const { Group, Item } = Menu;
const Wrap = tw.div`w-[300px] h-full`;

export default function Sidebar() {
  return (
    <Wrap>
      <Menu>
        <Group title="菜单导航">
          {/* 用户首页 */}
          <Item>user</Item>
          {/* 设置 */}
          <Item>setting</Item>
        </Group>
      </Menu>
    </Wrap>
  );
}
