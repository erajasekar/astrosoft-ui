import Constants from './Constants'

export function getCurrentPageUrl(route: any) {
    return Constants.APP_BASE_URL + route.fullPath // TODO figure out type definition for route
}