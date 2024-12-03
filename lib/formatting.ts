type ComparisonType = 'currency' | 'cost' | 'power';

interface ComparisonResult {
  text: string;
  color: string;
}

export function formatComparison(
  current: number,
  base: number,
  baseCityName: string,
  type: ComparisonType = 'currency'
): ComparisonResult {
  const diff = current - base;
  const percentDiff = ((current - base) / base) * 100;

  if (Math.abs(diff) < 0.01) {
    return {
      text: `Same as ${baseCityName}`,
      color: 'text-gray-500',
    };
  }

  if (type === 'currency') {
    const formattedDiff = new Intl.NumberFormat().format(Math.abs(Math.round(diff)));
    return {
      text: `${diff > 0 ? '+' : '-'}$${formattedDiff} compared to ${baseCityName}`,
      color: diff > 0 ? 'text-green-600' : 'text-red-600',
    };
  }

  const isMoreExpensive = type === 'cost' ? percentDiff > 0 : percentDiff < 0;
  const isMorePowerful = percentDiff > 0;
  const descriptor = type === 'cost' ? 'expensive' : 'purchasing power';

  return {
    text: `${Math.abs(percentDiff).toFixed(1)}% ${
      type === 'cost' ? (isMoreExpensive ? 'more' : 'less') : isMorePowerful ? 'more' : 'less'
    } ${descriptor} than ${baseCityName}`,
    color:
      type === 'cost'
        ? isMoreExpensive
          ? 'text-red-600'
          : 'text-green-600'
        : isMorePowerful
        ? 'text-green-600'
        : 'text-red-600',
  };
}

export function formatTaxComparison(
  current: number,
  base: number,
  baseCityName: string
): ComparisonResult {
  const diff = current - base;

  if (Math.abs(diff) < 0.01) {
    return {
      text: `Same as ${baseCityName}`,
      color: 'text-gray-500',
    };
  }

  return {
    text: `${Math.abs(diff).toFixed(1)}% ${diff > 0 ? 'higher' : 'lower'} tax than ${baseCityName}`,
    color: diff < 0 ? 'text-green-600' : 'text-red-600',
  };
}
