import axios from "axios";

const apikey = process.env.REACT_APP_APIKEY
const baseurl = process.env.REACT_APP_BASEURL

export const MovieListPopular = async() => {
    const movie = await axios.get(`${baseurl}/movie/popular?page=1&api_key=${apikey}`)
    return movie.data.results
}

export const MovieListTrending = async() => {
    const movie = await axios.get( `${baseurl}/movie/top_rated?page=1&api_key=${apikey}`)
    return movie.data.results
}

export const MovieSuperHero = async () => {
    const movie = await axios.get(`${baseurl}/movie/now_playing?page=1&api_key=${apikey}`)
    return movie.data.results
}

export const upComing = async() => {
    const movie = await axios.get(`${baseurl}/movie/upcoming?page=1&api_key=${apikey}`)
    return movie.data.results
}

export const searchMovie = async (a) => {
    const search = await axios.get(
        `${baseurl}/search/movie?query=${a}&page=1&api_key=${apikey}`
        )
    return search.data
}