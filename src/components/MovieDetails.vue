<template>
    <div className="card">
        <h2>{{ title }}</h2>
        <img :src="poster" alt="Affiche du film"/>
        <p><strong>Année de sortie :</strong> {{ releaseYear }}</p>
        <p><strong>Langue :</strong> {{ language }}</p>
        <p><strong>Réalisateur :</strong> {{ director.name }} ({{ director.nationality }})</p>
        <p><strong>Date de naissance du réalisateur :</strong> {{ director.birthDate }}</p>
        <p><strong>Genre :</strong> {{ genre }}</p>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            required: true
        },
        releaseYear: {
            type: Number,
            required: true
        },
        language: {
            type: String,
            required: true
        },
        director: {
            type: Object,
            required: true
        },
        genre: {
            type: String,
            required: true
        },
        poster: {
            type: String,
            required: true
        }
    }
};
</script>

<style scoped>
.card {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.18);
    background-color: #fff;
    margin: 20px;
    width: 300px;
    color: black;
}

h2 {
    font-size: 1.5rem;
    margin-bottom: 10px;
}

p {
    font-size: 1rem;
    margin-bottom: 5px;
}

strong {
    font-weight: bold;
}

.card:hover {
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.25);
    transform: translateY(-2px);
}

img {
    margin-bottom: 10px;
    max-width: 100%;
}
</style>