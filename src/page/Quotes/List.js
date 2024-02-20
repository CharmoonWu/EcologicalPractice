import React from 'react';
import { QuotesList } from 'network/server/quotableServer';
import { useQuery } from '@tanstack/react-query';
import Loading from 'compontents/Loading';

export default function List() {
  const { data, isLoading } = useQuery({
    queryKey: ['QuotesList'],
    queryFn: () =>
      QuotesList({
        params: {},
      }),
  });

  if (isLoading) {
    return <Loading />;
  }

  return <div>List</div>;
}
