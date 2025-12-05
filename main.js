// მაგალითი getAllUsersAsync ფუნქციის
async function getAllUsersAsync() {
    // სინამდვილეში ეს ფუნქცია შეიძლება სერვერიდან იღებდეს მონაცემებს
    return [
        {id: 1, name: "Nana", surname: "Jughashvili", email: "nana.jughashvili@gmail.com", personalID: "012000000", mobile: "5778787678", zip: "2000", gender: "female"},
        {id: 2, name: "Giorgi", surname: "Beridze", email: "giorgi.beridze@gmail.com", personalID: "012000001", mobile: "5551234567", zip: "1000", gender: "male"}
        // უფრო ბევრი მომხმარებელი
    ];
}

async function renderUsersTable() {
    const users = await getAllUsersAsync();
    const tbody = document.querySelector("#usersTable tbody");
    tbody.innerHTML = ""; // წინა მონაცემების გასუფთავება

    users.forEach(user => {
        const tr = document.createElement("tr");

        tr.innerHTML = `
            <td>${user.id}</td>
            <td>${user.name}</td>
            <td>${user.surname}</td>
            <td>${user.email}</td>
            <td>${user.personalID}</td>
            <td>${user.mobile}</td>
            <td>${user.zip}</td>
            <td>${user.gender}</td>
            <td class="actions">
                <button class="edit-btn">Edit</button>
                <button class="delete-btn">Delete</button>
            </td>
        `;

        tbody.appendChild(tr);
    });
}

// გვერდის დატვირთვისას ვქმნით ცხრილს
document.addEventListener("DOMContentLoaded", renderUsersTable);
CSS