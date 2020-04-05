const TAG_PAGE_RUN = async () => {
  const d = document;
  const articles = await getArticles();
  const urlParams = new URLSearchParams(window.location.search);
  const thisTag = urlParams.get('tag');

  d.querySelector('#tagNameId').innerText = thisTag;


  const tagsArticlesFilter = articles.filter(article => {
    if (article.tags.includes(thisTag.toLowerCase().split(' ').join('-'))) {
      return article;
    }
  })
  .sort((a, b) => {
    return b.date > a.date ? 1 : -1;
});
const sortBtn = d.getElementById('sort-btn');
  sortBtn.addEventListener('click', () => {
    if (sortBtn.innerText === 'Sort by name') {
      const sortedByName = getArticleByAuthor(tagsArticlesFilter, authors);
      sortedByName.sort((a, b) => {
        return a.name > b.name ? 1 : -1;
      });

      d.querySelector('#root').innerHTML = Mustache.render(ARTICLE_CARD, {
        articles: sortedByName
      });
      sortBtn.innerText = 'Sort by date'
    } else {
      d.querySelector('#root').innerHTML = Mustache.render(ARTICLE_CARD, {
        articles: getArticleByAuthor(tagsArticlesFilter, authors)
      });
      sortBtn.innerText = 'Sort by name';
    }
  });
  const authors = await getAuthors();
  d.querySelector('#tagsArticlesNum').innerText = tagsArticlesFilter.length;

  d.querySelector('#root').innerHTML = Mustache.render(ARTICLE_CARD, {
    articles: getArticleByAuthor(tagsArticlesFilter, authors) //tagsArticlesFilter
  });

  const tagovi = await getTags();
  const tagArrValue = Object.values(tagovi);
  d.querySelector('#selectRoot').innerHTML = Mustache.render(tagsBtnTpl, {
      tagArrV: tagArrValue
  });
  d.querySelector("#defTag").innerText = thisTag;
};
TAG_PAGE_RUN();
