import angular from 'angular';

import {votingListInit} from './voting-list';
import {newTopicInit} from './new-topic';

const app = angular.module('copVotingApp', []);

votingListInit(app);
newTopicInit(app);