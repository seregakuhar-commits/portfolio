const PRICES = {
  cosmetic: 3000,
  capital:  6000,
  turnkey:  10000
};

function formatPrice(n) {
  return n.toLocaleString('ru-RU') + ' ₽';
}

function calculate() {
  const area = parseFloat(document.getElementById('area').value);
  const type = document.getElementById('type').value;

  if (!area || area <= 0) {
    document.getElementById('result').textContent = '—';
    return;
  }

  const total = area * PRICES[type];
  document.getElementById('result').textContent = formatPrice(total);
}

document.getElementById('area').addEventListener('input', calculate);
document.getElementById('type').addEventListener('change', calculate);
