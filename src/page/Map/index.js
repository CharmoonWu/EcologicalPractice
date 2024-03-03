import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { Geocode, District, Id } from 'network/server/amapServer';

export default function Main() {
  const { data, isLoading } = useQuery({
    queryKey: ['Geocode'],
    queryFn: () =>
      Geocode({
        params: {
          address: '广东省中山市小榄镇北区庆年四街1号',
        },
      }),
  });

  const { districtData, districtIsLoading } = useQuery({
    queryKey: ['District'],
    queryFn: () =>
      District({
        params: {
          keywords: '440000', //
          subdistrict: 2,
        },
      }),
  });

  useQuery({
    queryKey: ['id'],
    queryFn: () =>
      Id({
        params: {
          id: '192.168.1.22', //
        },
      }),
  });

  return <div>index</div>;
}
