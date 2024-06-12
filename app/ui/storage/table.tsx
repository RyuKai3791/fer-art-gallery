// table.tsx
import { GetStaticProps, GetStaticPaths } from 'next';
import Image from 'next/image';
import Pagination from './pagination';
import { getImages } from '@/app/lib/getImages';

const IMAGES_PER_PAGE = 4;

interface TableProps {
  images: string[];
  totalPages: number;
  currentPage: number;
}

const Table: React.FC<TableProps> = ({ images, totalPages, currentPage }) => {
  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-2 gap-4">
        {images.map((image, index) => (
          <div key={index} className="relative w-full h-64">
            <Image
              src={`/images/all/${image}`}
              alt={`Image ${index + 1}`}
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={(page) => {
          // Redirect to the new page
          window.location.href = `/table?page=${page}`;
        }}
      />
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const images = getImages();
  const totalPages = Math.ceil(images.length / IMAGES_PER_PAGE);
  const paths = Array.from({ length: totalPages }, (_, i) => ({
    params: { page: (i + 1).toString() },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const page = parseInt(context.params?.page as string) || 1;
  const images = getImages();
  const totalPages = Math.ceil(images.length / IMAGES_PER_PAGE);
  const startIndex = (page - 1) * IMAGES_PER_PAGE;
  const currentImages = images.slice(startIndex, startIndex + IMAGES_PER_PAGE);

  return {
    props: {
      images: currentImages,
      totalPages,
      currentPage: page,
    },
  };
};

export default Table;
