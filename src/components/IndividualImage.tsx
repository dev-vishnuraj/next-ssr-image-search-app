interface IndividualImageProps {
  id: number;
  url: string;
}

const IndividualImage = ({ id, url }: IndividualImageProps) => {
  return (
    <div>
      <h2>Id: {id}</h2>
      <p>URL: {url}</p>
    </div>
  );
};

export default IndividualImage;
