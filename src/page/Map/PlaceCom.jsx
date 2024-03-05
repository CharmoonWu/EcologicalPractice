// import { useState } from 'react';
// import { useQuery } from '@tanstack/react-query';
// import { Place } from 'network/server/amapServer';
// import { map } from 'ramda';
// import { useTheme } from '@mui/material/styles';
// import {
//   Box,
//   OutlinedInput,
//   InputLabel,
//   MenuItem,
//   FormControl,
//   Select,
//   Chip,
// } from '@mui/material';

// export default function PlaceCom() {

//     const { data: placeData } = useQuery({
//         queryKey: ['place'],
//         queryFn: () =>
//           Place({
//             params: {
//               keywords: '熊猫',
//               types: '110102', // 风景名胜	公园广场	动物园
//               city: '北京',
//               children: 1,
//               offset: 20,
//               page: 1,
//               extensions: 'all',
//             },
//           }),
//         select: (data) => {
//           return map(
//             (i) => ({
//               id: i.id,
//               name: i.name,
//               adcode: i.adcode,
//               adname: i.adname,
//               type: i.type,
//               typecode: i.typecode,
//               address: i.address,
//               children: i.children,
//               photos: i.photos,
//               tel: i.tel,
//               tag: i.tag,
//               location: i.location,
//             }),
//             data?.pois,
//           );
//         },
//       });

//   return (
//     <div>PlaceCom</div>
//   )
// }

import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import { useQuery } from '@tanstack/react-query';
import { Place } from 'network/server/amapServer';
import { map } from 'ramda';
import {
  Box,
  OutlinedInput,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Chip,
} from '@mui/material';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const getStyles = (name, personName, theme) => {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
};

export default function MultipleSelectChip() {
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;

    setPersonName(typeof value === 'string' ? value.split(',') : value);
  };

  const { data: placeData } = useQuery({
    queryKey: ['place'],
    queryFn: () =>
      Place({
        params: {
          keywords: '熊猫',
          types: '110102', // 风景名胜	公园广场	动物园
          city: '北京',
          children: 1,
          offset: 20,
          page: 1,
          extensions: 'all',
        },
      }),
    select: (data) => {
      return map(
        (i) => ({
          id: i.id,
          name: i.name,
          adcode: i.adcode,
          adname: i.adname,
          type: i.type,
          typecode: i.typecode,
          address: i.address,
          children: i.children,
          photos: i.photos,
          tel: i.tel,
          tag: i.tag,
          location: i.location,
        }),
        data?.pois,
      );
    },
  });

  console.log(placeData);

  return (
    <div>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="chip-label">Chip</InputLabel>
        <Select
          labelId="chip-label"
          id="demo-multiple-chip"
          multiple
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
          renderValue={(selected) => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {selected?.map((name, i) => {
                return <Chip key={i} label={name} />;
              })}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {placeData?.map(({ name, id }) => (
            <MenuItem
              key={id}
              value={name}
              style={getStyles(name, personName, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
