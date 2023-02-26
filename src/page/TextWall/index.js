import tw from 'twin.macro';
import { FormGroup, FormControlLabel, Checkbox, Button } from '@mui/material';
import { useState } from 'react';
import { all, equals, filter, forEach, map } from 'ramda';
import { useEffect } from 'react';
import { useMemo } from 'react';

const Wrap = tw.div``;

export default function Main() {
  const [valList, setValList] = useState([
    { label: 'all', value: false },
    { label: 'first', value: false },
    { label: 'second', value: false },
    { label: 'third', value: false },
    { label: 'four', value: false },
  ]);

  const handleChange = (item, e) => {
    if (item.label === 'all') {
      setValList((currnetValList) =>
        map(
          (currnetObj) => ({
            label: currnetObj.label,
            value: e.target.checked,
          }),
          currnetValList,
        ),
      );
    } else {
      setValList((currnetValList) => {
        return map(
          (currnetObj) => ({
            label: currnetObj.label,
            value:
              currnetObj.label === item.label
                ? e.target.checked
                : currnetObj.value,
          }),
          currnetValList,
        );
      });
    }
  };

  const allV = useMemo(
    () =>
      all(equals(true))(
        map(
          (obj) => obj.value,
          filter((item) => item.label !== 'all', valList),
        ),
      ),
    [valList],
  );

  useEffect(() => {
    if (allV) {
      setValList((currnetValList) => {
        return map(
          (currnetObj) => ({
            label: currnetObj.label,
            value: currnetObj.label === 'all' ? true : currnetObj.value,
          }),
          currnetValList,
        );
      });
    } else {
      setValList((currnetValList) => {
        return map(
          (currnetObj) => ({
            label: currnetObj.label,
            value: currnetObj.label === 'all' ? false : currnetObj.value,
          }),
          currnetValList,
        );
      });
    }
  }, [allV]);

  return (
    <Wrap>
      <FormGroup className="flex items-center justify-center">
        {valList?.map((item, i) => (
          <FormControlLabel
            control={
              <Checkbox
                onChange={(e) => handleChange(item, e)}
                checked={item.value}
              />
            }
            label={item.label}
            key={i}
          />
        ))}
      </FormGroup>
    </Wrap>
  );
}
