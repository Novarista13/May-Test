import { Table } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem
} from "@/components/ui/pagination";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface DataTablePaginationProps<TData> {
  table: Table<TData>;
}

export function DataTablePagination<TData>({
  table,
}: DataTablePaginationProps<TData>) {
  return (
    <div className="flex items-center justify-between px-2">
      <div className="flex items-center space-x-6 justify-between lg:space-x-8 w-full">
        <div className="flex items-center space-x-2">
          <p className="text-sm font-medium">Show</p>
          <Select
            value={`${table.getState().pagination.pageSize}`}
            onValueChange={(value) => {
              table.setPageSize(Number(value));
            }}
          >
            <SelectTrigger className="h-8 w-[70px]">
              <SelectValue placeholder={table.getState().pagination.pageSize} />
            </SelectTrigger>
            <SelectContent side="top">
              {[10, 20, 30, 40, 50].map((pageSize) => (
                <SelectItem key={pageSize} value={`${pageSize}`}>
                  {pageSize}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>{" "}
          <p className="text-sm font-medium">Row</p>
        </div>
        <div className="flex items-center space-x-2">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <Button
                  variant="outline"
                  className="h-8 w-8 p-0"
                  onClick={() => table.previousPage()}
                  disabled={!table.getCanPreviousPage()}
                >
                  <span className="sr-only">Go to previous page</span>
                  <ChevronLeft className="h-4 w-4" />
                </Button>
              </PaginationItem>
              <PaginationItem >
                <Button
                  variant="outline"
                  className={`hidden h-8 w-8 p-0 lg:flex ${
                    table.getState().pagination.pageIndex === 0
                      ? "bg-black text-white"
                      : ""
                  }`}
                  onClick={() => table.setPageIndex(0)}
                  disabled={!table.getCanPreviousPage()}
                >
                  1<span className="sr-only">Go to first page</span>
                </Button>
              </PaginationItem>

              {table.getPageCount() > 2 && (
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
              )}

              <PaginationItem>
                <Button
                  variant="outline"
                  className={`hidden h-8 w-8 p-0 lg:flex ${
                    table.getState().pagination.pageIndex ===
                    table.getPageCount() - 1
                      ? "bg-black text-white"
                      : ""
                  }`}
                  onClick={() => table.setPageIndex(table.getPageCount() - 1)}
                  disabled={!table.getCanNextPage()}
                >
                  {table.getPageCount()}
                  <span className="sr-only">Go to last page</span>
                </Button>
              </PaginationItem>

              <PaginationItem>
                <Button
                  variant="outline"
                  className="h-8 w-8 p-0"
                  onClick={() => table.nextPage()}
                  disabled={!table.getCanNextPage()}
                >
                  <span className="sr-only">Go to next page</span>
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
        <div className="flex w-[100px] items-center justify-center text-sm font-medium">
          Page {table.getState().pagination.pageIndex + 1} of{" "}
          {table.getPageCount()}
        </div>
      </div>
    </div>
  );
}
