function navigateToLogin() {
    window.location.href = 'login.html';
}

function navigateToCatalog() {
    window.location.href = 'login.html';
}

document.getElementById('catalogForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const prices = {
        'intel-i5': 180,
        'intel-i7': 270,
        'amd-ryzen5': 160,
        'amd-ryzen7': 225,
        'nvidia-rtx3060': 360,
        'nvidia-rtx3070': 450,
        'amd-rx6700': 315,
        'amd-rx6800': 405,
        '16gb': 72,
        '32gb': 135,
        '64gb': 270,
        '1tb-hdd': 45,
        '512gb-ssd': 63,
        '1tb-ssd': 108,
        'mid-tower': 63,
        'full-tower': 90,
        'mini-itx': 45
    };

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