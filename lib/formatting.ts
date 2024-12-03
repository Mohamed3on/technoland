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
    const formattedPercent = Math.round(Math.abs(percentDiff));
    return {
      text: `${diff > 0 ? '+' : '-'}$${formattedDiff} (${
        percentDiff > 0 ? '+' : '-'
      }${formattedPercent}%) vs ${baseCityName}`,
      color: diff > 0 ? POSITIVE_COLOR : NEGATIVE_COLOR,
    };
  }

  const isMoreExpensive = type === 'cost' ? percentDiff > 0 : percentDiff < 0;
  const isMorePowerful = percentDiff > 0;
  const formattedPercent = Math.round(Math.abs(percentDiff));

  if (type === 'cost') {
    return {
      text: `${formattedPercent}% ${
        isMoreExpensive ? 'more' : 'less'
      } expensive than ${baseCityName}`,
      color: isMoreExpensive ? NEGATIVE_COLOR : POSITIVE_COLOR,
    };
  }

  return {
    text: `${formattedPercent}% ${
      isMorePowerful ? 'better' : 'worse'
    } purchasing power than ${baseCityName}`,
    color: isMorePowerful ? POSITIVE_COLOR : NEGATIVE_COLOR,
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

  const formattedDiff = Math.round(Math.abs(diff));
  return {
    text: `${formattedDiff}% ${diff > 0 ? 'higher' : 'lower'} tax than ${baseCityName}`,
    color: diff < 0 ? POSITIVE_COLOR : NEGATIVE_COLOR,
  };
}
