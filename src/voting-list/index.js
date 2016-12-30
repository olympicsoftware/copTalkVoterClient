import {componentDefintion as votingListComponentDefinition} from './voting-list.component'

export function votingListInit(app){
    app.component('votingList', votingListComponentDefinition)
}