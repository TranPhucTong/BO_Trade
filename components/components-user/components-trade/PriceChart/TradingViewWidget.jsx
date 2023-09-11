// TradingViewWidget.jsx

import { useTheme } from "next-themes";
import React, { useEffect, useRef } from "react";

let tvScriptLoadingPromise;

export default function TradingViewWidget() {
  const onLoadScriptRef = useRef();
  const { theme } = useTheme();

  useEffect(() => {
    onLoadScriptRef.current = createWidget;

    if (!tvScriptLoadingPromise) {
      tvScriptLoadingPromise = new Promise((resolve) => {
        const script = document.createElement("script");
        script.id = "tradingview-widget-loading-script";
        script.src = "https://s3.tradingview.com/tv.js";
        script.type = "text/javascript";
        script.onload = resolve;

        document.head.appendChild(script);
      });
    }

    tvScriptLoadingPromise.then(
      () => onLoadScriptRef.current && onLoadScriptRef.current()
    );

    return () => (onLoadScriptRef.current = null);

    function createWidget() {
      if (
        document.getElementById("tradingview_91b98") &&
        "TradingView" in window
      ) {
        new window.TradingView.widget({
          autosize: false,
          width: 1210.2,
          height: 340,
          symbol: "NASDAQ:AAPL",
          interval: "D",
          timezone: "Etc/UTC",
          theme: theme === "dark" ? "dark" : "light",
          backgroundColor: theme === "dark" ? "#000" : "",
          range: "YTD",
          hide_top_toolbar: true,
          style: "1",
          locale: "en",
          enable_publishing: false,
          allow_symbol_change: true,
          container_id: "tradingview_91b98",
        });
      }
    }
  }, []);

  return (
    <div className="tradingview-widget-container">
      <div id="tradingview_91b98" />
      {/* <div className="tradingview-widget-copyright">
        <a
          href="https://www.tradingview.com/"
          rel="noopener nofollow"
          target="_blank"
        >
          <span className="blue-text">Track all markets on TradingView</span>
        </a>
      </div> */}
    </div>
  );
}
