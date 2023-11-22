class NotFoundPageView extends PageView {

    constructor() { super('not-found-page'); }
    async refresh(url) {
        await super.refresh(url);
    }
}
