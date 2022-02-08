export const getGifs = async (categoria) => {

    const url =`https://api.giphy.com/v1/gifs/search?q=${encodeURI(categoria)}&limit=10&api_key=ONiObNuwhDVKsBNpMC7F8fgvpkGm4pBl`;
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map(imagen => {
        return {
            id: imagen.id,
            title: imagen.title,
            url: imagen.images?.downsized_medium.url
        }
    })

    return gifs;

}