const ITEMS = [
  { num: '+148%',      label: 'avg. ROAS lift' },
  { num: '3.4×',       label: 'organic traffic growth' },
  { num: '28',         label: 'active retainers' },
  { num: '100%',       label: 'senior specialists' },
  { num: 'Est. 2021',  label: 'Warsaw, Poland' },
  { num: '30 days',    label: 'exit notice' },
  { num: 'Full-funnel',label: 'campaign management' },
  { num: '4 platforms',label: 'Meta · Google · TikTok · LinkedIn' },
  { num: 'EU-wide',    label: 'client base' },
  { num: '1 day',      label: 'response time' },
  { num: 'Live',       label: 'Looker Studio dashboards' },
  { num: 'No markups', label: 'transparent pricing' },
];

const Sep = () => (
  <svg className="ticker-sep" width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
    <path d="M9 2 Q13 9 9 16 Q5 9 9 2Z" fill="currentColor" opacity="0.5" />
  </svg>
);

export default function StatsTicker() {
  const doubled = [...ITEMS, ...ITEMS];

  return (
    <div className="ticker" aria-hidden="true">
      <div className="ticker-track">
        {doubled.map((item, i) => (
          <span key={i} className="ticker-item">
            <strong className="ticker-num">{item.num}</strong>
            <span className="ticker-label">{item.label}</span>
            <Sep />
          </span>
        ))}
      </div>
    </div>
  );
}
