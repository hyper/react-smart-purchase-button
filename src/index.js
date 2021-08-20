import React from 'react';
import PropTypes from 'prop-types';
import useAPI from './swr';

export default function PurchaseButton({ portalUrl, inStockText, outOfStockText, className }) {
  const apiUrl = `https://${portalUrl}/api/release${window?.location.search}`;
  const { data, loading, error } = useAPI(apiUrl);

  return (
    <button type="button" onClick={() => window.location.replace()} className={className}>
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
