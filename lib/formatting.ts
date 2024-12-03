type ComparisonType = 'currency' | 'cost' | 'power';

interface ComparisonResult {
  text: string;
  color: 'positive' | 'negative' | 'neutral';
}

const POSITIVE_COLOR = 'positive';
const NEGATIVE_COLOR = 'negative';
const NEUTRAL_COLOR = 'neutral';

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
      color: NEUTRAL_COLOR,
    };
  }

  if (type === 'currency') {
    const formattedDiff = new Intl.NumberFormat().format(Math.abs(Math.round(diff)));
    return {
      text: `${diff > 0 ? '+' : '-'}$${formattedDiff} compared to ${baseCityName}`,
      color: diff > 0 ? POSITIVE_COLOR : NEGATIVE_COLOR,
    };
  }

  const isMoreExpensive = type === 'cost' ? percentDiff > 0 : percentDiff < 0;
  const isMorePowerful = percentDiff > 0;
  const descriptor = type === 'cost' ? 'expensive' : 'purchasing power';

  return {
    text: `${Math.abs(percentDiff).toFixed(0)}% ${
      type === 'cost' ? (isMoreExpensive ? 'more' : 'less') : isMorePowerful ? 'more' : 'less'
    } ${descriptor} than ${baseCityName}`,
    color:
      type === 'cost'
        ? isMoreExpensive
          ? NEGATIVE_COLOR
          : POSITIVE_COLOR
        : isMorePowerful
        ? POSITIVE_COLOR
        : NEGATIVE_COLOR,
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
      color: NEUTRAL_COLOR,
    };
  }

  return {
    text: `${Math.abs(diff).toFixed(0)}% ${diff > 0 ? 'higher' : 'lower'} tax than ${baseCityName}`,
    color: diff < 0 ? POSITIVE_COLOR : NEGATIVE_COLOR,
  };
}
