function navigateToLogin() {
    window.location.href = 'login.html';
}

function navigateToCatalog() {
    window.location.href = 'login.html';
}

// Guard the catalogForm query to prevent runtime errors
const catalogForm = document.getElementById('catalogForm');
if (catalogForm) {
    catalogForm.addEventListener('submit', function(event) {
        event.preventDefault();

        // Import prices from external module
        import('./prices.js').then(({ prices }) => {
            const selectedComponents = {
                cpu: document.getElementById('cpu').value,
                gpu: document.getElementById('gpu').value,
                ram: document.getElementById('ram').value,
                storage: document.getElementById('storage').value,
                case: document.getElementById('case').value
            };

            const summaryList = document.getElementById('summaryList');
            const totalPriceElement = document.getElementById('totalPrice');
            let totalPrice = 0;

            summaryList.innerHTML = '';

            for (const [component, value] of Object.entries(selectedComponents)) {
                const price = prices[value];
                totalPrice += price;

                const listItem = document.createElement('li');
                listItem.textContent = `${component.toUpperCase()}: ${value} - €${price}`;
                summaryList.appendChild(listItem);
            }

            totalPriceElement.textContent = totalPrice;
            document.getElementById('summary').style.display = 'block';
        });
    });
}