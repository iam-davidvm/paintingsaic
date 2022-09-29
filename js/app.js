const defaultPainting = {
    title:  'The Garden of Paradise',
    img:    'https://www.artic.edu/iiif/2/3e82db48-5f93-ada3-7ab2-f97328ccc1bd/full/843,/0/default.jpg',
    url:    'https://www.artic.edu/artworks/22857/the-garden-of-paradise',
};

const paintingURL = document.getElementById('painting-url');
const paintingImg = document.getElementById('painting-image');
const paintingTitle = document.getElementById('painting-information-title');
const paintingPainter = document.getElementById('painting-information-painter');

const searchForm = document.getElementById('search-form');

const renderPage = painting => {
    // I have chosen to get the ID again
    const id = painting.data.id;
    const artist = painting.data.artist_title;
    const title = painting.data.title;
    const webURL = `https://www.artic.edu/artworks/${id}/${title.replaceAll(' ', '-').toLowerCase()}`
    const imgConfig = painting.config.iiif_url;
    const imgId = painting.data.image_id;

    paintingURL.href = webURL;
    paintingImg.src = `${imgConfig}/${imgId}/full/843,/0/default.jpg`;
    paintingImg.alt = title;
    paintingTitle.innerText = title;
    paintingPainter.innerText = `by ${artist}`;

}

const getInformation = async q => {
    try {
        // We need the id to start with
        const resId = await fetch(`https://api.artic.edu/api/v1/artworks/search?q=${q}&limit=1`)
        const dataId = await resId.json();
        const id = dataId.data[0].id;
        const resArt = await fetch(`https://api.artic.edu/api/v1/artworks/${id}`);
        const dataArt = await resArt.json();
        renderPage(dataArt);

    } catch (e) {
        // HERE WE NEED TO DISPLAY THE NO RESULT DIV AND DEFAULT IMAGE
    }
}

searchForm.addEventListener('submit', e => {
    e.preventDefault();
    const keywords = searchForm.elements.keywords.value.replaceAll(' ', '+');
    searchForm.elements.keywords.value = '';
    getInformation(keywords);
});