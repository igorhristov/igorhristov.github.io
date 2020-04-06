const ARTICLE_RUN = async () => {
    const d = document;
    const urlParams = new URLSearchParams(window.location.search);
    const article = await getArticleById(urlParams.get('id'));
    const allAuthors = await getAuthors()

    const authorFiltered = allAuthors.filter(author => {
      return author.id === article.authorId
    }) 

    const thisArticleComments = await getCommentsByArticleId(article.id)
    .then(comments => {
      return comments.sort((a, b) => {
          return a.date > b.date ? 1 : -1;
      })
    });
    console.log(thisArticleComments);

    thisArticleComments.forEach(comment => {
      comment.date = new Date(comment.date).toDateString()

      allAuthors.forEach(author => {
        if (author.id === comment.userId) {
          comment.name = author.name;
          comment.avatar = author.avatar
        }
        if (!comment.name) {
          comment.name = 'Guest'
          comment.avatar = 'https://avatars.sched.co/8/fc/8757776/avatar.jpg?2a2'
        }
      })
    })
  
    const articles = await getArticles();
    articles.forEach(article => {
      article.date = new Date(article.date).toDateString()
    })
  

    d.querySelector('#articleRoot').innerHTML = Mustache.render(artcleTpl, {
      authorAvatarAndName: authorFiltered,
      article: article,
      comentari: thisArticleComments
    });
  
  };
  ARTICLE_RUN();