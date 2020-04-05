const tagsBtnTpl = `
    <select onChange="window.location.href=this.value" class="btn btn-info float-left ml-5 px-2">
        <option id="defTag" class="d-none" selected disabled>Tags...</option>
        {{ #tagArrV }}
            <option class="text-info bg-dark" value="/igorhristov.github.io/portfolio/blog/tags/?tag={{.}}">
                {{ . }}
            </option>
        {{ /tagArrV }}
    </select>
`;
