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

  return (
    <div className="h-full overflow-y-auto space-y-3 p-3 divide-y divide-slate-200">
      {data.results.map((item) => (
        <div className="flex flex-col pt-3">
          <span className="w-[70%] line-clamp-2">{item?.content}</span>
          <span className="self-end text-gray-500">{item?.author}</span>
        </div>
      ))}
    </div>
  );
}
