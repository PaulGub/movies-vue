<template>
    <div class="film-list">
        <div v-for="(film, index) in films" :key="index">
            <Film
                :title="film.title"
                :releaseYear="film.releaseYear"
                :language="film.language"
                :director="film.director"
                :genre="film.genre"
            />
            <div class="film-buttons">
                <button @click="editFilm(index)">Edit</button>
                <button @click="deleteFilm(index)">Delete</button>
            </div>
        </div>
    </div>
</template>

<script>
import Film from "./MovieDetails.vue";

export default {
    components: {
        Film,
    },
    data() {
        return {
            films: JSON.parse(localStorage.getItem("films")) || [],
            newFilm: {
                title: "",
                releaseYear: "",
                language: "",
                director: {
                    name: "",
                    nationality: "",
                    birthDate: "",
                },
                genre: "",
            },
        };
    },
    methods: {
        goToAddMovie() {
            this.$router.push("/add-movie");
        },
        editFilm(index) {
            console.log(index);
        },
        deleteFilm(index) {
            this.films.splice(index, 1);
            localStorage.setItem("films", JSON.stringify(this.films));
        },
    },
};
</script>

<style scoped>
.film-buttons {
    display: flex;
    justify-content: space-between;
    margin-top: 1rem;
}
.film-buttons button {
    padding: 0.5rem 1rem;
    background-color: #4a5568;
    color: #fff;
    border: none;
    border-radius: 0.25rem;
    cursor: pointer;
}
.film-buttons button:hover {
    background-color: #2d3748;
}
</style>
