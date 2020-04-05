const ARTICLE_CARD = `
<div class="container">
    <div class="row">
        {{#articles}}
        <div class="col-12">
            <div class="card my-3">
                <div class="card-body bg-dark text-light border border-info shadow rounded">
                    <h4>Article  
                        <span class='text-muted'>
                            {{ date }}
                        </span>
                    </h4>
                    
                    <a class="card-link text-warning" href="/igorhristov.github.io/portfolio/blog/article/?id={{ id }}">
                        <h3 class="text-center p-4"> {{ title }} </h3>
                    </a>
                    <div class="row mb-4">
                        <div class="col-10">
                            <div class="row">
                                <div class="col-2">
                                    <img src="{{ avatar }}" class="rounded-circle" width="64" height="64">
                                </div>
                                <div class="col-5">
                                    <span class="text-muted text-center">
                                        Autor
                                    </span> </br>
                                    <span class="text-center">
                                        <a class="card-link rounded-pill border border-warning text-warning pb-1 px-2" href="/igorhristov.github.io/portfolio/blog/author/?id={{ authorId }}">
                                        {{ name }} 
                                        </a>
                                    </span>
                                </div>
                                
                                <div class="col-5">
                                    <span class="text-muted text-center">
                                        {{ numberOfComments }}
                                    </span> </br>
                                    <a class="card-link rounded-pill border border-warning text-warning pb-1 px-2" href="/igorhristov.github.io/portfolio/blog/article/?id={{ id }}#commentReplay"> 
                                        Join Conversation -> 
                                    </a>
                                </div>
                        
                            </div>
                        </div>
                    </div> 
                    <div class="message mb-4">                   
                        <p class="card-text">{{ summary }}..</p>
                    </div>
                    <div class="actions">
                        <a href="/igorhristov.github.io/portfolio/blog/article/?id={{ id }}" class="card-link btn btn-outline-warning">Read More >>></a>
                    </div>
                    <div class="actions mt-5 mb-2">
                        {{#tags}}
                            <a href="/igorhristov.github.io/portfolio/blog/tags/?tag={{ . }}" class="card-link rounded-pill border border-info text-info  pb-1 px-2"> {{ . }} </a>
                        {{/tags}}
                    </div>
                </div>
            </div>
        </div>
        {{/articles}}
    </div>
</div>
    <div class="container">
        <div class="row">
                <nav>
                    <ul class="pagination pagination-sm justify-content-center">

                        {{ #pagination }}
                            <li class="page-item {{ disabledPrev }}">
                                <a class="page-link prev-next" href="#" tabindex="-1" data-prevNext='prev'>Previous</a>
                            </li>

                                {{ #pages }}
                                    <li class="page-item {{ activeClass }}">
                                        <a class="page-numbers page-link" href="#" data-page= {{ dataPage }}>{{ label }}</a>
                                    </li>
                                {{ /pages }}

                            <li class="page-item {{ disabledNext }}">
                                <a class="page-link prev-next" href="#" data-prevNext='next'>Next</a>
                            </li>
                        {{ /pagination }}

                    </ul>
                </nav>
        </div>       
    </div>
`;