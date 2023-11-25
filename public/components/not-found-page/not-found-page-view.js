class NotFoundPageView extends PageView {
    constructor() { super('not-found-page'); }
    // Vista
    get urlParagraph() { return document.getElementById('url'); }
    async refresh(url) {
        await super.refresh(url);
        this.urlParagraph.innerHTML = this.url;
    }
}
