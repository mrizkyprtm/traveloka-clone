const priceFormat = (price) => {
  return Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(price);
}

export default priceFormat;