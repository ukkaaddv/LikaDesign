"use client";

import { type MouseEvent, type ReactNode, useCallback } from "react";

type FacebookLinkProps = {
  appUrl: string;
  webUrl: string;
  className?: string;
  children: ReactNode;
};

export function FacebookLink({
  appUrl,
  webUrl,
  className,
  children,
}: FacebookLinkProps) {
  const handleClick = useCallback(
    (event: MouseEvent<HTMLAnchorElement>) => {
      event.preventDefault();

      const timeout = window.setTimeout(() => {
        window.open(webUrl, "_blank", "noopener,noreferrer");
      }, 800);

      const clearFallback = () => {
        clearTimeout(timeout);
        document.removeEventListener("visibilitychange", clearFallback);
      };

      document.addEventListener("visibilitychange", clearFallback);

      window.location.href = appUrl;

      window.setTimeout(() => {
        document.removeEventListener("visibilitychange", clearFallback);
      }, 2000);
    },
    [appUrl, webUrl],
  );

  return (
    <a
      href={webUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      onClick={handleClick}
    >
      {children}
    </a>
  );
}
