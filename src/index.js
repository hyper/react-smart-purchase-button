import React from 'react';
import PropTypes from 'prop-types';
import useAPI from './swr';

export default function PurchaseButton({ portalUrl, inStockText, outOfStockText, className }) {
  const [apiUrl, setApiUrl] = React.useState(null);
  const { data, loading, error } = useAPI(apiUrl);

  React.useEffect(() => {
    setApiUrl(`https://${portalUrl}/api/release${window.location.search}`);
  }, [window]);

  function handleOpen() {
    if (data?.link) window?.location.replace(data.link);
  }

  return (
    <button type="button" onClick={handleOpen} className={className}>
      {(loading || error) && outOfStockText}
      {data && inStockText}
    </button>
  );
}

PurchaseButton.propTypes = {
  portalUrl: PropTypes.string.isRequired,
  inStockText: PropTypes.string,
  outOfStockText: PropTypes.string,
  className: PropTypes.string,
};

PurchaseButton.defaultProps = {
  inStockText: 'Purchase',
  outOfStockText: 'Out Of Stock',
};
