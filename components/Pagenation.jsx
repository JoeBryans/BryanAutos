"use client";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export function Paginate({ data, urlParams }) {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(data?.currentPage);
  const page = urlParams.page;
  const totalCars = data?.totalCars;
  const totalPages = data?.totalPages;

  const handlePageChange = (newPage) => {
    const params = new URLSearchParams(page);
    console.log("params", params);

    params.set("page", newPage.toString());
    router.push(`?${params.toString()}`);
  };
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            onClick={() => handlePageChange(currentPage - 1)}
          />
        </PaginationItem>
        <PaginationItem>
          <div>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                style={{
                  fontWeight: currentPage === page ? "bold" : "normal",
                  margin: "0 5px",
                }}
              >
                {page}
              </button>
            ))}
          </div>
        </PaginationItem>
        <PaginationItem>
          <PaginationNext onClick={() => handlePageChange(currentPage + 1)} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
