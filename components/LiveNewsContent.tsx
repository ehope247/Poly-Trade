import React, { useEffect, useRef } from 'react';
import styles from './LiveNewsContent.module.css';

const LiveNewsContent = () => {
  const widgetContainerRef = useRef<HTMLDivElement>(null);

  // This hook reliably loads the TradingView widget
  useEffect(() => {
    const timer = setTimeout(() => {
      if (widgetContainerRef.current && widgetContainerRef.current.children.length === 0) {
        const script = document.createElement("script");
        script.src = "https://s3.tradingview.com/external-embedding/embed-widget-market-overview.js";
        script.type = "text/javascript";
        script.async = true;
        script.innerHTML = `
          {
            "colorTheme": "dark", "dateRange": "12M", "showChart": true,
            "locale": "en", "isTransparent": true, "showSymbolLogo": true,
            "width": "100%", "height": "100%",
            "tabs": [
              { "title": "Indices", "symbols": [{"s": "FOREXCOM:SPXUSD", "d": "S&P 500"}, {"s": "FOREXCOM:NSXUSD", "d": "US 100"}], "originalTitle": "Indices" },
              { "title": "Commodities", "symbols": [{"s": "COMEX:GC1!", "d": "Gold"}, {"s": "NYMEX:CL1!", "d": "Crude Oil"}], "originalTitle": "Commodities" },
              { "title": "Forex", "symbols": [{"s": "FX:EURUSD", "d": "EUR/USD"}, {"s": "FX:GBPUSD", "d": "GBP/USD"}], "originalTitle": "Forex" }
            ]
          }`;
        widgetContainerRef.current.appendChild(script);
      }
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Live Market Overview</h1>
      <p className={styles.subtitle}>
        Real-time data and the latest financial news from across the globe.
      </p>
      <div className={styles.widgetContainer}>
        <div className={styles.tradingview_widget_container} ref={widgetContainerRef}>
          {/* The widget will be injected here */}
        </div>
      </div>
    </div>
  );
};

export default LiveNewsContent;