import React, { useState } from "react";

export default function SiCiCalculator() {
  const [principal, setPrincipal] = useState(10000);
  const [rate, setRate] = useState(5);
  const [time, setTime] = useState(2);
  const [freq, setFreq] = useState("yearly");

  const freqMap = {
    yearly: 1,
    semiannual: 2,
    quarterly: 4,
    monthly: 12,
    daily: 365,
  };

  const parseNumber = (v, fallback = 0) => {
    const n = Number(v);
    return Number.isFinite(n) ? n : fallback;
  };

  const calcSI = (P, R, T) => {
    return (P * R * T) / 100;
  };

  const calcCI = (P, R, T, n) => {
    if (n <= 0) return 0;
    const base = 1 + R / (100 * n);
    const amount = P * Math.pow(base, n * T);
    return amount - P;
  };

  const P = parseNumber(principal, 0);
  const R = parseNumber(rate, 0);
  const T = parseNumber(time, 0);
  const n = freqMap[freq] || 1;

  const si = calcSI(P, R, T);
  const ci = calcCI(P, R, T, n);
  const amountSI = P + si;
  const amountCI = P + ci;

  const fmt = (x) => x.toFixed(2);

  const reset = () => {
    setPrincipal(10000);
    setRate(5);
    setTime(2);
    setFreq("yearly");
  };

  return (
    <div>
      <h1>SI &amp; CI Calculator</h1>
      <table border="1" cellPadding="10" style={{ borderCollapse: "collapse", margin: "20px 0" }}>
        <tbody>
          <tr>
            <td>Principal (P)</td>
            <td>
              <input
                type="number"
                value={principal}
                onChange={(e) => setPrincipal(e.target.value)}
              />
            </td>
          </tr>
          <tr>
            <td>Rate % (R)</td>
            <td>
              <input
                type="number"
                value={rate}
                onChange={(e) => setRate(e.target.value)}
              />
            </td>
          </tr>
          <tr>
            <td>Time (T) in years</td>
            <td>
              <input
                type="number"
                value={time}
                onChange={(e) => setTime(e.target.value)}
              />
            </td>
          </tr>
          <tr>
            <td>Compounding</td>
            <td>
              <select value={freq} onChange={(e) => setFreq(e.target.value)}>
                <option value="yearly">Yearly</option>
                <option value="semiannual">Semi-annual</option>
                <option value="quarterly">Quarterly</option>
                <option value="monthly">Monthly</option>
                <option value="daily">Daily</option>
              </select>
            </td>
          </tr>
        </tbody>
      </table>

      <table border="1" cellPadding="10" style={{ borderCollapse: "collapse", marginBottom: "20px" }}>
        <thead>
          <tr>
            <th>Type</th>
            <th>Interest</th>
            <th>Total Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Simple Interest</td>
            <td>₹{fmt(si)}</td>
            <td>₹{fmt(amountSI)}</td>
          </tr>
          <tr>
            <td>Compound Interest</td>
            <td>₹{fmt(ci)}</td>
            <td>₹{fmt(amountCI)}</td>
          </tr>
        </tbody>
      </table>

      <button onClick={reset}>Reset</button>
    </div>
  );
}
