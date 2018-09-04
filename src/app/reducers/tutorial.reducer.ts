import { Action } from '@ngrx/store';
import { Tutorial } from './../models/tutorial.model';
import * as TutorialActions from './../actions/turorial.actions';

const initialState: Tutorial = {
    name:'angular-redux tutorial',
    url:'https://icalderoncaceres.github.io'
}

export function reducer(state: Tutorial[]=[initialState], action:TutorialActions.Actions){
    switch(action.type){
        case TutorialActions.ADD_TUTORIAL:
            return [...state,action.payload];
        //case TutorialActions.REMOVE_TUTORIAL:
        default:
            return state;

    }
}