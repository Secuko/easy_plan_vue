// api.js
import axios from 'axios';

const API_URL = 'http://localhost:3000';


/*
-----------------------------------------------------------------------------------------------------------------
-----------------------------------------------------------------------------------------------------------------
                                Методы авторизации
-----------------------------------------------------------------------------------------------------------------
-----------------------------------------------------------------------------------------------------------------
*/

// Метод для регистрации пользователя
export const registerUser = async (userData) => {
    try {
        // Отправка запроса на маршрут регистрации
        const response = await axios.post(`${API_URL}/register`, userData);
        // console.log('заброс был оправлен')
        const { message } = response.data
        // Возвращаем данные об успешной регистрации
        return { message, status: response.status };
    } catch (error) {
        console.error('Error registering user:', error.response?.data || error.message);
        return { message: error.message, status: error.response?.status }
        throw error;
    }
};

// Метод для авторизации пользователя
export const loginUser = async (email, password) => {
    try {
        // Отправка запроса на сервер для авторизации
        const response = await axios.post(`${API_URL}/login`, {
            email,
            password,
        });

        const { token, message, user } = response.data;

        // Сохранение токена в localStorage
        localStorage.setItem('authToken', token);

        return { message, token, user };
    } catch (error) {
        console.error('Error logging in:', error.response?.data || error.message);
        return { message: error.message,  token: null, user: null };
        throw error;
    }
};


/*
-----------------------------------------------------------------------------------------------------------------
-----------------------------------------------------------------------------------------------------------------
                                Методы для админа
-----------------------------------------------------------------------------------------------------------------
-----------------------------------------------------------------------------------------------------------------
*/


// Метод для получения всех пользователей, не являющихся администраторами
export const fetchNonAdminUsers = async () => {
    try {
        const response = await axios.get(`${API_URL}/users/non-admins`);
        return response.data.users; // Возвращаем массив пользователей с полями { id, email }
    } catch (error) {
        console.error('Error fetching non-admin users:', error);
        throw error;
    }
};

// Метод для получения списка всех досок с полями id и title
export const fetchAllDesks = async () => {
    try {
        const response = await axios.get(`${API_URL}/desks`);
        return response.data.desks; // Возвращаем массив досок с полями { id, title }
    } catch (error) {
        console.error('Error fetching desks:', error);
        throw error;
    }
};


// Метод для добавления пользователей на доску
export const addUsersToDesk = async (deskId, userIds) => {
    try {
        const response = await axios.post(`${API_URL}/desk/${deskId}/add-users`, {
            userIds
        });

        const { message } = response.data
        // Возвращаем данные об успешной регистрации
        return { message, status: response.status };
    } catch (error) {
        console.error('Error adding users to desk:', error);
        return { message: error.message, status: error.response?.status }
        throw error;
    }
};

/*
-----------------------------------------------------------------------------------------------------------------
-----------------------------------------------------------------------------------------------------------------
                                Методы для работы с доской
-----------------------------------------------------------------------------------------------------------------
-----------------------------------------------------------------------------------------------------------------
*/

// Создание новой доски
export const createDesk = async (deskData) => {
    return await axios.post(`${API_URL}/desk/create`, deskData);
};

// Получение данных доски по её ID
export const getDesk = async (deskId) => {
    return await axios.get(`${API_URL}/desk/${deskId}`);
};

// Удаление доски по её ID
export const deleteDesk = async (deskId) => {
    return await axios.delete(`${API_URL}/desk/${deskId}`);
};

/*
-----------------------------------------------------------------------------------------------------------------
-----------------------------------------------------------------------------------------------------------------
                                Методы для работы с секциями
-----------------------------------------------------------------------------------------------------------------
-----------------------------------------------------------------------------------------------------------------
*/

// const sectionData = {
//     id: 'unique_section_id',   // уникальный ID секции, можно использовать uuidv4()
//     name: 'Section Name'       // Название секции
//   };

// Метод для добавления новой секции к доске по её ID
export const addSectionToDesk = async (deskId, sectionData) => {
    try {
        const response = await axios.post(`${API_URL}/desk/${deskId}/section/create`, sectionData);
        console.log(response)
        return response.data;
    } catch (error) {
        console.error('Error adding section:', error);
        throw error;
    }
};


// Метод для удаления секции с определённой доски по ID доски и ID секции
export const deleteSectionFromDesk = async (deskId, sectionId) => {
    try {
        const response = await axios.delete(`${API_URL}/desk/${deskId}/section/${sectionId}`);
        if (response.status = 204) {
            console.log(`Successfully deleted section ${sectionId}`)
            return response.status
        } else {
            return 'Error deleting section'
        }
    } catch (error) {
        console.error('Error deleting section:', error);
        throw error;
    }
};


/*
-----------------------------------------------------------------------------------------------------------------
-----------------------------------------------------------------------------------------------------------------
                                Методы для работы с колонками
-----------------------------------------------------------------------------------------------------------------
-----------------------------------------------------------------------------------------------------------------
*/

// const columnData = {
//     id: 'unique_column_id',   // Уникальный ID колонки
//     title: 'Column Title'     // Название колонки
// };

//Метод для добавления новой колонки в указанную секцию
export const createSectionColumn = async (deskId, sectionId, columnData) => {

    try {
        const response = await axios.post(`${API_URL}/desk/${deskId}/section/${sectionId}/column/create`, columnData);
        return response.data;
    } catch (error) {
        console.error('Error adding section:', error);
        throw error;
    }
};

//Метод для обновления названия колонки

export const updateColumnTitle = async (deskId, sectionId, columnId, newTitle) => {
    return await axios.put(`${API_URL}/desk/${deskId}/section/${sectionId}/column/${columnId}`, { title: newTitle });
};

//Метод для удаления колонки из указанной секции

export const deleteSectionColumn = async (deskId, sectionId, columnId) => {
    try {
        const response = await axios.delete(`${API_URL}/desk/${deskId}/section/${sectionId}/column/${columnId}`);
        if (response.status = 204) {
            console.log(`Successfully deleted column ${columnId}`)
            return response.status
        } else {
            return 'Error deleting column'
        }
    } catch (error) {
        console.error('Error deleting column:', error);
        throw error;
    }
};

/*
-----------------------------------------------------------------------------------------------------------------
-----------------------------------------------------------------------------------------------------------------
                                Методы для работы с карточками
-----------------------------------------------------------------------------------------------------------------
-----------------------------------------------------------------------------------------------------------------
*/

// const cardData = {
//     id: 'unique_card_id',     // Уникальный ID карточки, можно сгенерировать через uuidv4()
//     text: 'Task description',  // Описание или основной текст карточки
//     assignee: 'User ID or Name', // Назначенный пользователь или его ID
//     description: 'Detailed description of the task', // Подробное описание задачи (необязательно)
//     priority: 1               // Приоритет задачи, например, 1 для высокого, 2 для среднего и т.д. (необязательно)
//   };

// Запрос для добавления новой карточки в колонку
export const addCard = async (deskId, sectionId, columnId, cardData) => {
    try {
        const response = await axios.post(`${API_URL}/desk/${deskId}/section/${sectionId}/column/${columnId}/card/create`, cardData);
        return response.data;
    } catch (error) {
        console.error('Error adding card:', error);
        throw error;
    }

};

// Запрос для удаления нескольких карточек
export const deleteCards = async (deskId, sectionId, columnId, cardIds) => {
    try {
        const response = await axios.delete(`${API_URL}/desk/${deskId}/section/${sectionId}/column/${columnId}/cards`, {
            data: { cardIds },
        });
        if (response.status = 204) {
            let deletedIdString = '';
            cardIds.forEach(element => {
                deletedIdString += element + ','
            })

            console.log(`Successfully deleted cards ${deletedIdString}`)
            return response.status
        } else {
            return 'Error deleting column'
        }
    } catch (error) {
        console.error('Error deleting column:', error);
        throw error;
    }

};

//   const moveData = {
//     cardId: 'card123',           // Идентификатор перемещаемой карточки
//     sourceColumnId: 'col456',     // Идентификатор исходной колонки
//     targetColumnId: 'col789'      // Идентификатор целевой колонки
//   };

// Запрос для перемещения карточки из одной колонки в другую в рамках одной секции
export const moveCard = async (deskId, sectionId, moveData) => {

    try {
        const response = await axios.put(`${API_URL}/desk/${deskId}/section/${sectionId}/card/move`, moveData);
        if (response.status = 200) {
            console.log(`Successfully moved card`)
            return 200
        } else {
            return 'Error deleting column'
        }
    } catch (error) {
        console.error('Error deleting column:', error);
        throw error;
    }
};
