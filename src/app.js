import angular from 'angular';

import {componentDefintion} from './voting-list.component'

const app = angular.module('copVotingApp', []);

app.component('votingList', componentDefintion);