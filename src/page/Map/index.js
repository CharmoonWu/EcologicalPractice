import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { Geocode, District, Id, Place } from 'network/server/amapServer';

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

  useQuery({
    queryKey: ['place'],
    queryFn: () =>
      Place({
        params: {
          keywords: '烤鸭',
          types: '050103', //广东菜(粤菜)
          city: '北京',
          children: 1,
          offset: 20,
          page: 1,
          extensions: 'all',
        },
      }),
  });

  return <div>index</div>;
}
