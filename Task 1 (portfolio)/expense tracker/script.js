document.addEventListener("DOMContentLoaded", function() {
    const transactions = [
        { id: 1, name: 'Salary', amount: 50000, date: new Date(), type: 'income' },
        { id: 2, name: 'Haircut', amount: 50, date: new Date(), type: 'expense' },
        { id: 3, name: 'Cafe', amount: 500, date: new Date(), type: 'expense' }
    ];

    const formatter = new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR',
        signDisplay: "always"
    });

    const list = document.getElementById("transactionList");
    const status = document.getElementById("status");

    function deleteTransaction(id) {
        const index = transactions.findIndex(transaction => transaction.id === id);
        if (index !== -1) {
            transactions.splice(index, 1);
            renderList();
        }
    }

    function renderList() {
        list.innerHTML = "";

        if (transactions.length === 0) {
            status.textContent = 'No transactions.';
            return;
        } else {
            status.textContent = '';
        }

        transactions.forEach(({ id, name, date, amount }) => {
            const li = document.createElement("li");

            li.innerHTML = `
              <div class="name">
                <h4>${name}</h4>
                <p>${new Date(date).toLocaleDateString()}</p>
              </div>

              <div class="amount">
                <span>${formatter.format(amount)}</span>
              </div>

              <button class="delete-btn" onclick="deleteTransaction(${id})">X</button>
            `;
            t = ${balance} - ${}
            

            list.appendChild(li);
        });
    }

    renderList();
    window.deleteTransaction = deleteTransaction; 
});