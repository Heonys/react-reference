import React, { useEffect, useRef, useState } from "react";

interface Props {
  id: string;
  width: string;
  height: string;
  src: string;
  alt: string;
}

const LazyImage = ({ id, ...rest }: Props) => {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    let observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
          }
        });
      },
      { rootMargin: "0px 0px 50% 0px" }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return visible ? (
    <img {...rest} alt={rest.alt} />
  ) : (
    <img id={id} ref={ref} style={{ width: "1000px", height: "1000px" }} alt="" />
  );
};

export default LazyImage;
