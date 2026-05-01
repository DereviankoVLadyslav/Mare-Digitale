export const servicePages = {
  en: {
    'analytics-strategy': {
      color: '#1e5438',
      hero: {
        title: 'Data-driven strategy that compounds.',
        subtitle:
          'We build the measurement foundation first — clean tracking, defensible attribution, and a roadmap that ties every channel to revenue.',
      },
      overview: {
        body: 'Most agencies start with execution. We start with data. Before recommending a single channel or budget split, we audit your analytics stack, fix broken tracking, and establish a baseline you can trust. Only then do we build the strategy.\n\nThe result is a quarterly roadmap with clear KPIs, channel priorities, and creative direction — co-signed by your team and revisited every 90 days based on what the numbers say.',
        stats: [
          { num: '100%', label: 'of engagements start with a full analytics audit' },
          { num: '90-day', label: 'roadmap cycles, reviewed and renewed' },
          { num: '1 source', label: 'of truth — Looker Studio, live for every client' },
        ],
      },
      features: {
        title: "What's included",
        items: [
          { title: 'Brand & market audit', body: 'Competitor landscape, positioning gaps, and audience analysis before any strategy is written.' },
          { title: 'Tracking & attribution setup', body: 'GA4, GTM, server-side tagging, and cross-channel attribution configured and verified.' },
          { title: 'Channel mix recommendation', body: 'A data-backed recommendation on where to spend, in what order, and why.' },
          { title: 'Quarterly roadmap', body: 'A 90-day execution plan with KPIs, budgets, owners, and review checkpoints.' },
          { title: 'Live Looker Studio dashboard', body: 'A single dashboard combining all channels, updated daily, shared on day one.' },
          { title: 'Monthly strategy review', body: 'A written readout from your strategist every month — what worked, what did not, and what changes.' },
        ],
      },
      approach: {
        title: 'How the engagement works',
        steps: [
          { num: '01', title: 'Audit week', body: 'We review your analytics setup, existing campaigns, content, and funnel — and deliver a written findings report.' },
          { num: '02', title: 'Strategy session', body: 'A working session with your team to align on positioning, KPIs, and the quarterly roadmap.' },
          { num: '03', title: 'Execution handoff', body: 'The roadmap goes to our channel specialists or your in-house team — with full briefs and a shared workspace.' },
          { num: '04', title: 'Monthly review', body: 'Every month: a written report, a 60-minute call, and an updated roadmap for the next 30 days.' },
        ],
      },
    },

    'social-media-ads': {
      color: '#163322',
      hero: {
        title: 'Full-funnel paid campaigns across every channel.',
        subtitle:
          'From awareness to conversion — we run, optimise, and report on paid and organic social so your brand builds an audience it actually owns.',
      },
      overview: {
        body: 'We run full-funnel campaigns on Meta, Google, TikTok, and LinkedIn — not just the channels that are easiest to sell. Every campaign starts with a media plan that maps spend to funnel stage, audience, and creative format. No guess-work, no media markups.\n\nOrganic social is managed alongside paid, because the two compound. A strong organic presence lowers CPMs, improves relevance scores, and builds the retargeting pool that makes performance campaigns more efficient over time.',
        stats: [
          { num: '4', label: 'platforms: Meta · Google · TikTok · LinkedIn' },
          { num: '+148%', label: 'average ROAS lift across retained clients' },
          { num: '0%', label: 'media markup — you pay what the platform charges' },
        ],
      },
      features: {
        title: "What's included",
        items: [
          { title: 'Media planning & budgeting', body: 'Funnel-mapped spend allocation across platforms, updated monthly based on performance.' },
          { title: 'Creative strategy & briefs', body: 'Detailed creative briefs for every ad format — we direct, you produce, or we produce together.' },
          { title: 'Campaign build & launch', body: 'Full campaign setup: structure, targeting, audiences, bidding strategy, and tracking.' },
          { title: 'Ongoing optimisation', body: 'Weekly bid adjustments, audience refreshes, creative rotation, and A/B tests.' },
          { title: 'Organic social management', body: 'Content calendar, copy, scheduling, and community management on agreed platforms.' },
          { title: 'Performance reporting', body: 'A channel-level report every month with spend, results, CPAs, and next-month recommendations.' },
        ],
      },
      approach: {
        title: 'How the engagement works',
        steps: [
          { num: '01', title: 'Media plan', body: 'We build a funnel-mapped media plan with platform split, audience strategy, and projected CPAs.' },
          { num: '02', title: 'Creative brief', body: 'Detailed briefs for every ad type — formats, messaging angles, CTAs, and visual direction.' },
          { num: '03', title: 'Launch & learn', body: 'Campaigns go live with a structured testing framework. First insights within two weeks.' },
          { num: '04', title: 'Optimise & scale', body: 'Weekly optimisation, monthly reporting, and a rolling 30-day plan for what to test next.' },
        ],
      },
    },

    'seo-content': {
      color: '#286e4b',
      hero: {
        title: 'Content that ranks, earns citations, and converts.',
        subtitle:
          'Technical SEO, topic-cluster planning, and editorial production built around search intent — not word counts.',
      },
      overview: {
        body: 'SEO is a compounding channel — it takes longer to start and longer to stop. That makes it one of the highest-ROI bets a growing brand can make, provided it is done with editorial rigour and solid technical foundations. We deliver both.\n\nOur content programmes combine a technical audit and ongoing fixes with a topic-cluster content plan that is written by senior editors, not junior writers with AI at 100%. The result is content that earns positions, gets cited, and converts qualified traffic into pipeline.',
        stats: [
          { num: '3.4×', label: 'average organic traffic growth within 12 months' },
          { num: 'Senior', label: 'editors on every content engagement — no juniors' },
          { num: 'Topic', label: 'clusters planned around intent, not keyword volume' },
        ],
      },
      features: {
        title: "What's included",
        items: [
          { title: 'Technical SEO audit', body: 'Crawl analysis, Core Web Vitals, indexation issues, structured data, and a prioritised fix list.' },
          { title: 'Site architecture review', body: 'URL structure, internal linking strategy, and crawl budget optimisation.' },
          { title: 'Topic cluster planning', body: 'Keyword research mapped to search intent, organised into pillar pages and supporting clusters.' },
          { title: 'Editorial calendar', body: 'A rolling 90-day content calendar with briefs, target keywords, and CTA mapping.' },
          { title: 'Content production', body: 'Long-form articles, landing pages, and product copy written by senior editors.' },
          { title: 'SEO reporting', body: 'Monthly ranking reports, traffic analysis, and a backlink profile review.' },
        ],
      },
      approach: {
        title: 'How the engagement works',
        steps: [
          { num: '01', title: 'Technical audit', body: 'A full crawl of your site with a prioritised fix list — quick wins first, then structural improvements.' },
          { num: '02', title: 'Content strategy', body: 'Keyword research and topic-cluster planning mapped to your funnel stages and audience.' },
          { num: '03', title: 'Editorial production', body: 'Content produced on brief, reviewed by your team, published on schedule.' },
          { num: '04', title: 'Monitor & iterate', body: 'Monthly ranking and traffic reports. Underperforming content gets refreshed; winners get expanded.' },
        ],
      },
    },
  },

  pl: {
    'analytics-strategy': {
      color: '#1e5438',
      hero: {
        title: 'Strategia oparta na danych, która się kumuluje.',
        subtitle:
          'Zaczynamy od fundamentów pomiarowych — czysty tracking, atrybucja, której można bronić, i roadmapa łącząca każdy kanał z przychodem.',
      },
      overview: {
        body: 'Większość agencji zaczyna od egzekucji. My zaczynamy od danych. Zanim zarekomendujemy jakikolwiek kanał czy podział budżetu, audytujemy Twój stack analityczny, naprawiamy uszkodzony tracking i ustalamy baseline, któremu możesz ufać.\n\nEfektem jest kwartalny roadmapa z jasnymi KPI, priorytetami kanałów i kierunkiem kreatywnym — podpisany przez Twój zespół i aktualizowany co 90 dni na podstawie danych.',
        stats: [
          { num: '100%', label: 'współprac zaczyna się od pełnego audytu analityki' },
          { num: '90-dniowe', label: 'cykle roadmapy, przeglądane i odnawiane' },
          { num: '1 źródło', label: 'prawdy — Looker Studio, live dla każdego klienta' },
        ],
      },
      features: {
        title: 'Co jest w zakresie',
        items: [
          { title: 'Audyt marki i rynku', body: 'Krajobraz konkurencji, luki w pozycjonowaniu i analiza grupy docelowej przed napisaniem strategii.' },
          { title: 'Konfiguracja trackingu i atrybucji', body: 'GA4, GTM, tagowanie po stronie serwera i atrybucja wielokanałowa skonfigurowane i zweryfikowane.' },
          { title: 'Rekomendacja miksu kanałów', body: 'Oparta na danych rekomendacja, gdzie wydawać, w jakiej kolejności i dlaczego.' },
          { title: 'Kwartalny roadmapa', body: '90-dniowy plan egzekucji z KPI, budżetami, właścicielami i punktami kontrolnymi.' },
          { title: 'Live dashboard Looker Studio', body: 'Jeden dashboard łączący wszystkie kanały, aktualizowany codziennie, dostępny od pierwszego dnia.' },
          { title: 'Miesięczny przegląd strategii', body: 'Co miesiąc pisemny raport od Twojego stratega — co działało, co nie, i co się zmienia.' },
        ],
      },
      approach: {
        title: 'Jak wygląda współpraca',
        steps: [
          { num: '01', title: 'Tydzień audytu', body: 'Przeglądamy Twój setup analityczny, istniejące kampanie, content i lejek — i dostarczamy pisemny raport z wnioskami.' },
          { num: '02', title: 'Sesja strategiczna', body: 'Wspólna sesja z Twoim zespołem w celu wypracowania konsensusu w sprawie pozycjonowania, KPI i kwartalnego roadmapy.' },
          { num: '03', title: 'Przekazanie do realizacji', body: 'Roadmapa trafia do naszych specjalistów kanałowych lub Twojego wewnętrznego zespołu — z pełnymi briefami i wspólnym workspace.' },
          { num: '04', title: 'Miesięczny review', body: 'Co miesiąc: pisemny raport, 60-minutowa rozmowa i zaktualizowany roadmapa na kolejne 30 dni.' },
        ],
      },
    },

    'social-media-ads': {
      color: '#163322',
      hero: {
        title: 'Pełnolejkowe kampanie płatne na każdym kanale.',
        subtitle:
          'Od świadomości po konwersję — prowadzimy, optymalizujemy i raportujemy paid i organic social, żebyś budował(a) publiczność, którą naprawdę posiadasz.',
      },
      overview: {
        body: 'Prowadzimy pełnolejkowe kampanie na Meta, Google, TikTok i LinkedIn — nie tylko te kanały, które są najłatwiejsze do sprzedania. Każda kampania zaczyna się od media planu, który przypisuje wydatki do etapu lejka, grupy odbiorców i formatu kreatywnego.\n\nOrganic social jest zarządzany równolegle z płatnym, bo oba się wzmacniają. Silna obecność organiczna obniża CPM, poprawia wyniki trafności i buduje pulę remarketingową, która z czasem czyni kampanie performance bardziej efektywnymi.',
        stats: [
          { num: '4', label: 'platformy: Meta · Google · TikTok · LinkedIn' },
          { num: '+148%', label: 'średni wzrost ROAS u klientów retainerowych' },
          { num: '0%', label: 'marży na mediach — płacisz tyle, ile platforma' },
        ],
      },
      features: {
        title: 'Co jest w zakresie',
        items: [
          { title: 'Planowanie mediów i budżetu', body: 'Alokacja wydatków według etapów lejka na platformach, aktualizowana miesięcznie na podstawie wyników.' },
          { title: 'Strategia kreatywna i briefy', body: 'Szczegółowe briefy kreatywne dla każdego formatu reklamowego.' },
          { title: 'Budowa i launch kampanii', body: 'Pełna konfiguracja kampanii: struktura, targetowanie, grupy odbiorców, strategia licytacji i tracking.' },
          { title: 'Ciągła optymalizacja', body: 'Cotygodniowe korekty stawek, odświeżanie grup odbiorców, rotacja kreacji i testy A/B.' },
          { title: 'Zarządzanie organic social', body: 'Kalendarz contentowy, copy, scheduling i zarządzanie społecznością na uzgodnionych platformach.' },
          { title: 'Raportowanie wyników', body: 'Co miesiąc raport na poziomie kanału z wydatkami, wynikami, CPA i rekomendacjami.' },
        ],
      },
      approach: {
        title: 'Jak wygląda współpraca',
        steps: [
          { num: '01', title: 'Media plan', body: 'Tworzymy media plan z podziałem na platformy, strategią grup odbiorców i prognozowanymi CPA.' },
          { num: '02', title: 'Brief kreatywny', body: 'Szczegółowe briefy dla każdego typu reklamy — formaty, kąty komunikacji, CTA i kierunek wizualny.' },
          { num: '03', title: 'Launch i nauka', body: 'Kampanie ruszają ze strukturą testową. Pierwsze wnioski w ciągu dwóch tygodni.' },
          { num: '04', title: 'Optymalizacja i skalowanie', body: 'Cotygodniowa optymalizacja, miesięczne raportowanie i rolling plan na kolejne 30 dni.' },
        ],
      },
    },

    'seo-content': {
      color: '#286e4b',
      hero: {
        title: 'Content, który rankuje, jest cytowany i konwertuje.',
        subtitle:
          'SEO techniczne, planowanie klastrów tematycznych i produkcja redakcyjna oparta na intencji wyszukiwania — nie na liczbie słów.',
      },
      overview: {
        body: 'SEO to kanał kumulujący się — dłużej się rozkręca i dłużej zwalnia. To czyni go jednym z najbardziej efektywnych zakładów dla rosnącej marki, pod warunkiem że jest realizowany z rygorem redakcyjnym i solidnymi fundamentami technicznymi.\n\nNasze programy contentowe łączą audyt techniczny z planem klastrów tematycznych, pisanym przez seniorskich redaktorów. Efektem jest content, który zdobywa pozycje, jest cytowany i zamienia ruch organiczny w pipeline.',
        stats: [
          { num: '3,4×', label: 'średni wzrost ruchu organicznego w ciągu 12 miesięcy' },
          { num: 'Senior', label: 'redaktorzy przy każdym projekcie contentowym' },
          { num: 'Klastry', label: 'tematyczne planowane wg intencji, nie wolumenu' },
        ],
      },
      features: {
        title: 'Co jest w zakresie',
        items: [
          { title: 'Audyt SEO technicznego', body: 'Analiza crawl, Core Web Vitals, problemy z indeksacją, dane strukturalne i lista poprawek.' },
          { title: 'Przegląd architektury serwisu', body: 'Struktura URL, strategia linkowania wewnętrznego i optymalizacja crawl budget.' },
          { title: 'Planowanie klastrów tematycznych', body: 'Badanie słów kluczowych mapowane na intencję, zorganizowane w strony filarowe i klastry wspierające.' },
          { title: 'Kalendarz redakcyjny', body: 'Rolling 90-dniowy kalendarz contentowy z briefami, docelowymi słowami kluczowymi i mapowaniem CTA.' },
          { title: 'Produkcja contentu', body: 'Długie artykuły, landing pages i copy produktowe pisane przez seniorskich redaktorów.' },
          { title: 'Raportowanie SEO', body: 'Miesięczne raporty rankingów, analiza ruchu i przegląd profilu linków.' },
        ],
      },
      approach: {
        title: 'Jak wygląda współpraca',
        steps: [
          { num: '01', title: 'Audyt techniczny', body: 'Pełny crawl Twojego serwisu z priorytetową listą poprawek — najpierw quick wins, potem ulepszenia strukturalne.' },
          { num: '02', title: 'Strategia contentowa', body: 'Badanie słów kluczowych i planowanie klastrów tematycznych mapowane na etapy Twojego lejka.' },
          { num: '03', title: 'Produkcja redakcyjna', body: 'Content produkowany na podstawie briefu, recenzowany przez Twój zespół, publikowany zgodnie z harmonogramem.' },
          { num: '04', title: 'Monitorowanie i iteracja', body: 'Miesięczne raporty rankingów i ruchu. Słabo performujący content jest odświeżany; zwycięzcy rozwijani.' },
        ],
      },
    },
  },
};

export const serviceMeta = {
  en: [
    { slug: 'analytics-strategy', title: 'Analytics & Strategy', short: 'Strategy' },
    { slug: 'social-media-ads',   title: 'Social Media & Ads',   short: 'Paid Social' },
    { slug: 'seo-content',        title: 'SEO & Content',        short: 'SEO & Content' },
  ],
  pl: [
    { slug: 'analytics-strategy', title: 'Analityka i strategia',   short: 'Strategia' },
    { slug: 'social-media-ads',   title: 'Social Media i reklamy', short: 'Paid Social' },
    { slug: 'seo-content',        title: 'SEO i content',           short: 'SEO i content' },
  ],
};
