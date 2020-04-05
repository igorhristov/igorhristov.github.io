const authorTpl = 
`
    {{#author}}

        <img src="{{ avatar }}" class="rounded-circle border border-warning border-top-0 ml-5" width="128" height="128">
        <h2 class="display-4 d-inline font-weight-bold text-warning mt-4 ml-4"> {{name}} </h2>
        <p class="lead ml-5">{{ bio }}</p>
        <p class="ml-5 text-info my-1">{{ website }}</p>
        <p class="ml-5 text-info my-0">{{ email }}</p>
        <p id="authorNumArticles" class="text-right mr-5 my-0">3 Articles</p>
    {{/author}}
`;