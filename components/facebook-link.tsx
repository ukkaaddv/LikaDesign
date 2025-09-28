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

      const userAgent = window.navigator.userAgent || "";
      const isMobile = /iPhone|iPad|iPod|Android/i.test(userAgent);

      if (!isMobile) {
        window.open(webUrl, "_blank", "noopener,noreferrer");
        return;
      }

      const timeout = window.setTimeout(() => {
        window.location.href = webUrl;
      }, 800);

      const clearFallback = () => {
        window.clearTimeout(timeout);
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
