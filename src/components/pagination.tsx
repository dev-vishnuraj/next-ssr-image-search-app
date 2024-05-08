import "../styles/pagination.css";

const Pagination = ({
  prefixString,
  searchQuery,
  totalCount
}: {
  prefixString: string;
  searchQuery: string;
  totalCount: number;
}) => {
  return (
    <div className="pagination">
      <div className="pagination-left">
        <p>
          {prefixString} {searchQuery} Stock photos and Images ({totalCount})
        </p>
      </div>
      <div className="pagination-right">
        <div>page 1 of 500</div>
        <div>Go to page</div>
      </div>
    </div>
  );
};

export default Pagination;
