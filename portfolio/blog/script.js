const urlParams = new URLSearchParams(window.location.search);

const BLOG = async () => {
    const d = document;
    const articles = await getArticles().then((articles) => {
        return articles.sort((a, b) => {
            return b.date > a.date ? 1 : -1;
        });
    });

    const tagovi = await getTags();

    d.querySelector('#articlesNum').innerText = articles.length;
    const autors = await getAuthors();

    const sortBtn = d.getElementById('sort-btn');

    sortBtn.addEventListener('click', () => {
        if (sortBtn.innerText === 'Sort by name') {
            const sortedByName = getArticleByAuthor(articles, autors);
            sortedByName.sort((a, b) => {
                return a.name > b.name ? 1 : -1;
            });

            d.querySelector('#root').innerHTML = Mustache.render(ARTICLE_CARD, {
                articles: sortedByName,
            });
            sortBtn.innerText = 'Sort by date';
        } else {
            d.querySelector('#root').innerHTML = Mustache.render(ARTICLE_CARD, {
                articles: getArticleByAuthor(articles, autors),
            });
            sortBtn.innerText = 'Sort by name';
        }
    });

    let currentPage = 0;
    const articlesPerPage = 10;
    const totalPages = Math.ceil(articles.length / articlesPerPage);
    console.log(totalPages);
    const getPages = (currentPage) => {
        let pages = [];
        for (let i = 0; i < totalPages; i++) {
            pages.push({
                dataPage: i,
                label: i + 1,
                activeClass: currentPage === i ? 'active' : '',
            });
        }

        return pages;
    };
    const disabledPrevNext = (currentPage) => {
        let prevNextBtn = [
            {
                disabledPrev: currentPage === 0 ? 'disabled' : '',
                disabledNext: currentPage === totalPages - 1 ? 'disabled' : '',
            },
        ];
        return prevNextBtn;
    };

    d.querySelector('#root').innerHTML = Mustache.render(ARTICLE_CARD, {
        articles: getArticleByAuthor(articles, autors).slice(
            currentPage * articlesPerPage,
            articlesPerPage * (currentPage + 1)
        ),
        pages: getPages(currentPage),
        pagination: disabledPrevNext(currentPage),
    });

    const tagArrValue = Object.values(tagovi);
    d.querySelector('#selectRoot').innerHTML = Mustache.render(tagsBtnTpl, {
        tagArrV: tagArrValue,
    });
    d.querySelector('#root').addEventListener('click', (e) => {
        if (e.target.matches('.page-numbers')) {

            currentPage = e.target.getAttribute('data-page') * 1;
            document.querySelector('#root').innerHTML = Mustache.render(ARTICLE_CARD, {
                articles: getArticleByAuthor(articles, autors).slice(
                    currentPage * articlesPerPage,
                    articlesPerPage * (currentPage + 1)
                ),
                pages: getPages(currentPage),
                pagination: disabledPrevNext(currentPage),
            });
        }

        if (e.target.matches('.prev-next')) {

            e.target.getAttribute('data-prevNext') === 'next' ? currentPage++ : currentPage--;
            document.querySelector('#root').innerHTML = Mustache.render(ARTICLE_CARD, {
                articles: getArticleByAuthor(articles, autors).slice(
                    currentPage * articlesPerPage,
                    articlesPerPage * (currentPage + 1)
                ),
                pages: getPages(currentPage),
                pagination: disabledPrevNext(currentPage),
            });
        }
    });
};
BLOG();
