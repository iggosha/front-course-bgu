class Activity {
    constructor(activity, type, participants, price, link, key, accessibility) {
        this.activity = activity;
        this.type = type;
        this.participants = participants;
        this.price = price;
        this.link = link;
        this.key = key;
        this.accessibility = accessibility;
    }
}

function getActivity() {
    fetch('https://www.boredapi.com/api/activity')
        .then(response => response.json())
        .then(data => {
            const activity = new Activity(
                data.activity,
                data.type,
                data.participants,
                data.price,
                data.link,
                data.key,
                data.accessibility
            );

            const resultDiv = document.getElementById('activityDiv');
            let linkElement;
            if (activity.link) {
                linkElement = `<p><strong>Ссылка:</strong> <a href="${activity.link}" target="_blank">${activity.link}</a></p>`;
            } else {
                linkElement = '<p><strong>Ссылка:</strong> Нет</p>';
            }

            resultDiv.innerHTML = `
                        <p><strong>Занятие:</strong> ${activity.activity}</p>
                        <p><strong>Тип занятие:</strong> ${activity.type}</p>
                        <p><strong>Количество участников:</strong> ${activity.participants}</p>
                        <p><strong>Стоимость (от 0 до 1):</strong> ${activity.price}</p>
                        ${linkElement}
                        <p><strong>Доступность (от 0 до 1):</strong> ${activity.accessibility}</p>
                    `;
        })
        .catch(error => console.error('Error:', error));
}


function getFact() {
    return fetch('https://catfact.ninja/fact')
        .then(response => response.json())
        .then(data => {
            const factElement = document.getElementById('factDiv');
            factElement.textContent = data.fact;
            factElement.style.display = 'block';
        })
        .catch(error => console.error('Error fetching data:', error));
}