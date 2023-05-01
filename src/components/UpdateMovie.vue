<template>
    <div class="form-container">
        <form @submit.prevent="updateMovie">
            <h2>Modifier un film</h2>
            <div class="form-group">
                <label for="title">Titre</label>
                <input type="text" v-model="editedMovie.title" id="title" required />
            </div>
            <div class="form-group">
                <label for="releaseYear">Année de sortie</label>
                <input
                    type="number"
                    v-model="editedMovie.releaseYear"
                    id="releaseYear"
                    required
                />
            </div>
            <div class="form-group">
                <label for="language">Langue</label>
                <input type="text" v-model="editedMovie.language" id="language" required />
            </div>
            <div class="form-group">
                <label for="directorName">Nom du réalisateur</label>
                <input
                    type="text"
                    v-model="editedMovie.director.name"
                    id="directorName"
                    required
                />
            </div>
            <div class="form-group">
                <label for="directorNationality">Nationalité du réalisateur</label>
                <input
                    type="text"
                    v-model="editedMovie.director.nationality"
                    id="directorNationality"
                    required
                />
            </div>
            <div class="form-group">
                <label for="directorBirthDate">Date de naissance du réalisateur</label>
                <input
                    type="date"
                    v-model="editedMovie.director.birthDate"
                    id="directorBirthDate"
                    required
                />
            </div>
            <div class="form-group">
                <label for="genre">Genre</label>
                <input type="text" v-model="editedMovie.genre" id="genre" required />
            </div>
            <div class="form-group">
                <label for="posterUrl">URL de l'affiche</label>
                <input type="text" v-model="editedMovie.poster" id="posterUrl" required />
            </div>

            <button type="submit">Mettre à jour</button>
        </form>
    </div>
</template>

<script>
export default {
    props: {
        id: {
            type: String,
            required: true,
        },
    },
    data() {
        return {
            editedMovie: {},
        };
    },
    created() {
        // assuming films are numbered starting from 1
        const filmIndex = parseInt(this.id) - 1;
        const films = JSON.parse(localStorage.getItem("films")) || [];
        this.editedMovie = films[filmIndex];
    },
    methods: {
        updateMovie() {
            const films = JSON.parse(localStorage.getItem("films")) || [];
            const filmIndex = parseInt(this.id) - 1;
            films[filmIndex] = this.editedMovie;
            localStorage.setItem("films", JSON.stringify(films));
            this.$router.push("/");
        },
    },
};
</script>

<style scoped>
.form-container {
    display: flex;
    justify-content: center;
}

form {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.18);
    background-color: #fff;
    width: 600px;
    margin: 20px auto;
    color: black;
}

h2 {
    font-size: 2rem;
    margin-bottom: 20px;
}

.form-group {
    width: 100%;
    margin-bottom: 20px;
}

label {
    font-size: 1.2rem;
    margin-bottom: 10px;
    display: block;
}

input {
    font-size: 1.2rem;
    padding: 5px;
    margin-top: 5px;
    margin-bottom: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
    width: 100%;
}

button[type="submit"] {
    font-size: 1.2rem;
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