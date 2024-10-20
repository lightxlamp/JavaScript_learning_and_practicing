if (process.client) {
    const script = document.createElement('script');
    script.src = '/newrelic.js';
    script.async = false; // или defer = false
    document.head.appendChild(script);
  }