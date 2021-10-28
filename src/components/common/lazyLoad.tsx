import React, { useState, useEffect, useRef, MutableRefObject } from "react";
import clsx from "clsx";

interface LazyImageProps {
  src: string;
  className?: string;
  containerClassName?: string;
  alt?: string;
  onClick?: any;
  showDelete?: boolean;
  onDelete?: (evt: React.MouseEvent, ...args: any) => void;
}

const LazyImage = ({
  className,
  containerClassName,
  src,
  onClick,
  alt,
  showDelete,
  onDelete,
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
      {!loaded && !error && <i className="fa fa-spinner fa-spin"></i>}
      {loaded && error && (
        <span className="text-muted">
          <i className="fa fa-exclamation-circle mr-2" aria-hidden="true"></i>
          Failed to load image
        </span>
      )}
      {loaded && !error && (
        <img
          loading="lazy"
          onClick={onClick}
          src={src}
          alt={alt}
          className={clsx("source", loaded && "loaded", className)}
        />
      )}
      {showDelete && (
        <a
          href="#"
          className="btn btn-default img-cross"
          onClick={(e) => onDelete && onDelete(e)}
        >
          <i className="icon-1x ki ki-bold-close p-0"></i>{" "}
        </a>
      )}
    </div>
  );
};
export default LazyImage;
