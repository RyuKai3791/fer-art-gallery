import { Suspense } from 'react';
import { lusitana } from '../../ui/utils/fonts';
// import CreateProduct from '@/app/ui/shop/buttons';
// import Pagination from '@/app/ui/shop/pagination';
// import Search from '@/app/ui/search';
// import Table from '@/app/ui/shop/table';
// import { ProductsTableSkeleton } from '@/app/ui/skeletons';
// import { fetchProductsPages } from '@/app/lib/data';

export default async function Page(){
    return (
        <div className="w-full">
            {/* <div className="flex w-full items-center justify-between">
                <h1 className={`${lusitana.className} text-2xl bg-sky-200 bg-opacity-95 p-2 rounded-xl`}>Shop</h1>
            </div>
            <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
                <Search placeholder="Search products" />
                <CreateProduct />
            </div>
            <Suspense key={query + currentPage} fallback={<ProductsTableSkeleton />}>
                <Table query={query} currentPage={currentPage} />
            </Suspense>
            <div className="mt-5 flex w-full justify-center">
                <Pagination totalPages={totalPages} />
            </div> */}
            <p><strong>Under development!</strong></p>
        </div>
    );
}