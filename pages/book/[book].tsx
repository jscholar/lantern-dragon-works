import React from 'react';
import { GetStaticPaths } from 'next';
import { useRouter } from 'next/router';

const Book: React.FunctionComponent = () => {
  const router = useRouter();
  const { book } = router.query;

  return <h1>{book}</h1>;
};

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: [
    {
      params: { book: 'A_Dragons_Revolt' },
    },
    {
      params: { book: 'Masks' },
    },
  ],
  fallback: 'blocking',
});

export default Book;
