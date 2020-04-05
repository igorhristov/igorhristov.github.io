const artcleTpl = `

    {{#authorAvatarAndName}}
        <img src="{{ avatar }}" class="rounded-circle border border-warning border-top-0 ml-5" width="80" height="80">
        <h1 class="display-5 d-inline font-weight-bold text-danger mt-4 ml-4"> {{name}} </h1>
    {{/authorAvatarAndName}}

    {{#article}}
        <h2 class="display-4 font-weight-bold text-warning mt-4 ml-5"> {{ title }} </h2>
        
        <p class="lead ml-5">{{ date }}</p>
        
        {{ #tags }}
            <a href="/igorhristov.github.io/portfolio/blog/tags/?tag={{ . }}" class="card-link rounded-pill border border-info text-info  pb-1 px-2 ml-5"> {{ . }} </a>
        {{ /tags }}
        <hr class="w-100 mb-3 p-1 rounded-pill bg-warning" />
        
        <p class="p-3 px-4"> 
            {{{ body }}}
        </p>
    {{/article}}
        <hr class="w-100 mb-3 p-1 rounded-pill bg-warning" />
    <div class="container mb-5 mt-5">
        <h3 id="commentReplay" class="mb-2 text-warning">Leave replay</h3>
        <form>
            <div class="form-group mb-4">
               <!-- <label for="writeComment">Example textarea</label> -->
                <textarea class="form-control" id="writeComment" rows="3" placeholder="New Comment!"></textarea>
            </div>
            <div class="form-row">
                <div class="col">
                    <label class="mb-0" for="name">Name</label>
                    <input type="text" class="form-control">
                </div>
                <div class="col form-group">
                    <label class="mb-0" for="email">Email</label>
                    <input type="email" class="form-control">
                </div>
            </div>
            <div class="form-group ">
                <label class="mb-0" for="website">Website</label>
                <input type="text" class="form-control" id="website">
            </div>
            <button type="submit" class="btn btn-warning mb-2 ml-auto font-weight-bold text-dark">Post Comment</button>
        </form>
    </div>
    {{#comentari}}
        <div class='container'>
            <p><span>{{date}}</span></p>
            <p>{{{ body }}}</p>
            <hr class="w-100 mb-3 rounded-pill bg-warning" />
        </div>
    {{/comentari}}
    `;
