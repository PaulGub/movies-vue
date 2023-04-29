<template>
    <form class="form" @submit.prevent="addFilm">
        <h3>Ajouter un film</h3>
        <label for="title">Titre :</label>
        <input type="text" id="title" v-model="newFilm.title" required />
        <label for="releaseYear">Année de sortie :</label>
        <input type="number" id="releaseYear" v-model="newFilm.releaseYear" required />
        <label for="language">Langue :</label>
        <input type="text" id="language" v-model="newFilm.language" required />
        <label for="director">Réalisateur :</label>
        <input type="text" id="director" v-model="newFilm.director.name" required />
        <label for="directorNationality">Nationalité du réalisateur :</label>
        <input type="text" id="directorNationality" v-model="newFilm.director.nationality" required />
        <label for="directorBirthDate">Date de naissance du réalisateur :</label>
        <input type="date" id="directorBirthDate" v-model="newFilm.director.birthDate" required />
        <label for="genre">Genre :</label>
        <input type="text" id="genre" v-model="newFilm.genre" required />
        <button type="submit">Ajouter</button>
    </form>
</template>

<script>
export default {
    data() {
        return {
            newFilm: {
                title: '',
                releaseYear: '',
                language: '',
                director: {
                    name: '',
                    nationality: '',
                    birthDate: ''
                },
                genre: ''
            }
        };
    },
    methods: {
        addFilm() {
            // Étape 1 : Obtenir les films existants depuis le stockage local
            const films = JSON.parse(localStorage.getItem('films')) || [];

            // Étape 2 : Ajouter le nouveau film à la liste
            films.push(this.newFilm);

            // Étape 3 : Sauvegarder la liste mise à jour dans le stockage local
            localStorage.setItem('films', JSON.stringify(films));

            // Vider les champs du formulaire après avoir ajouté le film
            this.newFilm = {
                title: '',
                releaseYear: '',
                language: '',
                director: {
                    name: '',
                    nationality: '',
                    birthDate: ''
                },
                genre: ''
            };

            // Naviguer vers la page d'accueil après avoir ajouté le film
            this.$router.push('/');
        }
    }
};
</script>

<style scoped>
form {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.18);
    background-color: #fff;
    width: 400px;
    margin: 20px auto;
    color: black;
}

h3 {
    font-size: 1.5rem;
    margin-bottom: 10px;
}

label {
    font-size: 1rem;
    margin-top: 10px;
}

input {
    font-size: 1rem;
    padding: 5px;
    margin-bottom: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
    width: 100%;
}

button[type="submit"] {
    font-size: 1rem;
    padding: 5px 10px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 20px;
}

button[type="submit"]:hover {
    background-color: #0062cc;
}
</style>
