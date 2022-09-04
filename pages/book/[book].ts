import { GetStaticPaths } from 'next';
import { useRouter } from 'next/router';

const Book = () => {
  const router = useRouter();
  const { book } = router.query;
  
  return { book };
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      {
        params: { book: 'A_Dragons_Revolt' },
      },
      {
        params: { book: 'Masks'},
      },
  ],
    fallback: 'blocking',
  }
}

export default Book;
