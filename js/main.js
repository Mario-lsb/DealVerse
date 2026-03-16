// All deals data
const deals = [
  {
    name: "Libas Women's Kurta Set",
    platform: "Myntra",
    category: "fashion",
    emoji: "👗",
    imgClass: "deal-img-fashion",
    newPrice: "₹799",
    oldPrice: "₹1,999",
    off: "60% OFF"
  },
  {
    name: "Structured Blazer — EOSS",
    platform: "Zara",
    category: "fashion",
    emoji: "👠",
    imgClass: "deal-img-fashion",
    newPrice: "₹2,490",
    oldPrice: "₹4,990",
    off: "50% OFF"
  },
  {
    name: "Lakme Foundation + Compact",
    platform: "Nykaa",
    category: "beauty",
    emoji: "💄",
    imgClass: "deal-img-beauty",
    newPrice: "₹549",
    oldPrice: "₹899",
    off: "39% OFF"
  },
  {
    name: "Maybelline Fit Me Foundation",
    platform: "Nykaa",
    category: "beauty",
    emoji: "🧴",
    imgClass: "deal-img-beauty",
    newPrice: "₹349",
    oldPrice: "₹599",
    off: "42% OFF"
  },
  {
    name: "boAt Airdopes 141 TWS",
    platform: "Amazon",
    category: "gadgets",
    emoji: "📱",
    imgClass: "deal-img-gadget",
    newPrice: "₹999",
    oldPrice: "₹2,990",
    off: "67% OFF"
  },
  {
    name: "Redmi Wireless Charger",
    platform: "Flipkart",
    category: "gadgets",
    emoji: "🔌",
    imgClass: "deal-img-gadget",
    newPrice: "₹599",
    oldPrice: "₹1,299",
    off: "54% OFF"
  }
];

// Function to show deals on page
function renderDeals(dealsList) {
  const grid = document.getElementById('dealsGrid');
  grid.innerHTML = '';

  if (dealsList.length === 0) {
    grid.innerHTML = '<p style="padding:2rem;color:#888;">No deals found!</p>';
    return;
  }

  dealsList.forEach(deal => {
    grid.innerHTML += `
      <div class="deal-tile">
        <div class="deal-img ${deal.imgClass}">${deal.emoji}</div>
        <div class="deal-body">
          <div class="deal-platform">${deal.platform}</div>
          <div class="deal-name">${deal.name}</div>
          <div class="deal-prices">
            <span class="price-new">${deal.newPrice}</span>
            <span class="price-old">${deal.oldPrice}</span>
            <span class="price-off">${deal.off}</span>
          </div>
        </div>
      </div>
    `;
  });
}

// Search function
function searchDeals() {
  const query = document.getElementById('searchInput').value.toLowerCase();
  const filtered = deals.filter(deal =>
    deal.name.toLowerCase().includes(query) ||
    deal.platform.toLowerCase().includes(query) ||
    deal.category.toLowerCase().includes(query)
  );
  renderDeals(filtered);
}

// Filter by category
function filterDeals(category) {
  const filtered = deals.filter(deal => deal.category === category);
  renderDeals(filtered);
}

// Show all deals when page loads
renderDeals(deals); 
