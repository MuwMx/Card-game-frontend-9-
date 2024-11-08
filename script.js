const cards = [
            { name: '6', value: 6, image: 'card/+/6 (+).jpg' },
            { name: '7', value: 7, image: 'card/+/7 (+).jpg' },
            { name: '8', value: 8, image: 'card/+/8 (+).jpg' },
            { name: '9', value: 9, image: 'card/+/9 (+).jpg' },
            { name: '10', value: 10, image: 'card/+/10 (+).jpg' },
            { name: 'Валет', value: 2, image: 'card/+/J(+).jpg' },
            { name: 'Дама', value: 3, image: 'card/+/Q(+).jpg' },
            { name: 'Король', value: 4, image: 'card/+/K(+).jpg' },
            { name: 'Туз', value: 11, image: 'card/+/A (+).jpg' }
        ];

        let userScore = 0;
        let computerScore = 0;
        let currentRound = 1;
        const rounds = 3;

        // Запит імені користувача під час завантаження сторінки
        window.onload = function () {
            const userName = prompt("Введіть ваше ім'я:");
            document.getElementById("userName").textContent = userName || "User";
        };

        function playGame() {
            if (currentRound <= rounds) {
                // Випадкове обрання карт
                const userCard = cards[Math.floor(Math.random() * cards.length)];
                const computerCard = cards[Math.floor(Math.random() * cards.length)];

                // Оновлюємо рахунок
                userScore += userCard.value;
                computerScore += computerCard.value;

                // Оновлюємо зображення карт
                document.getElementById('userCard').innerHTML = `<img src="${userCard.image}" alt="${userCard.name}" style="width:100%; height:auto;">`;
                document.getElementById('computerCard').innerHTML = `<img src="${computerCard.image}" alt="${computerCard.name}" style="width:100%; height:auto;">`;

                // Оновлюємо рахунок на екрані
                document.getElementById('userScore').textContent = userScore;
                document.getElementById('computerScore').textContent = computerScore;
                document.getElementById('currentRound').textContent = currentRound;

                // Відображення повідомлення про результати раунду
                let resultMessage = `<p>Ваша карта: ${userCard.name} (номінал: ${userCard.value})</p>`;
                resultMessage += `<p>Карта комп'ютера: ${computerCard.name} (номінал: ${computerCard.value})</p>`;
                document.getElementById('resultMessage').innerHTML = resultMessage;

                currentRound++;

                // Перевірка закінчення гри
                if (currentRound > rounds) {
                    if (userScore > computerScore) {
                        document.getElementById('resultMessage').innerHTML += "<p>Вітаємо, ви перемогли за сумою очок!</p>";
                    } else if (computerScore > userScore) {
                        document.getElementById('resultMessage').innerHTML += "<p>На жаль, переміг комп'ютер за сумою очок.</p>";
                    } else {
                        document.getElementById('resultMessage').innerHTML += "<p>Нічия!</p>";
                    }
                    document.getElementById('playButton').disabled = true;
                }
            }
        }