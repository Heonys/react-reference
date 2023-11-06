import LazyImage from "../components/LazyImage";

const images = [
  {
    id: "1",
    url: "https://picsum.photos/id/231/1500/2000",
  },
  {
    id: "2",
    url: "https://picsum.photos/id/232/1500/2000",
  },
  {
    id: "3",
    url: "https://picsum.photos/id/233/1500/2000",
  },
  {
    id: "4",
    url: "https://picsum.photos/id/234/1500/2000",
  },
  {
    id: "5",
    url: "https://picsum.photos/id/235/1500/2000",
  },
  {
    id: "6",
    url: "https://picsum.photos/id/236/1500/2000",
  },
  {
    id: "7",
    url: "https://picsum.photos/id/237/1500/2000",
  },
  {
    id: "8",
    url: "https://picsum.photos/id/238/1500/2000",
  },
  {
    id: "9",
    url: "https://picsum.photos/id/239/1500/2000",
  },
  {
    id: "10",
    url: "https://picsum.photos/id/240/1500/2000",
  },
];

const LazyImagePage = () => {
  return (
    <div>
      {images.map(({ id, url }) => {
        return (
          <LazyImage id={id} key={id} src={url} alt="picsumImage" width="800px" height="1000px" />
        );
      })}
    </div>
  );
};

export default LazyImagePage;
