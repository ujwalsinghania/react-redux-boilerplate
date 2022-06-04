import { useState, useEffect } from "react";
import clsx from "clsx";

interface LazyImageProps {
  src: string;
  className?: string;
  containerClassName?: string;
  alt?: string;
  width?: string;
  height?: string;
  onClick?: any;
}

const LazyImage = ({
  className,
  containerClassName,
  src,
  onClick,
  alt,
  width,
  height,
}: LazyImageProps) => {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (src) {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        setLoaded(true);
      };
      img.onerror = () => {
        setError(true);
      };
    }
  }, [src]);

  return (
    <div className={clsx(containerClassName)}>
      {!loaded && !error && <i className="fas fa-spinner fa-spin"></i>}
      {loaded && error && (
        <span className="text-muted">
          <i className="fas fa-circle-exclamation mr-2"></i>
          Failed to load image
        </span>
      )}
      {loaded && !error && (
        <img
          loading="lazy"
          onClick={onClick}
          src={src}
          width={width}
          height={height}
          alt={alt}
          className={clsx("source", loaded && "loaded", className)}
        />
      )}
    </div>
  );
};
export default LazyImage;
