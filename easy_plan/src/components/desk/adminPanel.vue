<script>

import { fetchNonAdminUsers,  fetchAllDesks, addUsersToDesk} from '../../api.js';

export default {
    data() {
        return {
            desks: [],
            users: [],
            selectedDeskId: null,
            selectedUserIds: []
        };
    },
    async mounted() {
        this.users = await fetchNonAdminUsers()
        this.desks = await fetchAllDesks()
    },
    methods: {
        selectDesk(id) {
            this.selectedDeskId = id;
            this.changeCurrentDesk(id);
        },
        toggleUser(id) {
            const isSelected = this.selectedUserIds.includes(id);
            if (isSelected) {
                this.selectedUserIds = this.selectedUserIds.filter(userId => userId !== id);
                this.popUser(id);
            } else {
                this.selectedUserIds.push(id);
                this.pushUser(id);
            }
        },
        async addUsersToDesk() {
            if (this.selectedDeskId && this.selectedUserIds.length) {
                const {message, status} = await addUsersToDesk(this.selectedDeskId, this.selectedUserIds)
                if (status == 200) {
                    console.log(message);
                    this.selectedUserIds = []
                    this.selectedDeskId = null
                } else {
                    console.log(`Error: ${message}`)
                }
            } else {
                alert('Please select a desk and users to proceed.');
            }
        },
        // Заглушки методов, которые должны быть переданы в компонент
        pushUser(id) {
            console.log(`User ${id} added to selection`);
        },
        popUser(id) {
            console.log(`User ${id} removed from selection`);
        },
        changeCurrentDesk(id) {
            console.log(`Desk selected: ${id}`);
        },
    }
};
</script>

<template>
    <div class="admin-panel">
        <h1>Admin Panel</h1>
        <div class="lists-wrapper">
            <div class="list-container">
                <h2>Boards</h2>
                <ul class="list boards-list">
                    <li v-for="desk in desks" :key="desk.id" :class="{ selected: desk.id === selectedDeskId }"
                        @click="selectDesk(desk.id)">
                        <span class="board-title">{{ desk.title }}</span>
                    </li>
                </ul>
            </div>

            <div class="list-container">
                <h2>Users</h2>
                <ul class="list users-list">
                    <li v-for="user in users" :key="user.id" :class="{ selected: selectedUserIds.includes(user.id) }"
                        @click="toggleUser(user.id)">
                        <span class="user-email">{{ user.email }}</span>
                    </li>
                </ul>
            </div>
        </div>

        <button class="add-users-button" @click="addUsersToDesk">
            Add Users to Board
        </button>
    </div>
</template>

<style scoped>
.admin-panel {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    background: #f7f7f7;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    font-family: Arial, sans-serif;
}

h1 {
    text-align: center;
    color: #333;
}

.lists-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 10%;

}

.list-container {
    margin: 20px 0;
    flex: 40%
}

h2 {
    font-size: 18px;
    color: #666;
}

.list {
    list-style-type: none;
    padding: 0;
    margin: 0;
    border: 1px solid #ddd;
    border-radius: 4px;
    max-height: 500px;
    overflow-y: auto;
}

.list li {
    padding: 10px;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    transition: background 0.2s;
}

.list li:hover {
    background-color: #e3e3e3;
}

.selected {
    background-color: #b0d4f1;
    color: #000;
}

.board-title,
.user-email {
    font-weight: bold;
}

.board-id,
.user-id {
    font-size: 12px;
    color: #888;
}

.add-users-button {
    display: block;
    width: 100%;
    padding: 12px;
    margin-top: 20px;
    font-size: 16px;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background 0.3s;
}

.add-users-button:hover {
    background-color: #45a049;
}
</style>
