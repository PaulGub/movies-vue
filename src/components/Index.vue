<template>
    <div class="film-list">
        <div class="search-bar">
            <input type="text" placeholder="Rechercher..." v-model="searchText" @input="searchFilms">
        </div>
        <div v-for="(film, index) in filteredFilms" :key="index">
            <Movie
                :title="film.title"
                :releaseYear="film.releaseYear"
                :language="film.language"
                :director="film.director"
                :genre="film.genre"
                :poster="film.poster"
            />
            <div class="film-buttons">
                <button @click="deleteFilm(index)">Supprimer</button>
                <button @click="goToEditMovie(index)">Modifier</button>
            </div>
        </div>
    </div>
</template>

<script>
import Movie from "./MovieDetails.vue";

export default {
    components: {
        Movie,
    },
    data() {
        return {
            films: JSON.parse(localStorage.getItem("films")) || [],
            searchText: '',
        };
    },
    methods: {
        goToAddMovie() {
            this.$router.push("/add-movie");
        },
        goToEditMovie(index) {
            const filmId = index + 1; // assuming the films are numbered starting from 1
            this.$router.push(`/films/${filmId}/edit`);
        },
        deleteFilm(index) {
            this.films.splice(index, 1);
            localStorage.setItem("films", JSON.stringify(this.films));
        },
        searchFilms() {
            console.log('searchFilms method called with searchText:', this.searchText);

            const searchTextLower = this.searchText.toLowerCase();
            this.filteredFilms = this.films.filter(film => {
                return film.title.toLowerCase().includes(searchTextLower)
                    || film.releaseYear.toString().includes(searchTextLower)
            });

            console.log('searchFilms method filtered films:', this.filteredFilms);
        },
    },
    computed: {
        filteredFilms() {
            if (this.searchText === '') {
                return this.films;
            } else {
                return this.films.filter(film => {
                    const searchTextLower = this.searchText.toLowerCase();
                    return film.title.toLowerCase().includes(searchTextLower)
                        || film.releaseYear.toString().includes(searchTextLower)
                });
            }
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
.search-bar {
    margin-bottom: 1rem;
}
.search-bar input {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #ddd;
    border-radius: 0.25rem;
}
</style>