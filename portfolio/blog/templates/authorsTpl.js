const authorsTpl = `
<div class="container-fluid">
            <div class="row">
        {{#authors}}
            <div class="col-6 col-sm-4 col-md-3 col-xl-2">
                <div class="card my-3 border-0 bg-dark">
                    <div class="card-body text-light text-center border border-info rounded shadow">
                        <img src="{{ avatar }}" class="rounded-circle border border-warning border-top-0" width="128" height="128">
                        
                        <a class="card-link text-warning" href="igorhristov.github.io/portfolio/blog/author/?id={{ id }}">
                            <h3>{{ name }}</h3>
                        </a>
                        <div class="message">                   
                            <p class="card-text">{{ bio }}</p>
                        </div>
                        <div class="actions">
                            <a href="{{ website }}" class="card-link"><img src="igorhristov.github.io/portfolio/blog/assets/www.png" width='64'></a>
                            <a href="{{ email }}" class="card-link"><img src="igorhristov.github.io/portfolio/blog/assets/mail.png" width='32'></a>
                        </div>
                        <p class="my-0"> {{ articlesNumber }}</p>
                        <hr class="w-100 mb-1 mt-0 rounded-pill bg-warning" />
                    </div>
                </div>
            </div>    
        {{/authors}}
        </div>
        </div>
<div class="container">
<div class="row">
        <nav aria-label="Users pagination">
            <ul class="pagination">

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
