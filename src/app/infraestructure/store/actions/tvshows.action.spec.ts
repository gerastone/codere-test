import { TvShowActions, getTvShowsAction } from "./tvshows.action";


fdescribe("TvShowActions", () => {
    fit("should create an action products detail", () => {
        const action = getTvShowsAction({ request: {} });
        expect(action).toBeDefined();
        expect(action.type).toEqual(TvShowActions.GET_TV_SHOW);
    });

});
