export default function AboutPage() {
  return (
    <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
      <h1 className='text-4xl font-bold text-gray-900 mb-8'>About Tech Cities Index</h1>

      <div className='prose prose-lg'>
        <p className='text-gray-600 leading-relaxed'>
          I wanted to find out where I have the best purchasing power as a software engineer around
          the world. This website combines data from multiple reliable sources to help tech
          professionals make informed decisions about their next career move.
        </p>

        <h2 className='text-2xl font-semibold text-gray-900 mt-8 mb-4'>Data Sources</h2>
        <ul className='space-y-4 text-gray-600'>
          <li>
            <strong>Salary Data:</strong> Sourced from levels.fyi, providing accurate compensation
            data for tech roles across different cities
          </li>
          <li>
            <strong>Cost of Living:</strong> Based on Numbeo indices, offering comprehensive living
            cost comparisons
          </li>
          <li>
            <strong>Tax Rates:</strong> Current personal income tax rates by country to calculate
            net compensation
          </li>
        </ul>

        <h2 className='text-2xl font-semibold text-gray-900 mt-8 mb-4'>Methodology</h2>
        <p className='text-gray-600 leading-relaxed'>
          The Tech City Index is calculated by combining multiple factors:
        </p>
        <ul className='space-y-2 text-gray-600'>
          <li>Net salary after taxes</li>
          <li>Local cost of living adjustment</li>
          <li>Purchasing power relative to New York</li>
        </ul>
      </div>
    </div>
  );
}
