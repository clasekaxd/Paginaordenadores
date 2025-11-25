// Removed unnecessary navigation functions
// Simplified catalogForm handling
const catalogForm = document.getElementById('catalogForm');
if (catalogForm) {
    catalogForm.addEventListener('submit', async function(event) {
        event.preventDefault();

        const { prices } = await import('./prices.js');
        const selectedComponents = ['cpu', 'gpu', 'ram', 'storage', 'case'].reduce((acc, id) => {
            acc[id] = document.getElementById(id)?.value || '';
            return acc;
        }, {});

        const summaryList = document.getElementById('summaryList');
        const totalPriceElement = document.getElementById('totalPrice');
        let totalPrice = 0;

        summaryList.innerHTML = '';

        Object.entries(selectedComponents).forEach(([component, value]) => {
            const price = prices[value] || 0;
            totalPrice += price;

            const listItem = document.createElement('li');
            listItem.textContent = `${component.toUpperCase()}: ${value} - €${price}`;
            summaryList.appendChild(listItem);
        });

        totalPriceElement.textContent = totalPrice;
        document.getElementById('summary').style.display = 'block';
    });
}