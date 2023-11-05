function openTab(tabId) {
    const tabContents = document.querySelectorAll('.tab-content');
    const tabButtons = document.querySelectorAll('.tab-button');

    tabContents.forEach(tabContent => {
        tabContent.style.display = 'none';
    });

    tabButtons.forEach(tabButton => {
        tabButton.classList.remove('active');
    });

    const selectedTab = document.getElementById(tabId);
    if (selectedTab) {
        selectedTab.style.display = 'block';
    }

    event.currentTarget.classList.add('active');
}

const firstTabButton = document.querySelector('.tab-button');
firstTabButton.addEventListener('click', function () {
    openTab('tab1');
});

openTab('tab1');