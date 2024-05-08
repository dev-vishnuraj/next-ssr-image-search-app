import IndividualImage from "@/components/IndividualImage";
import Navbar from "@/components/navbar";
import Searchbar from "@/components/searchbar";
import { useEffect, useState } from "react";
import "../styles/images.css";
import Pagination from "@/components/pagination";
import Footer from "@/components/footer";

interface ImageAttributes {
  original: string;
  large2x: string;
  large: string;
  medium: string;
  small: string;
  portrait: string;
  landscape: string;
  tiny: string;
}

interface ImageObject {
  id: number;
  width: number;
  height: number;
  url: string;
  photographer: string;
  photographer_url: string;
  photographer_id: number;
  avg_color: string;
  src: ImageAttributes;
  liked: boolean;
  alt: string;
}

interface ImageResponseInterface {
  page: number;
  per_page: number;
  photos: ImageObject[];
  total_results: number;
  next_page: string;
}

export default function ImagesList({ data }: { data: ImageResponseInterface }) {
  const [searchQuery, setSearchQuery] = useState("Cars");
  const [totalCount, setTotalCount] = useState(0);

  useEffect(() => {
    setTotalCount(data.total_results);
  }, [data.total_results]);

  return (
    <>
      <Navbar />
      <Searchbar />
      <Pagination
        prefixString=""
        searchQuery={searchQuery}
        totalCount={totalCount}
      />
      <div>
        <div>
          {data?.photos?.length ? (
            data.photos.map((eachImage) => {
              return (
                <IndividualImage
                  key={eachImage.id}
                  id={eachImage.id}
                  url={eachImage.url}
                />
              );
            })
          ) : (
            <p>No data found!</p>
          )}
        </div>
        <div>Next</div>
      </div>
      <div>
        <Pagination
          prefixString="Search Results for "
          searchQuery={searchQuery}
          totalCount={totalCount}
        />
      </div>
      <Footer />
    </>
  );
}

export async function getServerSideProps() {
  const response = await fetch(
    `https://simple-pexels-proxy.onrender.com/search?query=car&per_page=5&page=1`
  );
  const data = await response.json();
  return {
    props: {
      data
    }
  };
}
