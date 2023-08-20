import { useEffect, useRef, useState } from 'react';

type ImageProps = {
  src: string;
  lazy?: boolean;
  threshold?: number;
  placeholder?: string;
  width?: number | string;
  height?: number | string;
  alt?: string;
  mode?: string;
  block?: boolean;
  [key: string]: any;
};

let observer: IntersectionObserver | null = null;
const LOAD_IMG_EVENT_TYPE = 'loadImage';

const onIntersection = (
  entries: IntersectionObserverEntry[],
  io: IntersectionObserver
) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      io.unobserve(entry.target);
      entry.target.dispatchEvent(new CustomEvent(LOAD_IMG_EVENT_TYPE));
    }
  });
};

const Image = ({
  lazy,
  threshold = 0.5,
  placeholder,
  src,
  width = 200,
  height = 200,
  alt,
  mode,
  block,
  ...props
}: ImageProps) => {
  const [loaded, setLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  const imageStyle = {
    display: block ? 'block' : undefined,
    width,
    height,
    objectFit: mode,
  };

  useEffect(() => {
    if (!lazy) {
      setLoaded(true);
      return;
    }

    const handleLoadImage = () => setLoaded(true);

    imgRef.current?.addEventListener(LOAD_IMG_EVENT_TYPE, handleLoadImage);

    return () => {
      imgRef.current &&
        imgRef.current.removeEventListener(
          LOAD_IMG_EVENT_TYPE,
          handleLoadImage
        );
    };
  }, [lazy]);

  useEffect(() => {
    if (!lazy) return;

    if (!observer) {
      observer = new IntersectionObserver(onIntersection, { threshold });
    }
    imgRef.current && observer?.observe(imgRef.current);
  }, [lazy, threshold]);

  return (
    <img
      ref={imgRef}
      src={loaded ? src : placeholder}
      alt={alt}
      style={{ ...props.style, ...imageStyle }}
    />
  );
};

export default Image;
