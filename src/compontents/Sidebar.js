import { useState, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { MenuList, MenuItem, ListItemText } from '@mui/material';
import { usePurviewSet } from 'zustandStore';
import { path } from './path';

export default function Sidebar() {
  const navigate = useNavigate();
  const [selected, setSelected] = useState('');

  const isEntrance = usePurviewSet((state) => state.isEntrance);

  const pathList = useMemo(() => {
    return path.map((item) => {
      if (item.name === 'user') return item;
      return { ...item, state: !isEntrance };
    });
  }, [isEntrance]);

  const goNavigate = (item, i) => {
    setSelected(i);
    navigate(item.path);
  };

  useEffect(() => {
    setSelected(0);
    navigate('/user');
    // eslint-disable-next-line
  }, []);

  return (
    <MenuList className="w-[300px] h-screen overflow-y-auto">
      {pathList.map((item, i) => (
        <MenuItem
          key={i}
          onClick={() => goNavigate(item, i)}
          selected={selected === i}
          disabled={item.state}
        >
          <ListItemText>{item.name}</ListItemText>
        </MenuItem>
      ))}
    </MenuList>
  );
}
