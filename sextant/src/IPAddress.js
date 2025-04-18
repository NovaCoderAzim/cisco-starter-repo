import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

function IPAddress({ version }) {
  const [ip, setIP] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    const endpoint =
      version === 'v6'
        ? 'https://api64.ipify.org?format=json'
        : 'https://api.ipify.org?format=json';

    fetch(endpoint, { signal: controller.signal })
      .then(res => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then(data => setIP(data.ip))
      .catch(() => setError('Failed to fetch IP address'));

    return () => controller.abort();
  }, [version]);

  return (
    <div className="ip-card">
      <h3>Your Public IPv{version === 'v6' ? '6' : '4'} Address:</h3>
      <p>{error ? error : ip || 'Loading...'}</p>
    </div>
  );
}

IPAddress.propTypes = {
  version: PropTypes.oneOf(['v4', 'v6']),
};
IPAddress.defaultProps = {
  version: 'v4',
};

export default IPAddress;
