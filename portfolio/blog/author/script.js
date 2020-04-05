const AUTHOR_RUN = async () => {
    const d = document;
    const urlParams = new URLSearchParams(window.location.search);
    const author = await getAuthorById(urlParams.get('id'));


    const articles = await getArticles();
    const autorArticlesFilter = articles.filter(article => {
        return article.authorId === author.id;
    })
        .sort((a, b) => {
            return b.date > a.date ? 1 : -1;
        })
 

    const authors = await getAuthors();


    d.querySelector('#authorRoot').innerHTML = Mustache.render(authorTpl, {
        author: author
    });

    d.querySelector('#root').innerHTML = Mustache.render(ARTICLE_CARD, {
        articles: getArticleByAuthor(autorArticlesFilter, authors)
    });


    d.querySelector('#authorNumArticles').innerText = autorArticlesFilter.length +' Articles';

};
AUTHOR_RUN();