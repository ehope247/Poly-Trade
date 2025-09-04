import React, { useEffect, useRef } from 'react';
import styles from './TradingNews.module.css';

const TradingNews = () => {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // This script creates the TradingView Market Overview widget
    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-market-overview.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = `
      {
        "colorTheme": "dark",
        "dateRange": "12M",
        "showChart": true,
        "locale": "en",
        "largeChartUrl": "",
        "isTransparent": true,
        "showSymbolLogo": true,
        "showFloatingTooltip": false,
        "width": "100%",
        "height": "100%",
        "plotLineColorGrowing": "rgba(41, 98, 255, 1)",
        "plotLineColorFalling": "rgba(255, 74, 104, 1)",
        "gridLineColor": "rgba(240, 243, 250, 0)",
        "scaleFontColor": "rgba(120, 123, 134, 1)",
        "belowLineFillColorGrowing": "rgba(41, 98, 255, 0.12)",
        "belowLineFillColorFalling": "rgba(255, 74, 104, 0.12)",
        "belowLineFillColorGrowingBottom": "rgba(41, 98, 255, 0)",
        "belowLineFillColorFallingBottom": "rgba(255, 74, 104, 0)",
        "symbolActiveColor": "rgba(41, 98, 255, 0.12)",
        "tabs": [
          {
            "title": "Indices",
            "symbols": [
              { "s": "FOREXCOM:SPXUSD", "d": "S&P 500" },
              { "s": "FOREXCOM:NSXUSD", "d": "US 100" },
              { "s": "FOREXCOM:DJI", "d": "Dow 30" }
            ],
            "originalTitle": "Indices"
          },
          {
            "title": "Commodities",
            "symbols": [
              { "s": "CME_MINI:ES1!", "d": "S&P 500" },
              { "s": "CME:6E1!", "d": "Euro" },
              { "s": "COMEX:GC1!", "d": "Gold" }
            ],
            "originalTitle": "Commodities"
          },
          {
            "title": "Bonds",
            "symbols": [
              { "s": "CME:GE1!", "d": "Eurodollar" },
              { "s": "CBOT:ZB1!", "d": "T-Bond" },
              { "s": "CBOT:UB1!", "d": "Ultra T-Bond" }
            ],
            "originalTitle": "Bonds"
          },
          {
            "title": "Forex",
            "symbols": [
              { "s": "FX:EURUSD", "d": "EUR/USD" },
              { "s": "FX:GBPUSD", "d": "GBP/USD" },
              { "s": "FX:USDJPY", "d": "USD/JPY" }
            ],
            "originalTitle": "Forex"
          }
        ]
      }`;

    if (container.current) {
      container.current.appendChild(script);
    }

    return () => {
      if (container.current && container.current.contains(script)) {
        container.current.removeChild(script);
      }
    };
  }, []);

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Live Market News & Overview</h2>
      <p className={styles.subtitle}>
        Stay ahead of the curve with real-time data and the latest financial news from across the globe.
      </p>
      <div className={styles.widgetContainer}>
        <div className={styles.tradingview_widget_container} ref={container}>
          {/* The widget will be injected here */}
        </div>
      </div>
    </section>
  );
};

export default TradingNews;