import React, { useEffect, useRef } from 'react';
import styles from './TradingChart.module.css';

// This is a small helper component for a single chart
const ChartWidget = ({ symbol }) => {
  const container = useRef();

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = `
      {
        "width": "100%",
        "height": "100%",
        "symbol": "${symbol}",
        "interval": "D",
        "timezone": "Etc/UTC",
        "theme": "dark",
        "style": "1",
        "locale": "en",
        "enable_publishing": false,
        "allow_symbol_change": true,
        "container_id": "tradingview_${symbol.replace(':', '_')}"
      }`;

    // Check if the ref is available before appending
    if (container.current) {
        container.current.appendChild(script);
    }

    // Cleanup function to remove the script when the component unmounts
    return () => {
      if (container.current && container.current.contains(script)) {
        container.current.removeChild(script);
      }
    };
  }, [symbol]); // Re-run the effect if the symbol changes

  return (
    <div className={styles.tradingview_widget_container} ref={container}>
      <div id={`tradingview_${symbol.replace(':', '_')}`}></div>
    </div>
  );
};


// This is the main component for the whole section
const TradingChart = () => {
  return (
    <section className={styles.section}>
        <h2 className={styles.title}>Live Market Analysis</h2>
        <p className={styles.subtitle}>
            Explore real-time data from global markets. Our integrated charts provide the insights you need to stay ahead.
        </p>
        <div className={styles.chartsGrid}>
            <div className={styles.chartContainer}>
                <ChartWidget symbol="BITSTAMP:BTCUSD" />
            </div>
            <div className={styles.chartContainer}>
                <ChartWidget symbol="NASDAQ:NVDA" />
            </div>
        </div>
    </section>
  );
};

export default TradingChart;