
export function DailySummary() {
  return (
    <section style={{ padding: 20 }}>
      <h2>Dagens kost</h2>
      <ul>
        <li>🥣 Frukost: Havregrynsgröt – 6 poäng</li>
        <li>🥗 Lunch: Kycklingsallad – 8 poäng</li>
        <li>🍝 Middag: Lax med quinoa – 9 poäng</li>
        <li>🍌 Snacks: Banan – 2 poäng</li>
      </ul>
      <hr />
      <h3>Totalt: 25 poäng</h3>
      <p style={{ color: 'green' }}>✅ Bra jobbat! Nästa gång kan du dra ner lite på fett.</p>
    </section>
  )
}
